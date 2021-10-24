export interface User {
  id: number
  name: string
  avatar: string
}

export interface Room {
  id: number
  user_id: number
  local_name: string
  unread_message_count: number
  last_message_id?: number
}

export interface RelatedRoom extends Room {
  user: User
  last_message?: Message
}

export interface Message {
  id: number
  user_id: number
  room_id: number
  message?: string
  asset?: string
  created_at: string
}

export interface RelatedMessage extends Message {
  user: User
  room: Room
}

export interface VirtualMessage extends Omit<Message, 'id'> {
  virtual_id: string
}

export interface Asset {
  id: number
  path: string
}
