import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = ({ onChange, onSubmit, value }: any) => {
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
                className="block w-full rounded-md border border-transparent bg-white py-2 pl-10 pr-3 pt-4 pb-4 leading-5 text-gray-900 placeholder-slate-400 focus:border-white focus:outline-none focus:ring-2 focus:ring-blue-100 focus:ring-offset-2 focus:ring-offset-blue-100 sm:text-sm"
                placeholder="Search GitHub username..."
                type="text"
                name="search"
                onChange={onChange}
              />
              <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <button
                  type="submit"
                  value="submit"
                  className="bg-blue-500 text-slate-50 rounded-md pr-5 pl-5"
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

{
  /* <div>
<form>
  <div className="relative mt-1 flex flex-1 items-center">
    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
    </div>
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Search Github username..."
      className="block w-full rounded-lg border-none pr-12 shadow-sm focus:border-blue-200 focus:ring-blue-200 sm:text-sm pt-4 pb-4 placeholder-slate-400"
    />
    <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
      <button className="bg-blue-500 text-slate-50 rounded-md pr-5 pl-5">
        Search
      </button>
    </div>
  </div>
</form>
</div> */
}
export default SearchBar;
