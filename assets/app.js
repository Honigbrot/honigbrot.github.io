const STYLES = [
  {
    id: 'neapolitan',
    name: 'Neapolitanisch',
    emoji: '🇮🇹',
    desc: 'Dünn, luftig, Röststellen',
    info: '<strong>Neapolitanische Pizza (Napoletana)</strong> — Die originale holzofengebackene Pizza. Hohe Hydration, kaum Öl, lange kalte Fermentation. Backzeit nur 60–90 Sekunden bei über 450°C. Weicher, luftiger Cornicione mit Leopardenflecken.',
    defaults: { weight: 280, hydration: 65, salt: 2.8, yeast: 0.07, oil: 0 },
    hasOil: false,
    ferment: '24–72h kalte Gare',
    flour: 'Tipo 00 Mehl empfohlen',
    tip: 'Am besten mit Tipo 00 Mehl arbeiten. Eine lange kalte Gare (48–72h) entwickelt komplexe Aromen. Der Teig soll sehr weich sein – widerstehe dem Drang, mehr Mehl hinzuzufügen.',
    steps: (r) => [
      { emoji: '⚖️', title: 'Zutaten abwiegen', time: '5 Min', detail: `<strong>${r.flour}g</strong> Tipo 00 Mehl (oder Weizenmehl Type 550), <strong>${r.water}g</strong> Wasser (18–22°C), <strong>${r.salt}g</strong> feines Meersalz, <strong>${r.yeast}g</strong> Trockenhefe (oder ${(parseFloat(r.yeast)*3).toFixed(1)}g Frischhefe) abwiegen.`, check: 'Alle Zutaten abgewogen? ✓' },
      { emoji: '💧', title: 'Hefe auflösen', time: '5 Min', detail: 'Die Hefe in etwa 80% des Wassers auflösen. Sanft umrühren und 2–3 Minuten warten, bis sich leichter Schaum bildet.' },
      { emoji: '🌾', title: 'Mehl und Wasser verbinden', time: '5 Min', detail: 'Das Hefewasser nach und nach zum Mehl geben, mit der Hand oder einer Teigkarte vermischen. Das restliche Wasser langsam einarbeiten – der Teig sieht zunächst ungleichmäßig aus. Mischen, bis kein trockenes Mehl mehr sichtbar ist.' },
      { emoji: '🧂', title: 'Salz einarbeiten', time: '2 Min', detail: `Das <strong>${r.salt}g</strong> Salz im restlichen Wasser auflösen und in den Teig einkneten. Salz niemals direkt mit der Hefe in Kontakt bringen.` },
      { emoji: '💪', title: 'Kneten', time: '10–15 Min', detail: 'Auf leicht bemehlter Fläche mit der Drücken-Falten-Drehen-Methode kneten. Der Teig soll glatt, elastisch und leicht klebrig werden – aber nicht nass kleben. Fenstertest: Ein kleines Stück auseinanderziehen – es soll durchscheinend sein, ohne zu reißen.' },
      { emoji: '🫙', title: 'Stockgare', time: '2h Raumtemperatur', detail: 'Den Teig in eine leicht geölte Schüssel legen, mit Frischhaltefolie abdecken. Bei Raumtemperatur (22–24°C) ca. 2 Stunden gehen lassen, bis er um etwa 50% größer ist.' },
      { emoji: '⚙️', title: 'Teilen & Kugeln formen', time: '5 Min', detail: `In <strong>${r.pizzas}</strong> gleich große Stücke (~${r.weight}g) teilen. Zu straffen Kugeln formen: Die Ränder nach unten ziehen und den Teigling auf der Arbeitsfläche rotieren, um Oberflächenspannung aufzubauen.` },
      { emoji: '❄️', title: 'Kalte Gare', time: '24–72h', detail: 'Teiglinge in einzelne geölte Behälter oder auf ein Blech legen, abdecken und 24–72 Stunden kühlstellen. Länger = mehr Aroma. 2–3 Stunden vor dem Backen aus dem Kühlschrank nehmen.' },
      { emoji: '🔥', title: 'Ofen vorheizen', time: '45–60 Min', detail: 'Ofen auf maximale Temperatur (250–300°C) vorheizen. Einen Backstein, Backstahl oder umgedrehtes schweres Backblech auf dem obersten Rost platzieren. Er muss glühend heiß sein.' },
      { emoji: '🤌', title: 'Teig ausbreiten', time: '3 Min pro Pizza', detail: 'Niemals ein Nudelholz verwenden! Mit den Fingerspitzen von der Mitte nach außen drücken, dann über die Knöchel stretchen oder die „Slap"-Technik anwenden. Dabei rotieren. Ziel: ~30cm Durchmesser mit dickerem Rand (Cornicione).' },
      { emoji: '🍕', title: 'Belegen & backen', time: '6–10 Min', detail: 'San-Marzano-Tomaten (zerdrückt), frische Mozzarella und einen Schuss Olivenöl auftragen. Mit einer gut bemehlten Pizzaschaufel auf den heißen Stein schieben. Backen, bis der Rand stellenweise dunkel und der Käse blasig ist.' },
    ],
  },
  {
    id: 'new-york',
    name: 'New York',
    emoji: '🗽',
    desc: 'Faltbar, knuspriger Rand',
    info: '<strong>New York Style</strong> — Große, dünne, faltbare Stücke mit knusprigem Rand und zähem Inneren. Öl und eine Prise Zucker sorgen für eine goldene Kruste. Backzeit 10–15 Minuten bei 260–290°C.',
    defaults: { weight: 320, hydration: 60, salt: 2, yeast: 0.25, oil: 3 },
    hasOil: true,
    ferment: '24–48h kalte Gare',
    flour: 'Weizenmehl Type 550 empfohlen',
    tip: 'Weizenmehl mit hohem Proteingehalt (Type 550 oder 812) ist entscheidend für die zähe Textur. Etwas Zucker fördert die Bräunung. Der Teig soll fest und gut handhabbar sein.',
    steps: (r) => [
      { emoji: '⚖️', title: 'Zutaten abwiegen', time: '5 Min', detail: `<strong>${r.flour}g</strong> Weizenmehl Type 550, <strong>${r.water}g</strong> Wasser (20–22°C), <strong>${r.salt}g</strong> Meersalz, <strong>${r.yeast}g</strong> Instanthefe, <strong>${r.oil}g</strong> Oliven- oder Pflanzenöl abwiegen. Optional: 5g Zucker für bessere Bräunung.` },
      { emoji: '💧', title: 'Teig mischen', time: '5 Min', detail: 'Mehl, Hefe (und Zucker falls verwendet) in einer Schüssel vermischen. Wasser nach und nach einarbeiten. Sobald der Teig zusammenkommt, das Öl einkneten. Solange mischen, bis kein Mehl mehr trocken ist.' },
      { emoji: '🧂', title: 'Salz einarbeiten & kneten', time: '10 Min', detail: `<strong>${r.salt}g</strong> Salz einarbeiten und 8–10 Minuten kneten, bis der Teig glatt und elastisch ist. Er sollte fester sein als neapolitanischer Teig – leichter zu handhaben.` },
      { emoji: '🫙', title: 'Stockgare', time: '1h', detail: 'Teig abdecken und 1 Stunde bei Raumtemperatur ruhen lassen.' },
      { emoji: '⚙️', title: 'Teilen & Kugeln formen', time: '5 Min', detail: `In <strong>${r.pizzas}</strong> Kugeln (~${r.weight}g) teilen, straff formen und in geölte Behälter legen.` },
      { emoji: '❄️', title: 'Kalte Gare', time: '24–48h', detail: '24–48 Stunden kühlstellen. 1–2 Stunden vor dem Backen aus dem Kühlschrank nehmen, damit der Teig Raumtemperatur erreicht.' },
      { emoji: '🔥', title: 'Ofen vorheizen', time: '45 Min', detail: 'Ofen mit Backstein oder Backstahl auf 275–290°C vorheizen. Rost im oberen Drittel.' },
      { emoji: '🤌', title: 'Teig ausziehen', time: '3–5 Min', detail: 'Auf leicht bemehlter Fläche auf ~35–40cm Durchmesser drücken und strecken. New-York-Teig ist gutmütig – bei Bedarf kann für den letzten Schritt ein Nudelholz verwendet werden. Die Mitte soll dünn sein.' },
      { emoji: '🍕', title: 'Belegen & backen', time: '10–14 Min', detail: 'Tomatensauce dünn verteilen, Mozzarella und Belag aufbringen. Nicht überladen – dünner Boden! Backen, bis der Boden knusprig und der Käse goldgelb gefleckt ist. 2 Minuten abkühlen lassen, dann in Stücke schneiden.' },
    ],
  },
  {
    id: 'detroit',
    name: 'Detroit',
    emoji: '🏙️',
    desc: 'Dick, karamellisierte Ränder',
    info: '<strong>Detroit Style</strong> — Rechteckig, in der Pfanne gebacken mit dickem, luftigem Inneren und knusprigen, karamellisierten Käserändern (Frico). Teig mit hoher Hydration in einer geölten Stahlpfanne.',
    defaults: { weight: 400, hydration: 72, salt: 2, yeast: 0.6, oil: 4 },
    hasOil: true,
    ferment: '2–4h Raumtemperatur oder über Nacht kalt',
    flour: 'Weizenmehl Type 550 empfohlen',
    tip: 'Wisconsin Brick Cheese (oder Mozzarella + weißer Cheddar) ist traditionell für den karamellisierten Frico-Rand. Den Käse bis zu den Rändern und Ecken der Form drücken. Die Sauce nach dem Backen in Streifen auftragen oder vorher einarbeiten.',
    steps: (r) => [
      { emoji: '⚖️', title: 'Zutaten abwiegen', time: '5 Min', detail: `<strong>${r.flour}g</strong> Weizenmehl Type 550, <strong>${r.water}g</strong> Wasser (25°C), <strong>${r.salt}g</strong> Salz, <strong>${r.yeast}g</strong> Instanthefe, <strong>${r.oil}g</strong> Olivenöl abwiegen. Zusätzlich Öl zum Einfetten der Form bereitstellen.` },
      { emoji: '🌀', title: 'Mischen & Autolyse', time: '30 Min', detail: 'Mehl und Wasser vermischen, bis kein trockenes Mehl mehr sichtbar ist. Abdecken und 20–30 Minuten ruhen lassen (Autolyse). Das entwickelt Gluten ohne Kneten.' },
      { emoji: '🧂', title: 'Salz, Hefe & Öl einarbeiten', time: '5 Min', detail: `<strong>${r.salt}g</strong> Salz, <strong>${r.yeast}g</strong> Hefe und <strong>${r.oil}g</strong> Öl mit nassen Händen durch Dehnen und Falten einarbeiten. Der Teig ist recht klebrig – das ist richtig so.` },
      { emoji: '🔄', title: 'Dehnen & Falten', time: '1h', detail: 'Über 1 Stunde 4 Runden Dehnen & Falten durchführen (alle 15 Min): Hand anfeuchten, eine Seite des Teigs hochziehen, nach oben strecken und über den restlichen Teig falten. Schüssel drehen, auf allen 4 Seiten wiederholen. Baut Struktur ohne Kneten.' },
      { emoji: '🟫', title: 'In die Form & Stückgare', time: '2–4h', detail: `Eine 23×33cm Stahlform oder Aluform großzügig einölen. Den Teig mit den Fingern in die Form drücken und Grübchen eindrücken. Abdecken und 2–4 Stunden gehen lassen, bis der Teig aufgebläht und luftig ist.` },
      { emoji: '🔥', title: 'Vorheizen', time: '30 Min', detail: 'Ofen auf 260°C vorheizen. Rost im unteren Drittel.' },
      { emoji: '🧀', title: 'Mit Käse belegen', time: '5 Min', detail: 'Mozzarella-Stücke (und Brick Cheese falls vorhanden) bis zu den Rändern und Ecken drücken – das erzeugt den charakteristischen karamellisierten Frico-Rand.' },
      { emoji: '🍕', title: 'Backen & fertigstellen', time: '15–18 Min', detail: '12–15 Min backen, bis die Käseränder dunkelbraun und blasig sind. Tomatensauce in Streifen auftragen und weitere 3 Minuten backen. 5 Minuten ruhen lassen, dann in Quadrate schneiden.' },
    ],
  },
  {
    id: 'roman',
    name: 'Römische Pinsa',
    emoji: '🏛️',
    desc: 'Leicht, knusprig, oval',
    info: '<strong>Römische Pinsa</strong> — Ein neu interpretiertes antikes römisches Fladenbrot. Sehr hohe Hydration, oft gemischtes Mehl (Weizen + Soja + Reis), lange kalte Fermentation ergibt eine unglaublich leichte, luftige, knusprige Kruste.',
    defaults: { weight: 250, hydration: 80, salt: 2.5, yeast: 0.1, oil: 1 },
    hasOil: true,
    ferment: '48–72h kalte Gare',
    flour: 'Pinsa-Mehlmischung (oder 80% Type 550 + 20% Reismehl)',
    tip: 'Pinsa-Teig ist sehr weich und nass – stets mit nassen Händen auf nasser Arbeitsfläche arbeiten, niemals Mehl verwenden. Die lange Gare und der hohe Wassergehalt schaffen außergewöhnliche Leichtigkeit und Bekömmlichkeit.',
    steps: (r) => [
      { emoji: '⚖️', title: 'Zutaten abwiegen', time: '5 Min', detail: `<strong>${r.flour}g</strong> Mehl (idealerweise 80% Type 550 + 20% Reismehl), <strong>${r.water}g</strong> kaltes Wasser (4°C), <strong>${r.salt}g</strong> Salz, <strong>${r.yeast}g</strong> Trockenhefe, <strong>${r.oil}g</strong> Olivenöl abwiegen.` },
      { emoji: '❄️', title: 'Kaltwassermethode', time: '10 Min', detail: 'Die Pinsa nutzt kaltes Wasser, um die Gärung von Anfang an zu verlangsamen. Mehl und ~60% des kalten Wassers vermischen, bis alles zusammenkommt. 15 Minuten ruhen lassen.' },
      { emoji: '🧂', title: 'Salz & restliches Wasser', time: '5 Min', detail: 'Das Salz im restlichen Wasser auflösen und in 3 Etappen einarbeiten, dazwischen jeweils kurz mischen. Der Teig bleibt sehr nass und klebrig.' },
      { emoji: '🫙', title: 'Hefe & Öl einarbeiten', time: '5 Min', detail: `<strong>${r.yeast}g</strong> Hefe und <strong>${r.oil}g</strong> Olivenöl vollständig einarbeiten. Mit nassen Händen arbeiten – kein Mehl hinzufügen.` },
      { emoji: '🔄', title: 'Dehnen & Falten (4 Runden)', time: '2h', detail: 'Alle 30 Minuten eine Runde Dehnen & Falten durchführen (4 Runden über 2h). Hände und Arbeitsfläche feucht halten. Der Teig wird trotz seiner Klebrigkeit zunehmend strukturierter.' },
      { emoji: '❄️', title: 'Kalte Gare', time: '48–72h', detail: `In <strong>${r.pizzas}</strong> Stücke teilen, in geölte Behälter legen und 48–72 Stunden kühlstellen. Hier passiert die Magie – die Fermentation macht den Teig leicht, luftig und aromatisch.` },
      { emoji: '🔥', title: 'Vorheizen', time: '1h', detail: 'Teig 3 Stunden vor dem Backen aus dem Kühlschrank nehmen. Ofen mit Backstein auf maximale Temperatur (275–300°C) mindestens 1 Stunde vorheizen.' },
      { emoji: '🤌', title: 'Pinsa formen', time: '5 Min', detail: 'Auf geölter Fläche (kein Mehl!) mit den Fingerspitzen in eine ovale, längliche Form drücken. Die Luftblasen im Teig sind gewollt – nicht herausdrücken. Die Pinsa darf unregelmäßig aussehen.' },
      { emoji: '🍕', title: 'Backen', time: '8–12 Min', detail: 'Leicht mit Olivenöl bestreichen, nach Wahl belegen. Auf dem Stein 8–12 Minuten backen, bis der Boden Blasen wirft und goldgelb ist. Die Kruste soll knusprig, das Innere leicht und luftig bleiben.' },
    ],
  },
  {
    id: 'sicilian',
    name: 'Sizilianisch',
    emoji: '🌊',
    desc: 'Dick, fluffig, aus der Form',
    info: '<strong>Sizilianische Pizza (Sfincione)</strong> — Dicker, schwammiger, focacciaähnlicher Teig, in einer gut geölten Form gebacken. Mit reichhaltiger Tomaten-Zwiebel-Sauce und Semmelbröseln belegt. Sehr verzeihender Teig – ideal für Einsteiger.',
    defaults: { weight: 450, hydration: 68, salt: 2, yeast: 0.8, oil: 5 },
    hasOil: true,
    ferment: '2h Raumtemperatur + über Nacht kalt optional',
    flour: 'Weizenmehl Type 405 oder 550',
    tip: 'Das großzügige Olivenöl in der Form ist unverzichtbar – es erzeugt den charakteristischen knusprigen, goldenen Boden. Den Teig nach dem Verteilen in der Form kräftig eindrücken. Den Belag vor der letzten Gehzeit aufbringen.',
    steps: (r) => [
      { emoji: '⚖️', title: 'Zutaten abwiegen', time: '5 Min', detail: `<strong>${r.flour}g</strong> Mehl, <strong>${r.water}g</strong> warmes Wasser (30°C), <strong>${r.salt}g</strong> Salz, <strong>${r.yeast}g</strong> Instanthefe, <strong>${r.oil}g</strong> Olivenöl abwiegen. Zusätzlich reichlich Öl für die Form bereitstellen (ca. 3–4 EL pro Form).` },
      { emoji: '💧', title: 'Hefe aktivieren', time: '10 Min', detail: 'Hefe mit einer Prise Zucker im warmen Wasser auflösen. 5–10 Minuten warten, bis sich Schaum bildet.' },
      { emoji: '🌾', title: 'Teig mischen', time: '5 Min', detail: 'Mehl und Öl zur Hefemischung geben. Mischen, bis ein grober Teig entsteht. Salz hinzufügen und weitere 2 Minuten mischen. Der Teig ist weicher und klebriger als bei anderen Pizzastilen.' },
      { emoji: '💪', title: 'Kneten', time: '8 Min', detail: '6–8 Minuten auf leicht bemehlter Fläche kneten, bis der Teig glatt ist. Alternativ 5 Minuten mit dem Knethaken der Küchenmaschine.' },
      { emoji: '🫙', title: 'Stockgare', time: '1,5–2h', detail: 'Schüssel einölen, Teig hineinlegen, abdecken. Bei Raumtemperatur gehen lassen, bis sich das Volumen verdoppelt hat – etwa 1,5–2 Stunden.' },
      { emoji: '🟫', title: 'In die Form & verteilen', time: '10 Min', detail: 'Eine großzügige Schicht Olivenöl in die Form(en) geben. Den Teig mit den Fingern eindrücken und verteilen. Falls er zurückfedert, 10 Minuten ruhen lassen und erneut versuchen. Tiefe Grübchen eindrücken.' },
      { emoji: '🍅', title: 'Belegen & Stückgare', time: '45–60 Min', detail: 'Tomatensauce, gebratene Zwiebeln, Sardellen oder den gewünschten Belag verteilen. Mit Semmelbröseln und Pecorino bestreuen. Locker abdecken und weitere 45–60 Minuten gehen lassen, bis der Teig aufgegangen ist.' },
      { emoji: '🔥', title: 'Vorheizen & backen', time: '25–30 Min', detail: 'Ofen auf 220°C vorheizen. 25–30 Minuten backen, bis die Oberfläche goldgelb und der Boden knusprig ist (Rand mit einem Pfannenwender anheben und prüfen). 5–10 Minuten abkühlen lassen, dann in Quadrate schneiden.' },
    ],
  },
];

