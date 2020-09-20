
import React from "react";
import { logo1 } from "../logo1.svg";

export class Register extends React.Component {
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
                            First name <br/>
                            <input type="text" name="name" /><br/>
                        </label>
                        <label>
                            Last name <br/>
                            <input type="text" name="name" /><br/>
                        </label>
                        <label>
                            Email <br/>
                            <input type="text" name="name" /><br/>
                        </label>
                        <label>
                            password <br/>
                            <input type="" name="name" /><br/>
                        </label>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn">Register</button>
            </div>
        </div>
        
        );
    }
        
}