'use client';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { db } from "@/firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { Owner } from '@/types/OwnerType';
import Cookies from 'js-cookie';

export const OwnersContext = createContext<{ owners: Owner[]; selectedOwner: Owner | null; }>({ owners: [], selectedOwner: null });

export const OwnersProvider = ({ children }) => {

  const [owners, setOwners] = useState<Owner[]>(null);
  const [selectedOwner, setSelectedOwner] = useState<Owner>(null);

  useEffect(() => {
    const q = query(collection(db, "owners"), orderBy("createdAt"));
    const unsub = onSnapshot(q, (snapshot) => {
      let ownersData = [];
      snapshot.forEach((doc) => {
        ownersData.push({ id: doc.id, ...doc.data() });
      });
      setOwners(ownersData);
    });

    return () => unsub(); 
  }, []);

  
  function selectOwner(owners: Owner[]): Owner {
    if (owners.every(owner => owner.leads === 0)) {
      let owner = owners[Math.floor(Math.random() * owners.length)];
      console.log(owner);
      return owners[Math.floor(Math.random() * owners.length)];
    }
    const minLeads = Math.min(...owners.map(owner => owner.leads));
    const ownersWithMinLeads = owners.filter(owner => owner.leads === minLeads);
    return ownersWithMinLeads[Math.floor(Math.random() * ownersWithMinLeads.length)];;
}

const updateOwnerLeads = useCallback(async (ownerID: string, leads: number) => {
    db.collection('owners').doc(ownerID).update({
        leads: leads + 1
    });
}, []); 

useEffect(() => {
    if(!owners) return;
    const ownerIDFromCokkies = Cookies.get('ownerID');
    if (ownerIDFromCokkies) {
      const owner = owners.find(owner => owner.id === ownerIDFromCokkies);
      setSelectedOwner(owner);
    } else {
      const owner = selectOwner(owners);
      updateOwnerLeads(owner?.id, owner?.leads);
      setSelectedOwner(owner);
      Cookies.set('ownerID', owner.id);
    }
}, [owners, updateOwnerLeads]); 

  const value = {
    owners,
    selectedOwner,
  };


  return (
    <OwnersContext.Provider value={value}>
      {children}
    </OwnersContext.Provider>
  );
};


const useOwner = () => useContext(OwnersContext);

export { useOwner };