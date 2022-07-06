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
     let typeSpeed = 600;
  
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


//Define UI 
const form = document.querySelector('.form-group'),
      firstInput = document.querySelector('.inputOne'),
      btnOne = document.querySelector('#buttonOne'),
      firstOutput = document.querySelector('#outputone'),
      secondOutput = document.querySelector('#outputtwo'),
      chooseSide = document.querySelector('.choose-side'),
      theBuilder = document.querySelector('.the-builder'),
      theWanderer = document.querySelector('.the-wanderer'),
      buildTech = document.querySelector('#build-tech'),
      findStark = document.querySelector('#order-army'),
      chsSd= document.querySelector('.chs-sd'),
      changeSystemChoice = document.querySelector('#change-system'),
      oldForest = document.querySelector('#old-forest'),
      toBorder = document.querySelector('#to-border'),
      rebel = document.querySelector('#rebel'),
      firstBuilder = document.querySelector('.first-choice-builder'),
      secondChoiceBuilder = document.querySelector('.second-choice-builder')
      secondBuilder = document.querySelector('.output-second-builder'),
      firstWanderer = document.querySelector('.first-choice-wanderer'),
      secondChoiceWanderer = document.querySelector('.second-choice-wanderer')
      secondWanderer = document.querySelector('.output-second-wanderer'),
      destroyRebel = document.querySelector('#destroy-rebel'),
      negotiateRebel = document.querySelector('#negotiate-rebel'),
      starkResearch = document.querySelector('#stark-research'),
      leaveStark = document.querySelector('#leave-stark'),
      democracy = document.querySelector('#democracy'),
      absoluteMonarchy = document.querySelector('#absolute-monarchy'),
      intoRocket = document.querySelector('#get-rocket'),
      leaveRocket = document.querySelector('#leave-rocket'),
      goBeyond = document.querySelector('#go-beyond'),
      leaveBorder =document.querySelector('#leave-border'),
      lightSide = document.querySelector('.light'),
      darkSide = document.querySelector('.dark'),
      firstSecondChoiceBuilder = document.querySelector('#if-build-tech'),
      secondSecondChoiceBuilder = document.querySelector('#if-order-army'),
      thirdSecondChoiceBuilder = document.querySelector('#if-change-system'),
      firstSecondChoiceWanderer = document.querySelector('#if-wander-forest'),
      secondSecondChoiceWanderer = document.querySelector('#if-into-border'),
      thirdSecondChoiceWanderer = document.querySelector('#if-plan-rebel'),
      thirdChoiceBuilder = document.querySelector('.third-choice-builder'),
      thirdChoiceWanderer = document.querySelector('.third-choice-wanderer'),
      joinStark = document.querySelector('#join-stark'),
      punishStark = document.querySelector('#punish-stark'),
      leaveEarth = document.querySelector('#leave-earth'),
      stayEarth = document.querySelector('#stay'),
      reJoinBuilder = document.querySelector('#re-join'),
      declineOffer = document.querySelector('#decline');
      mars = document.querySelector('#mars'),
      lastWanderer = document.querySelector('#last-arc'),
      stark = document.querySelector('#stark'),
      darthvader = document.querySelector('.darthvader'),
      obiwan = document.querySelector('.obiwan'),
      builderLabel = document.querySelector('.charBuilder'),
      wandererLabel = document.querySelector('.charWanderer');




loadEventListener()

