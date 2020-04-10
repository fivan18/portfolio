let projects = [
  {
    name: "Group contributions",
    tech_stack: ["Ruby on Rails", 
                 "Bootstrap", 
                 "JavaScript",
                 "HTML",
                 "CSS"]
  },
  {
    name: "Ruby linter",
    tech_stack: ["Ruby"]
  },
  {
    name: "Grid-based framework",
    tech_stack: ["CSS",
                 "JavaScript"]
  }
];

function fillProjects(projects) {
  const containers = document.querySelectorAll(".my_item code");
  for (let i = 0; i < projects.length; i++) {
    containers[i].textContent = JSON.stringify(projects[i], undefined, 2);
  }
}

fillProjects(projects);