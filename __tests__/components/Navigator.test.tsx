import { render } from '@testing-library/react'
import Navigator from 'components/Navigator'
import Text from 'components/Text'

describe('Navigator 컴포넌트', () => {
  it('렌더링이 올바르게 된다', () => {
    const { container } = render(
      <Navigator
        headerLeft={<Text size={14}>왼쪽</Text>}
        title={<Text size={14}>제목</Text>}
        headerRight={<Text size={14}>오른쪽</Text>}
      />,
    )

    expect(container).toMatchSnapshot()
  })
})
