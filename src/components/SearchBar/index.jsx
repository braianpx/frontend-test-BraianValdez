import PropTypes from 'prop-types';

const SearchBar = ({ query, onSearch }) => {
  return (
    <div className='flex justify-center sm:justify-start'>
      <input
        type="text"
        placeholder="Buscar"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        className="bg-white h-9 text-black-semi font-normal text-base w-auto px-2 py-1 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
    </div>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
