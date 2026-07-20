import { Icon } from "astro-icon/components";
import Language from "../classes/Language.ts";
import Tool from "../classes/Tool.ts";

import { Astro, C, Docker, Git, Html5, Javascript, Libreofficecalc, Openjdk, Latex, Linux, Nodedotjs, Duckdb, Php, Postgresql, Python, React, Databricks, Dblp, Github, Youtube } from "simple-icons-astro";
import DatabaseIcon from "../components/icons/DatabaseIcon.astro";
import ExcelIcon from "../components/icons/ExcelIcon.astro";
import SocialLink from "../classes/SocialLink.ts";
import LinkedInIcon from "../components/icons/LinkedInIcon.astro";

const DATA = {
    education: [

    ],
    experience: [

    ],
    certifications: [

    ],
    projects: [

    ],
    tools: [
        new Tool("Astro", Astro, "Framework de páginas web estáticas"),
        new Tool("C", C, "Lenguaje de programación de bajo nivel"),
        new Tool("Docker", Docker, "Herramienta para la creación y manejo de contenedores"),
        new Tool("Excel", ExcelIcon, "Herramienta para la creación de planillas de cálculo"),
        new Tool("Git", Git, "Herramienta de control de versiones"),
        new Tool("HTML5", Html5, "Lenguaje de marcado de hipertexto"),
        new Tool("Java", Openjdk, "Lenguaje de programación de alto nivel orientado a objetos"),
        new Tool("JavaScipt", Javascript, "Lenguaje de programación de alto nivel orientado a web"),
        new Tool("LaTeX", Latex, "Lenguaje de marcado orientado a documentos"),
        new Tool("Linux", Linux, "Familia de sistemas operativos"),
        new Tool("Node.js", Nodedotjs, "Entorno de desarrollo de JavaScript"),
        new Tool("OracleDB", DatabaseIcon, "Base de datos proporcionada por Oracle"),
        new Tool("PHP", Php, "Lenguaje de programación orientado al pre-procesado de archivos HTML"),
        new Tool("PostgreSQL", Postgresql, "Sistema de gestión de bases de datos de código abierto"),
        new Tool("Python", Python, "Lenguaje de programación de alto nivel orientado a uso general"),
        new Tool("React", React, "Framework de JavaScript orientado al contenido dinámico")
    ],
    languages: [
        new Language("Español", undefined, true),
        new Language("Inglés", "C1", false),
    ],
    socials: [
        new SocialLink("GitHub", Github, "https://www.github.com/rogandven"),
        new SocialLink("LinkedIn", LinkedInIcon, "https://www.linkedin.com/in/rogandven"),
        new SocialLink("YouTube", Youtube, "https://www.youtube.com/@rogandven"),
    ],
};

export default DATA;