freePlan = document.getElementById("freePlan")
proPlan = document.getElementById("proPlan")
var divhere = false
var planNotChosen = true
freePlan.addEventListener("click", function () {
    if (planNotChosen) {
        freePlan.style.backgroundColor = "lightgreen";
        freePlan.textContent = "✅  Plan choisi";
        planNotChosen = false
    }
});

proPlan.addEventListener("click", function () {
    if (!divhere && planNotChosen) {
        bigDiv = document.createElement("div");
        bigDiv.classList.add("bigDiv");
        document.body.appendChild(bigDiv);
        titre = document.createElement("h2");
        titre.textContent = "Vous avez sélectionné l'option payante. Veuillez renseigner vos données personnelles: ";
        titre.style.fontSize = "20px";
        titre.style.transform = "translateY(20px)";
        bigDiv.appendChild(titre);

        form = document.createElement("form");
        bigDiv.appendChild(form);
        input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Nom";
        input.classList.add("input");
        form.appendChild(input);
        input2 = document.createElement("input");
        input2.type = "text";
        input2.placeholder = "Numéro de carte";
        input2.classList.add("input");
        form.appendChild(input2);
        input3 = document.createElement("input");
        input3.type = "text";
        input3.placeholder = "Date d'expiration";
        input3.classList.add("input");
        form.appendChild(input3);
        form.classList.add("form");
        input4 = document.createElement("input");
        input4.type = "text";
        input4.placeholder = "Code de sécurité";
        input4.classList.add("input");
        form.appendChild(input4);
        button = document.createElement("button");
        button.textContent = "Valider";
        button.classList.add("button2");
        form.appendChild(button);
        img = document.createElement("img");
        img.src = "../assets/cancel.png";
        img.style.width = "30px";
        img.style.height = "30px";
        img.style.position = "absolute";
        img.style.top = "10px";
        img.style.right = "10px";
        img.style.cursor = "pointer";
        img.addEventListener("click", function () {
            bigDiv.style.display = "none";
        })
        bigDiv.appendChild(img);
        button.addEventListener("click", function () {
            bigDiv.style.display = "none";
            proPlan.style.backgroundColor = "lightgreen";
            proPlan.textContent = "✅  Plan choisi";
            divhere = true
            planNotChosen = false
        })
    }
});
