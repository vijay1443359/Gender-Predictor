br=document.createElement("br")


var div2=document.createElement('div')
div2.classList.add('maindiv')
document.body.appendChild(div2)

fname=document.createElement("input");
fname.setAttribute('type','text');
fname.setAttribute('id','first-name');
fname.setAttribute('class','text-center');
fname.setAttribute('placeholder','Enter Name');

div2.append(br)


div2.append(fname)

button=document.createElement("button")
button.setAttribute("id","submit")
button.setAttribute("name","Enter")
button.setAttribute("class","btn btn-primary")
button.innerText="Enter"

div2.append(br)


div2.append(button)

let btn=document.getElementById("submit").addEventListener("click",validate)


var div1=document.createElement('div')
div1.classList.add('container')
document.body.appendChild(div1)

var row=document.createElement('div')
row.classList.add('row')
div1.appendChild(row)



function validate(event){
    event.preventDefault()

    fa=document.getElementById("first-name").value;
    var a = "https://api.genderize.io/?name="
    var b = fa;

    var c = a.concat(b)

    fetch(c)
    .then((d)=>d.json())
    .then((data)=>{
        console.log(data)
        row.innerHTML += `
        <div class="incls">
        ${fa} <br>
        You Are A <br> ${data.gender} 😀
        </div>` 
    })
    .catch((er)=>{
        console.log("Error")
    })




}

