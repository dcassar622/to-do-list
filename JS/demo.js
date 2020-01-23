import { List } from '../JS/list.js';
import { Project } from '../JS/project.js';

export function setupDemo(projectManager, display) 
{
  let project1 = new Project('Project 1');
  let project2 = new Project('Project 2');
  let project3 = new Project('Project 3');
  
  let list1 = new List('Buy Groceries', 'blah blah blah', 'medium');
  let list2 = new List('Check Oil Levels', 'hmmmmm', 'high');
  let list3 = new List('Buy Batteries', 'blah blah blah', 'medium');
  let list4 = new List('Get Avocados', 'yummy', 'low');
  let list5 = new List('Practice Guitar', 'Yeah baby!!', 'high');
  let list6 = new List('Meditate', 'oommmmm', 'medium');
  
  
  project1.addList(list1);
  project1.addList(list2);
  project2.addList(list3);
  project2.addList(list4);
  project3.addList(list5);
  project3.addList(list6);

  projectManager.addProject(project1);
  projectManager.addProject(project2);
  projectManager.addProject(project3);
  
  display.displayProject(project1);
  display.displayProject(project2);
  display.displayProject(project3);
}