
const graph = document.getElementById("graph");
let chart = new Chart(graph, {
    type: 'doughnut',
    data: {
        labels: ['Nourriture', 'Transport', 'Logement', 'Vêtements', 'Loisirs', 'Autres'],
        datasets: [{
            label: '% de dépenses par catégorie',
            data: [0, 0, 0, 0, 0, 0],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const graph2 = document.getElementById("graph2");






let submit = document.getElementById("send");

console.log(document.getElementById("send"))
let form = document.getElementById("form");
submit.addEventListener("click", function (event) {
    event.preventDefault();
    let name = form.elements["name"].value;
    let date = form.elements["date"].value;
    let price = form.elements["price"].value;
    let category = form.elements["category"].value;
    console.log(name, date, price, category)


    let tab = document.getElementById("tab");
    let newLine = document.createElement("tr");
    col1 = document.createElement("td");
    col1.textContent = name;
    col2 = document.createElement("td");
    col2.textContent = price;
    col3 = document.createElement("td");
    col3.textContent = date;
    col4 = document.createElement("td");
    col4.textContent = category;
    newLine.append(col1, col2, col3, col4);
    tab.appendChild(newLine);
    console.log(getDepensesFromCategorie());
    modifyChart(chart, getDepensesFromCategorie());
});




function getDepensesFromCategorie() {
    category = ['Nourriture', 'Transport', 'Maison', 'Vêtements', 'Loisirs', 'Autre']
    let tab = document.getElementById("tab");
    let depenses = [0, 0, 0, 0, 0, 0];
    console.log(tab.rows.length);
    for (let i = 0; i < tab.rows.length; i++) {
        for (let j = 0; j < category.length; j++) {
            if (tab.rows[i].cells[3].textContent == category[j]) {
                depenses[j] += parseInt(tab.rows[i].cells[1].textContent);
            }
        }

    }
    return depenses;
}


function modifyChart(graph, depenses) {
    console.log(graph.data.datasets[0].data)
    graph.data.datasets[0].data = depenses // Modifier les données du graphique

    graph.options.plugins = {
        title: {
            display: true,
            text: 'graphique des dépenses',
        }
    }; // Ajouter un titre au graphique

    chart.update();
}