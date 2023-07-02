import React from 'react'
import './Card.css'


function Cards() {
    return (
        <div className='cards'>
            <div className="container">

                <div className="head">
                    <h3>أهلا بك في الجامعة</h3>
                    <span>----------</span>
                    <p>نقطة الدراسة هي شركة دولية رائدة في تعليم الطلاب الكتابة بفعالية والتعلم من بعضهم البعض والتفكير بأنفسهم.</p>
                </div>

                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="col-card">
                            <div className="icon">
                                <i className="bi bi-mortarboard-fill"></i>
                            </div>


                            <h3>Certification</h3>

                            <p>The technical writing profession is continuously evolving as technical logitech...</p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="col-card">
                            <div className="icon">
                                <i className="bi bi-pie-chart-fill"></i>
                            </div>


                            <h3>Affordability</h3>

                            <p>The technical writing profession is continuously evolving as technical logitech...</p>
                        </div>
                    </div>

                    <div className="col change-col">
                        <div className="col-card">
                            <div className="icon">
                                <i className="bi bi-boxes"></i>
                            </div>


                            <h3>Program</h3>

                            <p>The technical writing profession is continuously evolving as technical logitech...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
