"use client"

import React, { useState } from 'react'
import "./Services.css"

const Services = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index: number) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="services">
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle"> Projects I have done so far</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Operating system</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(1)}>
                    view more {" "}
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">KAIST Pintos OS</h3>
                        <p className="services__modal-description">Project for the course Operating system at KAIST</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Implemented thread management functionalities, including thread creation, scheduling, and 
                                    lock management </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Developed
                                kernel system calls for user processes and virtual memory operations like paging and page fault handling</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Implemented
                                file system management consistent with Linux standards.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Computer Network</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>
                    view more
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">KAIST TCP protocol </h3>
                        <p className="services__modal-description">Project for the course Computer network at KAIST</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Implemented a TCP protocol in C, developing custom socket functions, three-way handshake, flow and congestion control
                                mechanisms, and bit-level packet manipulation to mimic the transport layer of TCP.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Passage Retrieval</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(3)}>
                    view more
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Advanced Passage Retrieval with Lexical and Semantic Matching</h3>
                        <p className="services__modal-description">Project for the course AI at KAIST</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Implemented Bi-encoder with Cross-encoder re-ranker with 94.5% of accuracy, improved 8.5% of accuracy 
                                    compared with benchmark BM25 in dataset SQuAD11 with Python</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Fraud detection</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(4)}>
                    view more
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 4 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Fraud detection in custom declaration</h3>
                        <p className="services__modal-description">Project for the course Machine Learning at KAIST</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Implemented KNN model with 93.3% of accuracy, improved 14.25% of accuracy compared with Neural Network model to
                                detect fraud in custom declaration as final project for the course Machine learning.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Fabric Interpreter</h3>
                </div>
                <span className="services__button" onClick={() => toggleTab(5)}>
                    view more
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 5 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Fabric Interpreter</h3>
                        <p className="services__modal-description">Project for the course Programming Language at KAIST</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Implemented fundamental components of a lightweight tree-walk interpreter for small language Fabric including
                                scanning, parsing, and evaluating code using Scala and functional programming principles.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services