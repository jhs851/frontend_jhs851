import React from 'react'
import {
  Body,
  DateText,
  Footer,
  Message,
  Avatar,
  Container,
  StyledRoom,
  UnreadMessageCountContainer,
} from './styled'
import { RelatedRoom as RRoom } from 'types'
import Text from 'components/Text'
import Link from 'next/link'
import useCreatedAt from './hooks/useCreatedAt'

type P = RRoom

const Room: React.FC<P> = ({
  id,
  user,
  local_name,
  unread_message_count,
  last_message,
}) => {
  const hasLastMessage = !!last_message
  const createdTimes = useCreatedAt(last_message?.created_at)

  return (
    <Link href={`/room/${id}`} passHref>
      <StyledRoom data-testid="room-component">
        <Avatar src={user.avatar} alt={local_name} width={56} height={56} />

        <Container>
          <Body>
            <Text size={16} weight={700} letterSpacing={-0.2}>
              {local_name}
            </Text>
            {hasLastMessage && (
              <Message size={13} weight={500} color="coolGrey" ellipsis={true}>
                {last_message.message}
              </Message>
            )}
          </Body>

          {hasLastMessage && (
            <Footer>
              <DateText size={11} letterSpacing={0}>
                {createdTimes}
              </DateText>

              {unread_message_count > 0 && (
                <UnreadMessageCountContainer>
                  <Text
                    size={10}
                    weight={700}
                    color="white"
                    letterSpacing={-0.08}
                  >
                    {unread_message_count}
                  </Text>
                </UnreadMessageCountContainer>
              )}
            </Footer>
          )}
        </Container>
      </StyledRoom>
    </Link>
  )
}

export default Room
