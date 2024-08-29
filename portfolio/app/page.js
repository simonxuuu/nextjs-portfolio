import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 className="name">Hi! I'm Andrew</h1>
      <h2 className="name-description">I'm a high school senior studying Computer Science, and a part time <strong>Fullstack Software Engineer.</strong> I love building user friendly applications, learning new technologies, and collaborating on projects.</h2>
      <div className="links">
        <span>
          andrewmillercode@gmail.com
        </span>
        <Link href="//www.google.com"><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-64.png" width="25" height="25" alt="Google" /></Link>
        <Link href="//www.google.com"><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-64.png" width="25" height="25" alt="Google" /></Link>
        <Link href="//www.google.com"><img src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-64.png" width="25" height="25" alt="Google" /></Link>
        
      </div>

      <img src="https://andrewmillercode.github.io/Portfolio/arrow.png" className="arrowthing" margin-top="5vw" width="94" height="88" alt="Swimming fish" />

      <h3 className="experience">Experience</h3>

      <div className="experience-cards">

        <div className="card">
          <span className="project">
          Codigo

          </span>
          <span className="role">
          Founding Software Engineer

          </span>
          <span className="project-desc">
          Created a platform to help others learn how to code in a fun and efficient way.
          </span>
          <div className="image">
          <img src="//www.html.am/images/html-codes/marquees/fish-swimming.gif" className="card-image" alt="Swimming fish" />

    
          </div>
        </div>

        <div className="card">
          <span className="project">
          Codigo

          </span>
          <span className="role">
          Founding Software Engineer

          </span>
          <span className="project-desc">
          Created a platform to help others learn how to code in a fun and efficient way.
          </span>
          <div className="image">
          <img src="//www.html.am/images/html-codes/marquees/fish-swimming.gif"className="card-image"  alt="Swimming fish" />


          </div>
        </div>
        <div className="card">
          <span className="project">
          Codigo

          </span>
          <span className="role">
          Founding Software Engineer

          </span>
          <span className="project-desc">
          Created a platform to help others learn how to code in a fun and efficient way.
          </span>
          <div className="image">
          <img src="//www.html.am/images/html-codes/marquees/fish-swimming.gif" className="card-image" alt="Swimming fish" />

    
          </div>
 
        </div>
        
      </div>
      <h2 className="tech-stack">My Tech Stack</h2>
      <marquee behavior="scroll" direction="left">Some Tech Stack Python NextJS ETC</marquee>
      <footer>
      You've made it to the end! Thanks for checking out my portfolio. If you'd like to see more of my work or connect with me, feel free to visit: 
      <Link href="https://symmetrical-robot-jjj4xw99r6g725q9g.github.dev/">LinkedIn</Link>
      <Link href="https://symmetrical-robot-jjj4xw99r6g725q9g.github.dev/">Github</Link>
      <Link href="https://symmetrical-robot-jjj4xw99r6g725q9g.github.dev/">Resume</Link>
      </footer>

    </main>
  );
}
