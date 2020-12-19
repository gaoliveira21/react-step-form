import React, { ReactElement } from 'react'
import { v4 } from 'uuid'

import { Step1, Step2 } from '@/components/Form'
import { Steps } from '@/components/Steps'

import css from './App.sass'

export const App: React.FC = (): ReactElement => {
  return (
    <div className={css.App}>
      <Steps components={[
        <Step1 key={v4()} />,
        <Step2 key={v4()} />
      ]} />
    </div>
  )
}
