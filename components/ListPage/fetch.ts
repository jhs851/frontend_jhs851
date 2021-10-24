import { GetStaticProps } from 'next'
import API from 'utils/API'

export const fetch: GetStaticProps = async () => {
  const rooms = await API.getRooms()

  return {
    props: {
      rooms: await Promise.all(
        rooms.map(async room => ({
          ...room,
          user: await API.findUser(room.user_id),
          last_message: room.last_message_id
            ? await API.findMessage(room.last_message_id)
            : undefined,
        })),
      ),
    },
  }
}
