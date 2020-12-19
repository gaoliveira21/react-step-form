import React, { ReactElement } from 'react'
import { v4 } from 'uuid'

import { Step1 } from '@/components/Form'
import { Steps } from '@/components/Steps'

import css from './App.sass'

export const App: React.FC = (): ReactElement => {
  return (
    <div className={css.App}>
      <Steps components={[
        <Step1 key={v4()} />,
        <p key="1">step 2</p>,
        <p key="1">step 3</p>
      ]} />
    </div>
  )
}
