import Link from 'next/link'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer" id="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Nguyen Linh</h1>
            <ul className="footer__list">
                <li>
                    <Link href="#about" className="footer__link">About</Link>
                </li>

                <li>
                    <Link href="#skills" className="footer__link">Skills</Link>
                </li>

                <li>
                    <Link href="#work" className="footer__link">Work Experience</Link>
                </li>

                <li>
                    <Link href="#services" className="footer__link">Projects</Link>
                </li>

                <li>
                    <Link href="#qualification" className="footer__link">Timeline</Link>
                </li>
            </ul>

            <div className="footer__social">
                <Link href="https://www.linkedin.com/in/nguyen-linh-kaist/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </Link>

                {/* <Link href="" className="footer__social-link" target="_blank">
                    <i className="bx bxl-facebook"></i>
                </Link> */}

                <Link href="https://github.com/linhmonkaist" className="footer__social-link" target="_blank">
                    <i className="uil uil-github-alt"></i>
                </Link>
            </div>

            <span className="footer__copy">&#169; Nguyen Linh. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer