"use client"

import Link from "next/link"
import React from "react"

const Social = () => {
    return (
        <div className="home__social">
            <Link href="" className="home__social-icon" target="_blank">
                <i className="uil uil-instagram"></i>
            </Link>

            <Link href="" className="home__social-icon" target="_blank">
                <i className="uil uil-instagram"></i>
            </Link>

            <Link href="" className="home__social-icon" target="_blank">
                <i className="uil uil-github-alt"></i>
            </Link>
        </div>
    )
}

export default Social; 