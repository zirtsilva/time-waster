



$(document).ready(function(){

    $("#button-1").click(function(){

        console.log("Clicked button-1");
        
        fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json()
        .then(function(data){
            console.log(data.value);
            $('#toShow').empty().append('<h1>' + data.value + '</h1>')
        }))
        
      });


      
      $("#button-2").click(function(){

        console.log("Clicked button-2");
        
        fetch("https://api.adviceslip.com/advice")
        .then(response => response.json()
        .then(function(data){
            console.log(data.slip.advice);
            $('#toShow').empty().append('<h1>' + data.slip.advice + '</h1>')
        }))
        
      });

      

      $("#button-3").click(function(){

        console.log("Clicked button-3");
        
        fetch("http://quotes.rest/bible/vod.json")
        .then(response => response.json()
        .then(function(data){
          $('#toShow').empty().append('<h1>"' + data.contents.verse + '"</h1>')
          
      }))
        
      });



      $("#button-4").click(function(){

        console.log("Clicked button-4");
        
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json()
        .then(function(data){
            console.log(data.message);
            $('#toShow').empty().append("<img src='" + data.message + "' >")
        }))
        
      });


      $("#button-5").click(function(){

        console.log("Clicked button-5");
        
        fetch("https://uselessfacts.jsph.pl/random.json?language=en")
        .then(response => response.json()
        .then(function(data){
          $('#toShow').empty().append('<h1>' + data.text + '</h1>')
            
        }))
        
      });


      $("#button-6").click(function(){

        console.log("Clicked button-6");
        
        fetch("https://meowfacts.herokuapp.com/")
        .then(response => response.json()
        .then(function(data){
          $('#toShow').empty().append('<h1>' + data.data[0] + '</h1>')
          
            
        }))
        
      });


      $("#button-7").click(function(){

        
        console.log("Clicked button-7");
        
        fetch("https://cors-anywhere.herokuapp.com/https://api.yomomma.info/")
        .then(response => response.json()
        .then(function(data){
          $('#toShow').empty().append('<h1>' + data.joke + '</h1>')
          
            
        }))
        
      });


      $("#button-8").click(function(){

        console.log("Clicked button-8");
        
        fetch("https://cors-anywhere.herokuapp.com/https://insult.mattbas.org/api/en/insult.json")
        .then(response => response.json()
        .then(function(data){
          $('#toShow').empty().append('<h1>' + data.insult + '</h1>')
          
            
        }))
        
      });

})





