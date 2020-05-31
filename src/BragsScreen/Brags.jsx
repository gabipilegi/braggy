import React from 'react'
import { List, ListItem, ListItemIcon, Container } from '@material-ui/core'
import { ChatBubbleRounded } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const Brags = ({ brags }) => {
  const useStyles = makeStyles((theme) => ({
    brags: {
      wordBreak: 'break-all',
    },
  }))

  const classes = useStyles()

  return (
    <Container class={classes.brags}>
      <List>
        {brags.map((brag, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <ChatBubbleRounded />
            </ListItemIcon>
            {brag}
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default Brags
