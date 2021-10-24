import { css } from 'styled-components'

const fonts = css`
  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: local('AppleSDGothicNeo'),
      url('/fonts/AppleSDGothicNeoMedium.otf') format('opentype');
    font-weight: 500;
  }

  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: local('AppleSDGothicNeo'),
      url('/fonts/AppleSDGothicNeoSemiBold.otf') format('opentype');
    font-weight: 600;
  }

  @font-face {
    font-family: 'AppleSDGothicNeo';
    src: local('AppleSDGothicNeo'),
      url('/fonts/AppleSDGothicNeoBold.otf') format('opentype');
    font-weight: 700;
  }
`

export default fonts
