const Input = document.querySelectorAll('.input');
const form = document.querySelector('.infos');
const Alert = document.querySelector('.alert');

let msg = '📛 Enter your informations !!!';

const Checkboxs = document.querySelectorAll('.checkbox');
const Labels = document.querySelectorAll('.label');

form.addEventListener('submit',(el) => {
    el.preventDefault();

    Input.forEach((inp) => {
        const InValue = inp.value;
        if(InValue == "") {
            Alert.innerHTML = msg;
            Alert.classList.add('show-alert');
        }
    }) 

    Checkboxs.forEach((Checkbox) => {
        if(Checkbox.checked == false) {
            Labels.forEach(label => {
                label.style.textDecoration = 'underline red 2px';
            })
        }
    })

    ValidateEmail();
})

setInterval(function() {
    Labels.forEach(label => {
        label.style.textDecoration = 'none';
    })
},3000)

setInterval(function() {
    Alert.innerHTML = "";
    Alert.classList.remove('show-alert');
},3000)

function countChars(obj){
    var maxLength = 20;
    var strLength = obj.value.length;
    
    if(strLength > maxLength){
        document.getElementById("charNum").innerHTML = strLength+'/'+maxLength;
        return document.getElementById("charNum").style.color = 'red';
    }else{
        document.getElementById("charNum").textContent = strLength+'/'+maxLength;
        return document.getElementById("charNum").style.color = "rgb(128, 125, 125)";
    }
}
