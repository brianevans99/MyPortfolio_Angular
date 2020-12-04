export class Project {
  public title: string;
  public image: string;
  public repoLink: string;
  public urlLink: string;
  public description: string;

  constructor(
    title: string,
    image: string,
    repoLink: string,
    urlLink: string,
    desc: string
  ) {
    this.title = title;
    this.image = image;
    this.repoLink = repoLink;
    this.urlLink = urlLink;
    this.description = desc;
  }
}
