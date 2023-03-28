import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import { Typography, TextField, InputLabel, Input } from '@mui/material';
import Modal from '@mui/material/Modal';
import "./styles.css";
import TextareaAutosize from '@mui/base/TextareaAutosize';

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
    textAlign: "center",
    // height: "500px"
};

export default function AddModal({ open, close, id }) {

    const [data, setData] = useState({});
    const [obj, setObj] = useState({ "brand": "", "title": "", "description": "", "category": "", "images": "" });

    console.log("productDetails", id);

    useEffect(() => {
        if (!!id) {
            getProductDetails();
        }
    }, [id]);

    const getProductDetails = async () => {
        const response = await fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json());
        setData(response);
    }

    const handleSubmit = async () => {
        close();
        const response = fetch('https://dummyjson.com/products/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then(res => res.json());
    }

    const handleChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setObj({
            [name]: value
        })
    }

    const updateProduct = async (payload) => {
        const response = await fetch('https://dummyjson.com/products/1', {
            method: 'PUT', /* or PATCH */
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                title: 'iPhone Galaxy +1'
            })
        })
            .then(res => res.json());
    }

    return (
        <Modal
            open={open}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {!!data ? <h1 className="add-title">Edit Product</h1> : <h1 className="add-title">Add Product</h1>}
                <label for="brand">Brand: </label>
                <input type="text" id="brand" name="brand" className="field" value={data?.brand} onChange={(e) => handleChange(e)} /><br /><br />
                <label for="title">Title: </label>
                <input type="text" id="title" name="title" className="field" value={data?.title} onChange={(e) => handleChange(e)} /><br /><br />
                <label for="category">Category: </label>
                <input type="text" id="category" name="category" className="field" value={data?.category} onChange={(e) => handleChange(e)} /><br /><br />
                <label for="description">Description: </label>
                <TextareaAutosize value={data?.description} onChange={(e) => handleChange(e)} /><br /><br />
                <label for="images">Images: </label>
                {!!data?.images ? <div className="img-div">{data?.images.map((item, key) => {
                    return (
                        <img src={item} width="100px" height="100px" style={{ padding: "5px" }} />
                    )
                })} </div> :
                    <input type="file" id="images" name="images" className="field" onChange={(e) => handleChange(e)} />}<br /><br />
                <button className="submit" onClick={() => handleSubmit()}>Submit</button>
            </Box>
        </Modal>
    )
}