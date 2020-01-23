export class Project {
  constructor(name) {
    this.projectItems = [];
    this.name = name;
  }

  addList(list) {
    this.projectItems.push(list);
  }

  removeList(list) {
    for (let i=0; i<this.projectItems.length; i++) {
      if (this.projectItems[i].title === list.title) {
        this.projectItems.splice(i, 1);
      }
    }
  }
}
