let csonakDivElem = document.getElementById("csonak");

let kepek = document.querySelectorAll("aside img");
const kepekList = [];
console.log(kepek);

for (let i = 0; i < kepek.length; i++) {
    const kep = kepek[i];
    kep.addEventListener("mouseover", function () {
        kep.classList.add("kiemel");
        kep.style.cursor = "grab";
    });
    kep.addEventListener("mouseleave", function () {
        kep.classList.remove("kiemel");
    });
    kep.addEventListener("click", function(){
        kepekList.push(event.target.src)
        console.log(kepekList)
        kep.style.display = "none"
        
    })
}
