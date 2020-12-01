import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { ResumeComponent } from "./pages/resume/resume.component";
import { HeaderComponent } from "./components/header/header.component";
import { AvatarComponent } from "./components/avatar/avatar.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { SkillsListComponent } from "./components/skills/skills-list/skills-list.component";
import { RouterModule, Routes } from "@angular/router";
import { InfoComponent } from "./components/info/info.component";
import { VideoComponent } from "./components/video/video.component";
import { EducationComponent } from "./components/education/education.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { InterestsComponent } from "./components/interests/interests.component";
import { InterestsListComponent } from "./components/interests/interests-list/interests-list.component";
import { ExperienceListComponent } from "./components/experience/experience-list/experience-list.component";
import { EducationListComponent } from "./components/education/education-list/education-list.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ProjectListComponent } from "./components/projects/project-list/project-list.component";
import { SocialComponent } from "./components/social/social.component";
import { ContactComponent } from "./components/contact/contact.component";

import { AngularFontAwesomeModule } from "angular-font-awesome";

const appRoutes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "resume", component: ResumeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PortfolioComponent,
    ResumeComponent,
    HeaderComponent,
    AvatarComponent,
    SkillsComponent,
    SkillsListComponent,
    InfoComponent,
    VideoComponent,
    EducationComponent,
    ExperienceComponent,
    InterestsComponent,
    InterestsListComponent,
    ExperienceListComponent,
    EducationListComponent,
    ProjectsComponent,
    ProjectListComponent,
    SocialComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
