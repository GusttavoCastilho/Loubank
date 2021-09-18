import React from 'react'
import { render } from '@testing-library/react-native'
import { CreditCard } from '../../components'

jest.mock('../../../assets/images/visa-logo.svg', () => () => null)

describe('<CreditCard/> ', () => {
  it('should render a value, numberCC and color is passed', () => {
    const { getByTestId } = render(
      <CreditCard value="$2,230" numberCC="** 6917" color="#B2D0CE" />
    )

    const component = getByTestId(/Container/i)

    expect(getByTestId('container')).toBe(component)
  })
})
