// 1. Cria o mapa na tela
const map = L.map('map').setView([-2.3853, -44.4144], 8); 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const infoPanel = document.getElementById('info-panel');

// 2. Nossos dados simulados
const comunidadeSimulada = {
    nome: "Quilombo Itamatatiua",
    situacao: "Certificado",
    lat: -2.3853,
    lng: -44.4144,
    historia: "Reconhecida pela sua cerâmica única e tradições religiosas.",
    relatos: [
        {
            anciao: "Dona Maria",
            audio_url: "https://www.soundhelix.com/architecture/mp3-player.html" 
        }
    ]
};

// 3. Adiciona o pino no mapa e o Toca-Fitas
const marker = L.marker([comunidadeSimulada.lat, comunidadeSimulada.lng]).addTo(map);

marker.on('click', () => {
    infoPanel.innerHTML = `
        <h3 style="color: #27ae60;">${comunidadeSimulada.nome}</h3>
        <p><strong>Situação Palmares:</strong> ${comunidadeSimulada.situacao}</p>
        <hr style="margin: 10px 0;">
        <p>${comunidadeSimulada.historia}</p>
        <h4 style="margin-top: 15px;">🎧 Relatos Orais</h4>
        <p style="font-size: 0.8rem; color: #666;">Narrado por: ${comunidadeSimulada.relatos[0].anciao}</p>
        <audio controls style="width: 100%; margin-top: 5px;">
            <source src="${comunidadeSimulada.relatos[0].audio_url}" type="audio/mpeg">
        </audio>
    `;
});