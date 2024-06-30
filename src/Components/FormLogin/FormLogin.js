import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function FormLogin() {
    return (
        <div className="signup__container">
            <div className="container__child signup__form">
                <form action="#">
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input className="form-control" type="text" name="username" id="username" placeholder="james.bond" required />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input className="form-control" type="text" name="email" id="email" placeholder="james.bond@spectre.com" required />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input className="form-control" type="password" name="password" id="password" placeholder="********" required />
                    </div>
                    <div className="form-group">
                        <label for="passwordRepeat">Repeat Password</label>
                        <input className="form-control" type="password" name="passwordRepeat" id="passwordRepeat" placeholder="********" required />
                    </div>
                    <div className="m-t-lg">
                        <ul className="list-inline">
                            <li>
                                <input className="btn btn--form" type="submit" value="Register" />
                            </li>
                            <li>
                                <Link className="signup__link" to="/SecondPage/FormConnexion">I am already a member</Link>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default FormLogin
