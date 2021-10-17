import { Redirect } from "react-router";

const Home = ({loggedIn}) => {
    return loggedIn ? <Redirect to="/parts"/> : <Redirect to="/login"/>
}
 
export default Home;