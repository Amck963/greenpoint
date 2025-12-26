const sitesEl = document.getElementById("sites");

function renderSites(sites) {
  sitesEl.innerHTML = "";
  for (const s of sites) {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <h3>${s.title}</h3>
      <p><b>Type:</b> ${s.type}</p>
      <p><b>Amenities:</b> ${Object.keys(s.amenities || {}).filter(k => s.amenities[k]).join(", ") || "—"}</p>
      <p class="hint">${s.description || ""}</p>
    `;
    sitesEl.appendChild(div);
  }
}

// For now: dummy local data (we’ll replace with Azure Logic Apps API later)
const demoSites = [
  { title: "Ormeau Park", type: "park", amenities: { benches:true, toilets:true }, description:"Popular city park." },
  { title: "War Memorial Garden", type: "memorial", amenities: { stepFree:true, lighting:true }, description:"Quiet commemorative space." }
];

document.getElementById("btnLoad").addEventListener("click", () => renderSites(demoSites));
document.getElementById("btnCreateDummy").addEventListener("click", () => alert("Next step: this will POST to /api/sites"));
