function cargarDatos (id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(response => response.json())
      .then(data => {
        nombre=data.name
        
        let nom = `<option value= "${id}">${nombre}</option>`

        document.querySelector('div.input-group > select').innerHTML += nom;

      })
      .catch(console.error);
}

function RangoPokemons(num){
    for(let i=1; i<=num; i++){
        cargarDatos(i);

        //console.log(pokemon.name)
        
    }

}

function mostrarTipo(){
    d = document.getElementById("pok").value;
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${d}/`)
      .then(response => response.json())
      .then(data => {
        
        tipo=data.types[0].type.name
        sprite=data.sprites.front_default
        //alert(tipo)
        let selector=document.querySelector('#tipo')
        selector.textContent= `Type: ${tipo}`
        let selector_foto=document.getElementById('foto')
        selector_foto.src=`${sprite}`

    })
    .catch(console.error);
}
//data.types[0].type.name
RangoPokemons(15)