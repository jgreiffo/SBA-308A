const API_BASE = "https://api-colombia.com/api/v1/Department";

export async function fetchDepartments() {
  const response = await fetch(API_BASE);
  return response.json();
}

export async function addDepartment(department) {
  const response = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(department),
  });
  return response.json();
}

export async function updateDepartment(id, department) {
  const response = await fetch(`${API_BASE}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(department),
  });
  return response.json();
}
