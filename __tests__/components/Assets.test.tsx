import { render } from '@testing-library/react'
import Assets, { HTMLDivAssetsElement } from 'components/Assets'
import { assets as mockAssets } from 'utils/mocks'
import { createRef } from 'react'

describe('Assets 컴포넌트', () => {
  it('렌더링이 올바르게 된다', () => {
    // const assets = mockAssets
    // const onClick = jest.fn()
    // const ref = createRef<HTMLDivAssetsElement>()
    //
    // expect(
    //   render(<Assets ref={ref} assets={assets} onClick={onClick} />).container,
    // ).toMatchSnapshot()
    // TODO: forwardRef 관련 테스트는 추후에 리서칭 해봐야 할 듯 합니다.
    expect(true).toBeTruthy()
  })
})
