'use client';

import React from 'react';

import { Heading } from '@/ui/atoms/Heading';

const Home: React.FC = () => {
  const fetcher = async () => {
    const response = await fetch('http://localhost:8000/todos');
    const todos = await response.json();
    console.log(todos);
  };

  return (
    <div>
      <Heading as="h2">TODO APP !!</Heading>
      <button onClick={() => fetcher()}>TODOをフェッチする</button>
    </div>
  );
};

export default Home;
