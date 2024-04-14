import React from "react";
import KarzincaIcon from "../../../assets/icons/karzinca-icon";
import LikeIcon from "../../../assets/icons/like-icon";
import Skeleton from "react-loading-skeleton";
import useGetProdactCard from "./service/query/useGetProdact-card";
import Star from "../../../assets/icons/star";
import { Link } from "react-router-dom";
const ProdactCard = ({ img, title, price, id,slug,attribute }) => {
  const {isLoading } = useGetProdactCard();
  return (
    <div className=" container w-[214px] h-[400px] mb-10 mt-5 p-5 relative rounded-md shadow-md hover:shadow-xl  flex flex-col justify-between">
      <div className="flex justify-between">
        {isLoading ? (
          <Skeleton height={24} width={24} count={1} />
        ) : (
          <div className="absolute bg-red-400 rounded-md p-1 left-1 text-white text-[14px] ">
            -20%
          </div>
        )}
        {isLoading ? (
          <Skeleton height={158} width={118} count={1} />
        ) : (
          <div>
            <img src={img} alt="img" />
          </div>
        )}
        {isLoading ? (
          <Skeleton height={24} width={24} count={1} />
        ) : (
          <div>
            <div className="absolute right-[8px] cursor-pointer">
              <LikeIcon />
            </div>
          </div>
        )}
      </div>
      <div>
        {isLoading ? (
          <Skeleton height={48} width={158} count={1} />
        ) : (
          <div>
            <h2 className="text-cart4 text-text1">
              <Link to={`/prodactDetail/${slug}/${id}`}>{title.length > 50 ? title.slice(0, 50) + "..." : title}А</Link>
            </h2>
          </div>
        )}
        <strong>{attribute}</strong>
        {isLoading ? (
          <Skeleton height={17} width={72} count={1} />
        ) : (
          <div>
            <span className="decoration: line-through text-sum1 text-cart5 ">
              74 990 Сум
            </span>
          </div>
        )}
        <div className="flex justify-between items-center">
          {isLoading ? (
            <Skeleton height={26} width={91} count={1} />
          ) : (
            <div>
              <strong className="text-cart6 text-sum2">{price}Сум</strong>
            </div>
          )}
          {isLoading ? (
            <Skeleton height={36} width={36} count={1} />
          ) : (
            <div className="cursor-pointer">
              <KarzincaIcon />
            </div>
          )}
        </div>
        <div className="flex justify-center gap-1">
          {isLoading ? (
            <Skeleton height={24} width={24} count={1} />
          ) : (
            <div className="cursor-pointer">
              <Star />
            </div>
          )}
          {isLoading ? (
            <Skeleton height={24} width={24} count={1} />
          ) : (
            <div className="cursor-pointer">
              <Star />
            </div>
          )}
          {isLoading ? (
            <Skeleton height={24} width={24} count={1} />
          ) : (
            <div className="cursor-pointer">
              <Star />
            </div>
          )}
          {isLoading ? (
            <Skeleton height={24} width={24} count={1} />
          ) : (
            <div className="cursor-pointer">
              <Star />
            </div>
          )}
          {isLoading ? (
            <Skeleton height={24} width={24} count={1} />
          ) : (
            <div className="cursor-pointer">
              <Star />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProdactCard;
