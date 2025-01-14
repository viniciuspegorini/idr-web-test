import React from 'react'

import { Meta, StoryFn } from '@storybook/react/'

import { Typography, TypographyProps } from '.'

export default {
	title: 'Components/Typography',
	component: Typography
} as Meta

const Template: StoryFn<TypographyProps> = (args) => <Typography {...args} />

export const Default = Template.bind({})
Default.args = {
	children: 'Title Example'
}
