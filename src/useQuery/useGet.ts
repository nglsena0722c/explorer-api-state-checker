import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const useGet = (link: string) => {
  return useQuery({
    queryKey: ['useGet', link],
    queryFn: async () => {
      try {
        const { data } = await axios.get(link);
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

export default useGet;
