import React from 'react'
import { List, ListItem, Container, ListItemText } from '@material-ui/core'
import { formatedDate } from '../date'

const Brags = ({ brags }) => {
  return (
    <Container>
      <List>
        {brags.map((brag, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={formatedDate(brag.date)}
              secondary={brag.description}
              style={{ wordBreak: 'break-all' }}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default Brags
