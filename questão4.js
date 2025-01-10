const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function formatarFaturamento(faturamento) {
    const formatado = {};
    for (const [estado, valor] of Object.entries(faturamento)) {
        formatado[estado] = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
    return formatado;
}

// Exemplo de uso
console.log(formatarFaturamento(faturamentoPorEstado));
