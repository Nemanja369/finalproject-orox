import { useEffect } from "react";
import { Redirect, useParams, useHistory } from "react-router";
import { getPartById } from "../service";
import { deletePart } from "../service";

const Part = ({ loggedIn, part, setPart }) => {
    let { id } = useParams()

    useEffect(() => {
        let mounted = true

        if (!loggedIn) return
        getPartById(id).then(res => {
            if (mounted)
                setPart(res.data)
        })
        return () => { mounted = false }
    }, [loggedIn])
    const history = useHistory()
    return loggedIn ?
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <div >
                        <div className="list-group-item">
                            <li class="list-group-item">Name: {part?.name}</li>
                            <li class="list-group-item">Code: {part?.code}</li>
                            <li class="list-group-item">Material: {part?.material}</li>
                            <li class="list-group-item">Machine: {part?.machine}</li>
                            <li class="list-group-item">  <img src={part?.picture} alt={``} style={{ width: '50px' }} /></li>
                            <td>
                                <button type="button" class="btn btn-danger" onClick={(e) => {
                                    deletePart(part.id).then(res => {
                                        setPart(res)
                                        history.push('/parts')
                                    })
                                    e.currentTarget.parentElement.remove()
                                }}>Delete</button>
                                <button type="button" class="btn btn-warning" onClick={() => {
                                    history.push('/edit_part')
                                    getPartById(id).then(res => {
                                        setPart(res.data)
                                    })
                                }}>EDIT</button>
                            </td>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        :
        <Redirect to="/login" />
}

export default Part;