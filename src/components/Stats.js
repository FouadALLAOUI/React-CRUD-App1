import React, { useContext } from 'react'
import { AppContext } from '../app/app'

function Stats() {
  const [state, setState] = useContext(AppContext);
  return (
    <div>{state.products.length}</div>
  )
}

export default Stats