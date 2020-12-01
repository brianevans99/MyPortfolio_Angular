import { Component, OnInit } from "@angular/core";
import { Experience } from "../experience.model";

@Component({
  selector: "app-experience-list",
  templateUrl: "./experience-list.component.html",
  styleUrls: ["./experience-list.component.css"],
})
export class ExperienceListComponent implements OnInit {
  experiences: Experience[] = [
    new Experience(
      "Bravo Echo Web Development",
      "Sole proprietor - Designing and managing local business websites and ad campaigns"
    ),
    new Experience(
      "Design Options",
      "Partnership - Maintained ecommerce presence using Shopify and WooCommerce"
    ),
    new Experience(
      "Southeastern Engineering, Inc.",
      "Managed federally funded GDOT projects for local government clients within the state.  Recorded and managed database updates for project/client tracking purposes, and hosted monthly teleconferences with involved parties."
    ),
  ];
  constructor() {}

  ngOnInit() {}
}
