import { ProjectManager } from '../JS/project-manager.js';
import { Display } from '../JS/display.js';
import { setupEventListeners } from '../JS/event-listeners.js';
import { setupDemo } from '../JS/demo.js';

let projectManager = new ProjectManager();
const display = new Display();
display.setupDisplay();
setupDemo(projectManager, display);
setupEventListeners(projectManager, display);




