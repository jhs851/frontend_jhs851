import { fireEvent, render } from '@testing-library/react'
import Room from 'components/Room'
import {
  messages as mockMessages,
  rooms as mockRooms,
  users as mockUsers,
} from 'utils/mocks'
import useCreatedAt from 'components/Room/hooks/useCreatedAt'

const useRouter = jest.spyOn(require('next/router'), 'useRouter')

describe('Room 컴포넌트', () => {
  const room = mockRooms[0]
  const user = mockUsers.find(user => user.id === room.user_id) || mockUsers[0]
  const last_message = mockMessages.find(
    message => message.id === room.last_message_id,
  )
  const rendered = () =>
    render(<Room {...room} user={user} last_message={last_message} />)

  it('채팅목록에는 최근 전송한 메세지, 읽지 않은 메세지 갯수, 마지막 메시지 전송 시간을 표시한다', () => {
    const createdAt = useCreatedAt(last_message?.created_at)
    const { queryByText } = rendered()

    if (last_message) {
      expect(queryByText(createdAt)).not.toBeNull()

      if (last_message.message) {
        expect(queryByText(last_message.message)).not.toBeNull()
      }
    }

    if (room.unread_message_count) {
      expect(queryByText(room.unread_message_count)).not.toBeNull()
    }
  })

  it('채팅목록을 클릭하면 rooms/[id] 페이지로 라우팅 된다', () => {
    const push = jest.fn()
    useRouter.mockImplementationOnce(() => ({
      route: '/list',
      pathname: '/list',
      query: '',
      asPath: '',
      push,
    }))

    const { getByTestId } = rendered()

    fireEvent.click(getByTestId('room-component'))
    expect(push).toHaveBeenCalledWith(
      `/room/${room.id}`,
      `/room/${room.id}`,
      expect.anything(),
    )
  })
})
