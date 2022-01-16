function fetchPlayer(input) {
  fetch(`https://www.balldontlie.io/api/v1/players?search=${input}`)
    .then((res) => res.json())
    .then((playerData) => {
      console.log(playerData)
      playerData.data.forEach(function (player) {
        console.log(player)
       
      });
    });
}
  
 
  const createForm = () => {
        const formContainer = document.querySelector('#playercontainer')
        
        

        const button1 = document.createElement('button');
        const button2 = document.createElement('button');
        button1.innerText = "START!"
        button2.innerText = "BENCH!"
        //const form = document.createElement('form');
        formContainer.innerHTML = `
        <form>
        <input type='text' placeholder='Player Name'>
        <input type='submit' value='Submit'>
        </form>
        `
        //formContainer.append(form)
       
       
        // button1.setAttribute('id', 'button1')
        // button2.setAttribute('id', 'button2')

        // document.querySelector('button1').addEventListener('click', e) {

        
  }

  createForm();

  //Need to find form. Need  to .addEventListener to form. 
  //Find a way to get the input value. Pass the value into fetchPlayers
  //Populate the data on the DOM


  fetchPlayer('')