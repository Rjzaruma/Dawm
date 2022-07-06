function cargarDatos (id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(response => response.json())
      .then(data => {
        tipos=data.types
        nombre=data.name
        habilidad=data.abilities[0].ability.name
        id=data.id
        txt_tipo=""
        if(tipos.length>1){
          tipo_1=data.types[0].type.name
          tipo_2=data.types[1].type.name
          txt_tipo=`${tipo_1}/${tipo_2}`
          //console.log(txt_tipo)
        }else{
          tipos=data.types[0].type.name
          txt_tipo=`${tipos}`
        }

        let datos = `<tr>
          <th scope="row">${id}</th>
          <td>${nombre}</td>
          <td>${txt_tipo}</td>
          <td>${habilidad}</td>
        </tr>`

        document.querySelector('.pokemons').innerHTML += datos;

      })
      .catch(console.error);
}

function starters(id){
  let nom = `<option selected><p class="fs-5s">Escoga su Starter</p> </option>`;
  document.querySelector('#Starters').innerHTML = nom;
  let selector=document.querySelector('#starter_tipos')
  selector.textContent= `Type: `
  let selector_foto=document.getElementById('foto')
  selector_foto.src=``
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(response => response.json())
      .then(data => {
        tipos=data.types
        nombre=data.name
        habilidad=data.abilities[0].ability.name
        id=data.id
        txt_tipo=""
        if(tipos.length>1){
          tipo_1=data.types[0].type.name
          tipo_2=data.types[1].type.name
          txt_tipo=`${tipo_1}/${tipo_2}`
          //console.log(txt_tipo)
        }else{
          tipos=data.types[0].type.name
          txt_tipo=`${tipos}`
        }

        let nom = `<option value= "${id}">${nombre}</option>`

        document.querySelector('#Starters').innerHTML += nom;

      })
      .catch(console.error);
}
function sprites(){
  d = document.getElementById("Starters").value;
    //console.log(d)
    fetch(`https://pokeapi.co/api/v2/pokemon/${d}/`)
      .then(response => response.json())
      .then(data => {
        
        tipo=data.types[0].type.name
        sprite=data.sprites.front_default
        //alert(tipo)
        let selector=document.querySelector('#starter_tipos')
        selector.textContent= `Type: ${tipo}`
        let selector_foto=document.getElementById('foto')
        selector_foto.src=`${sprite}`

    })
    .catch(console.error);
}

function RangoPokemons(){
  let datos = `<tr>
          <th scope="row"></th>
          <td></td>
          <td></td>
          <td></td>
        </tr>`
  
  document.querySelector('.pokemons').innerHTML = datos;


  

  region = document.getElementById("Regiones").value;
  //console.log(region)
  inicio=493
  fin_starter=0
  final=493
    if(region == "1"){
      id_starters=[]
      inicio=1
      fin_starter=inicio+8
      final=151
      for(let i=inicio; i<=fin_starter; i++){
        id_starters.push(i)
        

      }
      starters(id_starters[0]);
      starters(id_starters[3]);
      starters(id_starters[6]);
    } 
    if(region == "2"){
      id_starters=[]
      inicio=152
      fin_starter=inicio+8
      final=251
      for(let i=inicio; i<=fin_starter; i++){
        id_starters.push(i)
        

      }
      starters(id_starters[0]);
      starters(id_starters[3]);
      starters(id_starters[6]);
    }if(region == "3"){
      id_starters=[]
      inicio=252
      fin_starter=inicio+8
      final=386
      for(let i=inicio; i<=fin_starter; i++){
        id_starters.push(i)
        

      }
      starters(id_starters[0]);
      starters(id_starters[3]);
      starters(id_starters[6]);
    }if(region == "4"){
      id_starters=[]
      inicio=387
      fin_starter=inicio+8
      final=494
      for(let i=inicio; i<=fin_starter; i++){
        id_starters.push(i)
        

      }
      starters(id_starters[0]);
      starters(id_starters[3]);
      starters(id_starters[6]);
    }if(region == "5"){
      id_starters=[]
      inicio=495
      fin_starter=inicio+8
      final=649
      for(let i=inicio; i<=fin_starter; i++){
        id_starters.push(i)
        

      }
      starters(id_starters[0]);
      starters(id_starters[3]);
      starters(id_starters[6]);
    }if(region == "6"){
      id_starters=[]
      inicio=650
      fin_starter=inicio+8
      final=721
      for(let i=inicio; i<=fin_starter; i++){
        id_starters.push(i)
        

      }
      starters(id_starters[0]);
      starters(id_starters[3]);
      starters(id_starters[6]);
    }
    if(region == "7"){
      id_starters=[]
      inicio=722
      fin_starter=inicio+8
      final=809
      for(let i=inicio; i<=fin_starter; i++){
        id_starters.push(i)
        

      }
      starters(id_starters[0]);
      starters(id_starters[3]);
      starters(id_starters[6]);
    }
    if(region == "0"){
      inicio=1
      fin_starter=inicio+8
      final=1
      for(let i=inicio; i<=fin_starter; i++){
        starters(i);
      }
    }
    for(let i=inicio; i<=final; i++){
      cargarDatos(i);
      
    }
    

}


RangoPokemons()