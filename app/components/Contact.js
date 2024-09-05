import { Section } from "./Section"
import "../styles/contact.css"
import { FaGithub, FaLinkedin} from "react-icons/fa";

export const Contact = () => {
    return(
        <Section className={"section-contact"} id="contact">
        <div className="div-glo-contact">
            <h2>Retrouvez-moi ici :</h2>
            <ul>
                <li>
                    <a href="https://github.com/cska777" target="_blank" rel="noopener noreferrer">
                        <button><FaGithub /> GitHub</button>
                    </a>
                </li>
                <li>
                    <a href="https://linkedin.com/in/christophe-carbin-b6520418a" target="_blank" rel="noopener noreferrer">
                        <button><FaLinkedin /> LinkedIn</button>
                    </a>
                </li>
            </ul>
                <h2 className="h2-contact">Pour me contacter : </h2>
                <strong>Mail : </strong>  <a href="mailto:christophe.carbin@gmail.com">christophe.carbin@gmail.com</a>
        </div>
    </Section>
    )
}