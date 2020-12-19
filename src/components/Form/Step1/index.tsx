import React, { ReactElement } from 'react'
import { motion } from 'framer-motion'

import css from '../Form.sass'

export const Step1: React.FC = (): ReactElement => {
  return (
    <motion.form
      className={css.Form}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className={css.F__InputGroup}>
        <label htmlFor="name" className={css.IG__Label}>Nome</label>
        <input type="text" className={css.IG__Input} placeholder="Insira seu nome completo" />
      </div>
      <div className={css.F__InputGroup}>
        <label htmlFor="email" className={css.IG__Label}>Email</label>
        <input type="text" className={css.IG__Input} placeholder="Insira seu e-mail" />
      </div>
      <div className={css.F__InputGroup}>
        <label htmlFor="password" className={css.IG__Label}>Password</label>
        <input type="text" className={css.IG__Input} placeholder="Insira sua senha" />
      </div>
    </motion.form>
  )
}
