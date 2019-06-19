const accordionItemsEl = document.getElementsByClassName("accordion__item");

function accordion(){
    for (let item of accordionItemsEl) {
      let accHeader = item.firstElementChild;
      accHeader.addEventListener("click", function() {
          let accDetails = this.nextElementSibling;
          this.classList.toggle("active");
          if (accDetails.style.maxHeight){
              accDetails.style.maxHeight = null;
              this.lastElementChild.innerHTML = "+";
          } else {
              accDetails.style.maxHeight = accDetails.scrollHeight +"px";
              this.lastElementChild.innerHTML = "-";
          }
      })
    }
}

accordion();