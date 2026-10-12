/* US LLC Cost Calculator — vanilla JS, no dependencies */

var FORMATION_FEE = 130;

var STATES = {
  "new-mexico": { name: "New Mexico", fee: 50,  note: "New Mexico: cheapest popular option; no LLC annual report." },
  "missouri":   { name: "Missouri",   fee: 50,  note: "Missouri: low fee, central US presence." },
  "delaware":   { name: "Delaware",   fee: 90,  note: "Delaware: the fundraising/VC standard. $300 annual tax due June 1." },
  "wyoming":    { name: "Wyoming",    fee: 102, note: "Wyoming: strong privacy, low annual costs." },
  "florida":    { name: "Florida",    fee: 125, note: "Florida: annual report due Jan 1 – May 1." },
  "texas":      { name: "Texas",      fee: 308, note: "Texas: higher fee; franchise tax obligations apply." },
  "other":      { name: "Another state", fee: null, note: "State fees vary — check the state's filing office for the current fee." }
};

var ADDONS = [
  { id: "addon-ein",       label: "EIN (included free)",        price: 0 },
  { id: "addon-expedited", label: "Expedited 48-hour processing", price: 50 },
  { id: "addon-address",   label: "Unique virtual address",     price: 30 }
];

function money(n) {
  return "$" + n.toLocaleString("en-US");
}

function fmtFee(fee) {
  return fee === null ? "varies" : money(fee);
}

function update() {
  var stateKey = document.getElementById("state").value;
  var state = STATES[stateKey];

  document.getElementById("state-note").textContent = state.note;

  var lines = [];
  lines.push({ label: "Formation service (Epics Deals)", value: money(FORMATION_FEE) });
  lines.push({ label: state.name + " state filing fee", value: fmtFee(state.fee) });

  var addonsTotal = 0;
  ADDONS.forEach(function (a) {
    var box = document.getElementById(a.id);
    if (box && box.checked && a.price > 0) {
      lines.push({ label: a.label, value: "+" + money(a.price) });
      addonsTotal += a.price;
    }
  });
  lines.push({ label: "EIN (included free)", value: "$0" });

  var list = document.getElementById("breakdown");
  list.innerHTML = "";
  lines.forEach(function (l) {
    var li = document.createElement("li");
    var s = document.createElement("span"); s.textContent = l.label;
    var b = document.createElement("strong"); b.textContent = l.value;
    li.appendChild(s); li.appendChild(b); list.appendChild(li);
  });

  var totalEl = document.getElementById("total");
  if (state.fee === null) {
    totalEl.textContent = money(FORMATION_FEE + addonsTotal) + "+";
  } else {
    totalEl.textContent = money(FORMATION_FEE + state.fee + addonsTotal);
  }
}

document.getElementById("state").addEventListener("change", update);
ADDONS.forEach(function (a) {
  var box = document.getElementById(a.id);
  if (box && !box.disabled) box.addEventListener("change", update);
});

update();
