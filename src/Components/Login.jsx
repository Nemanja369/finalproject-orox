import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAllUsers } from "../service";

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                    <div className="form-group row">
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            getAllUsers().then(res => {
                                let user = res.data.find(el => (el.username === username || el.email === username) && el.password === password)
                                if (user) {
                                    setUser(user)
                                    history.push('/parts')
                                } else {
                                    console.log('Neispravni podaci');
                                }
                            })

                        }}>
                            <input type="text" className="form-control" placeholder="Username/Email..." onChange={(e) => { setUsername(e.target.value) }} />
                            <input type="password" className="form-control" placeholder="Password..." onChange={(e) => { setPassword(e.target.value) }} />
                            <input type="submit" className="btn btn-primary" value="LogIn" />
                        </form>
                        <div>
                            <Link to="/register">Not registred?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;