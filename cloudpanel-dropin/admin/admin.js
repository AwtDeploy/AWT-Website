const API = "/api/cms.php";

async function cms(action, payload) {
  const options = payload
    ? {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "same-origin",
        body: JSON.stringify({ action, ...payload }),
      }
    : { method: "GET", credentials: "same-origin" };
  const url = payload ? API : `${API}?action=${encodeURIComponent(action)}`;
  const response = await fetch(url, options);
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.error || "Request failed");
  }
  return data;
}

window.AwtCms = { cms };
