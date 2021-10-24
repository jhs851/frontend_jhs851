import { RelatedMessage as RMessage, VirtualMessage as VMessage } from 'types'

export const isVirtualMessage = (
  message: RMessage | VMessage,
): message is VMessage => (message as VMessage).virtual_id !== undefined
