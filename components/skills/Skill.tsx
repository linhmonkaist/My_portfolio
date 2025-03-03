import React from 'react'
import "./Skill.css";
import Frontend from "./Frontend"
import Backend from "./Backend"

const Skill = () => {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">About my skills</h2>
        <span className="section__subtitle"> My technical level</span>
            
        <div className="skills__container container grid">
            <Frontend />
            <Backend />
        </div>
    </section>
  )
}

export default Skill