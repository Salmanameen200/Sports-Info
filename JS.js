let skilsContent = select('.skills-content');
if (skilsContent) {
  new Waypoint({
    element: skilsContent,
    offset: '80%',
    handler: function(direction) {
      let progress = select('.progress .progress-bar', true);
      progress.forEach((el) => {
        el.style.width = el.getAttribute('aria-valuenow') + '%'
      });
    }
  })
}

let popup = document.getElementById("popup");

function openpopup(){
  popup.classList.add("open-popup");
}

function closepopup(){
  popup.classList.add("open-popup");
}

var arr= [18, 23, 20, 17, 21, 18, 22, 19, 18, 20];
//var abc = arr.explode();

function beginhere(){
  var input = document.getElementById("enter").value;
  for (i =0; i <arr.length; i++) {
    document.getElementById("show").innerHTML= arr[i];



  }
  else{
    window.open("https://www.google.com/");


  }
};