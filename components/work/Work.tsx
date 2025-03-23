"use client"

import React, { useState } from 'react'
import "./Work.css"

const Work = () => {
    const [toggleState, setToggleState] = useState(0);
    const toggleTab = (index: number) => {
        setToggleState(index);
    }
  return (
    <section className="services section" id="work">
        <h2 className="section__title">Working Experience</h2>
        <span className="section__subtitle"> </span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-rocket services__icon"></i>
                    <h3 className="services__title">Software Engineer</h3>
                    <h4 className="services__description">BiboAI</h4>
                </div>
                <span className="services__button" onClick={() => toggleTab(4)}>
                    view more
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 4 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Software Engineer</h3>
                        <p className="services__modal-description">BiboAI - An AI-powered library and tool for children&#39;s storybooks</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Designed and developed a full-stack web application with Nodejs, React, Typescript for frontend, Flask,
                                PostgreSQL and Python for backend, enabling users to create, and manage storybooks and libraries. Implemented CI/CD pipeline with GitHub 
                                Actions. Deployed services with Docker, Kubernetes, Helm, OpenTofu.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Implemented the Search microservice using Elasticsearch, leveraging gRPC protocol, enabling users to search for
                                keywords and filter on storybook categories.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Built a storybook creator using Gemini, deployed as a Kubernetes cronjob to generate storybook and insert them into the
                                application database, Elasticsearch, and an open-source vector database</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Developed an LLM search agent to suggest storybooks, leveraging Gemini, and an open-source vector database MuopDB
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Technologies: Full-stack, Python, React, Flask, CI/CD, Kubernetes, Helm, gRPC, Elasticsearch, Vector Database, LLM Search</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Period: Dec 2024 - now</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">Software Engineer <br/> Intern</h3>
                    <h4 className="services__description">Knorex</h4>
                </div>
                <span className="services__button" onClick={() => toggleTab(1)}>
                    view more {" "}
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 1 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                        <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Software Engineer Intern</h3>
                        <p className="services__modal-description">Knorex - A global provider of advertising management and execution platform</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Owned, developed and deployed a machine learning model using Random Forest Classifier to detect 
                                    fraudulent clicks from scratch. Achieving 85% accuracy and reducing click discrepancies by 20%. Built data pipeline for model using
                                     Python, BigQuery and 
                                    deployed via a K8s cronjob in GKE. </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Addressed imbalanced, outdated, and insufficient data with soft labeling, automiatic data updates, 
                                    and custom label functions; monitored model performance with Prometheus metrics and Grafana dashboards.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Built and optimized a data pipeline transforming raw AWS S3 bidding data and loading into MongoDB, 
                                    automated with a weekly Kubernetes cronjob.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Set up staging environments for Real-Time Bidding services using Jenkins and K8s, allowing the team to run integration
                                tests, monitor new features, and reduce production errors.</p>
                            </li>

                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Technologies: KNN, Neural Networks, Random Forest Classifier, Bigquery, GCS, AWS S3, Prometheus, Grafana, Python.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Period: Jul 2024 - Jan 2025</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil  uil-web-grid services__icon"></i>
                    <h3 className="services__title">Undergraduate Research <br/> Intern</h3>
                    <h4 className="services__description">ICLab</h4>
                </div>
                <span className="services__button" onClick={() => toggleTab(2)}>
                    view more
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 2 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Undergraduate Research Intern</h3>
                        <p className="services__modal-description">ICLab, KAIST - Research lab, focusing on Human-Computer Interaction (HCI)</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Conducted research on Evaluating the impact of a mental health chatbot on university students, 
                                    focusing on its effectiveness in improving well-being and providing emotional support. </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Developed front-end and back-end for Dialogflow mental health chatbot using TypeScript, Python, and FastAPI.
                                </p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Co-authored a paper on Enhancing Trust in Mental Health Agents: A DevOps Approach to Continuous Feedback
                                Reflection, CUI@CHI&#39;24.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Conducted user studies with 70 participants to assess trust levels in mental health agents.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Period: Dec 2023 - Jun 2024</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">Software Engineer <br/> Intern</h3>
                    <h4 className="services__description">Spotter Ltd</h4>
                </div>
                <span className="services__button" onClick={() => toggleTab(3)}>
                    view more
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 3 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Software Engineer Intern</h3>
                        <p className="services__modal-description">Spotter Ltd. - A company to provide AI solution for manufacturing companies</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Developed website front-end feature to visualize real-time data with Plotly and Grafana. Conducted data cleaning,
                                visualized and analyzed data for AI model</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Period: Jun 2023 - Aug 2023</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-desktop-alt services__icon"></i>
                    <h3 className="services__title">Business <br/> Founder</h3>
                    <h4 className="services__description">SEM Scholars</h4>
                </div>
                <span className="services__button" onClick={() => toggleTab(5)}>
                    view more
                    <i className="uil uil-arrow-right services__button-icon"></i>
                </span>

                <div className={toggleState === 5 ? "services__modal active-modal": "services__modal"}>
                    <div className="services__modal-content">
                    <i className="uil uil-times services__modal-close" onClick={() => toggleTab(0)}></i>
                        <h3 className="services__modal-title">Founder, CEO, CTO</h3>
                        <p className="services__modal-description">SEM Scholars - A EdTech startup to provide educational services for students</p>

                        <ul className="services__modal-services grid">
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Managing a team comprising 40 individuals. Provided services to more than 600 customers</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Developed and managed the organization&#39;s website and internal tools, leveraging Google Appscript to streamline operations and improve customer engagement.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Implemented AI-driven solutions, including an LLM chatbot to automate sales processes, increasing operational efficiency.</p>
                            </li>
                            <li className="services__modal-service">
                                <i className="uil uil-check-circle services__modal-icon"></i>
                                <p className="services__modal-info">Period: Mar 2020 - now</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Work