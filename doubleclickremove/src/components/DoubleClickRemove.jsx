import React from 'react'



const DoubleClickRemove = () => {
  const numbers = [1, 2, 3, 4, 5];
  return (
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
  )
}

export default DoubleClickRemove