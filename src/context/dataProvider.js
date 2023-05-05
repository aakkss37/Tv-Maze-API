import { createContext, useState } from "react";

export const DataContext = createContext(null);

const initialSearch = "all"


const DataProvider = (props) => {

	// SEARCH SHOW
	const [searchInput, setSearchInput] = useState(initialSearch);

	// FETCHED DATA
	const [data, setData] = useState();

	return (
		<DataContext.Provider value={{ 
			searchInput, setSearchInput, // ----> search input
			data, setData  // ---->  searched data
		}}>
			{props.children}
		</DataContext.Provider>
	)
}
export default DataProvider;