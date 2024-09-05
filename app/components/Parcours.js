"use client"

import { Section } from "./Section"
import "../styles/parcours.css"
import { useState } from "react"
import "../styles/arrow.css"

export const Parcours = () => {
    const [activeItemParcours, setActiveItemParcours] = useState("formation")

    const handleClickParcours = (item) => {
        setActiveItemParcours(item)
    }

    return (
        <Section className={"section-parcours"} id="parcours">
            <div className="div-parcours-glo">
                <div className="gauche-parcours">
                    <ul className="list-parcours">
                        <li
                            className={activeItemParcours === "formation" ? "active" : ""}
                            onClick={() => handleClickParcours("formation")}
                        >
                            Formation
                        </li>
                        <li
                            className={activeItemParcours === "competences" ? "active" : ""}
                            onClick={() => handleClickParcours("competences")}
                        >
                            Compétences
                        </li>
                        <li
                            className={activeItemParcours === "experiences" ? "active" : ""}
                            onClick={() => handleClickParcours("experiences")}
                        >
                            Expériences
                        </li>
                    </ul>
                </div>
                <hr></hr>
                <div className="droite-parcours">
                    <div className={`${activeItemParcours === "formation" ? "visible" : "hidden"} div-formation`}>
                        <p>
                            Mon parcours de développeur web a commencé en tant qu'autodidacte, où j'ai acquis les bases du développement à travers la pratique et l'exploration personnelle. Souhaitant formaliser mes compétences, j'ai suivi une formation spécialisée qui m'a permis d'obtenir la certification de Développeur Web et Web Mobile (Bac +2) en 2024. Cette formation a consolidé mes connaissances en développement full-stack, en me préparant à relever des défis réels dans l'industrie du web.
                        </p>

                    </div>
                    <div className={`${activeItemParcours === "competences" ? "visible" : "hidden"} div-competences`}>
                        <p>En tant que développeur web full-stack, j'ai une solide maîtrise des technologies frontend et backend. Voici quelques-unes de mes compétences clés :</p>
                        <br></br>
                        <ul>
                            <li><strong>Frontend :</strong> HTML5, CSS3, JavaScript (React), Responsive Design</li>
                            <br></br>
                            <li><strong>Backend :</strong> PHP, Symfony, Node.js, API REST</li>
                            <br></br>
                        </ul>
                        <p>Je suis passionné par la création d'applications web performantes et innovantes, et je m'efforce constamment d'améliorer mes compétences techniques tout en restant à l'écoute des besoins des utilisateurs.
                        </p>
                    </div>
                    <div className={`${activeItemParcours === "experiences" ? "visible" : "hidden"} div-experiences`}>
                        <h4>Développeur Web (Full-stack) – Les Amis du Monde</h4>
                        <br></br>
                        <h4>Développeur Web (Frontend) – Mission Freelance</h4>
                        <br></br>
                    </div>
                </div>
            </div>
            <div className="div-arrow-flex">
                <div className="div-arrow">
                    <div className="arrow arrowSliding delay1"></div>
                    <div className="arrow arrowSliding delay2"></div>
                    <div className="arrow arrowSliding delay3"></div>
                </div>
            </div>
        </Section>
    )
}