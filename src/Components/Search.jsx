

const Search = ({ setInputSearch, inputSearch }) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <div className="form-group row">
                        <input type="search" className="form-control" value={inputSearch} placeholder="search..."
                               onChange={(e) => {setInputSearch(e.target.value)}} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;