import { Heading } from 'grommet'
import { withResponsiveContext } from '@zooniverse/react-components'
import { object, oneOfType, string } from 'prop-types'
import styled from 'styled-components'

// TODO add this as an xsmall option for h3 into theme
const StyledHeading = styled(Heading)`
  font-size: 14px;
  line-height: 22px;
`

function Subtitle ({ margin, mode, screenSize, text, ...props }) {
  const textMargin = (screenSize === 'small')
    ? { bottom: 'xsmall', top: 'none' }
    : margin

  return (
    <StyledHeading level='3' margin={textMargin}>
      {text}
    </StyledHeading>
  )
}

Subtitle.propTypes = {
  margin: oneOfType([object, string]),
  screenSize: string,
  size: string,
  text: string.isRequired
}

Subtitle.defaultProps = {
  margin: '0',
  screenSize: '',
  size: 'small'
}

export default withResponsiveContext(Subtitle)
export { Subtitle }
