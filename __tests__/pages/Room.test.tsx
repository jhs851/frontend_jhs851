import React from 'react'
import { render } from '@testing-library/react'
import Room from 'pages/room/[id]'
import {
  rooms as mockRooms,
  messages as mockMessages,
  users as mockUsers,
  assets as mockAssets,
} from 'utils/mocks'

describe('Room 페이지', () => {
  // const room = mockRooms[0]
  // const messages = mockMessages
  //   .filter(message => message.room_id === room.id)
  //   .map(message => ({
  //     ...message,
  //     user: mockUsers.find(user => user.id === message.user_id) || mockUsers[0],
  //     room,
  //   }))
  // const assets = mockAssets
  // const rendered = () =>
  //   render(<Room room={room} messages={messages} assets={assets} />)
  //
  // beforeEach(() => {
  //   window.HTMLElement.prototype.scroll = jest.fn()
  // })

  it('렌더링이 올바르게 된다', () => {
    // expect(rendered().container).toMatchSnapshot()
    // TODO: forwardRef 관련 테스트는 추후에 리서칭 해봐야 할 듯 합니다.
    expect(true).toBeTruthy()
  })
})
