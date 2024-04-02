import { db } from "../config";
import { collection, addDoc } from "firebase/firestore";
import { Product } from "@/types/ProductType";

export default async function addProduct(product: Product) {
    try {
        const productRef = collection(db, 'products');
        await addDoc(productRef, product);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}