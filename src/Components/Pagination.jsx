import { useEffect, useState } from "react"

const Pagination = ({ parts, displayed, setOnPage }) => {
    let length = parts.length
    let numberOfPages = Math.ceil(length / displayed)
    const [pages, setPages] = useState([])
    const [currPage, setCurrPage] = useState(1)


    const changePage = (page) => {
        setCurrPage(page)
        let start = displayed * (page - 1)
        let end = start + Number(displayed)
        setOnPage(parts.slice(start, end))

    }

    useEffect(() => {
        let tmp = []
        for (let i = 1; i <= numberOfPages; i++) {
            tmp.push(i)
        }
        setPages(tmp)

    }, [displayed])


    return (
        <>
            <div className="container">
            <div className="col-10 offset-1">
            <div className="form-group">
                <ul className="pager">
                    <button disabled={currPage <= 1} onClick={() => { changePage(currPage - 1) }}>BACK</button>
                    {pages.map(page => <button onClick={() => { changePage(page) }} key={page}
                        style={page === currPage ? { color: 'blue' } : {}} >{page}</button>)}
                    <button disabled={currPage >= pages.length} onClick={() => { changePage(currPage + 1) }}>NEXT</button>
                </ul>
                </div>
                </div>
            </div>
        </>
    );
}

export default Pagination;