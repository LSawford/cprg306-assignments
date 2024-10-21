import React from 'react';
import ItemList from './item-list.js';

function Page() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold m-2 ">Shopping List</h1>
      <ItemList />
    </main>
  );
}

export default Page;