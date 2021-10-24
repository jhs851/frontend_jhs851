import React from 'react'
import { SendContainer, SubmitContainer, TextareaContainer } from './styled'
import Textarea from 'components/Textarea'
import Image from 'components/Image'
import { useForm } from 'react-hook-form'

type P = {
  onSubmit: (input: MessageFormInput) => Promise<void>
}

export type MessageFormInput = {
  message: string
  asset: string
}

const SendMessage: React.FC<P> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<MessageFormInput>({
    mode: 'onChange',
    defaultValues: {
      message: '',
      asset: '',
    },
  })
  const submit = async (input: MessageFormInput) => {
    reset({ message: '' })
    await onSubmit(input)
  }

  return (
    <SendContainer onSubmit={handleSubmit(submit)}>
      <TextareaContainer>
        <Textarea
          placeholder="메시지를 입력하세요.."
          rows={1}
          {...register('message', {
            validate: val => Boolean(val.trim()),
          })}
        />
      </TextareaContainer>

      <SubmitContainer disabled={!isValid} type="submit">
        <Image src="/icons/send.svg" width={26} height={18} alt="전송" />
      </SubmitContainer>
    </SendContainer>
  )
}

export default SendMessage
