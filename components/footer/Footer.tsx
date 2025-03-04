import Link from 'next/link'
import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Smith</h1>
            <ul className="footer__list">
                <li>
                    <Link href="#about" className="footer__link">About</Link>
                </li>

                <li>
                    <Link href="" className="footer__link">prh</Link>
                </li>

                <li>
                    <Link href="" className="footer__link">About</Link>
                </li>

                <li>
                    <Link href="" className="footer__link">About</Link>
                </li>
            </ul>

            <div className="footer__social">
                <Link href="" className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </Link>

                <Link href="" className="footer__social-link" target="_blank">
                    <i className="bx bxl-facebook"></i>
                </Link>

                <Link href="" className="footer__social-link" target="_blank">
                    <i className="uil uil-github-alt"></i>
                </Link>
            </div>

            <span className="footer__copy">&#169; Crypticalcoder. All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer