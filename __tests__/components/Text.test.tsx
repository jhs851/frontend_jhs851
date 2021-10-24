import { render } from '@testing-library/react'
import Text from 'components/Text'

describe('Text 컴포넌트', () => {
  it('렌더링이 올바르게 된다', () => {
    const text = 'Hello World'
    const rendered = render(<Text size={14}>{text}</Text>)

    expect(rendered.queryByText(text)).not.toBeNull()
    expect(rendered.container).toMatchSnapshot()
  })
})
