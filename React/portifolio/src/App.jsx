import './App.css'
import Button from './UIComponents/Button';
import Header from './UIComponents/Header/Header'
import TimelineComponent from './UIComponents/TimelineComponent/TimelineComponent';
import SpiderImage from './assets/spiderman.jpg'

  import {
  Braces,
  Atom,
  Code,
  Database,
  Server,
  GitBranch,
  Cloud,
  Settings
} from "lucide-react";

function App() {

  const name = "Dinesh Sripathi"


  const skillSet = [
      // Backend
      { icon: <Braces />, name: "Java" },
      { icon: <Server />, name: "Spring Boot" },
      { icon: <Code />, name: "Hibernate / JPA" },
      { icon: <Server />, name: "REST APIs" },
      { icon: <Server />, name: "Microservices" },
      { icon: <Code />, name: "Python" },
      { icon: <Code />, name: "Django" },

      // Frontend
      { icon: <Atom />, name: "React.js" },
      { icon: <Code />, name: "JavaScript" },
      { icon: <Code />, name: "HTML" },
      { icon: <Code />, name: "CSS" },
      { icon: <Atom />, name: "Redux" },
      { icon: <Atom />, name: "Context API" },

      // Database
      { icon: <Database />, name: "MySQL" },
      { icon: <Database />, name: "PostgreSQL" },
      { icon: <Database />, name: "MongoDB" },

      // DevOps & Tools
      { icon: <GitBranch />, name: "Git" },
      { icon: <GitBranch />, name: "GitHub" },
      { icon: <Settings />, name: "Postman" },
      { icon: <Settings />, name: "CI/CD Pipelines" },
      { icon: <Settings />, name: "Docker (Basic)" },
      { icon: <Settings />, name: "Jenkins (Basic)" },
      { icon: <Settings />, name: "Linux / Shell Scripting" },

      // Cloud
      { icon: <Cloud />, name: "AWS EC2" },
      { icon: <Cloud />, name: "AWS S3" },
      { icon: <Cloud />, name: "AWS IAM" },
  ];

  const projects = [
    {
      name: "Contact Management App",
      image: "/projects/cms.png",
      description: "Full-stack contact management system with add/view/edit/search/delete features and a responsive UI.",
      skills: ["React.js", "JavaScript", "HTML", "CSS", "REST APIs"],
      githubUrl: "https://github.com/yourusername/contact-management", // optional
      liveUrl: "https://bdcontactmanagementapp.netlify.app"
    },
    {
      name: "Chat Bro - AI Chat BOT",
      image: "/projects/chatbro.png",
      description: "AI-powered chatbot app with React frontend that integrates an external text API for intelligent responses.",
      skills: ["React.js", "JavaScript", "API Integration", "CSS"],
      githubUrl: "https://github.com/yourusername/chat-bro",
      liveUrl: "https://chatbromodel.netlify.app"
    },
    {
      name: "Burgeroo",
      image: "/projects/burgeroo.png",
      description: "Responsive web app for burger lovers featuring browsing, ordering and table booking interactions.",
      skills: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/yourusername/burgeroo",
      liveUrl: "https://burgeroo.netlify.app"
    },
    {
      name: "CloudVista Weather App",
      image: "/projects/cloudvista.png",
      description: "Weather dashboard showing real-time weather data like temperature, humidity, wind speed, and forecasts.",
      skills: ["React.js", "JavaScript", "HTML", "CSS", "API Integration"],
      githubUrl: "https://github.com/yourusername/cloudvista",
      liveUrl: "https://cloudvistarjs.netlify.app"
    },
    {
      name: "OrganicWebpage",
      image: "/projects/organicwebpage.png",
      description: "Clean and modern e-commerce platform for organic products with responsive design.",
      skills: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/yourusername/organicwebpage",
      liveUrl: "https://organicwebpage.netlify.app"
    },
    {
      name: "ALCAMI Website",
      image: "/projects/alcami.png",
      description: "Modern wellness e-commerce web interface featuring focus and energy products.",
      skills: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/yourusername/alcamiwebsite",
      liveUrl: "https://alcamiwebsite.netlify.app"
    },
    {
      name: "To Do List (React)",
      image: "/projects/todolist.png",
      description: "Task management app with add/edit/delete tasks and responsive layout.",
      skills: ["React.js", "JavaScript", "CSS"],
      githubUrl: "https://github.com/yourusername/todolist-react",
      liveUrl: "https://cloudvistajs.netlify.app"
    }
  ];

  const experienceList = [
    {
      logo : 'https://digitalbrolly.com/wp-content/uploads/2020/05/Digital-Marketing-Training-in-Hyderabad-102x69.png',
      role: "Software Developer",
      company: "Digital Brolly Software Solutions",
      location: "Hyderabad, Telangana",
      duration: "Dec 2024 – Present",
      description:
        "Working on production-grade backend systems and APIs. Focused on performance optimization, secure authentication, and scalable microservices architecture.",
      skills: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "JWT Authentication",
        "Microservices",
        "MySQL",
        "Performance Optimization",
        "CI/CD",
        "GitHub"
      ]
    },
    {
      logo : 'https://www.paritechsoft.com/assets/images/logo.png',
      role: "Software Developer",
      company: "PariTechSoft Pvt. Ltd.",
      location: "Hyderabad, Telangana",
      duration: "May 2024 – Nov 2024",
      description:
        "Developed and maintained full-stack applications with Java and React. Built secure REST APIs, resolved production issues, and collaborated in Agile teams.",
      skills: [
        "Java",
        "Spring Boot",
        "Hibernate",
        "React.js",
        "REST APIs",
        "JWT Authentication",
        "MySQL",
        "Agile / Scrum",
        "Debugging"
      ]
    }
  ];


  const educationList = [
    {
      logo : 'https://vignaniit.edu.in/images/LOGO_AAA%20copy.png',
      degree: "Master of Computer Applications (MCA)",
      institution: "Vignan’s Institute of Information Technology",
      location: "Andhra Pradesh, India",
      duration: "Feb 2021 – Oct 2022",
      description:
        "Postgraduate program focused on software development, object-oriented programming, databases, and modern web technologies.",
      skills: [
        "Java",
        "Object-Oriented Programming",
        "Data Structures",
        "Database Management Systems",
        "Software Engineering",
        "Web Development"
      ]
    },
    {
      logo : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Gr8jri7Voi-b0cZiLBIEiSNz0ipQoSvVKQ&s',
      degree: "Bachelor of Science (B.Sc)",
      institution: "SSR Degree College",
      location: "Andhra Pradesh, India",
      duration: "Jul 2017 – Jan 2021",
      description:
        "Undergraduate degree with a strong foundation in computer science fundamentals, programming, and analytical thinking.",
      skills: [
        "Programming Fundamentals",
        "Problem Solving",
        "Computer Science Basics",
        "Analytical Thinking"
      ]
    }
  ];




  /* 
    map -- returns a duplicate array. --> return <ele> {value} </ele>
  */

    // function evenOrOdd(number){
    //   // let number = 4
    //   if(number%2 == 0){
    //     console.log(number,"Even number")
    //   }else{
    //     console.log(number,"odd number")
    //   }
    // }

    // evenOrOdd(3)
    // evenOrOdd(4)
    // evenOrOdd(5)
    // evenOrOdd(6)
    // evenOrOdd(7)
    // evenOrOdd(8)

    /* 
      object destructuring
    */

      // const sample = {
      //   userName : "Tony Stark",
      //   age : 37
      // }

      // const {age, userName} = sample

      // console.log(sample)
      // console.log(age)
      // console.log(userName)

  return (
    <>
      <Header></Header>
      <main>
        <section className="hero">
          
          <div className="hero-image">
            <img src={SpiderImage} alt="Dinesh Sripathi" />
          </div>

          <div className="hero-content">
            <h1>Hello</h1>
            <h3>A bit about {name}</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              voluptatum unde repudiandae assumenda sed eligendi omnis necessitatibus
              vero a reiciendis ad, perferendis quibusdam distinctio dolor ullam
              aspernatur, soluta, ut nihil.
            </p>

            {/* when you are using list to print the data. Then you will get key error --> we have to give unquie value as key */}
            <div className="hero-actions">
              {['Projects', 'Services', 'Skills'].map((action, index) => <a key={action+index} href="">{action}</a>)}
            </div>
          </div>

        </section>
        <section className="skills">
          <h2 className="skills-title">Skills</h2>

          <div className="skills-grid">
            {skillSet.map(
              (item, index) => (
                <div className="skill-card" key={item + index}>
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              )
            )}
          </div>
        </section>

        <section className="projects">
          <h2 className="projects-title">Projects</h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={project.name + index}>

                <div className="project-image">
                  <img src={project.image} alt={project.name} />
                </div>

                <div className="project-content">
                  <h3 className="project-name">{project.name}</h3>

                  <div className="project-skills">
                    {project.skills.map((skill, index) => (
                      <span key={skill + index}>{skill}</span>
                    ))}
                  </div>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank">Github</a>
                    <a href={project.liveUrl} target="_blank">Live Demo</a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>
        
        {/* experience */}
        <TimelineComponent title='Experience' dataList={experienceList}></TimelineComponent>

        {/* education */}
        <TimelineComponent title="Education" dataList={educationList}></TimelineComponent>


      </main>
    </>
  )
}

export default App
