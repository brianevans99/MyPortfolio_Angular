// skill template
export class Skill {
  public skillName: string;
  public imagePath: string;

  constructor(name: string, path: string) {
    this.skillName = name;
    this.imagePath = path;
  }
}
