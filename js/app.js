if (document.querySelector('.overlay')) {
  
  const o = document.querySelector('.overlay');
  const l = document.querySelector('.opener');

  l.addEventListener('click',function(e){
    // do not link to page right away
    e.preventDefault();
    // get the URL from the link
    const url = e.currentTarget.href;
    // remove hide class from overlay to show it
    o.classList.remove('hide');
    // redirect to the url on the link after a set amount of time
    // (here, 3 seconds)
    setTimeout(function(){
      location.href = url;
    },2000);
  })

}


const form = document.querySelector('form');
const labels = form.querySelectorAll('input');
const btn = form.querySelector('button');

labels.forEach(function(l){
  l.addEventListener('click',function(e){
    btn.disabled = false;
    // labels.forEach(function(lc){
    //   //console.log(lc.checked == false);
    //   if(lc.checked){
    //     //console.log('hit');
    //     btn.disabled = false;
    //   } else {
    //     //console.log('hit not');
    //     btn.disabled = true;
    //   }
    // })
  })
})


