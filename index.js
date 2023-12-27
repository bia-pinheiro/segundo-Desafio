function calcularPartidas(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;


    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 90){
        nivel = "Diamante";
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    } else { 
        nivel = "Imortal";
    }

    return [saldoVitorias, nivel];
}

function exibirResultado(saldoVitorias, nivel) {
    console.log("O Herói tem um saldo de " + saldoVitorias +  " está no nivel de " + nivel);
}

const vitorias = +prompt("Digite a quantidade de vitórias: ");
const derrotas = +prompt("Digite a quantidade de derrotas: ");

const resultado = calcularPartidas(vitorias, derrotas);
exibirResultado(resultado[0], resultado[1]);