

import { db } from "../config";
import { collection, query, getDocs } from "firebase/firestore";

const q = query(collection(db, "owners"));

export default async function getOwners() {
    let owners = []
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
        owners.push(doc.data());    
        });

    } catch (error) {
        console.log("Error getting documents: ", error);
    }
    return owners;
}