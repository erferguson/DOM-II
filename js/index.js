// Your code goes here

// -- 1 & 2 -- MOUSE-ENTER + MOUSE-LEAVE
const navContainer = document.querySelector('.nav-container')

navContainer.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = 'gold';
});
navContainer.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'white'
})

// -- 3 & 4 -- KEYDOWN + KEYUP -- 
const newBody = document.querySelector('body');

newBody.addEventListener('keydown', (e) => {
    e.key = 'j';
    e.target.style.background = 'gold'
})

newBody.addEventListener('keyup', (e) => {
    e.key = 'j';
    e.target.style.background = 'white'
})

// -- 5 -- CLICK -- 
const newPlaneImg = document.querySelectorAll('img').forEach(item => {
    item.addEventListener('click', event => {
    item.src = 'https://dw8stlw9qt0iz.cloudfront.net/VLVYPikq_0ydHmRj89KV9HVqWTQ=/fit-in/1440x810/filters:format(jpeg):quality(75)/curiosity-data.s3.amazonaws.com/images/content/landscape/standard/991adb98-ffd0-4c64-c11f-9b05b643bd83.jpg';
  item.alt = "plane nosediving with wing on fire";
    })
  });

  // -- 6 -- DBL-CLICK -- 
const busDisappear = document.querySelector('.intro img')

busDisappear.addEventListener('dblclick', (e) => {
    e.target.style.cssText = "display:none";
})

 // -- 7 -- SCROLL -- 

const headerLogoScroll = document.querySelector('h1');
const introH2 = document.querySelector('h2') // ALL doesn't select all??
const paragraph = document.querySelector('p');

document.addEventListener('scroll', function (event){
    headerLogoScroll.textContent = 'Fire Air'
    headerLogoScroll.style.cssText = 'color:crimson'
    introH2.textContent = 'Welcome to Fire Air'
    introH2.style.cssText = 'color:crimson'
    paragraph.textContent = 'This is Fire Air!'
});

// -- 8 -- 'RESIZE' -- // 
window.addEventListener('resize', event => {
    const changeTitle = document.querySelectorAll('h2');

    changeTitle[1].textContent = 'Live Dangerously!'
    changeTitle[2].textContent = 'Flying on Fire!'
    changeTitle[3].textContent = 'Hot Stuff!'
  });

  // -- 9 -- MOUSE-DOWN --
  const newDestination = document.querySelector('.content-pick')

  newDestination.addEventListener('mousedown', (e) => {
      e.target.style.cssText = 'color:orange'
  })

  // -- 10 -- CONTEXTMENU -- 
  const blankFooter = document.querySelector('footer')

blankFooter.addEventListener('contextmenu', e => {
    e.preventDefault()
})
