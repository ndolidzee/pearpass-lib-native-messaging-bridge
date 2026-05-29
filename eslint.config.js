import { eslintConfig } from '@tetherto/tether-dev-docs'

export default [
  ...eslintConfig,
  {
    rules: {
      'no-underscore-dangle': 'off'
    }
  }
]
