const API_BASE = "https://api-colombia.com/api/v1/Department";

async function fetchDepartments() {
  try {
    const response = await fetch(API_BASE);
    if (!response.ok) {
      throw new Error(`Error fetching departments: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch departments:", error);
    throw error;
  }
}

async function addDepartment(department) {
  try {
    const response = await fetch(API_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(department),
    });
    if (!response.ok) {
      throw new Error(`Error adding department: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to add department:", error);
    throw error;
  }
}

async function updateDepartment(id, department) {
  try {
    const response = await fetch(`${API_BASE}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(department),
    });
    if (!response.ok) {
      throw new Error(`Error updating department: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to update department:", error);
    throw error;
  }
}

export { fetchDepartments, addDepartment, updateDepartment };
