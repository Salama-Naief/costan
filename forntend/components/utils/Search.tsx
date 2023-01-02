import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Search } from "tabler-icons-react";

interface Search {
  search: string;
}
function SearchInput() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Search>();
  const onSubmit: SubmitHandler<Search> = (data) => console.log(data);
  return (
    <div className="relative w-fit h-fit  border border-gray-100 px-1 rounded">
      <form
        className="flex-1 flex items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <button className="w-4 h-4 flex items-center justify-center">
          <Search />
        </button>
        <input
          {...register("search")}
          type="text"
          className="appearance-none outline-none px-1.5 py-0.5"
          placeholder="Search"
        />
      </form>
    </div>
  );
}

export default SearchInput;
