import moment from 'moment'

const useCreatedAt = (date: string | undefined) => {
  const momented = moment(date)

  return momented.isSame(new Date(), 'day')
    ? momented.format('HH:mm')
    : momented.format('dddd')
}

export default useCreatedAt
