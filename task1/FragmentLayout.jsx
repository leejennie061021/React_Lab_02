import React from 'react';
import ItemList, { items } from './ItemList'

const FragmentLayout = () => {
  return (
    <>
      <header>
        <h1>Fragment Layout</h1>
      </header>
      
      <main>
        <p>This layout uses React Fragments to group sibling elements.</p>
        <h2>My Items</h2>
        <ItemList />
        <p>Total: {items.length} items</p>
      </main>
      <footer>
        <p>© 2026 Student Rauli - React Lab</p>
      </footer>
    </>
  );
};