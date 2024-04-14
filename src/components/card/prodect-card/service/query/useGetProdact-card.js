import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../../config/request"
const useGetProdactCard = () => {
  return useQuery({
   queryKey:["phones"],
   queryFn:()=>request.get().then((res)=> res.data)
  })
}
export default useGetProdactCard

