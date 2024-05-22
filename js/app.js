const text = document.querySelector(".back").innerText;
document.querySelector(".back").innerText = " ";

let index = 0;
function typeWritter() {
  if (index < text.length) {
    document.querySelector(".back").innerText += text.charAt(index);
    index++;
    setTimeout(typeWritter, 200);
  }
}
typeWritter();

const boxGallery = document.querySelectorAll(".box-gallery");
boxGallery.forEach((element) => {
  const video = element.querySelector("#colvideo");
  element.addEventListener("mouseover", () => {
    video.play();
  });
  element.addEventListener("mouseout", function () {
    video.pause();
  });
});

const form = document.querySelector(".datos");

form.addEventListener("submit",handlesubmit);

async function handlesubmit(event){
  event.preventDefault()
  const form_ = new FormData(this)
  const response=await fetch(this.action, {
    method:this.method,
    body: form_,
    headers: {
      'Accept': 'application/json'
    }
  })
  if(response.ok){
    this.reset()
    alert('Thank you, I will be in touch soon')
  }
}

