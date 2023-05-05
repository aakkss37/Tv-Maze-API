import { createContext, useState } from "react";

export const DataContext = createContext(null);

const initialSearch = {
	category: 'all',
}


const DataProvider = (props) => {

	// SEARCH SHOW
	const [searchInput, setSearchInput] = useState(initialSearch);


	return (
		<DataContext.Provider value={{ 
			searchInput, setSearchInput
		}}>
			{props.children}
		</DataContext.Provider>
	)
}
export default DataProvider;