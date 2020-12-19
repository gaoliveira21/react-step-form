import React, { ReactElement } from 'react'

import css from '../Form.sass'

export const Step1: React.FC = (): ReactElement => {
  return (
    <form className={css.Form}>
      <div className={css.F__InputGroup}>
        <label htmlFor="name" className={css.IG__Label}>Nome</label>
        <input type="text" className={css.IG__Input} placeholder="Insira seu nome completo"/>
      </div>
      <div className={css.F__InputGroup}>
        <label htmlFor="email" className={css.IG__Label}>Email</label>
        <input type="text" className={css.IG__Input} placeholder="Insira seu nome completo"/>
      </div>
      <div className={css.F__InputGroup}>
        <label htmlFor="password" className={css.IG__Label}>Password</label>
        <input type="text" className={css.IG__Input} placeholder="Insira seu nome completo"/>
      </div>
    </form>
  )
}
