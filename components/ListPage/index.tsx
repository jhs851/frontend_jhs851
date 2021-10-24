import React from 'react'
import { RelatedRoom as RRoom } from 'types'
import { NextPageWithLayout } from 'pages/_app'
import { RoomsContainer } from './styled'
import Room from 'components/Room'

type P = {
  rooms: RRoom[]
}

const ListPage: NextPageWithLayout<P> = ({ rooms }) => (
  <RoomsContainer>
    {rooms.map(room => (
      <Room key={room.id} {...room} />
    ))}
  </RoomsContainer>
)

export default ListPage
