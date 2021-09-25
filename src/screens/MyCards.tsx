import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Transactions, YourCard } from '../components'
import { colors } from '../constants'
import ArrowBackHome from '../../assets/images/back.svg'
import ArrowBack from '../../assets/images/arrow-back.svg'

export function MyCards() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.background} />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.buttonBack}>
          <ArrowBackHome />
        </TouchableOpacity>
        <Text style={styles.textCards}>Your Cards</Text>
      </View>

      {/* Card */}
      <View style={{ paddingHorizontal: 32, paddingVertical: 24 }}>
        <YourCard />
      </View>

      {/* Transactions */}
      <View style={styles.transactions}>
        {/* Header */}
        <View style={styles.headerTransactions}>
          <Text style={styles.textTransactions}>Transactions</Text>

          {/* Filter */}
          <View style={styles.filter}>
            <Text style={styles.textFilter}>Filter</Text>
            <ArrowBack fill="white" color="white" clipPath="white" />
          </View>
        </View>

        {/* Today */}
        <View>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: colors.white,
              paddingTop: 24
            }}
          >
            Today
          </Text>

          {/* Transactions */}
          <Transactions
            method="Transfer"
            store="Incoming transfer"
            price="+ $3,110"
          />
          <Transactions
            color="mint"
            method="Health"
            store="Pharmacy"
            price="- $312,9"
          />

          {/* June 13th */}
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              color: colors.white,
              paddingTop: 24
            }}
          >
            June 13th
          </Text>

          {/* Transactions */}
          <Transactions
            method="Transfer"
            store="Incoming transfer"
            price="+ $3,110"
          />
          <Transactions
            color="mint"
            method="Health"
            store="Pharmacy"
            price="- $312,9"
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 10,
    alignItems: 'center'
  },
  buttonBack: {
    width: 32,
    height: 32,
    backgroundColor: colors.gray4,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 104
  },
  textCards: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center'
  },
  transactions: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    backgroundColor: 'rgba(67, 61, 72, 0.2)',
    borderTopLeftRadius: 26,
    borderTopRightRadius: 26
  },
  textTransactions: {
    fontSize: 21,
    fontWeight: '400',
    color: colors.white
  },
  headerTransactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  filter: {
    width: 82,
    height: 34,
    borderRadius: 40,
    backgroundColor: colors.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textFilter: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '400',
    paddingRight: 6
  }
})
