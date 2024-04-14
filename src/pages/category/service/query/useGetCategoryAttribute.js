
import { useQuery } from "@tanstack/react-query"
import { request } from "../../../../config/request"
const useGetCategoryAttribute = () => {
  return useQuery({
   queryKey:["attribute"],
   queryFn:()=>request.get('category_attribute').then((res)=> res.data)
  })
}
export default useGetCategoryAttribute
