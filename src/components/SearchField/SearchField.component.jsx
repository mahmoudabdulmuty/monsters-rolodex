import './SearchField.style.css';

const SearchField = ({ handleChange, placeholder }) => {
	return (
		<div className="search-container">
			<input
				className="search"
				type="text"
				placeholder={placeholder}
				onChange={handleChange}
			/>
		</div>
	);
};
export default SearchField;
