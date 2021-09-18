import React from 'react'
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import { colors } from '../constants'
import VisaLogoIcon from '../../assets/images/visa-logo.svg'

type CardProps = {
  value: string
  numberCC: string
  color: string
}

export function CreditCard({ value, numberCC, color }: CardProps) {
  return (
    <TouchableOpacity
      testID="container"
      style={[styles.container, { backgroundColor: color }]}
    >
      <VisaLogoIcon />

      {/* value */}
      <View>
        <Text style={styles.textSmall}>Salary</Text>
        <Text style={styles.textValue}>{value}</Text>
      </View>

      {/* Number CC */}
      <View>
        <Text style={styles.textSmall}>{numberCC}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 148,
    height: 170,
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 20,
    justifyContent: 'space-between'
  },
  textSmall: {
    fontSize: 11,
    fontWeight: '500',
    color: '#272A32'
  },
  textValue: {
    fontSize: 17,
    color: '#272A32',
    fontWeight: '700'
  }
})
