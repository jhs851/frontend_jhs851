import React from 'react'
import Link from 'next/link'
import Text from 'components/Text'
import { Button, Container } from './styled'

const HomePage: React.FC = () => (
  <Container>
    <Text size={40} weight={700}>
      안녕하세요!
    </Text>
    <Text size={22}>
      프론트엔드 개발자 <b>정형석</b>입니다!
    </Text>
    <Text size={20}>잘 부탁드립니다 😊😊😊</Text>

    <Link href="/list" passHref>
      <Button>
        <Text size={14} color="white">
          채팅
        </Text>
      </Button>
    </Link>
  </Container>
)

export default HomePage
