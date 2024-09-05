import { Section } from "./Section"
import "../styles/presentation.css"
import "../styles/arrow.css"

export const Presentation = () => {
    return (
        <Section id="presentation" className={"section-presentation"}>
            <div className="div-glo-presentation">
                <div className="div-titre-presentation">
                    <h1>CARBIN <br></br>Christophe</h1>
                    <h2>Développeur web</h2>
                </div>
                <div className="div-presentation-text">
                    <p>Développeur web junior passionné par la création d’applications web, j'ai commencé mon parcours en tant qu'autodidacte avant d'approfondir mes compétences à travers une formation spécialisée, couronnée par une certification de développeur web et web mobile. Je suis constamment à la recherche de nouveaux défis et d'opportunités pour concevoir des solutions créatives et performantes.</p>
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