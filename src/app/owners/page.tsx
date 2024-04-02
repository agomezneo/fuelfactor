'use client';

import React, { useState, useEffect, useContext } from 'react';
import styles from '@/styles/pages/owners.module.scss';
import { Owner } from '@/types/OwnerType';
import addOwner  from '@/firebase/owners/addOwner';
import { useOwner } from '@/context/OwnersContext';

const OwnersPage: React.FC = () => {

    const [formData, setFormData] = useState<Owner>({
        name: '',
        lastName: '',
        leads: 0,
        createdAt: new Date(),
    });

    const {owners} = useOwner();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const isFormValid = () => {
        return formData.name !== '' && formData.lastName !== '';
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (!isFormValid()) {
            return;
        }
        await addOwner(formData);
    };


    return (
        <div className={styles.page}>
        <div>
            <h1>Landing Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={styles.input}
                />

                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Submit</button>
            </form>
        </div>

        <div>
            <h2>Owners</h2>
            <ul>
                {owners?.map((owner, key) => (
                    <li key={key}>
                        <h3>
                            Nombre: {owner.name}
                        </h3>
                        <h3>
                            Leads: {owner.leads}
                        </h3>
                        <br/>
                    </li>
                ))} 
            </ul>
        </div>
    </div>
    );
};

export default OwnersPage;