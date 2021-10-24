import { fireEvent, render } from '@testing-library/react'
import RoomNavigator from 'components/RoomNavigator'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('RoomNavigator 컴포넌트', () => {
  const onToggleAssets = jest.fn()
  const rendered = (roomName: string = '채팅방') =>
    render(
      <RoomNavigator roomName={roomName} onToggleAssets={onToggleAssets} />,
    )

  it('렌더링이 올바르게 된다', () => {
    expect(rendered().container).toMatchSnapshot()
  })

  it('뒤로가기 버튼을 누르면 router의 back 함수가 호출된다', () => {
    const back = jest.fn()
    useRouter.mockImplementationOnce(() => ({
      route: '/',
      pathname: '/',
      query: '',
      asPath: '',
      back,
    }))

    const { getByTestId } = rendered()

    fireEvent.click(getByTestId('back-button'))
    expect(back).toHaveBeenCalled()
  })

  it('업로드 아이콘을 클릭하면 onToggleAssets 함수가 호출된다', () => {
    const { getByTestId } = rendered()

    fireEvent.click(getByTestId('upload-button'))
    expect(onToggleAssets).toHaveBeenCalled()
  })
})
