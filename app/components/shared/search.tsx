import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

interface SearchProps {}

const Search = ({}: SearchProps) => {
  return (
    <div className="md:flex md:justify-between w-auto hidden pr-3">
      <form>
        <div className="flex justify-between w-auto py-2">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute m-1 " />
          <input
            type="search"
            id="default-search"
            className="w-full border-2 bg-black pl-6 py-0.5 border-gray-500 placeholder:text-gray-500 rounded-md font-medium text-sm"
            placeholder="Search ..."
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
