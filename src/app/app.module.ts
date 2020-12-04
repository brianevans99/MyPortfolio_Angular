//Angular dependency imports
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";

// other dependency imports
import { MatVideoModule } from "mat-video";
import { AngularFontAwesomeModule } from "angular-font-awesome";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatSliderModule } from "@angular/material/slider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

// page imports
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./pages/homepage/homepage.component";
import { PortfolioComponent } from "./pages/portfolio/portfolio.component";
import { ResumeComponent } from "./pages/resume/resume.component";
import { ContactpageComponent } from "./pages/contactpage/contactpage.component";

// component imports
import { HeaderComponent } from "./components/header/header.component";
import { AvatarComponent } from "./components/avatar/avatar.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { InfoComponent } from "./components/info/info.component";
import { VideoComponent } from "./components/video/video.component";
import { EducationComponent } from "./components/education/education.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { InterestsComponent } from "./components/interests/interests.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { SocialComponent } from "./components/social/social.component";
import { ContactComponent } from "./components/contact/contact.component";
import { SocialListComponent } from "./components/social/social-list/social-list.component";
import { ContactformComponent } from "./components/contactform/contactform.component";
import { BasicFormComponent } from "./components/contactform/basic-form/basic-form.component";

const appRoutes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "portfolio", component: PortfolioComponent },
  { path: "resume", component: ResumeComponent },
  { path: "contact", component: ContactpageComponent },
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
    InfoComponent,
    VideoComponent,
    EducationComponent,
    ExperienceComponent,
    InterestsComponent,
    ProjectsComponent,
    SocialComponent,
    ContactComponent,
    SocialListComponent,
    ContactpageComponent,
    ContactformComponent,
    BasicFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatVideoModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSliderModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
