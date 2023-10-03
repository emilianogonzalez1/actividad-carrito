const URL = 'https://fakestoreapi.com/products/category/electronics';

fetch(URL)
.then(response => response.json())
.then(data => {
    const contenedorTabla = document.querySelector(".tabla");
data.forEach(element => {
    contenedorTabla.innerHTML += `
<tr>
    <td><img src="${element.image}" style="width: 5rem"></td>
    <td>USD ${element.price}</td>
    <td><input id="${element.id}" type="number" value="1" style="width: 50px"></td>
    <td class="${element.id}">USD ${element.price}</td>
</tr>
`

})



data.forEach(element => {
const tarjetitas = document.querySelector('.tarjetas');
tarjetitas.innerHTML += `
<div class="card" style="width: 18rem; col mr-5">
  <img src="${element.image}" class="card-img-top" alt="">
  <div class="card-body">
    <h5 class="card-title">${element.title}</h5>
    <a href="#" class="btn btn-primary">Agregar al carrito</a>
  </div>
</div>

`

})


;})