let currentStyle = STYLES[0];
let doneSteps = new Set();

const $ = (selector) => document.querySelector(selector);

const controls = {
  pizzas: $('#sliderPizzas'),
  weight: $('#sliderWeight'),
  hydration: $('#sliderHydration'),
  salt: $('#sliderSalt'),
  yeast: $('#sliderYeast'),
  oil: $('#sliderOil'),
};

const output = {
  styleGrid: $('#styleGrid'),
  styleInfo: $('#styleInfo'),
  oilControl: $('#ctrlOil'),
  pizzas: $('#valPizzas'),
  weight: $('#valWeight'),
  hydration: $('#valHydration'),
  salt: $('#valSalt'),
  yeast: $('#valYeast'),
  oil: $('#valOil'),
  totalWeight: $('#totalWeight'),
  ingredients: $('#ingredients'),
  progress: $('#progressText'),
  steps: $('#steps'),
  tip: $('#tip'),
};

const controlIds = Object.values(controls).map((control) => control.id);

function formatDecimal(value, decimals = 1) {
  return Number(value).toFixed(decimals).replace('.', ',');
}

function formatYeast(value) {
  if (value < 0.1) return formatDecimal(value, 2);
  if (Number.isInteger(value * 10)) return formatDecimal(value, 1);
  if (value % 1 === 0) return formatDecimal(value, 0);
  return formatDecimal(value, 2);
}

