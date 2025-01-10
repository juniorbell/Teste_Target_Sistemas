const faturamentoDiario = [
    { dia: 1, valor: 22174.1664 },
    { dia: 2, valor: 24537.6698 },
    { dia: 30, valor: 8414.61 }
];

function analisarFaturamento(dados) {
    const valores = dados.map(d => d.valor).filter(v => v > 0);
    const menor = Math.min(...valores);
    const maior = Math.max(...valores);
    const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;
    const diasAcimaMedia = valores.filter(v => v > media).length;

    return {
        menor: menor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        maior: maior.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        media: media.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        diasAcimaMedia
    };
}

const resultado = analisarFaturamento(faturamentoDiario);
console.log(resultado);
