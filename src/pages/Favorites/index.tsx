import React from 'react';
import { View, Text, Image } from 'react-native'
import styles from './styles';
import PageHeader from '../../components/PageHeader';

export default function TeacherList() {

  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys favoritos" />
    </View>
  )
}