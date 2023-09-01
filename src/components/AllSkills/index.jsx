import { useEffect, useState } from "react";
import Skills from "../Skills";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiGit,
  SiTailwindcss,
  SiCsharp,
  SiMysql,
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
      <Skills icon={<SiHtml5 />}>html 5</Skills>
      <Skills icon={<SiCss3 />}>css 3</Skills>
      <Skills icon={<SiJavascript />}>JavaScript</Skills>
      <Skills icon={<SiReact />}>React</Skills>
      <Skills icon={<SiNodedotjs />}>node.js</Skills>
      <Skills icon={<FaSass />}>sass</Skills>
      <Skills icon={<SiTypescript />}>typeScript</Skills>
      <Skills icon={<SiGit />}>git</Skills>
      <Skills icon={<SiTailwindcss />}>tailwindcss</Skills>
      <Skills icon={<SiCsharp />}>csharp</Skills>
      <Skills icon={<SiMysql />}>Mysql</Skills>
    </section>
  );
}

export default AllSkills;
