import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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