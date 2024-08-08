import React from 'react'
import { Link } from 'react-router-dom'

function FormConnexion() {
    return (
        <section className="" style={{margin: "8rem"}}>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample image"/>
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form>
                            <div className="">
                                <p className="lead fw-normal me-3">Connexion</p>
                               
                            </div>

                            {/* <!-- Email input --> */}
                            <div data-mdb-input-init className="form-outline mb-4">
                                <input type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Email" />
                                <label className="form-label" for="form3Example3">Email address</label>
                            </div>

                            {/* <!-- Password input --> */}
                            <div data-mdb-input-init className="form-outline mb-3">
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Password" />
                                <label className="form-label" for="form3Example4">Password</label>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                {/* <!-- Checkbox --> */}
                                <div className="form-check mb-0">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                    <label className="form-check-label" for="form2Example3">
                                        Remember me
                                    </label>
                                </div>
                                <a href="#!" className="text-body">Forgot password?</a>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg btn-login">Valider</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">vous n'avez de compte? <Link to="/Inscription"
                                    className="link-danger">Inscrivez-vous</Link></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default FormConnexion
