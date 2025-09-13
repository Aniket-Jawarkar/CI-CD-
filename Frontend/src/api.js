const API_BASE = "http://localhost:8080/api";

export async function getProjects() {
  const res = await fetch(`${API_BASE}/projects`);
  return res.json();
}

export async function addProject(project) {
  const res = await fetch(`${API_BASE}/projects`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project)
  });
  return res.json();
}
