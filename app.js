
const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;


const AppComponent = () => {
    return <div>
        <ReactRouterDOM.HashRouter>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>

          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

        </ReactRouterDOM.HashRouter>

    </div>
   
};

        
        const Login = () => <h1>Login</h1>
        const Register = () => <h1>Register 2</h1>


ReactDOM.render(<AppComponent/>, document.getElementById('root'));

