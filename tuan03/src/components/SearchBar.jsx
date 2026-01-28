import React, { useState } from 'react'

const SearchBar = ({onSearch, onMinPrice, onMaxPrice}) => {

  return (
    <div className="search-bar">
      <input type="text" name="" id="" placeholder='Tìm tên sản phẩm...' onChange={(e) => onSearch(e.target.value)}/>
      <input type="text" name="" id="" placeholder='Giá thấp nhất...' onChange={(e) => onMinPrice(e.target.value)} />
      <input type="text" name="" id="" placeholder='Giá cao nhất...' onChange={(e) => onMaxPrice(e.target.value)} />



    </div>
  )
}

export default SearchBar