function roundTo(val, decimals) {
  return Math.round(val * 10 ** decimals) / 10 ** decimals;
}

function calcRecipe() {
  const pizzas = +controls.pizzas.value;
  const weight = +controls.weight.value;
  const hydration = +controls.hydration.value / 100;
  const saltPct = +controls.salt.value / 100;
  const yeastPct = +controls.yeast.value / 100;
  const oilPct = +controls.oil.value / 100;

  const totalDough = pizzas * weight;
  const divisor = 1 + hydration + saltPct + yeastPct + (currentStyle.hasOil ? oilPct : 0);
  const flour = roundTo(totalDough / divisor, 0);
  const water = roundTo(flour * hydration, 0);
  const salt = roundTo(flour * saltPct, 0);
  const yeast = roundTo(flour * yeastPct, 1);
  const oil = currentStyle.hasOil ? roundTo(flour * oilPct, 0) : 0;
  const total = totalDough;

  return { pizzas, weight, flour, water, salt, yeast, oil, total };
}

function renderStyleGrid() {
  output.styleGrid.innerHTML = STYLES.map(s => `
    <button class="style-card ${s.id === currentStyle.id ? 'active' : ''}" type="button" data-id="${s.id}" aria-pressed="${s.id === currentStyle.id}">
      <span class="emoji">${s.emoji}</span>
      <div class="style-name">${s.name}</div>
      <div class="style-desc">${s.desc}</div>
    </button>
  `).join('');
}

