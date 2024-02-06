import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const usePost = (link: string) => {
  return useQuery({
    queryKey: ['usePost', link],
    queryFn: async () => {
      try {
        const { data } = await axios.post(link, { "jsonrpc": "2.0", "method": "eth_blockNumber", "params": [], "id": 1 });
        console.log(data);
        return data;
      } catch (e) {
        return 'error';
      }
    },
    staleTime: 6000,
    gcTime: 6000,
    refetchInterval: 6000
  })

}

export default usePost;
