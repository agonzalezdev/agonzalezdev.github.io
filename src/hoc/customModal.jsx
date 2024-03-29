import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import React from "react";
import PropTypes from 'prop-types';



export const CustomModal = ({
  isOpen, 
  handleClose, 
  title,
  subtitle,
  children
}) => {
  return (
    <>
    <Dialog
      fullWidth
      maxWidth='md'
      open={isOpen}
      onClose={handleClose}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>{subtitle}</DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
      </>
  )
}

CustomModal.propTypes ={
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.element.isRequired
}