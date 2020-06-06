import React from 'react'
import { List, ListItem, ListItemIcon, Container } from '@material-ui/core'
import { ChatBubbleRounded } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const Brags = ({ brags }) => {
  const useStyles = makeStyles((theme) => ({
    brag: {
      wordBreak: 'break-all',
    },
  }))

  const classes = useStyles()

  return (
    <Container>
      <List>
        {brags.map((brag, index) => (
          <div class={classes.brag}>
            <ListItem key={index}>
              <ListItemIcon>
                <ChatBubbleRounded />
              </ListItemIcon>
              {brag}
            </ListItem>
          </div>
        ))}
      </List>
    </Container>
  )
}

export default Brags
