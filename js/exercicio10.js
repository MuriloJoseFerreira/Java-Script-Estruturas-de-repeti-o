function exercicio10() {
    let populacaoA = 80000;
    let populacaoB = 200000;
    let anos = 0;

    while (populacaoA < populacaoB) {
        populacaoA *= 1.03;
        populacaoB *= 1.015;
        anos++;
    }

    alert("Serão necessários " + anos + " anos para o país A ultrapassar ou igualar o país B.");
}

document.getElementById("executar").addEventListener("click", exercicio10);
