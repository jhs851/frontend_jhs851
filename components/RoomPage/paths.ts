import API from 'utils/API'
import { GetStaticPaths } from 'next'

export const paths: GetStaticPaths = async () => {
  const rooms = await API.getRooms()

  return {
    paths: rooms.map(room => ({
      params: {
        id: room.id.toString(),
      },
    })),
    fallback: false,
  }
}
