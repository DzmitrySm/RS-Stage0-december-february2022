console.log('Hello')

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

function getRuData() {
    fetch('https://raw.githubusercontent.com/rolling-scopes-school/file-storage/random-jokes/quotes.json')
    .then((res) => res.json())
    .then((data1) => {
        console.log(data1);
        ruTextCont (data1)
});
}
getRuData()

let data1 = getRuData();
console.log(data1)
let ruQuotes = document.querySelector('.ru')


function ruTextCont (data1) {
paragraph.textContent = data1[Math.floor(Math.random() * 100)].text
console.log(data1[Math.floor(Math.random() * 100)].text)
}
ruQuotes.addEventListener('click', () => {
    getRuData()

});
ruQuotes.addEventListener('click', getRuData)
let en = document.querySelector('.en')
en.addEventListener('click', getData)
let ruBtn = document.querySelector('.ru-button')
ruBtn.addEventListener('click', () => {
    getRuData()

});