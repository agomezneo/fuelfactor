


import { db } from "../config";
import { collection, addDoc  } from "firebase/firestore";
import { Owner } from "@/types/OwnerType";

export default async function addOwner(owner: Owner) {
     try {
        const ownerRef = collection(db, 'owners');
        await addDoc(ownerRef, owner);
     } catch (e) {
         console.error("Error adding document: ", e);
     }
}