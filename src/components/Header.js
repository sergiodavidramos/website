import React from "react";
import { connect } from "react-redux";
import { setLanguage } from "../actions";
import "../assets/styles/components/Header.css";
import foto from "../assets/static/Spectral.png";
import bolivia from "../assets/static/bolivia.png";
import usa from "../assets/static/usa.png";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const Header = ({ location, setLanguage, header }) => {
  const pathname = location.pathname;

  const he = header[0];

  const languageI = () => {
    setLanguage({
      header: [
        {
          sobre: "About",
          trabajos: "Work",
          estudio: "Studies"
        }
      ],
      home: [
        {
          name: "Fullstack Developer",
          net1: "Let's work",
          net2: "together",
          net3: "contact me",
          arrow: "Hey, here is more about me!"
        }
      ],
      about: [
        {
          hi: "Hello,",
          text:
            "I'm Sergio David Ramos, I'm 23 years old. Fullstack developer of web apps and mobile apps from Bolivia. Software lover, autodidact, with spirit of helping people, creating technology that improves the quality of their lives.",
          skills: [
            {
              name: "Respect",
              time: 1500
            },
            {
              name: "Tolerance",
              time: 1800
            },
            {
              name: "Compromise",
              time: 2100
            },
            {
              name: "Humility",
              time: 2400
            },
            {
              name: "Responsibility",
              time: 2700
            }
          ],
          arrowLeft: "Come back to home",
          arrowRight: "Here are my works!"
        }
      ],
      comp: [
        {
          id: 1,
          name: "MiniTwitter",
          role: "Móvil developer",
          description: `I developed a mobile application imitating the famous social network consuming a API REST using google technologies asi como as well as a set of ANDROID JETPACK libraries, ROOM DATABASE for local storage use the MVVM and MVP Architecture Pattern 
              the application is RESPONSIVE therefore it adapts to any type of screen.`,
          technologies: [
            {
              technology: "Java",
              index: 1
            },
            {
              technology: "Sqlite",
              index: 2
            }
          ],
          year: "2018",
          image: "minitwitter"
        },
        {
          id: 2,
          name: "Planeta Video",
          role: "Fullstack developer",
          description: `I developed a web application to be able to watch interesting movies using the MERN stack (MongoDB, Express, 
                    React, Node.js) and also use GraphQL a much better alternative to REST, 
                    With which the creation of the Backend makes it much easier for me. Soon I will start developing the App using technologies like React Native.`,
          technologies: [
            {
              technology: "React Native",
              index: 1
            },
            {
              technology: "React",
              index: 2
            },
            {
              technology: "Node.js",
              index: 3
            },
            {
              technology: "MongoDB",
              index: 4
            },
            {
              technology: "GraphQL",
              index: 5
            },
            {
              technology: "Redux",
              index: 6
            }
          ],
          year: "2019",
          image: "planeta"
        },
        {
          id: 3,
          name: "Personal",
          role: "Fullstack and mobile developer",
          description: `I develop web, desktop, and mobile applications using technologies like Java, Angular, React.js, React Native, Node.js, Firebase, MongoDB, .NET, C#. Having the possibility of launching more than one application to production with successful results.`,
          technologies: [
            {
              technology: "Java",
              index: 1
            },
            {
              technology: "Angular.js",
              index: 2
            },
            {
              technology: "React",
              index: 3
            },
            {
              technology: "React Native",
              index: 4
            },
            {
              technology: "Node.js",
              index: 5
            },
            {
              technology: "Firebase",
              index: 6
            },
            {
              technology: "MongoDB",
              index: 7
            },
            {
              technology: ".Net",
              index: 8
            },
            {
              technology: "C#",
              index: 9
            },
            {
              technology: "Redux",
              index: 10
            },
            {
              technology: "GraphQL",
              index: 11
            }
          ],
          year: "2018",
          image: ""
        },

        {
          id: 4,
          name: "Sertec Conf",
          role: "Web developer",
          description: `I developed a website for a conference with JavaScript Vanilla and Bootstrap with all the necessary sections in addition to being responsive.`,
          technologies: [
            {
              technology: "Javascript",
              index: 1
            },
            {
              technology: "Bootstrap",
              index: 2
            }
          ],
          year: "2018",
          image: "sertec"
        },
        {
          id: 5,
          name: "Admin Hospital",
          role: "Fullstack developer",
          description: `I developed a large scale modular web application for hospital administration using the MEAN stack (MongoDB, Express, Angular, Node.js) 
              to facilitate the operation of the institution thus allowing to control the performance of each employee and carry out audits.`,
          technologies: [
            {
              technology: "Javascript",
              index: 1
            },
            {
              technology: "Bootstrap",
              index: 2
            }
          ],
          year: "2018",
          image: "sertec"
        }
      ],
      studies: [
        {
          id: 0,
          name: "Platzi and Udemy",
          image:
            "https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/32/0b/0d/320b0d42-d507-4778-308d-647ed1e93db0/UFBIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png",
          // info: "I have learned all about web programming in frontend and backend and mobile programming, focused on languages such as Javascript, Python and Kotlin. At this moment I am learning more about Python and Django.",
          infoSpanish:
            "I have practiced everything about web programming in both frontend and backend and mobile programming, focused on languages such as Javascript, Python and Kotlin. Right now I am learning more about Python and Django.",
          certificates: [
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/base-de-deatos.png?alt=media&token=c45dc404-0c49-4ec7-bb1a-0e95e2df0be0",
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/javascript-profesional.png?alt=media&token=3dddffc8-73ab-4930-ae35-b73c36e9c110",
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/github.png?alt=media&token=ca81d44a-df81-4bd1-b872-bab114706ad0",
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/seguridad.png?alt=media&token=3a317364-d1ba-4136-94f2-663fda23d999",
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/animated.png?alt=media&token=c3a7d55f-5f81-4df7-9a46-23c97279fbee",
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/frontend.png?alt=media&token=7747fb8e-9a70-48dc-8922-2b12ba15c22e",
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/react.png?alt=media&token=ebaa134f-54db-4209-a345-26fe62f158ab",
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/web-online.png?alt=media&token=53b8413a-38ce-40f5-a65e-669a417c1a3f",
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/redux.png?alt=media&token=857ba212-c4ee-4229-a86a-f8868520081d",
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/router.png?alt=media&token=0516bdb2-d3c0-4f09-a024-0428f1634f8e"
          ],
          margin: 40
        },
        {
          id: 1,
          name: "Domingo Savio",
          image: "https://portal.upds.edu.bo/Index/images/logo-upds-blanco.png",
          infoSpanish:
            "I am studying Systems Engineering at the Private Domingo Savio University in Bolivia and right now I am in the ninth semester.",
          certificates: [],
          margin: 0
        }
      ]
    });
  };

  const languageE = () => {
    setLanguage({
      header: [
        {
          sobre: "Sobre mi",
          trabajos: "Trabajos",
          estudio: "Estudios"
        }
      ],
      home: [
        {
          name: "Desarrollador Fullstack",
          net1: "Trabajemos",
          net2: "juntos",
          net3: "contactame",
          arrow: "Hey, aqui hay más sobre mi!"
        }
      ],
      about: [
        {
          hi: "Hola,",
          text:
            "Soy Sergio David Ramos, tengo 23 años. Desarrollador fullstack de aplicaciones web y aplicaciones móviles de Bolivia. Amante del software, autodidacta, con espíritu de ayudar a las personas, creando tecnología que mejore la calidad de sus vidas.",
          skills: [
            {
              name: "Respeto",
              time: 1500
            },
            {
              name: "Tolerancia",
              time: 1800
            },
            {
              name: "Compromiso",
              time: 2100
            },
            {
              name: "Humildad",
              time: 2400
            },
            {
              name: "Responsabilidad",
              time: 2700
            }
          ],
          arrowLeft: "Volver al home",
          arrowRight: "Aquí están mis trabajos!"
        }
      ],
      comp: [
        {
          id: 1,
          name: "MiniTwitter",
          role: "Desarrollador móvil",
          description: `Desarrollè una 
          aplicación móvil imitando a la famosa red social consumiendo una API REST usando las tecnologías 
          de Google asi como tambien un conjunto de librerias 
          como ANDROID JETPACK, BASE DE DATOS ROOM para el almacenamiento local, use el Patrón de arquitectura MVVM Y MVP 
          la aplicacion es RESPONSIVE por lo cual se adapta a cualquier tipo de pantalla`,
          technologies: [
            {
              technology: "Java",
              index: 1
            },
            {
              technology: "Sqlite",
              index: 2
            }
          ],
          year: "2018",
          image: "minitwitter"
        },
        {
          id: 2,
          name: "Planeta Video",
          role: "Desarrollador Fullstack",
          description: `Desarrollé una 
            aplicación web para poder ver interesantes peliculas usando el stack MERN (MongoDB, Express, 
                React, Node.js) y ademas use GraphQL una alternativa mucho mejor a REST, 
                la cual me facilito mucho la creación del Backend. Pronto comenzaré en el desarrollo de la App usando 
                tecnologias como React Native.`,
          technologies: [
            {
              technology: "React Native",
              index: 1
            },
            {
              technology: "React",
              index: 2
            },
            {
              technology: "Node.js",
              index: 3
            },
            {
              technology: "MongoDB",
              index: 4
            },
            {
              technology: "GraphQL",
              index: 5
            },
            {
              technology: "Redux",
              index: 6
            }
          ],
          year: "2019",
          image: "planeta"
        },
        {
          id: 3,
          name: "Personal",
          role: "Desarrollador móvil y web",
          description: `Desarrollé aplicaciones web, de escritorio, y aplicaciones móviles utilizando tecnologías como Java, Angular, React.js, React Native, Node.js, Firebase, MongoDB, .NET, C#. Teniendo la posibilidad de lanzar más de una aplicación a producción con resultados exitosos.`,
          technologies: [
            {
              technology: "Java",
              index: 1
            },
            {
              technology: "Angular.js",
              index: 2
            },
            {
              technology: "React",
              index: 3
            },
            {
              technology: "React Native",
              index: 4
            },
            {
              technology: "Node.js",
              index: 5
            },
            {
              technology: "Firebase",
              index: 6
            },
            {
              technology: "MongoDB",
              index: 7
            },
            {
              technology: ".Net",
              index: 8
            },
            {
              technology: "C#",
              index: 9
            },
            {
              technology: "Redux",
              index: 10
            },
            {
              technology: "GraphQL",
              index: 11
            }
          ],
          year: "2018",
          image: ""
        },

        {
          id: 4,
          name: "Sertec Conf",
          role: "Desarrollador web",
          description: `Desarrollé una 
            sitio web para una conferencia con JavaScript Vanilla y Bootstrap con todas las 
            secciones necesarias ademas de ser responsive.`,
          technologies: [
            {
              technology: "Javascript",
              index: 1
            },
            {
              technology: "Bootstrap",
              index: 2
            }
          ],
          year: "2018",
          image: "sertec"
        },
        {
          id: 5,
          name: "Admin Hospital",
          role: "Desarrollador Fullstack",
          description: `Desarrollé una 
            aplicación web modular de gran escala para la administracion de un 
            hospital usando el 
            stack MEAN (MongoDB, Express, Angular, Node.js) 
            para facilitar el funcionamiento de la institucion permitiendo asi controlar el desempeño de cada empleado y llevar adelante auditorías.`,
          technologies: [
            {
              technology: "Javascript",
              index: 1
            },
            {
              technology: "Bootstrap",
              index: 2
            }
          ],
          year: "2018",
          image: "sertec"
        }
      ],

      studies: [
        {
          id: 0,
          name: "Platzi and Udemy",
          image:
            "https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/32/0b/0d/320b0d42-d507-4778-308d-647ed1e93db0/UFBIcon-0-0-1x_U007emarketing-0-0-0-6-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/246x0w.png",
          // info: "I have learned all about web programming in frontend and backend and mobile programming, focused on languages such as Javascript, Python and Kotlin. At this moment I am learning more about Python and Django.",
          infoSpanish:
            "He practicado todo sobre programación web tanto en frontend como en backend y programación móvil, enfocado en lenguajes como Javascript, Python y Kotlin. En este momento estoy aprendiendo más sobre Python y Django.",
          certificates: [
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/base-de-deatos.png?alt=media&token=c45dc404-0c49-4ec7-bb1a-0e95e2df0be0",
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/javascript-profesional.png?alt=media&token=3dddffc8-73ab-4930-ae35-b73c36e9c110",
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/github.png?alt=media&token=ca81d44a-df81-4bd1-b872-bab114706ad0",
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/seguridad.png?alt=media&token=3a317364-d1ba-4136-94f2-663fda23d999",
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/animated.png?alt=media&token=c3a7d55f-5f81-4df7-9a46-23c97279fbee",
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/frontend.png?alt=media&token=7747fb8e-9a70-48dc-8922-2b12ba15c22e",
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/react.png?alt=media&token=ebaa134f-54db-4209-a345-26fe62f158ab",
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/web-online.png?alt=media&token=53b8413a-38ce-40f5-a65e-669a417c1a3f",
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/redux.png?alt=media&token=857ba212-c4ee-4229-a86a-f8868520081d",
            "https://firebasestorage.googleapis.com/v0/b/website-b1d1f.appspot.com/o/router.png?alt=media&token=0516bdb2-d3c0-4f09-a024-0428f1634f8e"
          ],
          margin: 40
        },
        {
          id: 1,
          name: "Domingo Savio",
          image: "https://portal.upds.edu.bo/Index/images/logo-upds-blanco.png",
          info:
            "I'm studying software engineering in the university Unipanamericana in Bogotá, Colombia and right now i'm in eighth semester.",
          infoSpanish:
            "Estoy estudiando Ingenieria de Sistemas en la univerdad Privada Domingo Savio en Bolivia y justo ahora estoy en noveno semestre.",
          certificates: [],
          margin: 0
        }
      ]
    });
  };
  return (
    <header className="Header">
      <div className="Links-container">
        <div className="Link-container">
          <Link to="/">
            <img src={foto} alt="Mi foto" className="Logo" />
          </Link>
          <hr className={pathname === "/" ? "Link-line" : "Link-line-hide"} />
        </div>

        <div className="Link-container">
          <Link
            className={`Links-link ${
              pathname === "/about" ? "Link-active" : ""
            }`}
            to="/about"
          >
            {he.sobre}
          </Link>
          <hr
            className={pathname === "/about" ? "Link-line" : "Link-line-hide"}
          />
        </div>
        <div className="Link-container">
          <Link
            className={`Links-link ${
              pathname === "/work" ? "Link-active" : ""
            }`}
            to="/work"
          >
            {he.trabajos}
          </Link>
          <hr
            className={pathname === "/work" ? "Link-line" : "Link-line-hide"}
          />
        </div>
        <div className="Link-container">
          <Link
            className={`Links-link ${
              pathname === "/studies" ? "Link-active" : ""
            }`}
            to="/studies"
          >
            {he.estudio}
          </Link>
          <hr
            className={pathname === "/studies" ? "Link-line" : "Link-line-hide"}
          />
        </div>
      </div>

      <div className="LanguageContianer">
        <img
          className="LanguageFlag"
          src={bolivia}
          alt="Español"
          onClick={languageE}
        />
        <img
          className="LanguageFlag"
          src={usa}
          alt="Ingles"
          onClick={languageI}
        />
      </div>
    </header>
  );
};
const mapStateToProps = state => {
  return {
    header: state.info.header
  };
};
const mapDispatchToPorps = {
  setLanguage
};

export default connect(mapStateToProps, mapDispatchToPorps)(withRouter(Header));
