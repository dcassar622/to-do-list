export class ProjectManager {
  constructor() {
    this.projectArray = [];
  }

  addProject(project) {
    this.projectArray.push(project);
  }

  deleteProject(project) {
    for (let i=0; i<this.projectArray.length; i++) {
      if (this.projectArray[i].name === project.name) {
        this.projectArray.splice(i, 1);
      }
    }
  }
}

