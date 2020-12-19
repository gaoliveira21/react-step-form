import React, { ReactElement, memo } from 'react'

import css from './Indicator.sass'

type IIndicator = {
  hasActive: boolean,
  onClick: () => void
}

export const Indicator: React.FC<IIndicator> = memo(({ onClick, hasActive }): ReactElement => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${css.Indicator} ${hasActive && css.I__active}`}
    />
  )
})
