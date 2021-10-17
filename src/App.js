import { useState } from "react";
import CreatePart from "./Components/CreatePart";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Parts from "./Components/Parts";
import Register from "./Components/Register";
import EditPart from "./Components/EditPart";
import Search from "./Components/Search";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Part from "./Components/Part";


function App() {

  const [parts, setParts] = useState([])
  const [user, setUser] = useState(null)
  const [part, setPart] = useState(null)
  const [inputSearch, setInputSearch] = useState('')

  return (

    <Router>
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1">
            <nav className="navbar navbar-expand-lg navbar-light bg-light center">
              <Link className="nav-item nav-link active" href="#" to="/" exact >Home</Link>
              <Link to="/parts" className="nav-item nav-link" href="#">Parts</Link>
              <Link to="/create_part" className="nav-item nav-link" href="#">Create Part</Link>
              <Link to="/edit_part" className="nav-item nav-link" href="#" hidden >Edit Part</Link>
              {/* <Link to="/search" className="nav-item nav-link" href="#">Search</Link> */}
              <Link to="/register" className="nav-item nav-link" href="#">Register</Link>
              <Link to="/login" className="nav-item nav-link" href="#">Login</Link>

            </nav>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Home loggedIn={user} />
        </Route>
        <Route exact path="/register">
          <Register setUser={setUser}/>
        </Route>
        <Route exact path="/parts">
          <Search inputSearch={inputSearch} setInputSearch={setInputSearch}></Search>
          <Parts loggedIn={user} part={part} setPart={setPart} inputSearch={inputSearch} setInputSearch={setInputSearch}
            parts={parts.filter(part => part.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
                                        part.machine.toLowerCase().includes(inputSearch.toLowerCase()) ||
                                        part.code.toLowerCase().includes(inputSearch.toLowerCase()) ||
                                        part.material.toLowerCase().includes(inputSearch.toLowerCase()))} setParts={setParts}
          />
        </Route>
        <Route exact path="/parts/:id">
          <Part loggedIn={user} part={part} setPart={setPart} />
        </Route>
        <Route path="/create_part">
          <CreatePart loggedIn={user} />
        </Route>
        <Route exact path="/edit_part">
          <EditPart loggedIn={user} part={part} setPart={setPart} />
        </Route>
        <Route exact path="/login">
          <Login setUser={setUser} />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;