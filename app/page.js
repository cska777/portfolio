import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Parcours } from "./components/Parcours";
import { Presentation } from "./components/Presentation";
import Projets  from "./components/Projets";


export default function Home() {
  return (
   <main>
    <Header />
    <Presentation />
    <Parcours />
    <Projets />
    <Contact />
   </main>
  );
}


