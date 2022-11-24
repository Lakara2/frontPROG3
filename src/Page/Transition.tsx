import * as React from "react";
import { Link } from "react-router-dom";
import "../css/Transition.css"
export const Transition =() =>{
    return (
        <>
            <div>
                <div className="px-4 py-5 my-5 text-center">
                    <h1 className="text-yellow"> Haute Ecole D'Informatique</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Are You Sure to enter ?</p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <div className="col-6">
                            <a type="button" className="btn btn-primary btn-lg px-4 gap-3"
                               href="Login">No</a></div>
                            <div className="col-6">
                            <Link to={'/Modif'} className="btn btn-outline-secondary btn-lg px-4">Yes</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}