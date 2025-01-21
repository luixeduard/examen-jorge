import React from 'react';
import Nav_Bar from '../Components/Nav_Bar';
import { getAllUsers } from '../API/User';
import { useEffect, useState } from "react"
import Rows from '../Components/Rows';

export default function Crud_U() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        async function loadAllUsers() {
            const resp = await getAllUsers();
            setUsers(resp.data);
        }
        loadAllUsers()
    }, [users])

    return (
        <div>
            Gestion de usuarios
        </div>
    );
}
