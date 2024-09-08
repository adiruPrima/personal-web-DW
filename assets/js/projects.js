function renderProjects() {
  // Retrieve projects from localStorage
  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  const projectDeck = document.getElementById("project-deck");
  projectDeck.innerHTML = "";

  let content = "";

  for (let i = 0; i < projects.length; i++) {
    let toolIcons = "";
    for (let j = 0; j < projects[i].tools.length; j++) {
      const toolIcon = `<i class="fa-brands fa-${projects[i].tools[j]} me-3"></i>`;
      toolIcons += toolIcon;
    }

    const projectCard = `
    <div class="col">
      <div class="card h-100 project-card">
        <a href="project-detail.html" class="text-decoration-none text-dark">
          <div class="card-img-top-wrapper p-3">
            <img src="${projects[i].image}" class="card-img-top" alt="project image" />
          </div>
          <div class="card-body">
            <h5 class="card-title">${projects[i].title}</h5>
            <p class="card-text"><small class="text-muted">Duration: ${projects[i].duration}</small></p>
            <p class="card-text">${projects[i].details}</p>
            <div class="tools fs-4 mb-3">${toolIcons}</div>
          </div>
        </a>
        <div class="card-footer bg-transparent border-0">
          <div class="d-flex gap-2">
            <button class="btn btn-secondary flex-grow-1" onclick="editProject(${i})">Edit</button>
            <button class="btn btn-danger flex-grow-1" onclick="deleteProject(${i})">Delete</button>
          </div>
        </div>
      </div>
    </div>
    `;
    content += projectCard;
  }
  projectDeck.innerHTML = content;
}

// Placeholder functions for edit and delete
function editProject(index) {
  console.log("Edit project at index:", index);
  // Implement edit functionality
}

function deleteProject(index) {
  console.log("Delete project at index:", index);
  // Implement delete functionality
}

// Call renderProjects on page load
document.addEventListener("DOMContentLoaded", renderProjects);
