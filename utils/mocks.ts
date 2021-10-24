import { Asset, Message, Room, User } from 'types'
import moment from 'moment'

export const users: User[] = [
  {
    id: 1,
    name: '지그재그',
    avatar: '',
  },
  {
    id: 2,
    name: '장만월',
    avatar: '/avatars/avatar1.png',
  },
  {
    id: 3,
    name: '신정근',
    avatar: '/avatars/avatar3.png',
  },
  {
    id: 4,
    name: '이미라',
    avatar: '/avatars/avatar4.png',
  },
  {
    id: 5,
    name: '구찬성',
    avatar: '/avatars/avatar5.png',
  },
  {
    id: 6,
    name: '노준석',
    avatar: '/avatars/avatar6.png',
  },
  {
    id: 7,
    name: '김유나',
    avatar: '/avatars/avatar7.png',
  },
  {
    id: 8,
    name: '구현모',
    avatar: '/avatars/avatar2.png',
  },
]

export const rooms: Room[] = [
  {
    id: 1,
    user_id: 2,
    local_name: '장만월 사장님',
    unread_message_count: 2,
    last_message_id: 4,
  },
  {
    id: 2,
    user_id: 3,
    local_name: '신정근 바텐더',
    unread_message_count: 0,
    last_message_id: 5,
  },
  {
    id: 3,
    user_id: 4,
    local_name: '이미라 의사',
    unread_message_count: 0,
    last_message_id: 6,
  },
  {
    id: 4,
    user_id: 5,
    local_name: '구찬성 지배인',
    unread_message_count: 0,
    last_message_id: 7,
  },
  {
    id: 5,
    user_id: 6,
    local_name: '노준석 총지배인',
    unread_message_count: 0,
    last_message_id: 8,
  },
  {
    id: 6,
    user_id: 7,
    local_name: '김유나 인턴',
    unread_message_count: 0,
    last_message_id: 9,
  },
  {
    id: 7,
    user_id: 8,
    local_name: '구현모',
    unread_message_count: 0,
    last_message_id: 10,
  },
]

export const messages: Message[] = [
  {
    id: 1,
    user_id: 2,
    room_id: 1,
    message: '출근했니?',
    created_at: moment('2020-05-06 02:34:00').toISOString(),
  },
  {
    id: 2,
    user_id: 2,
    room_id: 1,
    message: '출근했냐구?',
    created_at: moment('2020-05-06 02:35:00').toISOString(),
  },
  {
    id: 3,
    user_id: 2,
    room_id: 1,
    message: '어딘데 출근 안하니?',
    created_at: moment('2020-05-07 02:36:00').toISOString(),
  },
  {
    id: 4,
    user_id: 2,
    room_id: 1,
    message: '어딘데 출근 안하니, 죽고싶니?',
    created_at: moment().set({ h: 9, m: 32 }).toISOString(),
  },
  {
    id: 5,
    user_id: 3,
    room_id: 2,
    message: '오시는 길에 와인 몇병만 사다주세요.',
    created_at: moment().set({ h: 2, m: 34 }).toISOString(),
  },
  {
    id: 6,
    user_id: 4,
    room_id: 3,
    message:
      '휴가 잘 보내고 계신가요? 다름이 아니라 지금 검사 결과가 나와서 연락드립니다.',
    created_at: moment().subtract(1, 'day').toISOString(),
  },
  {
    id: 7,
    user_id: 5,
    room_id: 4,
    message: '아 휴가셨군요. 약속은 다음으로 미루시죠!',
    created_at: moment().subtract(2, 'day').toISOString(),
  },
  {
    id: 8,
    user_id: 6,
    room_id: 5,
    message: '휴가에서 언제 돌아오시는지요. 돌아오시면 회포 한번 푸시죠.',
    created_at: moment().subtract(3, 'day').toISOString(),
  },
  {
    id: 9,
    user_id: 7,
    room_id: 6,
    message: '304호 키를 잃어버렸어요 어떻게 해야하죠 ㅠ',
    created_at: moment().subtract(4, 'day').toISOString(),
  },
  {
    id: 10,
    user_id: 8,
    room_id: 7,
    message: '술먹자',
    created_at: moment().subtract(5, 'day').toISOString(),
  },
]

export const assets: Asset[] = [
  {
    id: 1,
    path: '/assets/1.png',
  },
  {
    id: 2,
    path: '/assets/2.png',
  },
  {
    id: 3,
    path: '/assets/3.png',
  },
  {
    id: 4,
    path: '/assets/4.png',
  },
  {
    id: 5,
    path: '/assets/5.png',
  },
  {
    id: 6,
    path: '/assets/6.png',
  },
  {
    id: 7,
    path: '/assets/7.png',
  },
]
