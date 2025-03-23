import React from 'react'

const ForeignLanguage = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Foreign Language</h3>

        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">English</h3>
                        <span className="skills__level">Advanced</span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Korean</h3>
                        <span className="skills__level">TOPIK 5</span>
                    </div>
                </div>
            </div>

            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-badge-check"></i>
                    <div>
                        <h3 className="skills__name">Vietnamese</h3>
                        <span className="skills__level">Native</span>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ForeignLanguage