import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import Home from 'pages'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Home 페이지', () => {
  it('렌더링이 올바르게 된다', () => {
    expect(render(<Home />).container).toMatchSnapshot()
  })

  it('채팅 글씨가 있는 버튼을 누르면 list 페이지로 라우팅된다', () => {
    const push = jest.fn()
    useRouter.mockImplementationOnce(() => ({
      route: '/',
      pathname: '/',
      query: '',
      asPath: '',
      push,
    }))

    const { getByText } = render(<Home />)

    const button = getByText('채팅')
    fireEvent.click(button)
    expect(push).toHaveBeenCalledWith('/list', '/list', expect.anything())
  })
})
