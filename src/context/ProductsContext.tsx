'use client';
import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
import { db } from "@/firebase/config";
import { collection, query, onSnapshot, where } from "firebase/firestore";
import { useOwner } from './OwnersContext';
import { Product } from '@/types/ProductType';

export const ProductsContext = createContext({ products: [], principalProduct: undefined as Product | undefined });

export const ProductsProvider = ({ children }) => {
     
    const [products, setProducts] = useState([]);
    const { selectedOwner } = useOwner();

    useEffect(() => {
        if(!selectedOwner) return;
        const q = query(collection(db, "products"), where("ownerID", "==", selectedOwner.id));
        const unsub = onSnapshot(q, (snapshot) => {
        let productsData = [];
        snapshot.forEach((doc) => {
            productsData.push({ id: doc.id, ...doc.data() });
        });
        setProducts(productsData);
        });

        return () => unsub(); 
    }, [selectedOwner]);


    const findPrincipalProduct = () => {
        return products.find(product => product.name === 'Fuel Factor X 4oz Bottle (Treats 320 gallons)');
    }
    const principalProduct = findPrincipalProduct();

    const value = {
        products,
        principalProduct
    };

    return (
        <ProductsContext.Provider value={value}>
        {children}
        </ProductsContext.Provider>
    );
};


const useProducts = () => {
    const context = useContext(ProductsContext);
    if (context === undefined) {
        throw new Error('useProducts must be used within a ProductsProvider');
    }
    return context;
}

export { useProducts };
