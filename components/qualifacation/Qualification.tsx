"use client"

import React, { useState } from 'react'
import './Qualification.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index: number) => {
        setToggleState(index);
    }
  return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Timeline</h2>
        <span className="section__subtitle">My journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification__icon"></i>Education
                </div>

                <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                onClick={() => toggleTab(1)}>
                    <i className="uil uil-briefcase-alt qualification__icon"></i> {" "} Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">

                        <div >
                            <h3 className="qualification__title">Got GKS-U Scholarship</h3>
                            <span className="qualification__subtitle"></span>KAIST, Korea
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Mar 2020 - present
                            </div>
                            
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div >
                            <h3 className="qualification__title">Founder, CEO, CTO SEM Scholars</h3>
                            <span className="qualification__subtitle"></span>Remote, Vietnam 
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Mar 2020 - present
                            </div>
                            
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div >
                            <h3 className="qualification__title">Bachelor in Computer Science and Business Technology Management</h3>
                            <span className="qualification__subtitle"></span> KAIST, Korea
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Mar 2021 - present
                            </div>
                            
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div >
                            <h3 className="qualification__title">Software Engineer Intern</h3>
                            <span className="qualification__subtitle"></span> Spotter Ltd, Korea
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Jun 2023 - Aug 2023
                            </div>
                            
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div >
                            <h3 className="qualification__title">Undergraduate Research Intern</h3>
                            <span className="qualification__subtitle"></span> ICLab, KAIST, Korea
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Dec 2023 - Jun 2024
                            </div>
                            
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div >
                            <h3 className="qualification__title"> KAIST Global Entrepreneurship Summer School</h3>
                            <span className="qualification__subtitle"></span> Korea & USA
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> March 2024 - Jul 2024
                            </div>
                            
                        </div>
                    </div>

                    <div className="qualification__data">

                        <div >
                            <h3 className="qualification__title">Software Engineer Intern</h3>
                            <span className="qualification__subtitle"></span> Knorex, Vietnam
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Jul 2024 - Jan 2025
                            </div>
                            
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div >
                            <h3 className="qualification__title">Software Engineer</h3>
                            <span className="qualification__subtitle"></span> Remote, US
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> Dec 2024 - present
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                    <div className="qualification__data">
                        <div >
                            <h3 className="qualification__title">Full stack dev </h3>
                            <span className="qualification__subtitle"></span> KAIST
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2021 - present
                            </div>
                            
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div >
                            <h3 className="qualification__title">Art director</h3>
                            <span className="qualification__subtitle"></span> KAIST
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2021 - present
                            </div>
                            
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div >
                            <h3 className="qualification__title">web dev </h3>
                            <span className="qualification__subtitle"></span> KAIST
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2021 - present
                            </div>
                            
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div >
                            <h3 className="qualification__title">Art director rafesaf</h3>
                            <span className="qualification__subtitle"></span> KAIST
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2021 - present
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification