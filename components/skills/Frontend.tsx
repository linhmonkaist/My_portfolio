import React from 'react'

const Frontend = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Full-stack development</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Flask</h3>
                        <span className="skills__level"></span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">React</h3>
                        <span className="skills__level"></span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">HTML/CSS</h3>
                        <span className="skills__level"></span>
                    </div>
                </div>
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">SQL</h3>
                        <span className="skills__level"></span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Webpack</h3>
                        <span className="skills__level"></span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">PostgreSQL</h3>
                        <span className="skills__level"></span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">FastAPI</h3>
                        <span className="skills__level"></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend