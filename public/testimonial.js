
const recommendations = [
    {quote:'apartmentGH is a great place to find your dream apartment', author:'Sarah Johnson'},
    {quote:' apartmentGH, the best platform to reach out to thousands of tenants', author:'Micheal Bones'},
    {quote:'Spacious rooms and great natural lightining.', author:'Daniel Night'},
    {quote:'Loved the neighborhood - very peaceful and clean.',author:'Linda Brown'},
    {quote:'Perfect for a small family or working professionals.', author:'Bernice Ash'}
    
]

let index = 0;

const box = document.getElementById('testimonials-comment');
const box1 = document.getElementById('testimonials-header');

function showNextRecommendation(){

    if(!box) return;

    box.classList.remove('show');
    box1.classList.remove('show');

setTimeout(()=>{
    box.textContent = `"${recommendations[index].quote}"`;
    box1.textContent = `--${recommendations[index].author}`;
    box.classList.add('show');
    box1.classList.add('show')
    index = (index + 1) % recommendations.length;
},500)
  
}



let currentTestimonial = 0;

function nextTestimonial(){
  
    if(!box) return;

    box.classList.remove('show');
    box1.classList.remove('show');
    

    box.textContent = `"${recommendations[index].quote}"`;
    box1.textContent = `--${recommendations[index].author}`;
    box.classList.add('show');
    box1.classList.add('show')
    index = (index + 1) % recommendations.length;
  
}


function prevTestimonial(){

    if(!box) return;

    box.classList.remove('show');
    box1.classList.remove('show');
    

    box.textContent = `"${recommendations[index].quote}"`;
    box1.textContent = `--${recommendations[index].author}`;
    box.classList.add('show');
    box1.classList.add('show')
    index = (index - 1 + recommendations.length) % recommendations.length;
  

  

}



    showNextRecommendation();
    setInterval(showNextRecommendation, 4000)




function landlord(){
   location.assign('/signup')
}

function tenant(){
    location.assign('/tenantoverview')
}


