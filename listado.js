const elementos = [
    { nombre: "The Witcher 3", tipo: "Videojuego" },
    { nombre: "Manzanas", tipo: "Fruta" },
    { nombre: "Elden Ring", tipo: "Videojuego" },
    { nombre: "Naranjas", tipo: "Fruta" },
    { nombre: "Hollow Knight", tipo: "Videojuego" },
    { nombre: "Bananas", tipo: "Fruta" }
];

const contenedor = document.getElementById("contenedor-listado");
const btnTodos = document.getElementById("btn-todos");
const btnFiltro = document.getElementById("btn-filtro");

const renderizarElementos = (arreglo) => {
    contenedor.innerHTML = "";
    arreglo.forEach(item => {
        const div = document.createElement("div");
        div.textContent = item.nombre;
        div.classList.add("tarjeta");
        contenedor.appendChild(div);
    });
};

renderizarElementos(elementos);

btnTodos.addEventListener("click", () => {
    renderizarElementos(elementos);
});

btnFiltro.addEventListener("click", () => {
    const soloVideojuegos = elementos.filter(item => item.tipo === "Videojuego");
    renderizarElementos(soloVideojuegos);
});