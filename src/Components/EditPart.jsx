import { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { editPart } from "../service";
import Select from "./Select.";


const EditPart = ({ loggedIn, part }) => {

    const [machine, setMachine] = useState(part.machine)
    const [name, setName] = useState(part.name)
    const [code, setCode] = useState(part.code)
    const [material, setMaterial] = useState(part.material)
    const history = useHistory()

    return loggedIn ?  (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="form-group row">
                            <input type="text" className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} />
                            <input type="text" className="form-control" value={code} onChange={(e) => { setCode(e.target.value) }} />
                            <input type="text" className="form-control" value={material} onChange={(e) => { setMaterial(e.target.value) }} />
                            <Select value={machine} options={['Icut', 'Irun', 'Isign']} machine={machine} setMachine={setMachine} />
                            <button value="Edit Part" className="btn btn-primary" onClick={() => {
                                editPart(part.id, name, material, code, machine).then(() => {
                                    history.push('/parts')
                                    setName('')
                                })

                            }}>Edit Part</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) 
        :
        <Redirect to="/login" />



}

export default EditPart