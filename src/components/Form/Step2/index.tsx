import React, { ReactElement } from 'react'
import { motion } from 'framer-motion'

import css from '../Form.sass'

export const Step2: React.FC = (): ReactElement => {
  return (
    <motion.form
      className={css.Form}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <div className={css.F__InputGroup}>
        <label htmlFor="name" className={css.IG__Label}>Rua</label>
        <input type="text" className={css.IG__Input} placeholder="Insira o nome da sua rua" />
      </div>
      <div className={css.F__InputGroup}>
        <label htmlFor="email" className={css.IG__Label}>Bairro</label>
        <input type="text" className={css.IG__Input} placeholder="Insira o nome do seu bairro" />
      </div>
      <div className={css.F__InputGroup}>
        <label htmlFor="password" className={css.IG__Label}>Cidade</label>
        <input type="text" className={css.IG__Input} placeholder="Insira o nome da sua cidade" />
      </div>
    </motion.form>
  )
}
