import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import USDIcon from '../../assets/images/usd.svg'
import EURIcon from '../../assets/images/eur.svg'
import { colors } from '../constants'

export function CurrenciesCard() {
  return (
    <View style={styles.container}>
      {/* Currencie */}
      <View>
        <Text style={styles.smallText}>Currencie</Text>

        {/* USD */}
        <View style={{ flexDirection: 'row', marginBottom: 8, marginTop: 12 }}>
          {/* ICON USD */}
          <View style={styles.icon}>
            <USDIcon />
          </View>
          <Text style={styles.largeText}>USD</Text>
        </View>

        {/* EUR */}
        <View style={{ flexDirection: 'row' }}>
          {/* EUR icon */}
          <View style={styles.icon}>
            <EURIcon />
          </View>
          <Text style={styles.largeText}>EUR</Text>
        </View>
      </View>

      {/* Buy And Sell*/}
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginRight: 32 }}>
          <Text style={[styles.smallText, { paddingBottom: 14 }]}>Buy</Text>
          <View>
            <Text style={styles.largeText}>$78,92</Text>
            <Text style={styles.largeText}>$78,92</Text>
          </View>
        </View>

        <View>
          <Text style={[styles.smallText, { paddingBottom: 14 }]}>Sell</Text>
          <View>
            <Text style={styles.largeText}>$78,92</Text>
            <Text style={styles.largeText}>$78,92</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 116,
    borderRadius: 26,
    backgroundColor: 'rgba(33, 33, 33, 0.7)',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 11
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 8,
    backgroundColor: colors.mint,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12
  },
  smallText: {
    fontSize: 12,
    fontWeight: '400',
    color: colors.gray3
  },
  largeText: {
    fontSize: 15,
    fontWeight: '400',
    color: colors.white
  }
})
