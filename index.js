let csonakDivElem = document.getElementById("csonak");
let jobboldaliElem = document.getElementById("jobb");
let baloldaliElem = document.getElementById("bal");
let balGombElem = document.getElementById("balgomb");
let jobbGombElem = document.getElementById("jobbgomb");
let csonakKep = document.getElementById("csonak");

let kepek = document.querySelectorAll("aside img");

const balPartLista = [
    "kepek/kecske2.png",
    "kepek/kaposzta.png",
    "kepek/farkas.png",
];
const jobbPartLista = [];
const csonakLista = [];

console.log(`baloldal: ${balPartLista}`);
console.log(`csonak: ${csonakLista}`);
console.log(`jobboldal: ${jobbPartLista}`);

//true - bal
//false - jobb

let hajoAllasa = true;

megjelenit();

balGombElem.addEventListener("click", function () {
    hajoAllasa = true;
    csonakKep.style.justifyContent = "left";
});

jobbGombElem.addEventListener("click", function () {
    hajoAllasa = false;
    csonakKep.style.justifyContent = "right";
});

function esemenyek() {
    for (let i = 0; i < kepek.length; i++) {
        const kep = kepek[i];
        kep.addEventListener("mouseover", function () {
            kep.classList.add("kiemel");
            kep.style.cursor = "grab";
        });

        kep.addEventListener("mouseleave", function () {
            kep.classList.remove("kiemel");
        });

        kep.addEventListener("click", function () {
            if (csonakLista.length > 0) {
                alert(
                    "A csónakban már van egy elem! Csak egyet lehet vinni egyszerre.",
                );
                return;
            }
            kep.style.display = "none";
            if (hajoAllasa) {
                csonakLista.push(event.target.src);
                balPartLista.splice(i, 1);
            } else {
                jobbPartLista.push(event.target.src);
                csonakLista.splice(i, 1);
            }
            megjelenit();
        });
        console.log(`baloldal: ${balPartLista}`);
        console.log(`csonak: ${csonakLista}`);
        console.log(`jobboldal: ${jobbPartLista}`);
    }
}

function megjelenit() {
    baloldaliElem.innerHTML = "<h2>Bal Part</h2>";
    jobboldaliElem.innerHTML = "<h2>Jobb Part</h2>";
    for (let i = 0; i < balPartLista.length; i++) {
        baloldaliElem.innerHTML += `<img src="${balPartLista[i]}" alt="" id="b_${i}" class="allatkep"></img>`;
    }
    for (let i = 0; i < csonakLista.length; i++) {
        csonakDivElem.innerHTML += `<img src="${csonakLista[i]}" alt="" id="cs_${i}" class="allatkep"></img>`;
    }
    for (let i = 0; i < jobbPartLista.length; i++) {
        jobboldaliElem.innerHTML += `<img src="${jobbPartLista[i]}" alt="" id="j_${i}" class="allatkep"></img>`;
    }
    kepek = document.querySelectorAll(".allatkep");
    esemenyek();
}