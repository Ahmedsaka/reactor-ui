
import "./style.scss";
import React from "react";
import logo1 from "../logo1.svg"

export class Login extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
        <div className="base-container">
            <div className="header">
                <div className="content">
                    <div className="image">
                        <img src={logo1} alt=""/>
                    </div>
                    <div className="form-group">
                    <form>
                        <label>
                            Username <br/>
                            <input type="text" name="username" /><br/>
                        </label>
                        <label>
                            Password <br/>
                            <input type="password" name="password" /><br/>
                        </label>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Submit</button>
            </div>
        </div>
        
        );
    }
        
}