//add event listener
function loadEventListener(){
    form.addEventListener('submit',checkInput);
    darkSide.addEventListener('click',darkSideIntro);
    lightSide.addEventListener('click',lightSideIntro);
    buildTech.addEventListener('click',militaryBuilder);
    findStark.addEventListener('click',findBuilderLeader);
    changeSystemChoice.addEventListener('click',showUpSecondPathSystem);
    oldForest.addEventListener('click',findFalcon);
    toBorder.addEventListener('click',goToBorder);
    rebel.addEventListener('click',planRebel);
    destroyRebel.addEventListener('click',endRebel);
    firstSecondChoiceBuilder.addEventListener('click', buildTechPath);//
    secondSecondChoiceBuilder.addEventListener('click', orderArmyPath);//
    thirdSecondChoiceBuilder.addEventListener('click', changeSystemPath);//
    firstSecondChoiceWanderer.addEventListener('click', wanderForestPath);
    secondSecondChoiceWanderer.addEventListener('click',intoBorderPath);
    negotiateRebel.addEventListener('click',negotiateRebelPath);//
    starkResearch.addEventListener('click',starkResearchPath);//
    leaveStark.addEventListener('click', leaveStarkPath);//
    democracy.addEventListener('click',democracyPath);//
    absoluteMonarchy.addEventListener('click',absoluteMonarchyPath);//
    intoRocket.addEventListener('click',intoRocketPath);//
    leaveRocket.addEventListener('click',leaveRocketPath);//
    goBeyond.addEventListener('click',goBeyondPath);//
    leaveBorder.addEventListener('click',leaveBorderPath);//
    joinStark.addEventListener('click',joinStarkPath);
    punishStark.addEventListener('click',punishStarkPath);
    leaveEarth.addEventListener('click',leaveEarthPath);
    stayEarth.addEventListener('click',stayEarthPath);
    reJoinBuilder.addEventListener('click',reJoinPath);
    declineOffer.addEventListener('click',declineOfferPath);

}

function checkInput(e){
    const user = firstInput.value;
    console.log(firstInput.value);
    firstOutput.textContent = `Hello there ${user} ! Welcome to funStation`;
    setTimeout(strikeIntro,800)
    setTimeout(changeIntro,1500)

    e.preventDefault();
}



function strikeIntro(){
  const user = firstInput.value;
  var str = `Hello there ${user} ! Welcome to funStation`;
  var result = str.strike();
  firstOutput.innerHTML = result;
}


function changeIntro(){
  const user = firstInput.value;
  firstOutput.style.color = '#FF5C5C';
  const intro = `After earth nuclear war at 2063, the world have been in devastating state. Some survivors died because of the radiation, some survive, overthrew the government that started the war, and become the new builder of the world. They were called The Builder, they rebuild the modern civilisation, one where they keep their eyes on everything, to prevent the war from ever happening again. The leader of The Builder was named Stark, he held the control over Solitude, the last remained city of Earth. 17 years after, he was replaced by ${user} , his child. ${user} was told to maintain the order, silence those who dare to oppose the Builder from Stark before he left to explore the border. `
  firstOutput.textContent = intro;
  setTimeout(function(){
    chooseSide.style.display = 'block'
    chsSd.style.display = 'block'
    document.querySelector('.test').textContent = "Dystopian RPG"
  document.body.style.background = '#3E3E3E'
  document.querySelector('.heading').style.color = '#ccc'
  chooseSide.style.display = 'block'
 
  }, 5000)
  
}
function darkSideIntro(){
  const user = firstInput.value;
  if(darkSide){
    secondOutput.textContent = `I, ${user}, will maintain the order as the Builder`;
    chooseSide.style.background = '#FFC0CB'
    firstWanderer.style.display = 'none'
    lightSide.disabled = true
    firstInput.disabled =true
    obiwan.style.display = 'none';
    wandererLabel.style.display = 'none'
    builderPartOne()
    
  }

}
function lightSideIntro(){
  const user = firstInput.value;
  if(lightSide){
   secondOutput.textContent = ` I, ${user} , abandon my position as leader of the Builder`
   chooseSide.style.background = '#00FFFF';
   darkSide.disabled = true;
   firstInput.disabled =true;
   darthvader.style.display = 'none';
   builderLabel.style.display = 'none'
   wandererPartOne()
   
  }
}

