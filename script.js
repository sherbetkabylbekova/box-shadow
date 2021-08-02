const box = document.querySelector('.box')
const out = document.querySelector('#out')
const offsetX = document.querySelector('#offsetX')
const offsetY = document.querySelector('#offsetY')
const spread = document.querySelector('#spread')
const blur = document.querySelector('#blur')
const color = document.querySelector('#color')
const inset = document.querySelector('#inset')
const outset = document.querySelector('#outset')
const colorShadow = document.querySelector('#color-shadow')
const offsetXOut = document.querySelector('.offsetX-out')
const offsetYOut = document.querySelector('.offsetY-out')
const blurOut = document.querySelector('.blur-out')
const spreadOut = document.querySelector('.spread-out')



offsetX.oninput = generateBoxShadow
offsetY.oninput = generateBoxShadow
blur.oninput = generateBoxShadow
spread.oninput = generateBoxShadow
color.oninput = generateBoxShadow
inset.oninput = generateBoxShadow
outset.oninput = generateBoxShadow
colorShadow.oninput = generateBoxShadow
box.oninput = generateBoxShadow
out.oninput = generateBoxShadow



function generateBoxShadow(){
    console.log(1)
    let type = ""
    if (inset.checked) {
        type = "inset"
    } else {
        type = ""
    }
    box.style.backgroundColor = color.value
    box.style.boxShadow = `${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${colorShadow.value} ${type}`
    out.innerHTML = `box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} ${type}; </br>`
    out.innerHTML += `-webkit-box-shadow ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} ${type}; </br>`
    out.innerHTML += `-moz-box-shadow: ${offsetX.value}px ${offsetY.value}px ${blur.value}px ${spread.value}px ${color.value} ${type};`
    offsetXOut.innerText = `${offsetX.value}px`
    offsetYOut.innerText = `${offsetY.value}px`
    blurOut.innerText = `${blur.value}px`
    spreadOut.innerText = `${spread.value}px`
}
generateBoxShadow()

