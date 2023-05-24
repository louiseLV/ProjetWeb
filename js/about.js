window.addEventListener("load", function () {
    const Louise = document.getElementById("Louise");
    const Max = document.getElementById("Max");
    console.log(Louise)
    Max.classList.remove("notSee");
    Louise.classList.remove("notSee");
    Max.classList.add("canBeSee")
    Louise.classList.add("canBeSee");
    new TypeIt("#text", {
        speed: 80,
    })
        .type("Nous sommes deux étudiants de L2 Bordaux")
        .pause(500)
        .move(-3)
        .type("e")
        .move(+5)
        .type(".")
        .go();
});