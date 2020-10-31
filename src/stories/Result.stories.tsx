import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import Result, { Props } from '../components/Result'

export default {
  title: 'Components/Result',
  component: Result
} as Meta

const Template: Story<Props> = args => <Result {...args} />

export const StoryElement = Template.bind({})
StoryElement.args = {
  link: 'dasdsadsad',
  sender: 'Rafeeq',
  reciever: 'Shafeeq',
  message: 'nachoo !!'
}
