import { Icon } from "astro-icon/components";
import Language from "../classes/Language.ts";
import Tool from "../classes/Tool.ts";

import { Astro, C, Docker, Git, Html5, Javascript, Libreofficecalc, Openjdk, Latex, Linux, Nodedotjs, Duckdb, Php, Postgresql, Python, React, Databricks, Dblp, Github, Youtube } from "simple-icons-astro";
import DatabaseIcon from "../components/icons/DatabaseIcon.astro";
import ExcelIcon from "../components/icons/ExcelIcon.astro";
import SocialLink from "../classes/SocialLink.ts";
import LinkedInIcon from "../components/icons/LinkedInIcon.astro";
import EventClass from "../classes/EventClass.ts";

const DATA = {
    name: "Roger Venegas",
    username: "rogandven",
    location: {
        NAME: "Concepción", 
        URL: "https://www.google.com/maps/place/Concepci%C3%B3n,+B%C3%ADo+B%C3%ADo"
    },
    date_of_birth: new Date("2004-09-16"),
    description: "Aspirante ingeniero en informática. Actualmente siguiendo adelante a pesar de los desafíos de la vida.",
    education: [
        new EventClass(
            "Universidad del Bío-Bío",
            "Ingeniería de Ejecución en Computación e Informática",
            undefined,
            undefined, 
            "Concepción, Chile",
            "2023-03-03",
            "2030-01-01",
            undefined,
            undefined,
            undefined,
        ),
        new EventClass(
            "BiblioRedes",
            "Jóvenes Programadores",
            undefined,
            undefined, 
            "Remoto",
            "2021-01-12",
            "2023-12-12",
            undefined,
            undefined,
            undefined,
        ),
        new EventClass(
            "Liceo Antonio Varas",
            "Educación media científico-humanista",
            undefined,
            undefined, 
            "Cauquenes, Chile",
            "2019-03-03",
            "2022-12-12",
            undefined,
            undefined,
            undefined,
        ),                  
    ],
    experience: [
        new EventClass(
            "Universidad del Bío-Bío", 
            "Pasantía de Administrador de Sistemas", 
            undefined, 
            undefined, 
            "Concepción, Chile", 
            "2025-01-01", 
            "2025-03-03",
            undefined,
            undefined,
            undefined,
        ),    
    ],
    certifications: [
        new EventClass(
            "Centro de Idiomas UBB", 
            "Diagnóstico de Inglés", 
            undefined, 
            undefined, 
            "Concepción, Chile", 
            "2023-06-01", 
            undefined,
            undefined,
            undefined,
            undefined,
        ),        
        new EventClass(
            "Pearson", 
            "Versant", 
            undefined, 
            undefined, 
            "Remoto", 
            "2025-08-01", 
            undefined,
            undefined,
            undefined,
            undefined,
        ),
        new EventClass(
            "British Council", 
            "Core Skills", 
            undefined, 
            undefined, 
            "Remoto", 
            "2026-07-01", 
            undefined,
            undefined,
            undefined,
            undefined,
        ),        
    ],
    projects: [
        new EventClass(
            "Universidad del Bío-Bío", 
            "CEE", 
            undefined, 
            undefined, 
            "Concepción, Chile", 
            "2025-03-01", 
            "2025-08-01", 
            "https://github.com/rogandven/Backend-Plantilla-MDD-2025-1",
            undefined,
            "vote"
        ),
        new EventClass(
            "Universidad del Bío-Bío", 
            "Gestión de Matriculas", 
            undefined, 
            undefined, 
            "Concepción, Chile", 
            "2025-06-01", 
            undefined, 
            "https://github.com/rogandven/Entrega-BD-2025",
            undefined,
            "school"
        ),   
        new EventClass(
            "Universidad del Bío-Bío", 
            "Art Sell", 
            undefined, 
            undefined, 
            "Concepción, Chile", 
            "2025-11-01", 
            undefined, 
            "https://1drv.ms/b/c/3f355de2d03d02f0/IQBt05k7lxf5SaAXGqgXhX7NASK8zGpxG67S5q7jKDE47K05",
            undefined,
            "mdi:paint-outline"
        ),
        new EventClass(
            "Universidad del Bío-Bío", 
            "Gestión de Electivos", 
            undefined, 
            undefined, 
            "Concepción, Chile", 
            "2025-08-01", 
            "2026-01-01", 
            "https://github.com/rogandven/GestionDeElectivosISW-2025-2",
            undefined,
            "bookshelf"
        ),                          
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
        new SocialLink("GitHub", Github, "https://www.github.com/rogandven", "rogandven"),
        new SocialLink("LinkedIn", LinkedInIcon, "https://www.linkedin.com/in/rogandven", "rogandven"),
        new SocialLink("YouTube", Youtube, "https://www.youtube.com/@rogandven", "rogandven"),
    ],
};

export default DATA;