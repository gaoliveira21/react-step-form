import React, { ReactElement } from 'react'

import { Steps } from '@/components/Steps'

import css from './App.sass'

export const App: React.FC = (): ReactElement => {
  return (
    <div className={css.App}>
      <Steps components={[
        <p key="1">step 1</p>,
        <p key="1">step 2</p>,
        <p key="1">step 3</p>,
        <p key="1">step 4</p>
      ]} />
    </div>
  )
}
