import { fireEvent, render, waitFor } from '@testing-library/react'
import SendMessage from 'components/SendMessage'

describe('SendMessage 컴포넌트', () => {
  const onSubmit = jest.fn()
  const rendered = () => render(<SendMessage onSubmit={onSubmit} />)

  it('렌더링이 올바르게 된다', () => {
    expect(rendered().container).toMatchSnapshot()
  })

  it('메세지 값이 없으면 submit 버튼은 꺼져있다', () => {
    const { getByRole } = rendered()

    expect(getByRole('button')).toBeDisabled()
  })

  it('메세지를 입력하고 submit 버튼을 누르면 onSubmit이 실행된다', async () => {
    const { getByPlaceholderText, getByRole } = rendered()
    const value = '메세지'
    const textarea = getByPlaceholderText(
      '메시지를 입력하세요..',
    ) as HTMLTextAreaElement

    fireEvent.change(textarea, {
      target: { value },
    })
    expect(textarea.value).toBe(value)
    await waitFor(() => {
      fireEvent.submit(getByRole('button'))
    })
    expect(onSubmit).toHaveBeenCalled()
  })
})
