import React from 'react'
import { List, ListItem, ListItemIcon, Container } from '@material-ui/core'
import { ChatBubbleRounded } from '@material-ui/icons'

const Brags = ({ brags }) => (
  <Container>
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

export default Brags
