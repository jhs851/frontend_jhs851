import { RelatedMessage as RMessage, VirtualMessage as VMessage } from 'types'
import { groupBy } from 'lodash'
import moment from 'moment'

export const useNestedGroupByMessages = <T extends RMessage | VMessage>(
  messages: T[],
) =>
  Object.entries(
    groupBy<T>(messages, message =>
      moment(message.created_at).format('YYYY-MM-DD'),
    ),
  ).reduce(
    (p, [date, messages]) => ({
      ...p,
      [date]: groupBy<T>(messages, message =>
        moment(message.created_at).format('HH:mm'),
      ),
    }),
    {},
  )
