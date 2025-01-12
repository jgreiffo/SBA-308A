export function renderDepartments(departments) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = departments
      .map(
        (dept) => `
      <div class="card">
        <h2>${dept.name}</h2>
        <p>Population: ${dept.population}</p>
      </div>`
      )
      .join("");
  }
  
  export function clearInput() {
    document.getElementById("search").value = "";
  }
  