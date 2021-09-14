import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import CreditCardIcon from '../../assets/images/credit-card.svg'
import { colors } from '../constants'

export function CurrentLoansCard() {
  return (
    <View style={styles.container}>
      {/* Account */}
      <View style={styles.account}>
        {/* Icon */}
        <View style={styles.icon}>
          <CreditCardIcon />
        </View>

        {/* Account number */}
        <View style={styles.accountNumber}>
          <Text style={styles.textWhite}>Account Nº 3874825</Text>
          <Text style={styles.textGray}>Expires 12/22/2023</Text>
        </View>
      </View>

      {/* Value */}
      <View>
        <Text style={styles.textWhite}>$ 78,92</Text>
        <Text style={styles.textGray}>Rate 3.5%</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 76,
    backgroundColor: 'rgba(33, 33, 33, 0.7)',
    borderRadius: 26,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 16
  },
  account: {
    flexDirection: 'row'
  },
  icon: {
    width: 32,
    height: 32,
    borderRadius: 12,
    backgroundColor: colors.mint,
    alignItems: 'center',
    justifyContent: 'center'
  },
  accountNumber: {
    paddingHorizontal: 12
  },
  textWhite: {
    fontSize: 15,
    color: colors.white,
    fontWeight: '400'
  },
  textGray: {
    fontSize: 12,
    color: colors.gray3,
    fontWeight: '400'
  }
})
