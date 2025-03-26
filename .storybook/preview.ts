import type { Preview } from '@storybook/react'
// eslint-disable-next-line import/no-internal-modules
import '../src/styles/globals.scss'
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  tags: ['autodocs']
}

export default preview
