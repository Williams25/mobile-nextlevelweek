import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native'
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import api from '../../services/api';

import AsyncStorage from '@react-native-community/async-storage'

export default function TeacherList() {

  const [isFiltersVisible, setIsFiltersVisible] = useState(false)

  const handleToggleFiltersVisible = () => {
    setIsFiltersVisible(!isFiltersVisible)
  }

  const [favorites, setFavorites] = useState<string[]>([])

  const loadFavorites = () => {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response)
        const favoritedTeachersID = favoritedTeachers.map((teachers: Teacher) => teachers.id)
        setFavorites(favoritedTeachersID)
      }
    }, error => console.log(error))
  }

  useEffect(() => {

  }, [])

  
  const [teachers, setTeachers] = useState([])
  const [subject, setSubject] = useState('')
  const [week_day, setWeek_day] = useState('')
  const [time, setTime] = useState('')

  const searchTeachers = async () => {
    loadFavorites()
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    })
    setTeachers(response.data)
    setIsFiltersVisible(false)
    setSubject('')
    setWeek_day('')
    setTime('')
  }

  return (
    <View style={styles.container}>
      <PageHeader title="Proffys disponíveis"
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        )}
      >


        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput style={styles.input}
              placeholder="Qual a matéria ?"
              placeholderTextColor="#c1bccc"
              value={subject}
              onChangeText={text => setSubject(text)} />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput style={styles.input}
                  placeholder="Qual o dia ?"
                  placeholderTextColor="#c1bccc"
                  value={week_day}
                  onChangeText={text => setWeek_day(text)} />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput style={styles.input}
                  placeholder="Qual o horário ?"
                  placeholderTextColor="#c1bccc"
                  value={time}
                  onChangeText={text => setTime(text)} />
              </View>
            </View>

            <RectButton onPress={searchTeachers} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>


      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        {
          teachers.map(((teacher: Teacher) => {
            return (
              <TeacherItem
                key={teacher.id}
                teacher={teacher}
                favorited={favorites.includes(teacher.id)} />
            )
          }))
        }
      </ScrollView>
    </View>
  )
}