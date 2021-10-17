import { useState } from "react";
import { useHistory } from "react-router";
import { getAllUsers, postUser } from "../service";

const Register = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')


    const history = useHistory()
    const validPassword = (password) => password.length >= 8
        && password.split('').some(char => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))
        && password.split('').some(char => !isNaN(Number(char)))

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 offset-1">
                    <div className="form-group row">
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            if (username.length < 4 && !validPassword(password)) {
                                
                                console.log('Neispravno, mora makar 4 karaktera,nije validna sifra...');
                                return
                            }
                            getAllUsers().then(res => {
                                if (!res.data.some(user => user.username === username || user.email === email)) {
                                    postUser(username, email, password).then(res => {
                                        setUser(res.data)
                                        history.push('/parts')
                                    })
                                }
                            })

                        }}>
                            <input type="text" className="form-control" placeholder="Username..." onChange={(e) => { setUsername(e.target.value) }} />
                            <input type="email" className="form-control" placeholder="Email..." onChange={(e) => { setEmail(e.target.value) }} />
                            <input type="password" className="form-control" placeholder="Password..." onChange={(e) => { setPassword(e.target.value) }} />
                            <input type="submit" className="form-control" className="btn btn-primary" value="Register" 
                            />
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;