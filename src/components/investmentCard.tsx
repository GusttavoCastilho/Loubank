import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants'
import CloseIcon from '../../assets/images/close.svg'

export function InvestmentCard() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        {/* Icon */}
        <View style={styles.icon}>
          <Text>⚡</Text>
        </View>

        {/* Description */}
        <View style={{ paddingLeft: 8 }}>
          <Text style={styles.title}>Start investing now!</Text>
          <Text style={styles.description}>
            Protected savings and investment plans
          </Text>
        </View>
      </View>

      {/* Close */}
      <View>
        <CloseIcon />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 76,
    backgroundColor: colors.mint,
    borderRadius: 26,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    width: 32,
    height: 32,
    backgroundColor: colors.gray1,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 15,
    color: colors.gray1,
    fontWeight: '600'
  },
  description: {
    fontSize: 12,
    color: colors.gray1,
    fontWeight: '400'
  }
})
