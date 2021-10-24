import { render } from '@testing-library/react'
import Message from 'components/Message'
import {
  messages as mockMessages,
  users as mockUser,
  rooms as mockRooms,
} from 'utils/mocks'
import { Message as IMessage, Room as IRoom, User as IUser } from 'types'

describe('Message 컴포넌트', () => {
  const message: IMessage = mockMessages[0]
  const user: IUser =
    mockUser.find(user => user.id === message.user_id) || mockUser[0]
  const room: IRoom =
    mockRooms.find(room => room.id === message.room_id) || mockRooms[0]
  const onRemove = jest.fn()
  const rendered = (isLast: boolean, time: string) =>
    render(
      <Message
        {...message}
        user={user}
        room={room}
        isLast={isLast}
        time={time}
        onRemove={onRemove}
      />,
    )

  it('렌더링이 올바르게 된다', () => {
    expect(rendered(true, '00:00').container).toMatchSnapshot()
  })
})
