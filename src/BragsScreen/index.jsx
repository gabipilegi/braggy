import React, { useState, useEffect } from 'react'
import Brags from './Brags'
import CreateBrag from './CreateBrag'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import moment from 'moment'

const BragsScreen = () => {
  const [{ brag, brags }, setState] = useState({
    brag: { description: '' },
    brags: [],
  })

  useEffect(() => {
    const existingBrags = JSON.parse(localStorage.getItem('@braggy/brags'))
    setState({
      brag: { description: '' },
      brags: existingBrags ? existingBrags : [],
    })
  }, [])

  const useStyles = makeStyles((theme) => ({
    title: {
      color: theme.palette.text.secondary,
    },
  }))

  const classes = useStyles()

  const onSubmit = (event) => {
    event.preventDefault()

    const newBrag = {
      description: brag.description,
      date: moment().format('L'),
    }

    const newBrags = [...brags, newBrag]

    setState({
      brag: { description: '' },
      brags: newBrags,
    })

    localStorage.setItem('@braggy/brags', JSON.stringify(newBrags))
  }

  const onChange = (event) => {
    let value = event.target.value

    setState((previousState) => ({
      brag: { description: value },
      brags: previousState.brags,
    }))
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <p className={classes.title}>What are we gonna brag about today?</p>
        <CreateBrag brag={brag} onSubmit={onSubmit} onChange={onChange} />
      </Grid>
      <Grid item xs={12}>
        <Brags brags={brags} />
      </Grid>
    </Grid>
  )
}

export default BragsScreen
