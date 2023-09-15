import React from "react";

function TwoWayBindingJS() {

    const handleLogin = () => {
        let loginInfo = {
            "email": document.querySelector('#email').value,
            "password": document.querySelector('#password').value
        }
        alert(JSON.stringify(loginInfo))
    }

    const handleChangeUser = () => {
        document.querySelector('#email').value = 'hanhoan@gmail.com';
        document.querySelector('#password').value = '12345'
    }

    return (
        <div className="row col-sm-4">
            <h3>Login Form</h3>
            <div className="form-group mb-3">
                <label className="from-label">Email</label>
                <input type="email" id="email" className="form-control" />
            </div>
            <div className="form-group mb-3">
                <label className="from-label">Passwork</label>
                <input type="password" id="password" className="form-control" />
            </div>
            <div className="form-group mb3">
                <button className="btn btn-outline-primary me-3" onClick={handleLogin}>Login</button>

                <button className="btn btn-outline-primary" onClick={handleChangeUser}>Change User</button>
            </div>

        </div>
    )
}

export default TwoWayBindingJS;