import "./search.css";
import { IoSearch } from "react-icons/io5";
const search = () => {
  return (
    <form className="search-form" action="/search" method="get">
      <input
        type="search"
        id="query"
        name="search"
        className="search-input"
        placeholder="Что ищете?"
      />
      <span className="search_icon">
        <IoSearch />
      </span>
    </form>
  );
};

export default search;
