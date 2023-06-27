import React, { useState } from 'react';
import { Button, ButtonGroup, Container, Grid, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const Mui = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Container fixed>
        <ButtonGroup>
          <Button variant="outlined" onClick={() => {
            setOpen(true);
          }}>작성</Button>
          <Button variant="outlined">Update</Button>
        </ButtonGroup>
        <Button variant="outlined">Delete</Button>
        <Grid container>
          <Grid item xs={6} md={8}>
            <div>LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT LEFT </div>
          </Grid>
          <Grid item xs={6} md={4}>
            <div>RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT RIGHT </div>
          </Grid>
        </Grid>
      </Container>
      <Dialog open={open}>
        <DialogTitle>Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Hello~!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => { setOpen(false) }}>취소</Button>
          <Button>작성완료</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Mui;