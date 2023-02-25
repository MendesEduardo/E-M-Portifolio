import { useEffect, useState } from 'react';
import Skills from '../Skills';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact, SiNodedotjs,
    SiTypescript,
    SiGit
} from "react-icons/si";
import { FaSass } from "react-icons/fa";
import "./AllSkills.scss";

function AllSkills() {
    const [show, setShow] = useState(false);

    useEffect(() => {
      setShow(true);
    }, []);
  
    return (
        <section className={`allSkills ${show ? "show" : ""}`}>
            <Skills icon={<SiHtml5 />}>
                html
            </Skills>
            <Skills icon={<SiCss3 />}>
                css
            </Skills>
            <Skills icon={<SiJavascript />}>
                JavaScript
            </Skills>
            <Skills icon={<SiReact />}>
                React
            </Skills>
            <Skills icon={<SiNodedotjs />}>
                nodejs
            </Skills>
            <Skills icon={<FaSass />}>
                sass
            </Skills>
            <Skills icon={<SiTypescript />}>
                typeScript
            </Skills>
            <Skills icon={<SiGit />}>
                git
            </Skills>
        </section>
    )
}


export default AllSkills