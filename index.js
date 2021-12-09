const billamount = document.querySelector("#billamount")
const cashgiven = document.querySelector("#cashgiven")
const cashgivenarea = document.querySelector("#cashgivenarea")
const nextbtn = document.querySelector("#nextbtn")
const calculatebtn = document.querySelector("#calculatebtn")
const result = document.querySelector("#result")
const noofNotes = document.querySelectorAll(".noofNotes")
const notetable = document.querySelector("#notetable")
const allnotes = [2000, 500, 100, 20, 10, 5, 1];
nextbtn.addEventListener('click',()=>{
    if(billamount.value > 0 ){
      cashgivenarea.style.display = "flex"
    }
    else{
      alert('Please Enter a valid input')
    }
})
calculatebtn.addEventListener('click',()=>{
  let returnamount =  cashgiven.value - billamount.value;
  if(returnamount < 1){
    alert("No Money to return")
  }else{
    result.style.display = "flex"
    for (let i = 0; i < allnotes.length; i++) {
       let notes = Math.floor(returnamount / allnotes[i])
       returnamount = returnamount - notes*allnotes[i];
       noofNotes[i].innerHTML = notes;
    }
  }
})