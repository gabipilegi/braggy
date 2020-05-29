import React, { useState } from 'react'
import Brags from './Brags'
import CreateBrag from './CreateBrag'
import { Container } from '@material-ui/core'

const BragsScreen = () => {
  const [{ brag, brags }, setState] = useState({ brag: '', brags: [] })

  const onSubmit = (event) => {
    event.preventDefault()
    setState({
      brag: '',
      brags: [...brags, brag],
    })
  }

  const onChange = (event) => {
    let value = event.target.value

    setState((previousState) => ({
      brag: value,
      brags: previousState.brags,
    }))
  }

  return (
    <Container>
      <CreateBrag brag={brag} onSubmit={onSubmit} onChange={onChange} />
      <Brags brags={brags} />
    </Container>
  )
}

export default BragsScreen
