import React, { Component } from 'react';
// import { Route, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import '../Home/Home.scss';

class Home extends Component {
    // לא לשכוח להוסיף רידאקס = בשביל לדעת מי המשתמש הנוכחי באתר
    render() {
        return (
            // <div className="ui secondary menu">
            <div style={{width:'100%'}}>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">PartnerShip</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><a href="#">פרסום שאלה</a></li>
                            <li><a href="#">Page 2</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                        </ul>
                    </div>
                </nav>
                <Login />
                {/* <Switch> */}
                {/* <Route className="ui item" path="/about" component={About} />
                    <Route className="ui item" path="/personalArea" component={PersonalArea} />
                    <Route className="ui item" path="/" exact component={Login} /> */}
                {/* </Switch> */}
                {/* <div className="right menu"> */}
                {/* <div class="item">
                        <div class="ui icon input">
                            <input type="text" placeholder="Search..." />
                            <i class="search link icon"></i>
                        </div>
                    </div> */}
                {/* <a className="ui item">Logout</a> */}
                {/* להוסיף פונקציה ש התנתקות  */}
                {/* </div>
             </div> */}
            </div>
        );
    }
}
export default Home;
