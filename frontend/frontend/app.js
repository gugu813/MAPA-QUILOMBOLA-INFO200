const map = L.map('map').setView([-2.5, -44.5], 7);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

const API_URL = 'http://localhost:3000/api/comunidades';
let markersLayer = L.layerGroup().addTo(map);

async function carregarComunidades() {
    markersLayer.clearLayers();
    try {
        const res = await fetch(API_URL);
        const comunidades = await res.json();
        
        comunidades.forEach(c => {
            const marker = L.marker([c.latitude, c.longitude]);
            marker.on('click', () => {
                document.getElementById('info-panel').innerHTML = `
                    <h3 style="color: #27ae60;">${c.nome}</h3>
                    <p style="margin-top:5px;"><strong>Situação:</strong> ${c.situacao_palmares}</p>
                    <hr style="margin: 8px 0;">
                    <p style="font-size: 0.9rem;">${c.historia}</p>
                `;
            });
            markersLayer.addLayer(marker);
        });
    } catch (err) {
        console.error("Erro ao carregar dados da API:", err);
    }
}

document.getElementById('form-comunidade').addEventListener('submit', async (e) => {
    e.preventDefault();
    const novaComunidade = {
        nome: document.getElementById('nome').value,
        historia: document.getElementById('historia').value,
        latitude: parseFloat(document.getElementById('latitude').value),
        longitude: parseFloat(document.getElementById('longitude').value),
        situacao_palmares: document.getElementById('situacao').value
    };

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novaComunidade)
    });

    document.getElementById('form-comunidade').reset();
    carregarComunidades();
});

carregarComunidades();