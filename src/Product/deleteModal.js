import React from "react";
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import { Typography, TextField, InputLabel, Input } from '@mui/material';
import Modal from '@mui/material/Modal';
import "./styles.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid white',
    boxShadow: 24,
    p: 4,
    textAlign: "center"
};

export default function DeleteModal({ open, close, id }) {
    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <h1 className="add-title">Delete Product</h1>
                <p>Are you sure you want to delete this product?</p>
                <div className="yes-no-btn"><span><button className="btn" onClick={() => close(id)}>Yes</button></span>
                    <span><button className="btn" onClick={() => close()}>No</button></span></div>
            </Box>
        </Modal>
    )
}