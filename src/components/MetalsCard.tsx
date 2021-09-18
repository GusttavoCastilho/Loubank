import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../constants'
import MetalsIcon from '../../assets/images/metals.svg'

export function MetalsCard() {
  return (
    <View style={styles.container} testID="container">
      {/* Currencie */}
      <View>
        <Text style={styles.smallText}>Metals</Text>

        {/* USD */}
        <View style={{ flexDirection: 'row', marginBottom: 8, marginTop: 12 }}>
          {/* ICON USD */}
          <View style={styles.icon}>
            <MetalsIcon />
          </View>
          <Text style={styles.largeText}>Gold</Text>
        </View>

        {/* EUR */}
        <View style={{ flexDirection: 'row' }}>
          {/* EUR icon */}
          <View style={styles.icon}>
            <MetalsIcon />
          </View>
          <Text style={styles.largeText}>Silver</Text>
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
