import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LuSearch } from "react-icons/lu";

const Search = () => {
  return (
    <div className="flex items-center space-x-2 w-full">
      <Input type="search" placeholder="Search" />
      <Button type="submit">
        <LuSearch />
      </Button>
    </div>
  );
};

export default Search;
