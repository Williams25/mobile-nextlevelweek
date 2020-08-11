import React, {useState , useEffect} from 'react';
import { View, Text, Image } from 'react-native'
import landingImg from '../../../assets/images/landing.png'
import studyIcon from '../../../assets/images/icons/study.png'
import giveClassesIcon from '../../../assets/images/icons/give-classes.png'
import heartIcon from '../../../assets/images/icons/heart.png'

import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import styles from './styles';
import api from '../../services/api'

export default function Landing() {

  const navigation = useNavigation()

  const handleNavigationToGiveClasses = () => navigation.navigate('GiveClasses')

  const handleNavigateToStudyPages = () => navigation.navigate('Study')

  const [totalconnection, setTotalConnection] = useState(0)

  useEffect(() => {
    api.get('connections').then(response => {
      const { total } = response.data
      setTotalConnection(total)
    }).catch(err => console.log(err))
  }, [])

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>Seja bem vindo, {'\n'}
        <Text style={styles.titleBold}>O que deseja fazer ?</Text>
      </Text>

      <View style={styles.buttonsConatiner}>
        
        <RectButton onPress={handleNavigateToStudyPages} style={[styles.button, styles.buttonPrimary]}>
          <Image source={studyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton onPress={handleNavigationToGiveClasses} style={[styles.button, styles.buttonSecondary]}>
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>

      </View>

      <Text style={styles.totalConnections}>
          Total de {totalconnection} conexões já realizadas{' '}
          <Image source={heartIcon} />
        </Text>
    </View>
  )
}