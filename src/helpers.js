// import React from 'react';

function choice(items) {
  const randomItemIndex = Math.floor(Math.random() * items.length);
  return items[randomItemIndex];
}

function remove(items, item) {
  const matchingIndex = items.findIndex(element => element === item);
  
  return matchingIndex >= 0 ? items.splice(matchingIndex, 1) : undefined;
}

export {choice, remove};