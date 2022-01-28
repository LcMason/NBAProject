/** GLOBAL VARIABLES **/
  const display = document.querySelector('#display')
  const searchTerm = document.getElementById('search-input')
  const submitPlayer= document.getElementById('new-player-search')
  // const form = document.getElementById('form')
  const playerContainer= document.getElementById('playercontainer')
  const players = [];
  

  
// function submitForm(e){
//   e.preventDefault()
//   const test = document.getElementById('new-player-search').value     //why doesn't submitPlayer work here??
//   fetchPlayer(test)
// }



const createdPlayer = (player) => {
    const playerDiv = document.createElement('div')
    const name = document.createElement('h1')
    name.innerText = player.first_name + ' ' + player.last_name
    const playerPosition = document.createElement('h3')
    playerPosition.innerText = player.position
    const heightFeet = document.createElement('h4')
    heightFeet.innerText = player.height_feet
    const heightInches = document.createElement('h4')
    heightInches.innerText = player.height_inches
    const weightPounds = document.createElement('h4')
    weightPounds.innerText = player.weight_pounds
    const team = document.createElement('h2')
    team.innerText = player.team.full_name
    playerDiv.append(name, playerPosition, heightFeet, heightInches, weightPounds, team)
    const playerContainer = document.getElementById('playercontainer')
    playerContainer.append(playerDiv)
}

function renderPlayers(playerData){
  
  let fetchedPlayers = playerData.data
  fetchedPlayers.forEach(player => {
    // varibale declaration. Interpalate through each object
  })

}

  const createForm = () => {
        const formContainer = document.querySelector('#playercontainer')
        const button1 = document.createElement('button');
        const button2 = document.createElement('button');
        
//         
        // const form = document.createElement('form');

        /** EVENT HANDLERS **/
        // formContainer.innerHTML = `
        // <form id = 'form'>
        // <input type = "text" placeholder = "Player Name" />
        // <input type='submit' value='Submit' />
        // </form>
        // `
  }


// submitPlayer.addEventListener('submit', submitForm)
function fetchPlayer(test) {
  fetch(`https://www.balldontlie.io/api/v1/players?search=${test}`)
    .then(res => res.json())
    .then(data => {

  
      data.data.forEach((player) => {
        renderPlayer(player);        
      });
    });
}

  function renderPlayer(player) {
    players.push(player)
    const div = document.createElement('div')
    div.className = 'playerCard'
    div.innerHTML = `<p>Player Name: ${player.first_name} ${player.last_name}</p>`
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    button1.innerText = "START!"
    button2.innerText = "BENCH!"
    button1.addEventListener('click', addToStart)
    button2.addEventListener('click', addToBench)
    div.append(button1)
    div.append(button2)
    playerContainer.append(div)
  }

function addToStart (e) {
 alert ('start')

    let player = e.target.previousElementSibling
    const startContainer = document.getElementById('starterContainer')
    starterContainer.append(player);
    const card = document.querySelector('.playerCard')
    card.innerHTML= " "
}


function addToBench (e) {
  alert ('bench')
 
  let player = e.target.previousElementSibling.previousElementSibling
  const benchContainer = document.getElementById('benchContainer')
  benchContainer.append(player);
  const card = document.querySelector('.playerCard')
  card.innerHTML= " "
 }
  
  
  submitPlayer.addEventListener('submit', (e) => {
    e.preventDefault();
    // playerContainer.innerHTML = " "
    // const div = document.createElement('div')
   
    let searchTerm = document.getElementById('search-input').value
    playerContainer.innerHTML = " "
    fetchPlayer(searchTerm)
  })


  const hover = document.getElementById("hover");
  hover.addEventListener("mouseover", function( event ) {
    event.target.style.color = "orange";
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
  

  
  //KEEP LINES 142 - 156???
  // function startPlayer(e){
  //   e.preventDefault()
  //   let starter = document.getElementById('play').value
  //   // console.log(starter)
  //   fetchPlayer(starter)
  // }

  //   function benchPlayer(e){
  //     e.preventDefault()
  //     debugger
  //     let reserve = document.getElementById('sit').value
  //     // console.log(reserve)
  //     fetchPlayer(reserve)
  //   }




  
  fetchPlayer('');
  createForm();
  
  
  //Need to find form. Need  to .addEventListener to form. 
  //Find a way to get the input value. Pass the value into fetchPlayers
  //Populate the data on the DOM
