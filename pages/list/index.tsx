import React from 'react'
import ListPage from 'components/ListPage'
import { GetStaticProps } from 'next'
import { RelatedRoom as RRoom } from 'types'
import { fetch } from 'components/ListPage/fetch'
import { NextPageWithLayout } from 'pages/_app'
import { GetLayout } from 'components/ListPage/GetLayout'

type P = {
  rooms: RRoom[]
}

const List: NextPageWithLayout<P> = props => <ListPage {...props} />

List.getLayout = GetLayout

export const getStaticProps: GetStaticProps = fetch

export default List