function builderPartOne(){
  theBuilder.style.display = 'block';
  secondChoiceBuilder.style.display = 'none';
  darkSide.disabled = true
}
function wandererPartOne(){
  theWanderer.style.display = 'block';
  secondChoiceWanderer.style.display = 'none'
  lightSide.disabled = true
}
function militaryBuilder(e){
  buildTech.disabled = true
  findStark.style.display = 'none'
  changeSystemChoice.style.display = 'none'
  firstBuilder.textContent = "You've built a fully operational military robot, it detects a big rebellion uprising coming.";
  firstSecondChoiceBuilder.style.display = 'block'
  buildTechPath()
  e.preventDefault()
}
function findBuilderLeader(e){
  buildTech.style.display = 'none';
  changeSystemChoice.style.display = 'none';
  firstBuilder.textContent = "You found Stark in the border of the Solitude's territory, he was doing a research, about the old civilisation of the earth. He found an old computer that recorded the history of half century ago, it's told that there were an organisation that the old government used to do their dirty work. Code name was V1A"
  orderArmyPath()
  e.preventDefault()
}
function showUpSecondPathSystem(e){
  findStark.style.display = 'none';
  buildTech.style.display = 'none';
  
  firstBuilder.textContent = "You wanted to reform the order, some members don't like it. "
  changeSystemPath()
  e.preventDefault()
}
function findFalcon(e){
  toBorder.style.display = 'none';
  rebel.style.display = 'none';
  oldForest.disabled = true
  firstWanderer.textContent = "While wandering around the old forest, you found a building, inside it there is an abandoned rocket, the name was Falcon, maybe it's reusable? You heard footsteps coming to your way, the rocket looks clean for something old."
  wanderForestPath()
  e.preventDefault()
}
function goToBorder(e){
  oldForest.style.display = 'none';
  rebel.style.display = 'none';
  firstWanderer.textContent = "Beyond the Solitude, the rubbles of the old building was seen. It's true that there are no world beyond Solitude ."
  intoBorderPath()
  e.preventDefault()
}
function planRebel(e){
  rebel.textContent = "Game Over"
  oldForest.style.display = 'none';
  toBorder.style.display = 'none';
  secondWanderer.style.color = 'red'
  secondWanderer.textContent = "The moment you planned the rebel, security bug robot recorded it, and the security drone fly over and annihilate everyone. Game Over"
  e.preventDefault()
}

function endRebel(e){
  destroyRebel.textContent = "Game Over"
  buildTech.disabled = true
  negotiateRebel.style.display = 'none'
  firstBuilder.style.color = 'red'
  firstBuilder.textContent = "The rebellion was crushed. No one stay alive, families and relatives of the rebels also put down. The robot learnt everything. It understands the system of the Builder, and takeover the world with other robots. It kills everyone who opposed it , including you."
  e.preventDefault()
}
function negotiateRebelPath(e){
  if(true){
    negotiateRebel.textContent = "Game Over"
    buildTech.disabled = true
  destroyRebel.style.display = 'none'
  firstBuilder.textContent = "Other members of the Builder don't like your softness , they told you the only thing that maintain the order is an absolute control. The executives member command the security robot to end your life and the rebellion. The media said the rebel bring you down before the security robot ended the rebellion "
  firstBuilder.style.color = 'red';
  }
  e.preventDefault()
}

function buildTechPath(){
  if(firstSecondChoiceBuilder){
    secondChoiceBuilder.style.display = 'block'
    secondSecondChoiceBuilder.style.display = 'none'
    thirdSecondChoiceBuilder.style.display = 'none'
    darkSide.disabled = true;
  }
}
function orderArmyPath(){
  if(secondSecondChoiceBuilder){
    secondChoiceBuilder.style.display = 'block'
    firstSecondChoiceBuilder.style.display = 'none'
    thirdSecondChoiceBuilder.style.display = 'none'
    darkSide.disabled = true;
    findStark.disabled = true;
  }
}
function changeSystemPath(){
  if(thirdSecondChoiceBuilder){
  secondChoiceBuilder.style.display = 'block'
  secondSecondChoiceBuilder.style.display = 'none'
  firstSecondChoiceBuilder.style.display = 'none'
  darkSide.disabled = true;
  changeSystemChoice.disabled = true;
  }
}
function intoBorderPath(){
  if(secondSecondChoiceWanderer){
    secondChoiceWanderer.style.display = 'block'
    firstSecondChoiceWanderer.style.display = 'none'
    thirdSecondChoiceWanderer.style.display = 'none'
    lightSide.disabled = true;
    toBorder.disabled = true;
    }
}

