import React, { useEffect, useRef, useState } from 'react'
import { Container, DateContainer, DateText, Line, Wrapper } from './styled'
import moment from 'moment'
import {
  Asset as IAssets,
  RelatedMessage as RMessage,
  Room as IRoom,
  VirtualMessage as VMessage,
} from 'types'
import RoomNavigator from 'components/RoomNavigator'
import Message from 'components/Message'
import API from 'utils/API'
import Assets, { HTMLDivAssetsElement } from 'components/Assets'
import { useNestedGroupByMessages } from './hooks/useNestedGroupByVirtualMessages'
import { NextPageWithLayout } from 'pages/_app'
import { uniqueId } from 'lodash'
import { isVirtualMessage } from 'utils/helpers'
import SendMessage, { MessageFormInput } from 'components/SendMessage'

type P = {
  room: IRoom
  messages: RMessage[]
  assets: IAssets[]
}

const RoomPage: NextPageWithLayout<P> = props => {
  // TODO: 인피니티 스크롤
  const [messages, setMessages] = useState<(RMessage | VMessage)[]>(
    props.messages,
  )
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const assetsRef = useRef<HTMLDivAssetsElement | null>(null)
  const nestedGroupBy = useNestedGroupByMessages(messages)
  const scrollToBottom = () =>
    wrapperRef.current?.scroll(0, wrapperRef.current?.scrollHeight)
  const onToggleAssets = () => assetsRef.current?.onToggle()
  const onSubmit = async (input: MessageFormInput) => {
    setMessages(prevState =>
      prevState.concat({
        virtual_id: uniqueId(),
        user_id: 1,
        room_id: props.room.id,
        message: input.message,
        asset: input.asset,
        created_at: moment().toISOString(),
      }),
    )
  }
  const onAssetSubmit = (asset: string) => onSubmit({ asset, message: '' })
  const onRemove = (message: VMessage) => {
    setMessages(prevState =>
      prevState.filter(
        prevMessage =>
          !isVirtualMessage(prevMessage) ||
          prevMessage.virtual_id !== message.virtual_id,
      ),
    )
  }

  useEffect(scrollToBottom, [messages])
  useEffect(() => {
    ;(async () => {
      await API.markReadRoom(props.room.id)
    })()
  }, [props.room])

  return (
    <>
      <RoomNavigator
        roomName={props.room.local_name}
        onToggleAssets={onToggleAssets}
      />

      <Container>
        <Assets ref={assetsRef} assets={props.assets} onClick={onAssetSubmit} />

        <Wrapper ref={wrapperRef}>
          {Object.entries<Record<string, (RMessage | VMessage)[]>>(
            nestedGroupBy,
          ).map(([date, groupBy], i) => (
            <div key={date}>
              <DateContainer index={i}>
                <Line />
                <DateText size={12} letterSpacing={0}>
                  {date}
                </DateText>
                <Line />
              </DateContainer>

              {Object.entries(groupBy).map(([time, messages]) => (
                <div key={time}>
                  {messages.map((message, j) => (
                    <Message
                      key={
                        !isVirtualMessage(message)
                          ? message.id
                          : message.virtual_id
                      }
                      {...message}
                      isLast={j === messages.length - 1}
                      time={time}
                      onRemove={onRemove}
                    />
                  ))}
                </div>
              ))}
            </div>
          ))}

          <SendMessage onSubmit={onSubmit} />
        </Wrapper>
      </Container>
    </>
  )
}

export default RoomPage
