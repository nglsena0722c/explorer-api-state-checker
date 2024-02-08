import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import useErrorRecord from '../Zustand/useError';
import getTime from '../getTime';

const usePost = (name: string, link: string) => {
  const { errorRecord, setErrorRecord } = useErrorRecord();
  return useQuery({
    queryKey: ['usePost', link],
    queryFn: async () => {
      try {
        const { data } = await axios.post(link, { "jsonrpc": "2.0", "method": "eth_blockNumber", "params": [], "id": 1 }, { timeout: 3000 });
        return data;
      } catch (e) {
        setErrorRecord([...errorRecord, { name, error: e instanceof Error ? e.message : String(e), time: getTime(new Date()) }])
        return 'error';
      }
    },
    staleTime: 6000,
    gcTime: 6000,
    refetchInterval: 6000
  })

}

export default usePost;
