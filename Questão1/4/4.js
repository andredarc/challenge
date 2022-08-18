//Criando função para calcular porcentagem
function calculaPercentual(estado, total) {

        percentual = estado * 100 /total.toFixed(2);
        return percentual;

        
}

    //Valores dos faturamentos
    var sp = 67836.43;
    var rj = 36678.66;
    var mg = 29229.88;
    var es = 27165.48;
    var outros = 19849.53;
    
    //Somando faturamentos para obter total
    total = sp + rj + mg + es + outros

    //Exibindo faturamentos
    console.log("Porcentagem do faturamento de SP:" + calculaPercentual(sp, total) + "%");
    console.log("Porcentagem do faturamento de RJ:" + calculaPercentual(rj, total) + "%");
    console.log("Porcentagem do faturamento de MG:" + calculaPercentual(mg, total) + "%");
    console.log("Porcentagem do faturamento de ES:" + calculaPercentual(es, total) + "%");
    console.log("Porcentagem de outros faturamentos:" + calculaPercentual(outros, total) + "%");
    