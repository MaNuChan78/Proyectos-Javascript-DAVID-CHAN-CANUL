const productsBody = document.querySelector("#products");
const filtro = document.querySelector("#filtro");

const pesitos = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN"
});



function mostrarProductos(productos) {
    let productRow = "";

    for (let index = 0; index < productos.length; index++) {
        productRow += `
            <tr>
                <td class="p-4 text-zinc-100">${productos[index].id}</td>
                <td class="p-4 text-zinc-100">${productos[index].nombre}</td>
                <td class="p-4 text-lime-400">${pesitos.format(productos[index].precio)}</td>
                <td class="p-4 text-violet-300">${productos[index].categoria}</td>
                <td class="p-4 text-zinc-100">${productos[index].stock}</td>
                <td class="p-4 text-lime-400">${pesitos.format(productos[index].precio * productos[index].stock)}</td>
            </tr>
        `;
    }

    productsBody.innerHTML = productRow;
};



function filtrarProductos() {
    const categoria = filtro.value;

    const productosAMostrar = categoria === "todos"
        ? productosData
        : productosData.filter(cositas => cositas.categoria === categoria);

    mostrarProductos(productosAMostrar);
};







document.addEventListener("DOMContentLoaded", e => {
    mostrarProductos(productosData);
});






filtro.addEventListener("change", filtrarProductos);