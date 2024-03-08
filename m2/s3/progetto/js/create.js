const salva =  document.querySelector('#salva')

salva.addEventListener('click',function(e){
    e.preventDefault()

    let nome = document.querySelector('#nome').value
    let brand = document.querySelector('#brand').value
    let image = document.querySelector('#image').value
    let prezzo = document.querySelector('#prezzo').value
    let description = document.querySelector('#description').value

    let cell = {
        name:nome,
        brand:brand,
        imageUrl:image,
        price:prezzo,
        description:description
    }

   
    fetch(`https://striveschool-api.herokuapp.com/api/product/`,{
        method:'POST',
        headers:{
            'Content-type':'application/json',
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGEzYjJkN2IxMTAwMTkwZTZkZWYiLCJpYXQiOjE3MDk4OTAxMDcsImV4cCI6MTcxMTA5OTcwN30.zsDD5gyVPTazmEJrT1GPgji7WoRLj4nP93cUIwb1q3w",
        },
        body:JSON.stringify(cell)
    })
    .then(res => res.json())
    .then(_res => {

        location.href = 'index.html'

    })

})