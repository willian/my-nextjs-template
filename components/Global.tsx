import { css, Global as EMGlobal } from '@emotion/react'
import xw from 'xwind'

const styles = {
  '@viewport': {
    'viewport-fit': 'cover',
  },
  'html, body': xw`bg-gray-50 dark:bg-gray-900`,
}

export default function Global(): JSX.Element {
  return <EMGlobal styles={css(styles)} />
}
