import React from 'react'
import { List, ListItem, Container, ListItemText } from '@material-ui/core'

const Brags = ({ brags }) => (
  <Container>
    <List>
      {brags.map((brag, index) => (
        <ListItem key={index} style={{ wordBreak: 'break-all' }}>
          <ListItemText primary={brag.date} secondary={brag.description} />
        </ListItem>
      ))}
    </List>
  </Container>
)

export default Brags
