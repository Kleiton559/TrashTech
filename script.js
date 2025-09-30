// Inicializar mapa em Cabo Verde (Praia)
    var map = L.map('map').setView([14.9167, -23.5167], 7);

    // Camada base (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Função para adicionar marcadores
    function adicionarPonto(lat, lng, status, nome) {
      let cor;
      if (status === "normal") cor = "green";
      else if (status === "atencao") cor = "orange";
      else cor = "red";

      let marker = L.circleMarker([lat, lng], {
        radius: 10,
        fillColor: cor,
        color: "#fff",
        weight: 2,
        opacity: 1,
        fillOpacity: 0.9
      }).addTo(map);

      marker.bindPopup("<b>" + nome + "</b><br>Status: " + status);
    }

    // Exemplo de pontos (dados do dashboard)
    adicionarPonto(14.9167, -23.5167, "atencao", "Depósito Central - Praia");
    adicionarPonto(16.8901, -24.9804, "normal", "Coleta Seletiva - Mindelo");
    adicionarPonto(14.9330, -23.5170, "critico", "Orgânicos - Mercado Sucupira");
    adicionarPonto(14.9200, -23.5100, "normal", "Resíduos Perigosos - Hospital");

    // Legenda
    var legenda = L.control({position: "bottomright"});
    legenda.onAdd = function () {
      var div = L.DomUtil.create("div", "legenda");
      div.innerHTML = `
        <span class="bolinha verde"></span> Normal <br>
        <span class="bolinha amarelo"></span> Atenção <br>
        <span class="bolinha vermelho"></span> Crítico
      `;
      return div;
    };
    legenda.addTo(map);