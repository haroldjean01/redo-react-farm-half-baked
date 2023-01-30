import React from 'react';
import './Main.css';
import { animals } from '../../data.js';
import Animal from '../Animal/Animal.js';

export default function Main() {
  return (
    <main className="main">
      {animals.map((animal) => (
        <Animal
          key={animal.type}
          name={animal.type}
          url={animal.url}
          says={animal.says}
          top={animal.top}
          left={animal.left}
        />
      ))}
    </main>
  );
}
