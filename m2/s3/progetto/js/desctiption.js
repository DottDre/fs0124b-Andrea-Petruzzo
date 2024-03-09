
let url = new URLSearchParams(location.search)
let id = url.get('id')
console.log(id)

fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`,{
    headers: {
        'Content-type':'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVjOGU5YjU5ZTE3YTAwMTkxNWQ5MTUiLCJpYXQiOjE3MTAwMDE4MTksImV4cCI6MTcxMTIxMTQxOX0.9d6sa33T0vbJ9CBR2rXQwfHpeIV1CHcrC5Mo5Pk44y8"
    },
})
.then(res => res.json())
.then(phone =>{

    let name = document.querySelector('#nome')
    name.innerText = phone.name
    let brand = document.querySelector('#brand')
    brand.innerText = phone.brand
    let price = document.querySelector('#prezzo')
    price.innerText = phone.price
    let description = document.querySelector('#descrizione')
    description.innerText = phone.description
    let img = document.querySelector('#image')
    img.src = phone.imageUrl
}) 
