import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"
const useGetCingleCategory = (slug,dataAttribute) => {
  return useQuery({
   queryKey:["phones",slug,dataAttribute],
   queryFn:()=>request.get(`/${slug}`,{params:{...dataAttribute}}).then((res)=> res.data)
  })
}
export default useGetCingleCategory
