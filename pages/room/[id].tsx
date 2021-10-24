import React from 'react'
import {
  Asset as IAssets,
  RelatedMessage as RMessage,
  Room as IRoom,
} from 'types'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { fetch } from 'components/RoomPage/fetch'
import { paths } from 'components/RoomPage/paths'
import RoomPage from 'components/RoomPage'

type P = {
  room: IRoom
  messages: RMessage[]
  assets: IAssets[]
}

const Room: NextPage<P> = props => <RoomPage {...props} />

export const getStaticPaths: GetStaticPaths = paths

export const getStaticProps: GetStaticProps = fetch

export default Room
