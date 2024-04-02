'use client';

import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/ProductType';
import { OwnersContext, useOwner } from '@/context/OwnersContext';
import  addProduct  from '@/firebase/products/addProduct';
import styles from '@/styles/pages/ProductPage.module.scss';
import { ProductData } from '@/data/ProductData';

const ProductPage: React.FC = () => {

    const { owners } = useOwner();
    const [product, setProduct] = useState<Product>({
        id: '',
        name: '',
        price: 0,
        image: '',
        urls: '',
        ownerID: '',
    });
    const [selectedProduct, setSelectedProduct] = useState(null);
    const handleProductChange = (event) => {
        const selected = ProductData.find(product => product.name === event.target.value);
        setSelectedProduct(selected);
        setProduct({
            ...product,
            name: selected.name,
            price: selected.price,
            image: selected.image,
          });
    };
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!product.name || !product.price || !product.image || !product.urls || !product.ownerID) {
            alert('Please fill in all fields');
            return;
        }
        await addProduct(product);
        setProduct({
            id: '',
            name: '',
            price: 0,
            image: '',
            urls: '',
            ownerID: '',
        });
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    return (
        
        <div className={styles.productPage}>
            <h1 className={styles.title}>Add Product</h1>
            <form className={styles.form} onSubmit={handleSubmit}>

                <label className={styles.label}>
                    Select a product:
                    <select value={selectedProduct?.name || ''} onChange={handleProductChange} className={styles.input}>
                    {ProductData.map((product, key) => (
                        <option key={key} value={product.name}>{product.name}</option>
                    ))}
                    </select>
                    <Image src={selectedProduct?.image || '/images/placeholder.png'} alt={selectedProduct?.name || 'placeholder'} width={100} height={100} />
                </label>

                <label className={styles.label}>
                    Name:
                    <input type="text" name="name" value={selectedProduct?.name || ''} readOnly className={styles.input} />
                </label>

                <label className={styles.label}>
                    Price:
                    <input type="text" name="price" value={selectedProduct?.price || ''} readOnly className={styles.input} />
                </label>

                <label className={styles.label}>
                    Image:
                    <input type="text" name="image" value={selectedProduct?.image || ''} readOnly className={styles.input} />
                </label>


                <br />
                <label className={styles.label}>
                    URLs:
                    <input type="text" name="urls" value={product.urls} onChange={handleChange} className={styles.input} />
                </label>
                <br />
                <label className={styles.label}>
                    Owner ID:
                    <select name="ownerID" value={product.ownerID} onChange={handleChange} className={styles.select}>
                        {owners?.map(owner => (
                            <option key={owner.id} value={owner.id}>{owner.name}</option>
                        ))}
                    </select>
                </label>

               


                <br />
                <button type="submit" className={styles.button}>Add Product</button>
            </form>

            <div>

            </div>

        </div>


    );
};

export default ProductPage;