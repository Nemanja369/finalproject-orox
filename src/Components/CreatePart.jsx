import { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { addPart } from "../service";
import Select from "./Select.";

const CreatePart = ({ loggedIn}) => {

    const [name, setName] = useState('')
    const [code, setCode] = useState('')
    const [material, setMaterial] = useState('')
    const [machine, setMachine] = useState('')
    
    // const isValid = (nesto) => nesto.length >= 3

    const history = useHistory()
    return loggedIn ? (
        <form onSubmit={(e) => {
            e.preventDefault()

            addPart(name, material, code, machine).then(() => {
                history.push('/parts')
            })
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                        <div className="form-group row">
                            <input type="text" className="form-control" placeholder="part name..." onChange={(e) => { setName(e.target.value) }} />
                            <input type="text" className="form-control" placeholder="code..." onChange={(e) => { setCode(e.target.value) }} />
                            <input type="text" className="form-control" placeholder="material..." onChange={(e) => { setMaterial(e.target.value) }} />
                           <Select options={['Icut','Irun','Isign']} placeholder="machine..." machine={machine} setMachine={setMachine}/>
                            <input type="submit" className="btn btn-primary" value="Add Part" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
        :
        <Redirect to="/login" />
}

export default CreatePart;