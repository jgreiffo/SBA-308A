export function renderDepartments(departments) {
    const gallery = document.getElementById("gallery");
    try {
      gallery.innerHTML = departments
        .map(
          (dept) => `
        <div class="card">
          <h2>${dept.name}</h2>
          <p>Population: ${dept.population}</p>
        </div>`
        )
        .join("");
    } catch (error) {
      console.error("Failed to render departments:", error);
      gallery.innerHTML = "<p>Failed to load departments. Please try again later.</p>";
    }
  }
  
  export function displayError(message) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = `<p class="error">${message}</p>`;
  }
  
  export function clearInput() {
    try {
      document.getElementById("search").value = "";
    } catch (error) {
      console.error("Failed to clear input field:", error);
    }
  }
  