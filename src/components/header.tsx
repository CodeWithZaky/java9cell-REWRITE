import Search from "@/features/search";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";
import { Avatar } from "./avatar";

const Header = () => {
  return (
    <div className="flex flex-col items-center mb-4 border-b w-full">
      <div className="flex justify-between items-center p-4 w-full">
        <div>
          <Link href="/">JAVA9CELL</Link>
        </div>
        <div className="flex justify-end items-center gap-7">
          <div className="relative">
            <LuShoppingCart className="text-3xl" />
            <p className="-top-2 -right-3 absolute border-2 bg-foreground px-1 border-background rounded-full text-background text-sm">
              99
            </p>
          </div>
          <Avatar image="https://github.com/shadcn.png" alt="cn" />
        </div>
      </div>
      <div className="flex justify-center py-4 w-full">
        <Search />
      </div>
    </div>
  );
};
export default Header;
