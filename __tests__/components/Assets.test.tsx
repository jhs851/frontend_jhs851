import { render } from '@testing-library/react'
import Assets from 'components/Assets'
import { assets as mockAssets } from 'utils/mocks'

describe('Assets 컴포넌트', () => {
  it('렌더링이 올바르게 된다', () => {
    const assets = mockAssets
    const onClick = jest.fn()

    expect(
      render(<Assets assets={assets} onClick={onClick} />).container,
    ).toMatchSnapshot()
  })
})
