import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Fit-Pal</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <a className="nav-item nav-link" href='/'>Home</a>
                    <a className="nav-item nav-link" href='/BodyFat'>Body Fat Calculator</a>
                    <a className="nav-item nav-link" href='/BMI'>BMI Calculator</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
