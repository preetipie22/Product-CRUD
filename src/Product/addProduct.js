import React, { useState } from 'react';
import "../App.css";
import AddModal from './addModal';

export default function AddButton() {

    const [openModal, setOpenModal] = useState(false);

    const createProduct = () => {
        setOpenModal(true);
    }

    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <div>
            <div className='btn-div'><button className='create-btn' onClick={() => createProduct()}>Create</button></div>
            <AddModal open={openModal}
                close={closeModal} />
        </div>
    )
}