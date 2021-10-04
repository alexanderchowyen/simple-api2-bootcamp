console.log('its a wild pokemon')
const button = document.querySelector('button')
const display = document.querySelector('#display')
const name = document.querySelector('h1')

button.addEventListener('click',function(){
   const randomPokemon = Math.ceil(Math.random()*100)
   const url = `https://pokeapi.co/api/v2/pokemon/${randomPokemon}/`
      fetch(url, {
         mode: 'cors',
         headers: {
           'Access-Control-Allow-Origin':'*'
         }
       })
         .then(res => res.json())
         .then(data => {
          console.log(data); 
          display.src = data.sprites['front_default']
          document.querySelector('h1').innerHTML = `${data.name}`
          
  })
})
