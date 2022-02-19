

const button=document.getElementById('button1');
const h1 = document.getElementById('h1')
const picture=document.getElementById('picture')
const wrapper = document.getElementById('wrapper')
button.onclick= function(button1){
let title = prompt('Первый вопрос:лучшая вещь в мире:')

h1.textContent= title
if(title='диван'){
    alert('ты прав!')
}
else{
    alert('это не то')
        

}
wrapper.classList.remove('hide')
}
button.onclick= function(button2)
{
    let title2 = prompt('Второй вопрос:лучший день в недели:')

h1.textContent= title2
if(title2='пятница'){
    alert('ты прав!')
}
else{
    alert('точно не этот')
}
}

