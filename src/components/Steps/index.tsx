import React, { ReactElement, useState } from 'react'

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
          <button key={index} onClick={() => setCurrentStep(index)}>{index + 1}</button>
        ))}
      </div>
    </div>
  )
}
