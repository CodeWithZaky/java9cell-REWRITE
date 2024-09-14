import { LuSearch } from "react-icons/lu";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="search" placeholder="Search" />
      <Button type="submit">
        <LuSearch />
      </Button>
    </div>
  );
};

export default Search;
