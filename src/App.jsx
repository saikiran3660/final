import React, { useEffect } from "react";
import "./App.css";
import "aos/dist/aos.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  useEffect(() => {
    import("aos").then((AOS) => AOS.init({ duration: 1000, once: true }));
  }, []);

  const tasks = [
    { id: 1, title: "Task 1 : Expectation Document", path: "/task1/index.html" },
    { id: 2, title: "Task 2: Basic HTML Styling", path: "/task2/indexss.html" },
    { id: 3, title: "Task 3: CSS Hover", path: "/task3/HTMLPage2.html" },
    { id: 4, title: "Task 4: Welcome to JS", path: "/task4/index.html" },
    { id: 5, title: "Task 5: Calculator with JS", path: "/task5/jan30as2.html" },
    { id: 6, title: "Task 6: GitHub Integration", path: "/task6/index.html" },
    { id: 7, title: "Task 7: Console Output", path: "/task7/console.js" },
    { id: 8, title: "Task 8: String Operation", path: "/task8/feb4.html" },
    { id: 9, title: "Task 9: Conditions", path: "/task9/day5.html" },
    { id: 10, title: "Task 10: Call-Stack with Array", path: "/task10/day5_2.html" },
    { id: 11, title: "Task 11: Star with Loops", path: "/task11/feb11.html" },
    { id: 12, title: "Task 12: Class Work", path: "/task12/feb13.html" },
    { id: 13, title: "Task 13: Class Work - Objects", path: "/task13/feb18.html" },
    { id: 14, title: "Task 14: Class Work - Objects 2", path: "/task14/feb20.html" },
    { id: 15, title: "Task 14b: Class Work - Functions", path: "/task14b/feb25.html" },
    { id: 16, title: "Task 15: Class Work - Class & Bootstrap", path: "/task15/mar11task.html" },
    { id: 17, title: "Task 15b: Age Calculator", path: "/task15b/mar11.html" },
    { id: 18, title: "Task 16: Class Work - JSON", path: "/task16/mar13.html" },
  ];

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <h1>S</h1>
          <p>
            Sai Kiran Akireddy
            <br />
            Web Developer
          </p>
        </div>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#work">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/saikiran-varma" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Home, About, Experience, Education, Skills, Work, and Contact Sections */}
        <section id="work" className="section" data-aos="fade-up">
          <h2>Projects</h2>
          <div className="task-buttons">
            {tasks.map(task => (
              <a
                key={task.id}
                href={task.path} // Corrected the paths to start with "/"
                target="_blank"
                rel="noopener noreferrer"
                className="task-button"
              >
                {task.title}
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
