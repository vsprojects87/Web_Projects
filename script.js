const upperset ="ABCDEFGHIJKLMNOPQRSTWXYZ";
const lowerset ="abcdefghijklmnopqrstwxyz";
const numberset ="1234567890";

const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random()*dataset.length)]
}

const passbox = document.getElementById('pass-box');
const totallength = document.getElementById('totalchar');
const uppercase = document.getElementById('uppercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const button = document.getElementById('btn');


const generatepass = (password="") => {
    if(uppercase.checked){
        password += getRandomData(upperset);
    }
    if(lowercase.checked){
        password += getRandomData(lowerset);
    }
    if(numbers.checked){
        password += getRandomData(numberset);
    }
    if(password.length <= totallength.value){
        return generatepass(password);
    }
    passbox.innerText = truncketstring(password,totalchar.value);
    console.log(truncketstring(password,totalchar.value));
}
button.addEventListener('click',function(){
     generatepass();
    });

function truncketstring(str,num){
    if(str.length > num){
        let substr = str.substring(0,num);
        return substr;
    }else{
        return str;
    }
}