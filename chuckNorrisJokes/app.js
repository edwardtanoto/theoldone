document.querySelector('.get-jokes').addEventListener('click',getJoke);

function getJoke (e){
    const number = document.querySelector('input[type="number"]').value;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://api.icndb.com/jokes/random/${number}`,true);

    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.responseText);

            let output = '';
            if(response.type === 'success'){
                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`
                });
            } else {
                output += '<li>Something went wrong</li>'
            }
            document.querySelector('.jokes').innerHTML = output;
            
        }
    }
    
    xhr.send();
    var color = ['#FF6767', '#FFB600', '#C0FF21', '#21FF96', '#21F5FF', '#60B7FF', '#9577FF', '#E2B4E4',"#c6c6c6", "#f99393", "#c9ffd5"];
   
  
    e.preventDefault();
    document.querySelector('body').style.background = color[Math.floor(Math.random() * color.length)];
}