import { useEffect, useState } from 'react';

export default function useDebounce(value, delay){
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // Clear the timeout if value or delay changes
    };
  }, [value, delay]);

  return debouncedValue;
};