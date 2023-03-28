import React, { useEffect, useState } from "react";
import AddModal from "./addModal";
import DeleteModal from "./deleteModal";
import "./styles.css";

export default function ProductList() {

    const [productList, setProductList] = useState([]);
    const [deleteModal, setDeleteModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [productDetails, setProductDetails] = useState({});
    const [productId, setProductId] = useState(null);

    useEffect(() => {
        getProductList();

    }, []);

    const getProductList = async () => {
        const response = await fetch('https://dummyjson.com/products')
            .then(res => res.json());
        console.log("response", response);
        setProductList(response?.products);
        // setProductId(product.id)
    }

    const deleteProduct = (id) => {
        setDeleteModal(true);
        setProductId(id);
    }

    const closeModal = async (id) => {
        setDeleteModal(false);
        const response = await fetch(`https://dummyjson.com/products/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json());
    }

    const openEditModal = (product) => {
        console.log("productcdscd", product);
        setProductId(product.id)
        setProductDetails({ ...product });
        setEditModal(true);

    }

    const closeEditModal = () => {
        setEditModal(false);
    }

    return (
        <div className="productList">
            {
                productList.map((product, key) => {
                    return (
                        <div className="grid-container">
                            <img src={product.images[0]} width="300px" height="300px" alt="mobileimage"></img>
                            <div className="gadget-details">
                                <div className="grid-item">{product.title} | {product.brand} | {product.category} </div>
                                <div className="price"> <i class="fa fa-inr" aria-hidden="true"></i>{product.price} <sub><del>{product.discountPercentage}</del></sub></div>
                                <div className="desc-div">
                                    <span class="fa fa-star checked"><span className="rating">{product.rating}</span> </span>
                                    <div className="description"> {product.description} </div>
                                </div>
                            </div>
                            <div className="editdeleteIcon"><i class='far fa-edit' onClick={() => openEditModal(product)}></i> <i class='far fa-trash-alt' style={{ color: "red" }} onClick={() => deleteProduct(product.id)}></i></div>
                        </div>
                    )
                })
            }
            <DeleteModal open={deleteModal}
                close={closeModal}
                id = {productId} />

            <AddModal open={editModal}
                data={productDetails}
                id={productId}
                close={closeEditModal} />

        </div>

    )
}