function starkResearchPath(e){
  if(true){
    const user = firstInput.value;
    leaveStark.style.display = 'none'
    firstBuilder.textContent = `According to vault777 archieves in the old computer, V1A controlled the world through technology, they watched over everyone, blackmailed the leader of nations to fight each other, assassinated the opposition by 'vehicle accident' and other ways, and have ruled the world in shadow for centuries. There are some people who escaped this global organisation , approximately 200 people. They were under protection of other global organisation, which was StarX. StarX escaped to other planet, and build their utopian there. Meanwhile, the remnant of V1A who were responsible for the start of nuclear war, disguised as the member of the Builder , they make Stark their leader as a scapegoat in case their absolute control threatened. Stark raised you, ${user}, to maintain the order in the Builder's way , so the Builder won't lay a finger to his child. He asked you to let him rebuild this world they way it was supposed to be.`
    stark.style.display = 'block';
    starkResearch.style.display = 'none'
  }
  e.preventDefault()
}

function leaveStarkPath(e){
  if(true){
  
  starkResearch.style.display = 'none';
  firstBuilder.style.color ='red';
  firstBuilder.textContent = "You leave Stark alone, and on the way to capital of Solitude, you are assassinated by the Builder's assassin. Is it because they suspect you know something from Stark?"
  }
  e.preventDefault()
}

function wanderForestPath(){
  if(firstSecondChoiceWanderer){
    secondChoiceWanderer.style.display = 'block'
    secondSecondChoiceWanderer.style.display = 'none'
    thirdSecondChoiceWanderer.style.display = 'none'
    lightSide.disabled = true;
    }
}
function democracyPath(e){
  if(true){
    democracy.textContent = "Game Over"
    changeSystemChoice.disabled = true;
    absoluteMonarchy.style.display = 'none';
    firstBuilder.style.color ='red';
    firstBuilder.textContent = "The Builder strangely agree to turn into democracy. Their first act is to vote who is the new leader to replace you. You've been replaced and got killed in 'accident' because you know too much about The Builder."
    }
    e.preventDefault()
}
function absoluteMonarchyPath(e){
  if(true){
    absoluteMonarchy.textContent = "Game Over"
    changeSystemChoice.disabled = true;
    democracy.style.display = 'none';
    firstBuilder.style.color ='red';
    firstBuilder.textContent = "You ordered your robots to clean the table, all the member of The Builder have been killed, and you rule alone at the top. Your robots do the same to you. Game Over"
    }
    e.preventDefault()
}
function intoRocketPath(e){
  if(true){
    oldForest.disabled = true
    leaveRocket.style.display = 'none'
    intoRocket.style.display = 'none'
    mars.style.display = 'block'
    firstWanderer.textContent = "You met with someone, he introduced himself as Steve Mask, the grandson of Eron Mask, the leader of StarX. He told me about StarX, and why is he here. He said his grandparent brought 200 peoples to build an utopia in Mars in 2025. He left two of his son to watchover this planet, and come to Mars after they successfully build an utopia there. 38 Years later in 2063, he was sent an invitation from his cousin to come to Mars. Unfortunately, nations of Earth went to war to take control over the depleted energy sources. 17 years after the war, he found other alternative energy source that can be used to activate the rocket. He is about to go to join his family in Mars."
    }
    e.preventDefault()
}

