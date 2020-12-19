import React, { ReactElement, useState, memo } from 'react'

import { Indicator } from '../Indicator'

import css from './Steps.sass'

type ISteps = {
  components: ReactElement[]
}

export const StepsHeader: React.FC = memo((): ReactElement => {
  return (
    <header className={css.S__Header}>
      <h2>Formulário de cadastro</h2>
    </header>
  )
})

export const Steps: React.FC<ISteps> = ({ components }): ReactElement => {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className={css.Steps}>
      <StepsHeader />
      {components[currentStep]}
      <div className={css.S__Indicators}>
        {components.map((_, index) => (
          <Indicator
            key={index}
            hasActive={currentStep === index}
            onClick={() => setCurrentStep(index)}
          />
        ))}
      </div>
    </div>
  )
}
