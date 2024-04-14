import React from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import useGetSingleProdact from "./service/query/useGetSingleProdact";
const ProdactDetail = () => {
  const { slug, id } = useParams();
  const { data, isLoading } = useGetSingleProdact(slug, id);
  return (
    <div className="container flex items-center justify-between mt-[60px]">
      <div className="flex ">
        {isLoading ? (
          <Skeleton width={435} height={435} count={1} />
        ) : (
          <div>
            <img className="w-[435px]" src={data?.img} alt="img" />
          </div>
        )}
        <div className="mt-10">
          {/* <div>
          {isLoading ? (
            <Skeleton width={128} height={20} count={1} />
          ) : (
            <div>
              <h1 className="text-[30px]">Характеристики</h1>
            </div>
          )}
        </div> */}
          <div className="ml-6">
            {isLoading ? (
              <Skeleton width={300} height={30} count={1} />
            ) : (
              <div>
                <p className="text-[20px]">
                  <span className="text-sum1">brand:</span>
                  {data?.brand}
                </p>
              </div>
            )}
          </div>
          <div className="ml-6">
            {isLoading ? (
              <Skeleton width={300} height={30} count={1} />
            ) : (
              <div>
                <p className="text-[20px]">
                  <span className="text-sum1">title:</span>
                  {data?.title}
                </p>
              </div>
            )}
            {isLoading ? (
              <Skeleton width={300} height={30} count={1} />
            ) : (
              <div>
                {data?.ram ? (
                  <p>
                    {" "}
                    <span className="text-[20px] text-sum1">ram:</span>
                    {data?.ram}
                  </p>
                ) : (
                  ""
                )}
              </div>
            )}
            {isLoading ? (
              <Skeleton width={300} height={30} count={1} />
            ) : (
              <div>
                {data?.color ? (
                  <p>
                    {" "}
                    <span className="text-[20px] text-sum1">color:</span>
                    {data?.color}
                  </p>
                ) : (
                  ""
                )}
              </div>
            )}
            {isLoading ? (
              <Skeleton width={300} height={30} count={1} />
            ) : (
              <div>
                {data?.core ? (
                  <p>
                    {" "}
                    <span className="text-[20px] text-sum1">core:</span>
                    {data?.core}
                  </p>
                ) : (
                  ""
                )}
              </div>
            )}
            {isLoading ? (
              <Skeleton width={300} height={30} count={1} />
            ) : (
              <div>
                {data?.display ? (
                  <p>
                    {" "}
                    <span className="text-[20px] text-sum1">display:</span>
                    {data?.display}
                  </p>
                ) : (
                  ""
                )}
              </div>
            )}
            {isLoading ? (
              <Skeleton width={300} height={30} count={1} />
            ) : (
              <div>
                {data?.geForce ? (
                  <p>
                    {" "}
                    <span className="text-[20px] text-sum1">geForce:</span>
                    {data?.geForce}
                  </p>
                ) : (
                  ""
                )}
              </div>
            )}
            {isLoading ? (
              <Skeleton width={300} height={30} count={1} />
            ) : (
              <div>
                {data?.memory ? (
                  <p>
                    {" "}
                    <span className="text-[20px] text-sum1">memory:</span>
                    {data?.memory}
                  </p>
                ) : (
                  ""
                )}
              </div>
            )}
            {isLoading ? (
              <Skeleton width={300} height={30} count={1} />
            ) : (
              <div>
                {data?.weight ? (
                  <p>
                    {" "}
                    <span className="text-[20px] text-sum1">weight:</span>
                    {data?.weight}
                  </p>
                ) : (
                  ""
                )}
              </div>
            )}
            {isLoading ? (
              <Skeleton width={300} height={30} count={1} />
            ) : (
              <div>
                {data?.rame ? (
                  <p>
                    {" "}
                    <span className="text-[20px] text-sum1">rame:</span>
                    {data?.rame}
                  </p>
                ) : (
                  ""
                )}
              </div>
            )}
            {isLoading ? (
              <Skeleton width={300} height={30} count={1} />
            ) : (
              <div>
                {data?.storage ? (
                  <p>
                    {" "}
                    <span className="text-[20px] text-sum1">storage:</span>
                    {data?.storage}
                  </p>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="p-5 rounded-md shadow-md hover:shadow-xl w-[340px]">
        <div className="flex justify-between">
          {isLoading ? (
            <Skeleton height={24} width={140} count={1} />
          ) : (
            <div>
              <span className="decoration: line-through text-sum1 text-cart7 ">
                74 990 Сум
              </span>
            </div>
          )}
          {isLoading ? (
            <Skeleton height={24} width={24} count={1} />
          ) : (
            <div className=" bg-red-400 rounded-md p-1 left-1 text-white text-[14px] ">
              -20%
            </div>
          )}
        </div>
        <div>
          {isLoading ? (
            <Skeleton height={44} width={260} count={1} />
          ) : (
            <div>
              <h1 className="text-h5">{data?.price}Сум</h1>
            </div>
          )}
          {isLoading ? (
            <Skeleton height={40} width={306} count={1} />
          ) : (
            <div>
              <button className="bg-primary p-3 w-full mt-[21px]">
                В корзину
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProdactDetail;
