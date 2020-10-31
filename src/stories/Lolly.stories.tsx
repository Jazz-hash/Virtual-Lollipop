import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { Lolly, Props } from '../components/Lolly'

export default {
  title: 'Components/Lolly',
  component: Lolly
} as Meta

const Template: Story<Props> = args => <Lolly {...args} />

export const Lolly1 = Template.bind({})
Lolly1.args = {
  top: 'green',
  middle: 'red',
  bottom: 'yellow'
}

export const Lolly2 = Template.bind({})
Lolly2.args = {
  top: 'orange',
  middle: 'yellow',
  bottom: 'red'
}
