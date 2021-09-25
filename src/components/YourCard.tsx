import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants'
import LogoVisa from '../../assets/images/visa-logo.svg'
import ImageChip from '../../assets/images/chip.png'

export function YourCard() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <LogoVisa />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#272A32'
          }}
        >
          $ 5,566.55
        </Text>
      </View>

      {/* Number and valid */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {/* Number */}
        <View>
          <Image source={ImageChip} style={{ width: 27, height: 19 }} />
          <Text>•••• •••• •••• 4552</Text>
        </View>

        <View>
          <Text
            style={{
              fontSize: 10,
              fontWeight: '400',
              color: 'rgba(39, 42, 50, 0.6)',
              textTransform: 'uppercase'
            }}
          >
            Valid Thru
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              color: '#272A32'
            }}
          >
            12/22
          </Text>
        </View>
      </View>

      {/* Holder */}
      <View>
        <Text style={styles.holder}>Margo Lepski</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 310,
    height: 184,
    borderRadius: 30,
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 30,
    justifyContent: 'space-between'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  holder: {
    fontSize: 10,
    color: 'rgba(39, 42, 50, 0.6)',
    fontWeight: '500',
    textTransform: 'uppercase'
  }
})
