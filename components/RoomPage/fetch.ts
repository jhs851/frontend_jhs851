import API from 'utils/API'
import { GetStaticProps } from 'next'

export const fetch: GetStaticProps = async context => {
  const id: number = Number(context.params?.id)
  const room = await API.findRoom(id)
  const messages = await API.getMessages(id)

  if (!room) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      room,
      messages: await Promise.all(
        messages.map(async message => ({
          ...message,
          user: await API.findUser(message.user_id),
          room: await API.findRoom(message.room_id),
        })),
      ),
      assets: await API.getAssets(),
    },
  }
}
