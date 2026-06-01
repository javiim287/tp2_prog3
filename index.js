const meriendas = [
    "Tostadas con mermelada",
    "Yogur con cereales",
    "Frutas de estación",
    "Café con medialunas",
    "Licuado de banana",
    "Galletitas de avena"
];

const contenedor = document.getElementById("contenedor-meriendas");
const btnContar = document.getElementById("btn-contar");
const textoTotal = document.getElementById("total-meriendas");

meriendas.forEach(merienda => {
    const div = document.createElement("div");
    div.textContent = merienda;
    div.classList.add("tarjeta");
    contenedor.appendChild(div);
});

btnContar.addEventListener("click", () => {
    textoTotal.textContent = `Total de opciones: ${meriendas.length}`;
});