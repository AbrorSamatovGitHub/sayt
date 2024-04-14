import React from "react";
import Input from "../../../../components/ui/input";
import SearchIcon from "../../../../assets/header/search";
import InfoSearch from "./info-search";
import useGetSearch from "./servic/query/useGetSearch";
import useDebounce from "../../../../hooks/useDebounse";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
const Search = () => {
  const [input, setInput] = React.useState("");
  const value = useDebounce(input);
  const { data, isLoading } = useGetSearch(value);
  return (
    <div className=" relative ">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        variant="headerInput"
        placeholder="Поиск"
      />
      <div className="absolute top-[50%] translate-y-[-50%] right-5 cursor-pointer">
        <SearchIcon />
      </div>
      <div className="absolute z-10 w-full ">
        {isLoading ? (
          <Skeleton height={50} count={20} />
        ) : (
          <div className=" h-[80vh] overflow-auto inset-0 ">
            {" "}
            {data?.map((item) => (
              <Link  to={`/prodactDetail/all/${item.id}`}>
                <InfoSearch  key={item.id} title={item.title} />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
