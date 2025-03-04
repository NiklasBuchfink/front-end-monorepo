import asyncStates from '@zooniverse/async-states'
import { MockTask } from '@stories/components'
import SimpleDropdownTask from './SimpleDropdownTask'

export default {
  title: 'Tasks / Simple Dropdown',
  component: SimpleDropdownTask,
  args: {
    isThereTaskHelp: true,
    required: false,
    subjectReadyState: asyncStates.success
  },
  argTypes: {
    subjectReadyState: {
      control: {
        type: 'select',
        options: asyncStates
      }
    }
  }
}

export function Default({ isThereTaskHelp, required, subjectReadyState }) {
  const simpleDropdownTask = {
    allowCreate: false,
    options: [
      'Red',
      'Blue',
      'Yellow',
      'Green',
      'White',
      'Black',
    ],
    required,
    strings: {
      help: 'Choose an option from the list of options.',
      instruction: 'Select your favourite colour.',
      'selects.0.options.*.0.label': 'Red',
      'selects.0.options.*.1.label': 'Blue',
      'selects.0.options.*.2.label': 'Yellow',
      'selects.0.options.*.3.label': 'Green',
      'selects.0.options.*.4.label': 'White',
      'selects.0.options.*.5.label': 'Black'
    },
    taskKey: 'init',
    type: 'dropdown-simple',
  }
  const tasks = {
    init: simpleDropdownTask
  }
  return (
    <MockTask
      isThereTaskHelp={isThereTaskHelp}
      subjectReadyState={subjectReadyState}
      tasks={tasks}
    />
  )
}
