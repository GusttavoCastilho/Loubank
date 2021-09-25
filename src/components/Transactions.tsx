import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants'
import TransferIcon from '../..//assets/images/transfer.svg'

type TransactionsProps = {
  color?: 'primary' | 'mint'
  method: string
  store: string
  price: string
}

export function Transactions({
  color = 'primary',
  method,
  store,
  price
}: TransactionsProps) {
  return (
    <View style={stlyes.container}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <View style={[stlyes.ball, { backgroundColor: colors[color] }]}>
          <TransferIcon />
        </View>

        <View style={{ paddingLeft: 20 }}>
          <Text
            style={{ fontSize: 16, fontWeight: '500', color: colors.white }}
          >
            {method}
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: colors.gray3
            }}
          >
            {store}
          </Text>
        </View>
      </View>
      <Text style={{ fontSize: 16, fontWeight: '500', color: colors.white }}>
        {price}
      </Text>
    </View>
  )
}

const stlyes = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20
  },
  ball: {
    width: 32,
    height: 32,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
