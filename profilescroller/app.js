const data = [
    {
        name:'Bob',
        age:'21',
        gender:'male',
        job : 'CEO',
        location:'Earth',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name:'Notte Bob',
        age:'24',
        gender:'female',
        job : 'Actress',
        location:'Earth',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name:'Bob Kooler',
        age:'21',
        gender:'male',
        job : 'Lawyer',
        location:'Earth',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    },
];
//usually from api

const profiles = profileIterator(data);

//Call first profile
nextProfile();

//Next Event
document.getElementById('next').addEventListener('click',nextProfile)

//Next profile display
function nextProfile(){
    const currentProfile = profiles.next().value;
    if(currentProfile!== undefined){
    document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item"> Name : ${currentProfile.name}
            </li>
            <li class="list-group-item"> Age : ${currentProfile.age}
            </li>
            <li class="list-group-item"> Location : ${currentProfile.location}
            </li>
            <li class="list-group-item"> Job : ${currentProfile.job}
            </li>
        </ul>
    `;
    document.getElementById('imageDisplay').innerHTML = `<img src=${currentProfile.image}>`
    } else {
        //No more profiles
        window.location.reload();
    }
}

//Profile iterator
function profileIterator(profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < profiles.length ? 
                { value : profiles[nextIndex++], done:false } : {done:true}
                 
        }
    }
}