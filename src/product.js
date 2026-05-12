const products = [];

function getProducts() {
    return products;
}

function formatRupiah(amount) {
    return "Rp" + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function renderProductList() {
    const container = document.getElementById("main-content");
    container.innerHTML = products.map(p =>
        `<div class="product-card">
<h3>${p.name}</h3>
<p>Harga: ${formatRupiah(p.price)}</p>
<p>Stok: ${p.stock}</p>
</div>`
    ).join("");


}