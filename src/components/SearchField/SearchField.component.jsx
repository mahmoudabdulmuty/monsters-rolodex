import './SearchField.style.css';
const SearchField = ({ handleChange }) => {
	return (
		<div className="search-container">
			<input
				className="search"
				type="text"
				placeholder="Search Monsters"
				onChange={handleChange}
			/>
		</div>
	);
};
export default SearchField;
 