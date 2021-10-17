import { useEffect, useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import { getAllParts } from "../service";
import Pagination from "./Pagination";

const Parts = ({ loggedIn, parts, setParts }) => {
    const [displayed, setDisplayed] = useState(10)
    const [onPage,setOnPage] = useState([])

    useEffect(() => {
        let mounted = true
        if (!loggedIn) return
        getAllParts().then(res => {
            if (mounted)
                setParts(res.data)
                setDisplayed(10)
        })
        return () => { mounted = false }
    }, [loggedIn])
    useEffect(()=>{
        setOnPage(parts.slice(0, displayed))
      },[displayed, parts])


    return loggedIn ?
        <div className="container">
            <div className="row">
            <div className="col-10 offset-1">
            {onPage.map(part => <div key={part.id}><Link to={`/parts/${part.id}`} className="list-group-item">
                <tbody className="form-group row">
                    <tr className="form-control">Name: {part.name}</tr>
                    <tr className="form-control">Code: {part.code}</tr>
                    <tr className="form-control">Material: {part.material}</tr>
                    <tr className="form-control">Machine: {part.machine}</tr>
                <img src={part.picture} alt={`${part.name}`} style={{width:'50px'}} /></tbody></Link></div>)}
    
            <Pagination parts={parts} displayed={displayed} setOnPage={setOnPage}/>
                </div>
            </div>
        </div>
        :
        <Redirect to="/login" />

}

export default Parts;