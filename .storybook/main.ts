import path from 'path'

import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, '../next.config.mjs')
    }
  },
  staticDirs: ['../public'],
  webpackFinal: async config => {
    const imageRule = config.module?.rules?.find(rule => {
      const test = (rule as { test: RegExp }).test
      return test ? test.test('.svg') : false
    }) as { [key: string]: any }

    if (imageRule) {
      imageRule.exclude = /\.svg$/
    }

    config.module?.rules?.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false
                    }
                  }
                },
                {
                  name: 'removeAttrs',
                  params: {
                    attrs: '(id|class)'
                  }
                }
              ]
            }
          }
        }
      ]
    })

    config.module?.rules?.push({
      test: /\.scss$/,
      use: [
        {
          loader: require.resolve('sass-resources-loader'),
          options: {
            resources: [
              path.resolve(__dirname, '../src/styles/variables.scss'),
              path.resolve(__dirname, '../src/styles/mixins.scss'),
              path.resolve(__dirname, '../src/styles/globals.scss')
            ]
          }
        }
      ],
      include: path.resolve(__dirname, '../')
    })

    return config
  }
}

export default config
