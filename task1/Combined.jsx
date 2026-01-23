import react from 'react';
import ItemList, { items } from './ItemList';

const Combined = () => {
    return (
        <>
            <h2>Combined Layout</h2>
            <ItemList />
            <p>Total: {items.length} items</p>
        </>
    );
}