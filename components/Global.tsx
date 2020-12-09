import { css, Global as EMGlobal } from '@emotion/react'
import xw from 'xwind'

const styles = Object.assign(
  {},
  {
    '@viewport': {
      'viewport-fit': 'cover',
    },
  },
  {
    'html, body': xw`bg-gray-50 dark:bg-gray-900`,
  },
)

const Global = (): JSX.Element => <EMGlobal styles={css(styles)} />

export default Global
