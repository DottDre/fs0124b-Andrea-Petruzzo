fetch("https://striveschool-api.herokuapp.com/api/product/",{
    headers: {
        'Content-type':'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGEzYjJkN2IxMTAwMTkwZTZkZWYiLCJpYXQiOjE3MDk4OTAxMDcsImV4cCI6MTcxMTA5OTcwN30.zsDD5gyVPTazmEJrT1GPgji7WoRLj4nP93cUIwb1q3w "
    },

})
.then (res => res.json())
.then (cell => {

    console.log(cell);

    for (let phone of cell) {
        let colonna = generaClone()

        console.dir(colonna)
        
        let title = colonna.querySelector('.card-title')
        title.innerText = phone.name

        let brand = colonna.querySelector('.card-brand')
        brand.innerText = phone.brand

        let price = colonna.querySelector('.card-price')
        price.innerText = phone.price

        let description = colonna.querySelector('.card-description')
        description.innerText = phone.description

        let image = colonna.querySelector('.card-img-top')
        image.src = phone.imageUrl

        let editbtn = colonna.querySelector('#editbtn')
        editbtn.href = `edit.html?id=${phone._id}`

        


        console.log(title);
        
        document.querySelector('#append').appendChild(colonna)
    }
})


function generaClone(){
    
    let template = document.querySelector('#template-card')
    let clone = template.content.cloneNode(true)

    return clone;
}