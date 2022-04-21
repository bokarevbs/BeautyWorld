const enrollForm = document.getElementById('enroll')
enrollForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const { name } = event.target.elements
    const { phone } = event.target.elements
    console.log(name.value, phone.value)
})