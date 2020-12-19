import React, { ReactElement, useState } from 'react'

import { Indicator } from '../Indicator'

type ISteps = {
  components: ReactElement[]
}

export const Steps: React.FC<ISteps> = ({ components }): ReactElement => {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div>
      <h2>steps</h2>
      {components[currentStep]}
      <div>
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
