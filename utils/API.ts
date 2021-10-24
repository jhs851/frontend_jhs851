import { Asset, Message, Room, User, VirtualMessage } from 'types'
import {
  assets as mockAssets,
  messages as mockMessages,
  rooms as mockRooms,
  users as mockUsers,
} from 'utils/mocks'

export default class API {
  static lastMessageID: number = mockMessages.slice(-1)[0].id
  static users: User[] = mockUsers
  static rooms: Room[] = mockRooms
  static messages: Message[] = mockMessages
  static assets: Asset[] = mockAssets

  static send<T>(
    executor: (
      resolve: (value: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void,
    ) => void,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      setTimeout(() => executor(resolve, reject), 600)
    })
  }

  static async findUser(user_id: number): Promise<User> {
    return API.send((resolve, reject) => {
      const user = API.users.find(user => user.id === user_id)

      if (!user) {
        return reject(`Not found User. user_id: ${user_id}`)
      }

      resolve(user)
    })
  }

  static async getRooms(): Promise<Room[]> {
    return API.send(resolve => resolve(API.rooms))
  }

  static async findRoom(room_id: number): Promise<Room> {
    return API.send((resolve, reject) => {
      const room = API.rooms.find(room => room.id === room_id)

      if (!room) {
        return reject(`Not found Room. room_id: ${room_id}`)
      }

      resolve(room)
    })
  }

  static async getMessages(room_id: number): Promise<Message[]> {
    return API.send(resolve =>
      resolve(API.messages.filter(message => message.room_id === room_id)),
    )
  }

  static async findMessage(message_id: number): Promise<Message> {
    return API.send((resolve, reject) => {
      const message = API.messages.find(message => message.id === message_id)

      if (!message) {
        return reject(`Not found User. message_id: ${message_id}`)
      }

      resolve(message)
    })
  }

  static async getAssets(): Promise<Asset[]> {
    return API.send(resolve => resolve(API.assets))
  }

  static async markReadRoom(room_id: number): Promise<void> {
    return API.send(resolve => {
      API.rooms = API.rooms.map(room =>
        room.id === room_id ? { ...room, unread_message_count: 0 } : room,
      )
      resolve()
    })
  }

  static async updateRoomLastMessage(
    room_id: number,
    last_message_id: number,
  ): Promise<void> {
    return API.send(resolve => {
      API.rooms = API.rooms.map(room =>
        room.id === room_id ? { ...room, last_message_id } : room,
      )
      resolve()
    })
  }

  static async createMessage(data: VirtualMessage): Promise<Message> {
    return API.send(async resolve => {
      const id = ++API.lastMessageID
      const message = {
        ...data,
        id,
      }
      API.messages = API.messages.concat(message)
      await API.updateRoomLastMessage(data.room_id, id)

      resolve(message)
    })
  }
}
