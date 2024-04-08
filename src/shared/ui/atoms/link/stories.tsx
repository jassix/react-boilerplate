import type { Meta, StoryObj } from '@storybook/react'

import { Link } from './ui'

const meta: Meta<typeof Link> = {
  component: Link,
}

type Story = StoryObj<typeof Link>

export const Primary: Story = {
  render: () => <Link to="#">hello</Link>,
}

export default meta
