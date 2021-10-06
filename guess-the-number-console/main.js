console.log( 'Hello user!' )
console.log ('Try to gues the mystery number.')
console.log ('Use "Submit(x)" to submit a number.')

const mysteryNumber = Math.round(Math.random () * 100)


const  Submit = (x) => {
    if (x < mysteryNumber){
        console.log('Too small .')
        document.body.innerHTML = '<h1>Too small.</h1>'
        document.body.style.backgroundColor = '#89d1a4'
    }


if (x > mysteryNumber){
    console.log('Too big .')
    document.body.innerHTML = '<h1>Too big.</h1>'
    document.body.style.backgroundColor = '#8997d1'
}


if (x == mysteryNumber){
    console.log('Bravo !')
    document.body.innerHTML = '<h1>Bravo !.</h1>'
    document.body.style.backgroundColor = '#e56fe9'
}
}

const cheat = () => {
    console.log(`The mystery number is ${mysteryNumber}`)


}
