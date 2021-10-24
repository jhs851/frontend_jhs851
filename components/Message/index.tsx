import React, { useCallback, useEffect, useState } from 'react'
import Text from 'components/Text'
import { VirtualMessage as VMessage, RelatedMessage as RMessage } from 'types'
import {
  AssetContainer,
  AssetWrapper,
  CancelButton,
  RetryButton,
  FailedContainer,
  LoadingIcon,
  MessageContainer,
  Progress,
  ProgressContainer,
  StyledMessage,
  TimeText,
  RemoveButton,
} from './styled'
import { useTheme } from 'contexts/ThemeProvider'
import Image from 'components/Image'
import API from 'utils/API'
import { MdRefresh, MdClose } from 'react-icons/md'

type P = (RMessage | VMessage) & {
  isLast: boolean
  time: string
  onRemove: (message: VMessage) => void
}

const Message: React.FC<P> = props => {
  const { user_id, message, isLast, asset, time } = props
  const { colors } = useTheme()
  const isVirtualMessage = (
    message: RMessage | VMessage,
  ): message is VMessage => (message as VMessage).virtual_id !== undefined
  const [loading, setLoading] = useState<boolean>(isVirtualMessage(props))
  const [failed, setFailed] = useState<boolean>(false)
  const [width, setWidth] = useState<number>(0)
  const me = user_id === 1
  const store = useCallback(() => {
    if (isVirtualMessage(props)) {
      API.createMessage(props)
        .then(() => setLoading(false))
        .catch(() => setFailed(true))
    }
  }, [props])
  const onCancel = () => setFailed(true)
  const onRetry = () => {
    setFailed(false)
    setLoading(true)
    store()
  }
  const onRemove = () => {
    if (isVirtualMessage(props)) {
      props.onRemove(props)
    }
  }

  useEffect(() => {
    setWidth(95)
    store()
  }, [props, store])

  return (
    <MessageContainer me={me}>
      {!!message && loading && <LoadingIcon color={colors.coolGrey} />}

      {failed ? (
        <FailedContainer>
          <RetryButton onClick={onRetry}>
            <MdRefresh color={colors.charcoalGrey2} />
          </RetryButton>
          <RemoveButton onClick={onRemove}>
            <MdClose color={colors.error} />
          </RemoveButton>
        </FailedContainer>
      ) : (
        isLast &&
        (message || (asset && !loading)) && (
          <TimeText me={me} size={12} letterSpacing={0}>
            {time}
          </TimeText>
        )
      )}

      {message ? (
        <StyledMessage me={me}>
          {message
            .split('\n')
            .filter(value => value)
            .map((value, i) => (
              <Text
                key={i}
                size={14}
                weight={600}
                color={me ? 'white' : 'charcoalGrey2'}
              >
                {value}
              </Text>
            ))}
        </StyledMessage>
      ) : (
        !!asset && (
          <AssetContainer>
            <AssetWrapper>
              {loading && (
                <CancelButton onClick={onCancel}>
                  <Image
                    src="/icons/close.svg"
                    width={16}
                    height={16}
                    alt="취소"
                  />
                </CancelButton>
              )}

              <Image src={asset} width={200} height={200} alt="이미지" />
            </AssetWrapper>

            {loading && (
              <ProgressContainer>
                <Progress width={width} />
              </ProgressContainer>
            )}
          </AssetContainer>
        )
      )}
    </MessageContainer>
  )
}

export default Message
