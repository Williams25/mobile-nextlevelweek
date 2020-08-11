import React, { useState } from 'react'
import styles from './styles'
import { View, Text, Image, Linking } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'
import heartOutlineIcon from '../../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../../assets/images/icons/whatsapp.png'

import AsyncStorage from '@react-native-community/async-storage'
import api from '../../services/api'

export interface Teacher {
  id: string,
  subject: string,
  cost: Number,
  name: string,
  avatar: string,
  whatsapp: string,
  bio: string
}
interface teacherInterface {
  teacher: Teacher
  favorited: boolean
}

const TeacherItem: React.FC<teacherInterface> = ({ teacher, favorited }) => {

  const handleLinkToWhatsapp = () => {
    api.post('connections', {
      user_id: teacher.id
    })
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`)
  }

  const [isFavorited, setIsFavorited] = useState(favorited)
  const handleToggleFavorite = async () => {
    const favorites = await AsyncStorage.getItem('favorites')
    let favoritesArray = new Array
    if (favorites) {
      favoritesArray = JSON.parse(favorites)
    }

    if (isFavorited) {
      const favoritesIndex = favoritesArray.findIndex((teacherItem: Teacher) => {
        return teacherItem.id === teacher.id
      })
      favoritesArray.splice(favoritesIndex, 1)
      setIsFavorited(false)
    } else {      
      favoritesArray.push(teacher)
      setIsFavorited(true)
    }
    await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray))
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar}
          source={{ uri: teacher.avatar }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>
            {teacher.name}
          </Text>
          <Text style={styles.subject}>
            {teacher.subject}
          </Text>
        </View>
      </View>
      <Text style={styles.bio}>
        {teacher.bio}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsConatiner}>
          <RectButton style={[
            styles.favoriteButton,
            isFavorited ? styles.favorited : {}]}
            onPress={handleToggleFavorite}
          >
            {
            isFavorited ?
              <Image source={unfavoriteIcon} />
               : 
              <Image source={heartOutlineIcon} />
            }
          </RectButton>

          <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  )
}

export default TeacherItem