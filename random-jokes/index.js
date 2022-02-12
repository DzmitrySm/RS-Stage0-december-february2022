console.log('Hello')





//async function getQuotes () {
    //const quotes = 'https://api.icndb.com/jokes/random';
   // const res = await fetch(quotes);
    //const data = await res.json()
   // console.log(data)
    
//}
//let data = getQuotes ()
//console.log(data)
function getData() {
    fetch('https://api.icndb.com/jokes/random')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
       textCont (data) 

      });
  }
  getData();


let data = getData();
let paragraph = document.querySelector('.quotes')
let button = document.querySelector('.button-joke')
let main = document.querySelector('.main')
function textCont (data) {
    paragraph.textContent = data.value.joke
     
}
button.addEventListener('click', () => {
    main.classList.toggle('active')
    getData()
});



