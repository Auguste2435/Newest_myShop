
import { connectSearchBox } from 'react-instantsearch-dom';

function SearchBar({ currentRefinement,  refine }) {

    return (

        <form noValidate action="" role="search">
            <input
                value={currentRefinement}
                onChange={event => refine(event.currentTarget.value)}
                placeholder="Search any product"
                style={{ height: '20px', width: '250px', borderRadius: "10px" }}
                title='Search bar'
            />
        </form>

    )
}
export default connectSearchBox(SearchBar);