import { LuHeart, LuShoppingCart } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Avatar } from "./avatar";
import Search from "./search";

const Header = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <section className="container flex w-full justify-between border-b py-2 text-xs">
        <p>Get 25% discount on a first purchase.</p>
        <div className="flex gap-10">
          <div className="flex gap-3">
            <p>Careers</p>
            <p>Careers Help</p>
            <p>Buyer Protection</p>
          </div>
          <div className="flex gap-3">
            <p>Download Mobile App</p>
            <p>+0125 258 192 502</p>
          </div>
          <div className="flex items-center">
            <p>ID</p>
            <MdOutlineKeyboardArrowDown className="text-lg" />
          </div>
        </div>
      </section>
      <section className="container flex w-full items-center justify-between border-b py-4">
        <div className="flex basis-1/2 gap-10">
          <div>JAVA9CELL</div>
          <div className="flex gap-3">
            <p>powerbank</p>
            <p>case</p>
            <p>otg</p>
            <p>charger</p>
          </div>
        </div>
        <div className="flex basis-1/2 items-center justify-end gap-5">
          <Search />
          <LuHeart className="text-3xl" />
          <LuShoppingCart className="text-3xl" />
          <Avatar image="https://github.com/shadcn.png" alt="cn" />
        </div>
      </section>
    </div>
  );
};
export default Header;
