import { Component, OnInit } from "@angular/core";
import { Icon } from "../social.model";

@Component({
  selector: "app-social-list",
  templateUrl: "./social-list.component.html",
})
export class SocialListComponent implements OnInit {
  icons: Icon[] = [
    new Icon(
      "https://www.github.com/brianevans99",
      "text-yellow-600 hover:text-yellow-800",
      "fab fa-github-alt"
    ),
    new Icon(
      "https://www.linkedin.com/in/brianevans99",
      "text-blue-600 hover:text-blue-800",
      "fab fa-linkedin-in"
    ),
    new Icon(
      "https://www.instagram.com/brian_evans99",
      "text-pink-600 hover:text-pink-800",
      "fab fa-instagram"
    ),
    new Icon(
      "https://www.facebook.com/brianevans99",
      "text-blue-800 hover:text-blue-900",
      "fab fa-facebook-square"
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
