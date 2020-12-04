import { Component, OnInit } from "@angular/core";
import { Project } from "./project.model";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
})
export class ProjectsComponent implements OnInit {
  tailwind = {
    baseCSS: "cursor-pointer bg-black",
    hover:
      "transition duration-200 ease-in-out hover:bg-gray-900 hover:scale-105 transform",
  };

  projects: Project[] = [
    new Project(
      "Bravo Echo Web Development",
      "../../../assets/images/BElogo.png",
      "https://github.com/brianevans99/BravoEcho",
      "http://www.bravoechoweb.com",
      "As a sole proprietor, my passion is to provide small businesses with a web presence that is eye-catching, marketable and affordable. Built with NodeJS, React and a few CSS tricks."
    ),
    new Project(
      "Travel Experience Co.",
      "../../../assets/images/tec.jpg",
      "https://github.com/brianevans99/TravelExperienceCo",
      "http://www.travelexperienceco.com",
      "This project was a private client website makeover.  Built with React and TailwindCSS, this single-page applicaiton appeals to and is marketed towards the travel seeker."
    ),
    new Project(
      "React Resort Hotel",
      "../../../assets/images/reactResort.jpg",
      "https://github.com/brianevans99/ReactResort",
      "https://reactresort.herokuapp.com/",
      "A React website project displaying hotel room options and includes a sorting function.  Built using Node.js, this site employs API calls from Contentful.com to retrieve stored data."
    ),
    new Project(
      "Developer Connector",
      "../../../assets/images/showcase.jpg",
      "https://github.com/brianevans99/DeveloperConnector",
      "https://developer-react.herokuapp.com/",
      "A fully deployed MERN stack project where users can login and interact with personal profiles and message posting."
    ),
    new Project(
      "Boys to Men",
      "../../../assets/images/BoysToMen.JPG",
      "https://github.com/brianevans99/BoysToMen",
      "http://www.boystomen.faith",
      "A client website designed as part of a non-profit donation. Built with React and uses the Bootstrap and Styled Components packages for styling, as well as consuming an API for random verse display."
    ),
    new Project(
      "Sidelines Grille",
      "../../../assets/images/sidelinesGrille.jpg",
      "",
      "http://www.sidelinesgrillehollysprings.com",
      "A Wordpress designed and hosted website for a local restaurant in Holly Springs, GA"
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
