import { fetchDepartments, addDepartment } from "./api.js";
import { renderDepartments, displayError, clearInput } from "./ui.js";

async function loadDepartments() {
  try {
    const departments = await fetchDepartments();
    renderDepartments(departments);
  } catch (error) {
    displayError("Could not load departments. Please refresh or try again later.");
  }
}

document.getElementById("search").addEventListener("input", async (e) => {
  const query = e.target.value.toLowerCase();
  try {
    const departments = await fetchDepartments();
    const filtered = departments.filter((dept) =>
      dept.name.toLowerCase().includes(query)
    );
    renderDepartments(filtered);
  } catch (error) {
    displayError("Error occurred while searching. Please try again.");
  }
});

document.getElementById("add-btn").addEventListener("click", async () => {
  const name = prompt("Enter department name:");
  const population = prompt("Enter population:");
  if (!name || !population) {
    alert("Both name and population are required to add a department.");
    return;
  }

  try {
    const newDepartment = await addDepartment({ name, population });
    alert(`Added successfully: ${newDepartment.name}`);
    loadDepartments();
  } catch (error) {
    alert("Failed to add department. Please try again later.");
  }
});

// Initial load
loadDepartments();
