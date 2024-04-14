import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"
const useGetSingleProdact = (slug,id) => {
 return useQuery({
  queryKey:["single-prodact",id],
  queryFn:()=>request.get(`${slug}/${id}`).then((res)=> res.data)
 })
}

export default useGetSingleProdact
