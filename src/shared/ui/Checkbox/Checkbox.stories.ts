import type { Meta, StoryObj } from '@storybook/react'

import Checkbox from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Radio,Checkbox,Toggle/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['large', 'medium', 'small', 'xsmall']
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    size: 'large'
  }
}

export const CheckedOn: Story = {
  args: {
    size: 'medium',
    checked: true
  }
}
