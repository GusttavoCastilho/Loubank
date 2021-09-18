import React from 'react'
import { render } from '@testing-library/react-native'
import { MetalsCard } from '../../components'

jest.mock('../../../assets/images/metals.svg', () => () => null)

describe('<MetalsCard />', () => {
  it('should render a text Metals', () => {
    const { getByText } = render(<MetalsCard />)
    const text = getByText(/Metals/i)

    expect(text.props.children).toBe('Metals')
  })

  it('should render a background theme', () => {
    const { getByTestId } = render(<MetalsCard />)
    const component = getByTestId(/Container/i)

    expect(component.props.style.backgroundColor).toEqual(
      'rgba(33, 33, 33, 0.7)'
    )
  })
})
