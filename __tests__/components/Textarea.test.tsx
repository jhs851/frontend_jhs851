import { render } from '@testing-library/react'
import Textarea from 'components/Textarea'

describe('Textarea 컴포넌트', () => {
  it('렌더링이 올바르게 된다', () => {
    expect(render(<Textarea />).container).toMatchSnapshot()
  })
})
