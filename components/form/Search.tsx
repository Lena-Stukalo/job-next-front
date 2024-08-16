import { BiSearch } from "react-icons/bi";

export function Search() {
  return (
    <div className="flex items-center ">
      <label htmlFor="search" className="block mr-2 ">
        <BiSearch size={"30px"} />
      </label>
      <input id="search" className="block w-96" />
    </div>
  );
}
