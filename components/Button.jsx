'use client';

import { useCallback } from 'react';

export default function Button() {
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <button 
      className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded transition duration-300"
      onClick={handleClick}
    >
      sed interdum est aliquam
    </button>
  );
}