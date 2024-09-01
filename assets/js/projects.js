const projects = [];

function addProject(event) {
  event.preventDefault();

  const projectName = document.getElementById("project-name").value;
  const projectStartDate = document.getElementById("start-date").value;
  const projectEndDate = document.getElementById("end-date").value;
  const projectDescription = document.getElementById("description").value;
  const projectTech = document.querySelectorAll("input[name='tech']:checked");
  const projectImage = document.getElementById("imageUpload");

  // Get project duration

  const startDateInMs = new Date(projectStartDate);
  const endDateInMs = new Date(projectEndDate);
  let projectDurationNum = endDateInMs - startDateInMs;
  projectDurationNum = projectDurationNum / (1000 * 60 * 60 * 24); // calculated from ms to days
  // formatting duration string
  let projectDuration = "";
  if (projectDurationNum / 365 >= 1) {
    const years = Math.floor(projectDurationNum / 365);
    projectDuration += years + " years ";
    projectDurationNum -= 365 * years;
  }
  if (projectDurationNum / 30 >= 1) {
    const months = Math.floor(projectDurationNum / 30);
    projectDuration += months + " months ";
    projectDurationNum -= 30 * months;
  }
  projectDuration += Math.floor(projectDurationNum) + " days";

  // Get project technologies used

  const projectTechArray = [];
  projectTech.forEach((tech) => {
    projectTechArray.push(tech.value);
  });

  // Get project image

  const projectImageBlob = URL.createObjectURL(projectImage.files[0]);

  // console.log(projectName);
  // console.log(projectDuration);
  // console.log(projectDescription);
  // console.log(projectTechArray);
  // console.log(projectImageBlob);

  const data = {
    title: projectName,
    duration: projectDuration,
    details: projectDescription,
    tools: projectTechArray,
    image: projectImageBlob,
  };

  projects.push(data);
  renderProjects();
}

function renderProjects() {
  const projectDeck = document.getElementById("project-deck");
  projectDeck.innerHTML = "";

  let content = "";

  for (let i = 0; i < projects.length; i++) {
    let toolIcons = "";
    for (let j = 0; j < projects[i].tools.length; j++) {
      const toolIcon = `<i class="fa-brands fa-${projects[i].tools[j]}"></i>`;
      toolIcons += toolIcon;
    }

    const projectCard = `
    <a href="project-detail.html">
      <div class="project-card">
        <img src="${projects[i].image}" alt="project image" />
        <h3 class="title">${projects[i].title}</h3>
        <p class="duration">duration: ${projects[i].duration}</p>
        <p class="details">${projects[i].details}</p>
        <div class="tools">${toolIcons}</div>
        <div class="buttons">
          <button id="editBtn">Edit</button>
          <button id="deleteBtn">Delete</button>
        </div>
      </div>
    </a> 
    `;
    content += projectCard;
  }
  projectDeck.innerHTML = content;
}
