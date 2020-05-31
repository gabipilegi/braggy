import React from 'react'
import { TextField, Button, Container } from '@material-ui/core'
import { SendRounded } from '@material-ui/icons'

const CreateBrag = ({ brag, onSubmit, onChange }) => {
  return (
    <Container>
      <form onSubmit={onSubmit} data-testid="brag-form">
        <div>
          <TextField
            id="brag"
            fullWidth
            label="Your brag here"
            multiline
            rows={4}
            value={brag}
            onChange={onChange}
            variant="outlined"
          />
        </div>
        <div>
          <Button type="submit" fullWidth endIcon={<SendRounded />}>
            Brag
          </Button>
        </div>
      </form>
    </Container>
  )
}

export default CreateBrag
