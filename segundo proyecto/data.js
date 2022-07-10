function filtrarGraficos(){
  region = document.getElementById("Regiones").value;
  //console.log(region)
  inicio=201
  fin_starter=0
  final=201
  if(region == "1"){
    inicio=1
    final=151
  } 
  if(region == "2"){
    inicio=152
    final=251   
  }if(region == "3"){
    inicio=252
    final=386
  }if(region == "4"){
    inicio=387
    final=494
  }if(region == "5"){
    inicio=495
    final=649
  }if(region == "6"){
    inicio=650
    final=721
  }
  if(region == "7"){
    inicio=722
    final=809
  }
  cargarGraficos(inicio,final)
}


function cargarGraficos(inicio,final){  
  water=0
  fire=0
  ground=0
  electric=0
  grass=0
  flying=0
  dragon=0
  fairy=0
  for(let i=inicio; i<=final; i++){
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    .then(response => response.json())
    .then(data => {
      tipo=data.types[0].type.name
      for(elem in tipo){
        tip=tipo[elem]
        if(tipo=="water"){
          water++
        }if(tipo=="fire"){
          fire++
        }if(tipo=="ground"){
          ground++
        }if(tipo=="electric"){
          electric++
        }if(tipo=="dragon"){
          dragon++
        }if(tipo=="fairy"){
          fairy++
        }if(tipo=="flying"){
          flying++
        }if(tipo=="grass"){
          grass++
        }
      }
      plantilla=`<tr>
      <th scope="row"> Agua </th>
      <td style="--size: ${water}/${100}; --color:aqua"> <span class="data"> ${water} </span> </td>
      </tr>
      <tr>
      <th scope="row"> Fuego </th>
      <td style="--size: ${fire}/${100}; --color:red"> <span class="data"> ${fire} </span> </td>
      </tr>
      <th scope="row"> Tierra </th>
      <td style="--size: ${ground}/${100}; --color:brown"> <span class="data"> ${ground} </span> </td>
      </tr>
      <th scope="row"> Electrico </th>
      <td style="--size: ${electric}/${100}; --color:yellow"> <span class="data"> ${electric} </span> </td>
      </tr>
      <th scope="row"> Planta </th>
      <td style="--size: ${grass}/${100}; --color:green"> <span class="data"> ${grass} </span> </td>
      </tr>
      <th scope="row"> Volador </th>
      <td style="--size: ${flying}/${100}; --color:orange"> <span class="data"> ${flying} </span> </td>
      </tr>
      <th scope="row"> Dragon </th>
      <td style="--size: ${dragon}/${100}; --color:blue"> <span class="data"> ${dragon} </span> </td>
      </tr>
      <th scope="row"> Hada </th>
      <td style="--size: ${fairy}/${100}; --color:pink"> <span class="data"> ${fairy} </span> </td>
      </tr>
        `
      document.querySelector('.cuerpo_grafico1').innerHTML = plantilla;
    }
    )
    .catch(console.error);
  }
}





filtrarGraficos()
//console.log(agua,fuego,planta,volador,electrico,tierra,hada,dragon)


function cargarTabla (id) {
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
        
        sprite=data.sprites.front_default
        //alert(tipo)
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
  inicio=201
  fin_starter=0
  final=201
    if(region == "1"){
      id_starters=[]
      inicio=1
      fin_starter=inicio+8
      final=31
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
      final=182
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
      final=282
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
      final=417
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
      final=525
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
      final=680
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
      final=752
      for(let i=inicio; i<=fin_starter; i++){
        id_starters.push(i)
        

      }
      starters(id_starters[0]);
      starters(id_starters[3]);
      starters(id_starters[6]);
    }
    
    for(let i=inicio; i<=final; i++){
      cargarTabla(i);
      
    }
    

}


RangoPokemons()