import React, { useState } from 'react'
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

  const useStyles = makeStyles((theme) => ({
    title: {
      color: theme.palette.text.secondary,
    },
  }))

  const classes = useStyles()

  const onSubmit = (event) => {
    event.preventDefault()
    let newBrag = {
      description: brag.description,
      date: moment().format('L'),
    }
    setState({
      brag: { description: '' },
      brags: [...brags, newBrag],
    })
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