function leaveRocketPath(e){
  if(true){
    leaveRocket.textContent = "Game Over"
    oldForest.disabled = true;
    intoRocket.style.display = 'none'
    firstWanderer.style.color = 'red'
    firstWanderer.textContent = "After you leave, you lost in the old forest, and got surrounded by monkey mutants, you shot some of them, but they outnumber you. You tried to run but they outrun you. Game Over"
  }
  e.preventDefault()
}
function goBeyondPath(e){
  if(true){
    goBeyond.textContent = "Game Over"
    toBorder.disabled = true;
    leaveBorder.style.display ='none';
    firstWanderer.style.color = 'red'
    firstWanderer.textContent = "You left the border, travel into a shelter where you found a beast, it chases you than you shot the beast to dead. In the shelter you saw your father's corpse. He had a gunshot wound. Then someone hit you off from behind, and you can't wake up anymore."
  } 
  e.preventDefault()
}
function leaveBorderPath(e){
  if(true){
    toBorder.disabled = true;
    goBeyond.style.display = 'none';
    firstWanderer.textContent = "You went back to nearby town, you heard the news of your father's dead. The news mentioned he died in this town . Moment after that, the Builder's executive asked you to return to the organisation."
    builderArc()
  }
  e.preventDefault()
}
function joinStarkPath(e){
  if(true){
    const user = firstInput.value
    joinStark.textContent = "Game Over, try every ending!"
    starkResearch.disabled = true;
    punishStark.style.display = 'none'
    firstBuilder.textContent = `You joined Stark to end the absolute control of the Builder. The citizens of Solitude stand behind you, the Builder commands their security droid, but the security droid haven't been upgraded, Stark used the old computer that he had to take control over the droids, cleaning Solitude from the Builder, then turn the droid off. You saw a rocket with StarX logo flying away from the planet, and ${user}, as the leader of new reformed Builder, set a dream to leave the planet to live among the stars.`;
  }
  e.preventDefault()
}
function punishStarkPath(e){
  if(true){
    punishStark.textContent = "Game Over"
    firstBuilder.style.color = 'red';
    joinStark.style.display = 'none'
    firstBuilder.textContent = "You bring him to 'justice' in the Builder's court. The Builder's appreciate your action, and let you join the elites, you control Solitude with absolute control, keeping them stay when they were about to flee, and continue the dystopian control for 3 years, until someone from StarX called for help of Martians to liberate Solitude. Solitude's won the war with heavy casualties. You stay as the emperor of Solitude, and murder the Builder's elite while they were recovering and stay at the top as absolute monarchy .  "
  }
  e.preventDefault()
}
function leaveEarthPath(e){
  if(true){
    leaveEarth.textContent = "Game Over, try different ending."
    const user = firstInput.value
    stayEarth.style.display = 'none'
    firstWanderer.textContent = `You've arrived at the capital of Mars, the utopia which named Solis. You and Steve told the leader of the Martians, Zedd, of the current earth situation. They agreed to help, but they only serve parts to build our own spaceship, it would probably take 3 years to develop a full working spaceship alone. ${user} and Steve worked together, and finally took 2 years to return to Earth and after 3 days of war, you finally bring the Builder's absolute control down, and finally reform Solitude. Solitude and Solis rebuild their relationships after, and bring people of Solitude to Solus, to explore the stars.`
  }
  e.preventDefault()
}
function stayEarthPath(e){
  if(true){
    stayEarth.textContent = "Game Over"
    firstWanderer.style.color = "red"
    firstWanderer.textContent = "You stay on earth wandering around the world for almost 3 years, hunting beasts and wander Solitude from the map you get inside the building. Steve brought 10 people from Mars to save Solitude. The Builder's already upgrade their defense in past three years, they fought for 3 days, and even better technology from other planets, Steve got outlasted and retreat. The Builder's droid gained too much experience of war, making some of them rogue and build chaos in Earth, the AI take the Earth under their control. You tried to stop the droids but you failed. "
    leaveEarth.style.display = 'none'
  }
  e.preventDefault()
}
function reJoinPath(e){
  if(true){
    declineOffer.style.display = 'none'
    firstWanderer.style.color = 'red'
    reJoinBuilder.textContent = "Game Over"
   firstWanderer.textContent = "After you get back to the Builder's base, they interrogate you, asking what do you know about StarX, and what did your father told you. You said you know nothing, and they shut you down for good."
  }
  e.preventDefault()
}
function declineOfferPath(e){
  if(true){
    reJoinBuilder.style.display = 'none'
    firstWanderer.style.color = 'red'
    declineOffer.textContent = "Game Over"
    firstWanderer.textContent = "You declined the offer, and they left. On your way home, you can't control your vehicle, you and your vehicle accidentally fell from the cliff."
  }
  e.preventDefault()
}
function builderArc(){
  leaveBorder.style.display = 'none'
  lastWanderer.style.display = 'block'
}