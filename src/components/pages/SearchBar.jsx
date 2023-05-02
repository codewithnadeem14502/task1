import React, { useState } from "react";
import {AiOutlineBell} from 'react-icons/ai'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {TbSearch} from 'react-icons/tb'
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);
  
  };

  return (
<form onSubmit={handleSubmit} className="flex items-center">
<div className="relative">
  <input
    type="text"
    placeholder="Search...."
    className="w-[180px] h-8 pr-8 pl-3 rounded-md border-2 border-gray-300"
    value={searchTerm}
    onChange={handleInputChange}
  />
  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
    <TbSearch />
  </div>
</div>
  <div className="text-black text-2xl flex ml-3 mr-3">
        <AiOutlineBell className="mr-2"/>
        <HiOutlineUserCircle/>
        </div>

</form>
  );
}

export default SearchBar;


