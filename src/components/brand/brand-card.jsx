import React from "react";
import Skeleton from "react-loading-skeleton";
import useGetProdactCard from "../card/prodect-card/service/query/useGetProdact-card";
export const Brand = ({ img }) => {
  const {  isLoading } = useGetProdactCard();
  return (
    <div>
      {isLoading ? (
        <Skeleton height={90} width={180} count={1} />
      ) : (
        <div className="w-[180px] h-[90px] bg-brand_bg flex justify-center items-center">
          <img src={img} alt="img" />
        </div>
      )}
    </div>
  );
};

