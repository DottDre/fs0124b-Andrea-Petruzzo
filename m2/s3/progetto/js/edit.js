let url = new URLSearchParams(location.search)
let id = url.get('_id')
console.log(id)

fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`,{
    method: 'PUT',
    headers: {
        'Content-type':'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZGEzYjJkN2IxMTAwMTkwZTZkZWYiLCJpYXQiOjE3MDk4OTAxMDcsImV4cCI6MTcxMTA5OTcwN30.zsDD5gyVPTazmEJrT1GPgji7WoRLj4nP93cUIwb1q3w"
    },
})