function renderStyleInfo() {
  output.styleInfo.innerHTML = `
    <div class="info-icon">ℹ️</div>
    <div class="info-text">
      ${currentStyle.info}
      <br/><br/>
      <strong>Fermentation:</strong> ${currentStyle.ferment} &nbsp;|&nbsp; <strong>Mehl:</strong> ${currentStyle.flour}
    </div>
  `;
}

function renderControls(r) {
  output.pizzas.textContent = r.pizzas;
  output.weight.textContent = r.weight;
  output.hydration.textContent = Math.round(+controls.hydration.value);
  output.salt.textContent = formatDecimal(controls.salt.value);
  output.yeast.textContent = formatYeast(+controls.yeast.value);
  output.oil.textContent = formatDecimal(controls.oil.value);
}

function renderIngredients(r) {
  const items = [
    { icon: '🌾', name: 'Mehl', amount: r.flour, pct: 100 },
    { icon: '💧', name: 'Wasser', amount: r.water, pct: Math.round(r.water / r.flour * 100) },
    { icon: '🧂', name: 'Salz', amount: r.salt, pct: Math.round(r.salt / r.flour * 1000) / 10 },
    { icon: '🦠', name: 'Trockenhefe', amount: r.yeast, pct: Math.round(r.yeast / r.flour * 1000) / 10 },
    ...(currentStyle.hasOil && r.oil > 0 ? [{ icon: '🫒', name: 'Olivenöl', amount: r.oil, pct: Math.round(r.oil / r.flour * 1000) / 10 }] : []),
  ];

  output.totalWeight.textContent = `${r.total}g gesamt`;

  output.ingredients.innerHTML = items.map(item => {
    const barWidth = Math.min(100, item.amount / r.flour * 100);
    return `
      <div class="ingredient-row">
        <span class="ing-icon">${item.icon}</span>
        <span class="ing-name">${item.name}</span>
        <div class="bar-wrap"><div class="bar" style="width:${barWidth}%"></div></div>
        <span class="ing-pct">${String(item.pct).replace('.', ',')}%</span>
        <span class="ing-amount">${item.amount}g</span>
      </div>
    `;
  }).join('');
}

