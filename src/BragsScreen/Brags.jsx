import React from 'react'
import { List, ListItem, Container, ListItemText } from '@material-ui/core'
import { ChatBubbleRounded } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const Brags = ({ brags }) => {
  return (
    <Container>
      <List>
        {brags.map((brag, index) => (
          <ListItem key={index}>
            <ListItemText
              primary="20 Jun 2020"
              secondary={brag}
              style={{ wordBreak: 'break-all' }}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default Brags
