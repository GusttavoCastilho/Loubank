import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { colors } from '../constants'

type FinanceCard = {
  icon: React.ReactElement
  title: string
  color: string
}

export function FinanceCard({ title, icon, color }: FinanceCard) {
  return (
    <TouchableOpacity style={styles.container}>
      {/* Icon */}
      <View style={[styles.icon, { backgroundColor: color }]}>{icon}</View>
      <Text style={styles.titleCard}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 26,
    backgroundColor: colors.gray1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    justifyContent: 'space-between'
  },
  icon: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleCard: {
    fontSize: 11,
    color: colors.white,
    fontWeight: '500'
  }
})
