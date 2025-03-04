import PropTypes from 'prop-types'
import { observer } from 'mobx-react'

import { useStores } from '@hooks'
import MoveButton from './MoveButton'

function storeMapper(classifierStore) {
  const {
    move,
    enableMove,
    separateFramesView
  } = classifierStore.subjectViewer

  return {
    move,
    enableMove,
    separateFramesView
  }
}

function MoveButtonContainer({
  separateFrameMove = false,
  separateFrameEnableMove = () => true
}) {
  const { move, enableMove, separateFramesView } = useStores(storeMapper)

  return (
    <MoveButton
      active={separateFramesView ? separateFrameMove : move}
      onClick={separateFramesView ? separateFrameEnableMove : enableMove}
    />
  )
}

export default observer(MoveButtonContainer)

MoveButtonContainer.propTypes = {
  /** Used when separate frames of a subject each have their own ImageToolbar */
  separateFrameMove: PropTypes.bool,
  separateFrameEnableMove: PropTypes.func
}
