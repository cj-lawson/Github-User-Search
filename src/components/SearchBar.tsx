import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = ({ onChange, onSubmit }: any) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex flex-1 justify-center">
          <div className="w-full">
            <label htmlFor="search" className="sr-only">
              Search
            </label>
            <div className="relative text-gray-400 focus-within:text-gray-600">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-blue-500"
                  aria-hidden="true"
                />
              </div>
              <input
                id="search"
                className="block w-full shadow-lg shadow-[#DEE4F6] bg-gray-light dark:bg-gray-dark rounded-xl border border-transparent border-none py-2 pl-10 pr-3 pt-5 pb-5 leading-5 text-gray-900 placeholder-slate-400 focus:border-white focus:outline-none focus:ring-2 focus:ring-transparent focus:ring-offset-2 focus:ring-offset-transparent sm:text-sm"
                placeholder="Search GitHub username..."
                type="text"
                name="search"
                onChange={onChange}
              />
              <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <button
                  type="submit"
                  value="submit"
                  className="bg-blue-crayola text-slate-50 rounded-lg pr-5 pl-5"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
