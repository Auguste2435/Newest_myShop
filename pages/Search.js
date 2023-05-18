
// Importing modules
import algoliasearch from "algoliasearch/lite";
import { InstantSearch }
    from "react-instantsearch-dom";


import SearchBar from "../src/components/SearchBar";
import SearchHits from "../src/components/search-hits";


const searchClient = algoliasearch( //funksjon 
    process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID, //går gjennom id'en til database
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_API_KEY, //går gjennom api key til database
);


export default function CustomizedSearch({ }) {

    return (

        <div className={"algolia-search"}>

            <InstantSearch 

                searchClient={searchClient}
                indexName="Data"

            > 

                {/* Adding Search Box */}
                <SearchBar />

                {/* Adding Data */}

                <SearchHits />

            </InstantSearch>

        </div>


    );
}
