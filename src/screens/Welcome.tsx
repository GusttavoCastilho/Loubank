import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from 'react-native'
import { colors } from '../constants'

import BalanceIcon from '../../assets/images/balance-welcome.svg'
import LogoIcon from '../../assets/images/logo.svg'

export function Welcome() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <LogoIcon />

      {/* Title */}
      <Text style={styles.title}>Save your {'\n'} balance</Text>

      {/* Figure bank */}
      <BalanceIcon />

      {/* Sollutions */}
      <Text style={styles.description}>
        Best solutions to save you {'\n'} balance and transactions.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.titleButton}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingTop: Platform.OS === 'android' ? 50 : 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background
  },
  textName: {
    fontSize: 18,
    color: colors.gray3
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    color: colors.white,
    paddingVertical: 40
  },
  description: {
    fontSize: 18,
    color: colors.white,
    lineHeight: 26,
    paddingVertical: 60
  },
  button: {
    width: '90%',
    height: 48,
    borderRadius: 8,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text
  }
})
