import React from 'react';
import { View, Text, ImageBackground } from 'react-native'
import giveClassesBgImage from '../../../assets/images/give-classes-background.png';
import styles from './styles'

import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

export default function giveClasses() {
  const {goBack} = useNavigation()

  const handleNavigationToBack = () => {
    goBack()
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={giveClassesBgImage} resizeMode="contain" style={styles.content} >
        <Text style={styles.title}>Quer ser um Proffy</Text>
        <Text style={styles.description}>Para começar, você precisa se cadastrar como proffessor na plataforma web.</Text>
      </ImageBackground>

      <RectButton onPress={handleNavigationToBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  )
}