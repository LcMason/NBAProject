/** GLOBAL VARIABLES **/
  const display = document.querySelector('#display')
  const searchTerm = document.getElementById('search-input')
  const submitPlayer= document.getElementById('new-player-search')
  // const form = document.getElementById('form')
  const playerContainer= document.getElementById('playercontainer')
  let isBenched;
  let isStart;
  let players = [];
 
  
  
  

  
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
    const team = document.createElement('h2')
    team.innerText = player.team.full_name
    playerDiv.append(name, playerPosition, team);
    const playerContainer = document.getElementById('playercontainer') //Why is playerContainer grayed out??
    return playerDiv //why return player div?
   
}


function fetchPlayer(search) {
  fetch(`https://www.balldontlie.io/api/v1/players?search=${search}`)
    .then(res => res.json())
    .then(data => {
    players = data.data //storing arbitrary data with the matched element 'players'
  
   
      players.forEach((player) => {  
        renderPlayer(player);        

      });
    });
}

  function renderPlayer(player) {
    players.push(player)                      //adding elemnts to the end of the array of player. Player is not defined.
    const div = document.createElement('div')
    div.id = player.id            //the player.id will change as every player is assigned a diff id
    div.className = 'playerCard'
    div.innerHTML = `<p>Player Name: ${player.first_name} ${player.last_name}</p>`
    // if (button1.dataset && button2.dataset ) {
      const button1 = document.createElement('button');
      const button2 = document.createElement('button');
    if (button1.dataset && button2.dataset ) {
      button1.innerText = "START!"
      button1.dataset.isStart = false
      button2.innerText = "BENCH!"
      button2.dataset.isBenched =  false
      div.append(button1)
      div.append(button2)
      button1.addEventListener('click', () => {
        button1.dataset.isStart === 'true' ? removeFromStart(button1) : addToStart(button1)
        
      })
    
      button2.addEventListener('click', () => {
        button2.dataset.isBenched === 'true' ? removeFromBench(button2) : addToBench(button2)
      
        
    
      })
    }
    playerContainer.append(div)
}

  /* HELPER FUNCTIONS */

function addToStart (button1) {
    alert ('start')
    let foundPlayerObj = players.find((p)=> p.id === parseInt(button1.parentElement.id))
    button1.dataset.isStart = 'true'
    button1.innerText = 'Remove'
    let player = createdPlayer(foundPlayerObj)
    const starterContainer = document.getElementById('starterContainer')
    starterContainer.append(player, button1);
    // const card = document.querySelector('.playerCard')
    // card.innerHTML= " "
}


function addToBench (button2) {
  alert ('bench')
  let foundPlayerObj = players.find((p)=> p.id === parseInt(button2.parentElement.id)) //once you've assigned a value to a variable using const , you can't reassign it to a new value
  button2.dataset.isBenched = 'true'
  let player = createdPlayer(foundPlayerObj)
  const benchContainer = document.getElementById('benchContainer')
  benchContainer.append(player, button2);
  // const card = document.querySelector('.playerCard')
  // card.innerHTML= " "
 }


 function removeFromStart (e) {     //want to remove the player from the starterContainer and add them back into the playercontainer 
  alert  ("remove from starting lineup")
  debugger
  // let foundPlayerObj = players.find((p)=> p.id === parseInt(e.target.parentElement.id))
  let foundPlayerObj = players.find()
  let player = createdPlayer(foundPlayerObj)
  const playerContainer = document.getElementById('playercontainer')
  const div = document.createElement('div') 
  // div.id = player.id
  e.target.innerHTML = "START"
  playerContainer.append(div, player,e.target)
  debugger
 }

 function removeFromBench (e) {     //use .hidden to hide players on a second click 
  alert ("add to bench")
  let foundPlayerObj = players.find((p)=> p.id === parseInt(e.target.parentElement.id))
  let player = createdPlayer(foundPlayerObj)
  e.target.dataset.isBenched = e.target.dataset.isBenched === 'true' ? 'false' : 'true'

  e.target.innerHTML = "BENCH"
  

 }



  submitPlayer.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = document.getElementById('search-input').value //searchTeam is already defined in global scope. Why doesn't searchTerm.value work.
    playerContainer.innerHTML = " " //clear out the container
    fetchPlayer(searchTerm);
    e.target.reset()
  })


  const hover = document.getElementById("hover");
  hover.addEventListener("mouseover", function( event ) {
    event.target.style.color = "orange";
    setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);
  
  
  fetchPlayer('');
  // createForm();
  
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
 
  //Need to find form. Need  to .addEventListener to form. 
  //Find a way to get the input value. Pass the value into fetchPlayers
  //Populate the data on the DOM
