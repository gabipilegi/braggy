import React from 'react'
import { List, ListItem, ListItemIcon, Folder } from '@material-ui/core'
import { ChatBubbleRounded } from '@material-ui/icons'

const Brags = ({ brags }) => (
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
)

export default Brags
