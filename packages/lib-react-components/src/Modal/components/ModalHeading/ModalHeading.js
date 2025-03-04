import { Box } from 'grommet'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SpacedHeading from '../../../SpacedHeading'
import CloseButton from '../../../CloseButton'

const StyledBox = styled(Box)`
  min-height: 30px;
`

const StyledHeading = styled(SpacedHeading)`
  line-height: 0;
`

function ModalHeading ({ background = 'brand', color = 'neutral-6', className = '', closeFn, title = '' }) {
  const horizontalPad = (title) ? 'medium' : 'xsmall'
  const headingMargin = 'none'
  return (
    <StyledBox
      align='center'
      background={background}
      className={className}
      direction='row'
      gap='large'
      justify={(title) ? 'between' : 'end'}
      pad={{ horizontal: horizontalPad, vertical: 'none' }}
    >
      {title &&
        <StyledHeading
          color={color}
          margin={headingMargin}
        >
          {title}
        </StyledHeading>}
      {closeFn &&
        <CloseButton
          className='subtaskpopup-element-that-ignores-drag-actions'
          closeFn={closeFn}
          color={color}
        />
      }
    </StyledBox>
  )
}

ModalHeading.defaultProps = {
  closeFn: undefined
}

ModalHeading.propTypes = {
  background: PropTypes.oneOfType([ PropTypes.object, PropTypes.string ]),
  className: PropTypes.string,
  closeFn: PropTypes.func,
  color: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string
}

export default ModalHeading
export { StyledHeading }
