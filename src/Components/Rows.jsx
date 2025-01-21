import React, { useState } from 'react';

export default function Rows({ items }) {

    const [user, setUser] = useState([]);

    return items.map(item => (
        <h1>{item.name}</h1>
    ));
}