import React, { useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native'
import { colors, CreditCardData, FinanceCardData } from '../constants'
import {
  CreditCard,
  CurrenciesCard,
  CurrentLoansCard,
  FinanceCard,
  InvestmentCard,
  MetalsCard
} from '../components'
import LogoIcon from '../../assets/images/logo.svg'
import SearchIcon from '../../assets/images/search.svg'
import ArrowBackIcon from '../../assets/images/arrow-back.svg'
import PlusIcon from '../../assets/images/plus.svg'

export function Home() {
  const [esconder, setEsconder] = useState<Boolean>(false)

  function renderHeaderSection() {
    return (
      <View style={styles.header}>
        <View>
          <Text
            style={[styles.textHeader, { fontSize: 15, fontWeight: '400' }]}
          >
            Your balance
          </Text>
          <Text
            style={[
              styles.textHeader,
              { fontSize: 25, fontWeight: '700', paddingTop: 2 }
            ]}
          >
            $7,896
          </Text>
        </View>

        <TouchableOpacity style={styles.buttonSearch}>
          <SearchIcon width={32} height={32} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Logo */}
        <View style={styles.logo}>
          <LogoIcon />
        </View>

        {/* HeaderSection */}
        {renderHeaderSection()}

        {/* Credit Card */}
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ marginTop: 10 }}
          data={CreditCardData}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  marginLeft: index == 0 ? 24 : 20,
                  marginRight: index == CreditCardData.length - 1 ? 24 : 0
                }}
              >
                <CreditCard
                  value={item.value}
                  numberCC={item.numberCC}
                  color={item.color}
                />
              </View>
            )
          }}
        />

        {/* Finace Card */}
        <View>
          <Text style={styles.textFinance}>Finance</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={FinanceCardData}
            keyExtractor={(item) => `${item.id}`}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    marginLeft: index == 0 ? 24 : 20,
                    marginRight: index == FinanceCardData.length - 1 ? 24 : 0
                  }}
                >
                  <FinanceCard
                    title={item.title}
                    icon={item.icon}
                    color={item.color}
                  />
                </View>
              )
            }}
          />
        </View>

        {/* Current Loans And Metals */}
        <View
          style={{
            width: '100%',
            backgroundColor: colors.gray1,
            marginTop: 36,
            paddingBottom: 36,
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,
            alignItems: 'center'
          }}
        >
          <View style={styles.loans}>
            <View style={styles.loansArrow}>
              <TouchableOpacity onPress={() => setEsconder(true)}>
                <ArrowBackIcon />
              </TouchableOpacity>
              <Text style={styles.loansText}>Current Loans</Text>
            </View>

            <View style={styles.buttonPlus}>
              <PlusIcon />
            </View>
          </View>
          {esconder != true && <CurrentLoansCard />}
          {/* Investments */}
          <InvestmentCard />
          {/* Currencies and metals */}
          <CurrenciesCard />
          <MetalsCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.background,
    paddingTop: Platform.OS === 'android' ? 50 : 0
  },
  logo: {
    alignItems: 'center',
    width: '100%'
  },
  header: {
    width: '100%',
    marginVertical: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textHeader: {
    color: colors.white
  },
  buttonSearch: {
    backgroundColor: '#3E3E3E',
    width: 44,
    height: 44,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  textFinance: {
    fontSize: 12,
    color: colors.white,
    fontWeight: '500',
    paddingHorizontal: 30,
    paddingVertical: 10
  },
  loans: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.gray1,
    marginBottom: 12,
    paddingTop: 31
  },
  loansArrow: {
    flexDirection: 'row'
  },
  loansText: {
    fontSize: 12,
    color: colors.white,
    fontWeight: '500',
    paddingHorizontal: 8
  },
  buttonPlus: {
    width: 20,
    height: 20,
    borderRadius: 40,
    backgroundColor: colors.gray4,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