function renderSteps(r) {
  const steps = currentStyle.steps(r);
  const done = doneSteps.size;
  output.progress.textContent = `${done} / ${steps.length} erledigt`;

  output.steps.innerHTML = steps.map((step, i) => {
    const isDone = doneSteps.has(i);
    return `
      <button class="step ${isDone ? 'done' : ''}" type="button" data-index="${i}" aria-pressed="${isDone}">
        <div class="step-left">
          <div class="step-num">${isDone ? '✓' : i + 1}</div>
          <div class="step-line"></div>
        </div>
        <div class="step-body">
          <div class="step-title">
            <span class="step-emoji">${step.emoji}</span>
            ${step.title}
            <span class="step-time">${step.time}</span>
          </div>
          <div class="step-detail">${step.detail}</div>
          ${step.check ? `<div class="step-check">${step.check}</div>` : ''}
        </div>
      </button>
    `;
  }).join('');

  output.tip.innerHTML = `<strong>Profi-Tipp:</strong> ${currentStyle.tip}`;
}

function renderAll() {
  const r = calcRecipe();
  renderStyleGrid();
  renderStyleInfo();
  renderControls(r);
  renderIngredients(r);
  renderSteps(r);
}

function applyStyleDefaults(style) {
  controls.weight.value = style.defaults.weight;
  controls.hydration.value = style.defaults.hydration;
  controls.salt.value = style.defaults.salt;
  controls.yeast.value = style.defaults.yeast;
  controls.oil.value = style.defaults.oil;
  output.oilControl.hidden = !style.hasOil;
}

output.styleGrid.addEventListener('click', (event) => {
  const card = event.target.closest('.style-card');
  if (!card) return;

  const style = STYLES.find(s => s.id === card.dataset.id);
  if (!style || style.id === currentStyle.id) return;

  currentStyle = style;
  doneSteps.clear();
  applyStyleDefaults(style);
  renderAll();
});

output.steps.addEventListener('click', (event) => {
  const step = event.target.closest('.step');
  if (!step) return;

  const idx = +step.dataset.index;
  if (doneSteps.has(idx)) doneSteps.delete(idx);
  else doneSteps.add(idx);
  renderSteps(calcRecipe());
});

controlIds.forEach(id => {
  $(`#${id}`).addEventListener('input', () => {
    const r = calcRecipe();
    renderControls(r);
    renderIngredients(r);
    renderSteps(r);
  });
});

$('#btnReset').addEventListener('click', () => {
  doneSteps.clear();
  renderSteps(calcRecipe());
});

applyStyleDefaults(currentStyle);
renderAll();
