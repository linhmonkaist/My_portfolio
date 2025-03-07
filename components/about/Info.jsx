import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">

      <div className="about__box">
        <i className="bx bxs-graduation about__icon"></i>
        <h3 className="about__title">Bachelor</h3>
        <span className="about__subtitle">CS & BTM</span>
      </div>

      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">EXP</h3>
        <span className="about__subtitle">+1 year of working</span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">5 project</span>
      </div>

      {/* <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">support</h3>
        <span className="about__subtitle">online 24/7</span>
      </div>

      <div className="about__box">
        <h3 className="about__title">EXP</h3>
        <span className="about__subtitle">1 year of working</span>
      </div> */}
    </div>
  )
}

export default Info