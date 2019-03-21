

document.querySelector('.get-jokes').addEventListener('click',getJokes);


//create fun

function getJokes(e){
  //create number
const number=document.querySelector('#number').value;

//create xhr

const xhr=new XMLHttpRequest();
xhr.open('Get',`http://api.icndb.com/jokes/random/${number}`,true);


//on load fun
xhr.onload=function(){
  if(this.status===200){
    const response=JSON.parse(this.responseText);

    let output='';
    if (response.type==='success'){
        response.value.forEach(function(joke) {
          output+=`<li>${joke.joke}</li>`
        });
    }else{
      output+='<li>oopos something wrong</li>'
    }

    document.querySelector('.jokes').innerHTML=output;
  }
}



xhr.send();
  e.preventDefault(e)
}