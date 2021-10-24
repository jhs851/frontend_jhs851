import { render } from '@testing-library/react'
import List from 'pages/list'
import {
  rooms as mockRooms,
  users as mockUsers,
  messages as mockMessages,
} from 'utils/mocks'
import { RelatedRoom as RRoom } from 'types'

describe('채팅 리스트 페이지', () => {
  it('렌더링이 올바르게 된다', async () => {
    const rooms: RRoom[] = mockRooms.map(room => ({
      ...room,
      user: mockUsers.find(user => user.id === room.user_id) || mockUsers[0],
      last_message: mockMessages.find(
        message => message.id === room.last_message_id,
      ),
    }))

    expect(render(<List rooms={rooms} />).container).toMatchSnapshot()
  })
})
