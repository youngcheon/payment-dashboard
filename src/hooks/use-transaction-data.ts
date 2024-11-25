import { useState, useEffect } from 'react';
import { Data } from '@/types';

export const useTransactionData = () => {
  const [data, setData] = useState<Data[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    import('@/mocks/data.json').then((module) => {
      const data = module.default as Data[];
      const sorted = data.sort(
        (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
      );
      setData(sorted);
      setIsLoading(false);
    });
  }, []);

  return { data, isLoading };
};
