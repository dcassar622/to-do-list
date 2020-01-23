import { List } from './list.js';
import { Project } from '../JS/project.js';

export function setupEventListeners(projectManager, display) {
  const pageWrapper = document.getElementById('page-wrapper');
  pageWrapper.addEventListener('click', (event) => {
  let buttonType = event.target.className;
  
  if (buttonType === 'new-project-btn') {
    let projectName = prompt("New Project Name");
    let newProject = new Project(projectName);
    projectManager.addProject(newProject);
    display.displayProject(newProject);
  }
  else if (buttonType === 'add-list-btn') {
    let chosenProject = event.target.dataset.key;

    let newListTitle = prompt('Item Name');
    let newListDescription = prompt('Item Description');
    let newListPriority = prompt('Item Priority (low / medium / high');

    setPriorityClassName(newListPriority);

    let newList = new List(newListTitle, newListDescription, newListPriority);
    
    projectManager.projectArray.forEach(project => {
      if (chosenProject === project.name) {
        project.addList(newList);
        display.clearDisplay();
        display.updateDisplay(projectManager);
      }
    })
  }
  else if (buttonType === 'remove-list-btn') {
    let chosenList = event.target.dataset.key;
    let relatedProject = event.target.parentNode.parentNode.dataset.key;
  
    projectManager.projectArray.forEach(project => {
      if (relatedProject === project.name) {
        project.projectItems.forEach(item => {
          if (item.title === chosenList) {
            project.removeList(item);
          }
        })
        display.clearDisplay();
        display.updateDisplay(projectManager);
        }
    })
  }
  else if (buttonType === 'del-project-btn') {
    let chosenProject = event.target.dataset.key;
  
    projectManager.projectArray.forEach(project => {
      if (chosenProject === project.name) {
           projectManager.deleteProject(project);
          }
        })
      display.clearDisplay();
      display.updateDisplay(projectManager);
    }
  })
}



function setPriorityClassName(priority) {
  if (priority === 'low')
  {
    priority.className = 'list-priority low';
  }
  else if (priority === 'medium')
  {
    priority.className = 'list-priority medium';
  }
  if (priority === 'high')
  {
    priority.className = 'list-priority high';
  }
}
