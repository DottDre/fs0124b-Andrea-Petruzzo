const apyKey = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGEzYjJkN2IxMTAwMTkwZTZkZWYiLCJpYXQiOjE3MDk4OTAxMDcsImV4cCI6MTcxMTA5OTcwN30.zsDD5gyVPTazmEJrT1GPgji7WoRLj4nP93cUIwb1q3w"
let url = new URLSearchParams(location.search)
let id = url.get('id')
console.log(id)

fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`,{
    headers: {
        'Content-type':'application/json',
        Authorization: apyKey
    },
})
.then(res => res.json())
.then(phone =>{

    let name = document.querySelector('#nome')
    name.value = phone.name
    let brand = document.querySelector('#brand')
    brand.value = phone.brand
    let price = document.querySelector('#prezzo')
    price.value = phone.price
    let imageUrl = document.querySelector('#image')
    imageUrl = phone.imageUrl
    let description = document.querySelector('#description')
    description.value = phone.description
}) 

let salvaBtn = document.querySelector('#salva')
salvaBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let name = document.querySelector('#nome').value
    let brand = document.querySelector('#brand').value
    let price = document.querySelector('#prezzo').value
    let imageUrl = document.querySelector('#image').value
    let description = document.querySelector('#description').value

    let phone = {
        name,
        description,
        brand,
        imageUrl,
        price
        
    }

    fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`,{
                method:'PUT',
                headers:{
                    'Content-type':'application/json',
                    Authorization: apyKey
                },
                body:JSON.stringify(phone)
            })
            .then(res => res.json())
            .then(res => {
                location.href = 'index.html'
            })
}) 
let eliminaBtn = document.querySelector('#elimina')
eliminaBtn.addEventListener('click', (e) => {
    e.preventDefault()
    fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`,{
                method:'DELETE',
                headers:{
                    'Content-type':'application/json',
                    Authorization: apyKey
                }
            })
            .then(res => res.json())
            .then(eliminaCell => {
                location.href = 'index.html'
            })
})