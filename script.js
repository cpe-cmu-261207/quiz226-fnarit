const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here
let a = document.querySelector('#length').value
let b = 620612152 + a


btn_toggle.onclick = () => {
  // your code here
    author.innerHTML = b
    btn_toggle.innerHTML = 'Show Author'
    // if(btn_toggle.innerHTML = 'Show Author'){
    //   author.innerHTML = '620612152 NARITSARARAT TAWIWUTTIRAT'
    //   btn_toggle.innerHTML = 'Show Calculator'
      
    // }
    
}

// more codes for Search and Reset buttons here


const search = document.querySelector("#search")
const text = document.querySelector("#text")
const span = document.createElement('span')
search.onclick = () => {
    let str = document.getElementById('text').innerHTML
    for(i=0; i < str.length; i++)
    if(str[i] <= length.value){
      str[i].color = 'red'
      span.setAttribute('value','#FF0000')
    }
      // span.appendChild(text)
      // span.style.color = 'red'
      // document.body.append(span)
}

// const text = document.querySelector("#text")
// const span = document.createElement('span')
// search.onclick = () => {
//   if(text.length <= b){
//     span.setAttribute('value','#FF0000')
//     text.append('span')
//   }
// }

const v = document.querySelector('#color').value
color.addEventListener('click', () =>{
  text.style.color = v
})