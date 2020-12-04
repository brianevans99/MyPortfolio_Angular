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
      "text-yellow-600",
      "github"
    ),
    new Icon(
      "https://www.linkedin.com/in/brianevans99",
      "text-blue-600",
      "linkedin"
    ),
    new Icon(
      "https://www.instagram.com/brian_evans99",
      "text-pink-600",
      "instagram"
    ),
    new Icon(
      "https://www.facebook.com/brianevans99",
      "text-blue-800",
      "facebook"
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
