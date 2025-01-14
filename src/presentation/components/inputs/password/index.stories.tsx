import React from 'react'

import { Meta, StoryFn } from '@storybook/react/'

import { PasswordInput, PasswordInputProps } from '.'

export default {
	title: 'Components/Password Input',
	component: PasswordInput
} as Meta

const Template: StoryFn<PasswordInputProps> = (args) => (
	<PasswordInput {...args} />
)

export const Default = Template.bind({})
Default.args = {
	label: 'Label Example',
	onChange: () => null
}
