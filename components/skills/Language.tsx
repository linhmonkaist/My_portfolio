import React from 'react'

const Language = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Programming language</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills__level">+2 year</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">C/C++</h3>
                        <span className="skills__level"></span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Rust</h3>
                        <span className="skills__level"></span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Scala</h3>
                        <span className="skills__level"></span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">JavaScript</h3>
                        <span className="skills__level"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Language