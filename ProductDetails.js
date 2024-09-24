import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Modal from './Modal';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Erro ao buscar produto:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`https://dummyjson.com/products/${id}`);
            navigate('/');
        } catch (error) {
            console.error('Erro ao excluir produto:', error);
        }
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        fetchProduct();
    }, [id]);

    if (!product) return <p>Carregando...</p>;

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Preço: ${product.price}</p>
            <p>Descrição: {product.description}</p>
            <button onClick={handleOpenModal}>Excluir Produto</button>

            {showModal && (
                <Modal 
                    onClose={handleCloseModal} 
                    onConfirm={handleDelete} 
                    message={`Tem certeza que deseja excluir o produto "${product.name}"?`} 
                />
            )}
        </div>
    );
};

export default ProductDetails;
