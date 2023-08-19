import React from 'react'

const Hero = () => {
    return (
        <>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Age</span>
            </div>
            <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Weight in lbs</span>
            </div>
            <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Height in inc</span>
            </div>
            <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Chest in cm</span>
            </div>
            <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Abdomen in cm</span>
            </div>
            <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
        </div>
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Thigh in cm</span>
            </div>
            <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
        </div>
        </>
    )
}

export default Hero