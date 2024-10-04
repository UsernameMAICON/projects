document.getElementById('evento').addEventListener('change', function() {
    const eventoData = document.getElementById('eventoData');
    eventoData.style.display = this.checked ? 'block' : 'none';
    document.getElementById('calcular_evento').style.display = this.checked ? 'inline' : 'none';
});

document.getElementById('calcular_idade').addEventListener('click', function() {
    const dataUltimaMenstruacao = new Date(document.getElementById('data_ultima_menstruacao').value);
    const dataAtual = new Date();

    const diasGestacionais = Math.floor((dataAtual - dataUltimaMenstruacao) / (1000 * 60 * 60 * 24));
    const semanas = Math.floor(diasGestacionais / 7);
    const dias = diasGestacionais % 7;

    document.getElementById('resultado').innerText = `Idade Gestacional: ${semanas} semanas e ${dias} dias.`;
});

document.getElementById('calcular_evento').addEventListener('click', function() {
    const dataEvento = new Date(document.getElementById('data_evento').value);
    const dataAtual = new Date();

    const mesesPassados = Math.floor((dataAtual - dataEvento) / (1000 * 60 * 60 * 24 * 30));
    const novaData = new Date(dataEvento);
    novaData.setMonth(novaData.getMonth() + 6);

    document.getElementById('tempo_passado').innerText = `O ocorrido foi há: ${mesesPassados} meses.`;
    document.getElementById('resultado_data').innerText = `A paciente pode fazer a nova data em: ${novaData.toLocaleDateString('pt-BR')}`;
});
