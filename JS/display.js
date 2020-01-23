export class Display {
  constructor() {

  }

  setupDisplay() {
    const todoSection = document.getElementById('todo-section');
    const headerSection = document.getElementById('header-section');

    let newProjectBtn = document.createElement('button');
    newProjectBtn.className = 'new-project-btn';
    newProjectBtn.innerHTML = 'Create New Project';
    headerSection.appendChild(newProjectBtn);
  }

  clearDisplay() {
    const todoSection = document.getElementById('todo-section');
    while (todoSection.firstChild) {
      todoSection.removeChild(todoSection.firstChild);
    }
  }

  updateDisplay(projectManager) {
    projectManager.projectArray.forEach(project => this.displayProject(project))
  }

  displayProject(project) {
    let projectDiv = document.createElement('div');
    projectDiv.className = 'project-div';
    projectDiv.setAttribute('data-key', project.name);

    let projectName = document.createElement('h3');
    projectName.id = 'project-name';
    projectName.textContent = project.name;

    let addListBtn = document.createElement('button');
    addListBtn.innerHTML = 'Add New Item';
    addListBtn.className = 'add-list-btn';
    addListBtn.setAttribute('data-key', project.name);

    projectDiv.appendChild(projectName);
    projectDiv.appendChild(addListBtn);


    project.projectItems.forEach(list => {
      let listDiv = document.createElement('div');
      listDiv.className = 'list-div';
      listDiv.setAttribute('data-key', list.title)

      let listTitle = document.createElement('p');
      listTitle.className = 'list-title';
      listTitle.textContent = list.title;

      let listDescription = document.createElement('p');
      listDescription.className = 'list-description';
      listDescription.textContent = list.description;

      let listPriority = document.createElement('p');
      listPriority.className = 'list-priority';
      listPriority.textContent = list.priority;

      let listCompleted = document.createElement('input');
      listCompleted.setAttribute('type', 'checkbox');
      listCompleted.className = 'list-completed';

      let removeListBtn = document.createElement('button');
      removeListBtn.innerHTML = 'Remove Item';
      removeListBtn.className = 'remove-list-btn';
      removeListBtn.setAttribute('data-key', list.title);
  

      listDiv.appendChild(listTitle);
      listDiv.appendChild(listDescription);
      listDiv.appendChild(listPriority);
      listDiv.appendChild(listCompleted);
      listDiv.appendChild(removeListBtn);

      projectDiv.appendChild(listDiv);
    }) 

    const todoSection = document.getElementById('todo-section');
    todoSection.appendChild(projectDiv);
  }
}