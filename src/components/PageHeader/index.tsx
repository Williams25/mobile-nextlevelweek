import React, { ReactNode } from 'react'
import styles from './styles'
import { View, Text, Image } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler'

import imgBackIcon from '../../../assets/images/icons/back.png'
import logo from '../../../assets/images/logo.png'


interface PageHeaderProps {
  title: string,
  headerRight?: ReactNode 
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  const { navigate } = useNavigation()
  const handleGoBack = () => navigate('Landing')

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={imgBackIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logo} resizeMode="contain" />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>
          {props.title}
        </Text>

        {props.headerRight}
      </View>

      {props.children}
    </View>
  )
}

export default PageHeader