const TypeWriter = function(txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
   }
  
   //Type Method
   TypeWriter.prototype.type = function() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
     // Get full text of current word
    const fullTxt = this.words[current];
  
    // Check if deleting
     if(this.isDeleting) {
       // Remove char
       this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
       // Add char
       this.txt = fullTxt.substring(0, this.txt.length + 1);
     }
  
    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
     // Initial Type Speed
     let typeSpeed = 200;
  
    if(this.isDeleting) {
      typeSpeed /= 2;
     }

  
     setTimeout(() => this.type(), typeSpeed);
   };
    
    // Init On DOM Load
    document.addEventListener('DOMContentLoaded', init);
    
    // Init App
    function init() {
      const txtElement = document.querySelector('.txt-type');
      const words = JSON.parse(txtElement.getAttribute('data-words'));
      const wait = txtElement.getAttribute('data-wait');
      // Init TypeWriter
      new TypeWriter(txtElement, words, wait);
    }
       
    $(document).ready(function(){
      // Add smooth scrolling to all links
      $("a").on('click', function(event) {
    
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } 
      });
    });


    function buttonOne(){
      
      if(true){
        document.getElementById('show').style.display = 'block'
       
      } 
      if(document.getElementById('show').style.display == 'block'){
        setTimeout(function(){  alert("DID YOU SEE THAT? I WAS INVISIBLE!!") }, 500);
       
      }
    }
      
    
    function buttonTwo(){
      if(document.getElementById('show').style.display === 'block'){
        if(true){
          document.getElementById('show').style.display = "none";
        }
      } else{
        alert("You can't lost something you haven't gained")
      }
    }

    function buttonThree(){
      if(true){document.getElementById('light').style.display = "absolute"}
      
      document.body.style.display="none";
      setTimeout(function(){ alert("Finally! Everything is now gone. No more hidden solutions, just nothingness. 5500000 microseconds in the future, someone will make it come true") }, 500);
      setTimeout(function(){ alert("5500000 microseconds have passed. Restart this whole creation the developer made. Bring back the balance, bring back the world. Or idk maybe wait a little more? Who knows it might get better"); }, 6000);
      setTimeout(function(){ alert("You still there? Wait til the condition is true, then you will be rewarded for your patience."); }, 12000);
      setTimeout(function(){
        alert("All shall be revealed")
        if(document.body.style.display="none"){
          document.body.style.display="block";
          document.body.style.background="#4D4747";
          document.body.style.color="#F1DEDE";
          
        }
      },13000)
    }

    function buttonFour(){
      if(document.getElementById('asd').value == 'I want to fly across the galaxy')
      {
        document.getElementById('asd').style.color = "red"
        document.getElementById('asd').value = 'LET THE DARK MAGIC FLOWS THROUGH ME ONE LAST TIME'

      } else if(document.getElementById('asd').value == 'LET THE DARK MAGIC FLOWS THROUGH ME ONE LAST TIME'){
        alert("Tell Stark: Don't go, you idiot! Don't leave your kids. You goddamn fool!...S...T...A...Y...Stay, you idiot! Tell him, Murph! Stay...Murph, tell him again! Don't let him leave!...Murph, don't let me leave...STAY!! Interstellar reference, anyone? You've seen hidden solutions, now it's hidden feels.")
      } else{
        alert("No magic can be invoked")
      }
      
    }