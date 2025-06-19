import React, { useState, useEffect } from 'react';

const WORKSPACE = 'pascualcam';
const COUNTER = 'hi-button';

export default function HiButton() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://counterapi.dev/api/v2/${WORKSPACE}/${COUNTER}`)
      .then(res => res.json())
      .then(data => setCount(data.value));
  }, []);

  const increment = () => {
    console.log('Button clicked!');
    fetch(`https://counterapi.dev/api/v2/${WORKSPACE}/${COUNTER}/hit`, {
      method: 'POST',
    })
      .then(res => res.json())
      .then(data => setCount(data.value));
  };

  return (
    <button onClick={increment}>
      Say Hi! ({count !== null ? count : 0})
    </button>
  );
}
