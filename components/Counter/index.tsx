import { useEffect, useState } from 'react';

type CounterProps = {
  initialCount: number;
};

function Counter({ initialCount }: CounterProps) {
  const [count, setCount] = useState(() => initialCount);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      if (count === 0) return;

      setCount((currentCount) => currentCount - 1);
    }, 1000);

    return () => clearInterval(intervalRef);
  }, [count]);

  return <>{count}</>;
}

export default Counter;
