let btm=document.querySelector("btm");
let body = document.querySelector("#mode");
let currmode="light";
btm.addEventListener("click",() => {
   if(currmode === "light") {
       currmode  = "dark";
       body.classList.add("dark");
       body.classList.remove("light");
   }
   else {
    currmode="light";
    body.classList.add("light");
    body.classList.remove("dark");
   }
   console.log(currmode);
});
