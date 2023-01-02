import React, { useState } from "react";

function SearchInput({ placeholder }: { placeholder: string }) {
  const [search, setSearch] = useState<string>();
  return (
    <div className="relative">
      <form
        action=""
        className="my-6 border border-gray-100 rounded px-2 py-0.5"
      >
        <input
          type="text"
          className="appearance-none outline-none px-1.5 py-0.5 text-sm"
          placeholder={placeholder}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      {search && (
        <div className="bg-textColor-white absolute left-0 top-10 w-full p-2 rounded border border-gray-100 z-10">
          {search}
        </div>
      )}
    </div>
  );
}

export default SearchInput;
