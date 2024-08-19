import { useState } from 'react';
import { Input } from 'antd';

import './search-input.css';
import { useData } from '../../helpers/data-context-provider';

function SearchInput({ onChangeSearch }) {
  const { query } = useData();
  const [keyword, setKeyword] = useState(query);

  const changeHandler = (e) => {
    const searchValue = e.target.value;
    setKeyword(searchValue);
    onChangeSearch(searchValue);
  };

  return (
    <div className="search-input-container">
      <Input type="search" size="large" placeholder="Type to search..." value={keyword} onChange={changeHandler} />
    </div>
  );
}

export default SearchInput;
