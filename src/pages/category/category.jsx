import React from "react";
import { useParams } from "react-router-dom";
import ProdactCard from "../../components/card/prodect-card/prodact-card";
import useGetCingleCategory from "./service/query/useGetCingleCategory";
import useGetCategoryAttribute from "./service/query/useGetCategoryAttribute";
import { preductFilter } from "../../redux/filter-slice";
import { useDispatch, useSelector } from "react-redux";
const GetAttributeData = ({ result }) => {
  const dispatch = useDispatch();
  const changeINput = (e) => {
    dispatch(preductFilter({ name: e.target.name, value: e.target.value }));
  };
  let arr = [];
  for (let i in result) {
    if (i !== "id" && i !== "slug") {
      arr.push(
        <div className="border p-5" key={i}>
          <strong>{i}</strong>
          <div>
            {result[i].map((item) => (
              <div key={item}>
                <input
                  onChange={changeINput}
                  className="cursor-pointer"
                  type="radio"
                  name={`${i}_like`}
                  value={item}
                />
                <label>{item}</label>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }
  return arr;
};

const Category = () => {
  const { slug } = useParams();
  const { dataAttribute } = useSelector((state) => state.filter);
  const { data } = useGetCingleCategory(slug, dataAttribute);
  const { data: data2 } = useGetCategoryAttribute();
  const result = data2?.find((item) => item.slug == slug);
  console.log(dataAttribute);
  return (
    <div className="container">
      <div className="flex">
        <div className=" flex-grow  grid grid-cols-1 gap-4 md:grid-cols-2 , xl:grid-cols-4 , lg:grid-cols-3 ">
          {data?.map((item) => (
            <ProdactCard slug={slug} key={item.id} {...item} />
          ))}
        </div>
        <div className="w-[250px] h-[550px] flex-shrink-0 border p-5 xl:w-[300px]">
          {result && (
            <div>
              <GetAttributeData result={result} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
