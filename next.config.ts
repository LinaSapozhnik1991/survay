import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['./src'],
    additionalData: `@import './src/styles/variables.scss'; @import './src/styles/mixins.scss';`
  },
  webpack(config) {
    const fileLoaderRule = config.module.rules.find(
      (rule: { test: { test: (arg0: string) => unknown } }) =>
        rule.test?.test?.('.svg')
    )

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false,
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
      }
    )

    fileLoaderRule.exclude = /\.svg$/i

    return config
  }
}

export default nextConfig
