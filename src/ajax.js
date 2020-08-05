function loadData() {
  return fetch('http://localhost:8080/aluguel')
    .then((res) => res.json())
    .then((dataAlugueis) => {
      return dataAlugueis._embedded.alugueis.map(dataAluguel => ({
        url: dataAluguel._links.self.href,
        id: extractId(dataAluguel._links.self.href),
        dataInicio: new Date(dataAluguel.dataInicio),
        dataFim: new Date(dataAluguel.dataFim),
        valor: dataAluguel.valor
      }));
    })
    // cliente
    .then((alugueis) => {
      return Promise.all(alugueis.map((aluguel) => {
        return fetch(`${aluguel.url}/cliente`)
          .then((res) => res.json())
          .then((dataCliente) => {
            return {
              id: extractId(dataCliente._links.self.href),
              nome: dataCliente.nome
            };
          })
      }))
        .then((clientes) => {
          return alugueis.map((aluguel, i) => {
            aluguel.cliente = clientes[i];
            return aluguel;
          });
        });
    })
    // item
    .then((alugueis) => {
      return Promise.all(alugueis.map((aluguel) => {
        return fetch(`${aluguel.url}/item`)
          .then((res) => res.json())
          .then((dataItem) => {
            return {
              url: dataItem._links.self.href,
              id: extractId(dataItem._links.self.href),
            };
          });
      }))
        .then((itens) => {
          return alugueis.map((aluguel, i) => {
            aluguel.item = itens[i];
            return aluguel;
          });
        });
    })
    // tipoItem
    .then((alugueis) => {
      return Promise.all(alugueis.map((aluguel) => {
        return fetch(`${aluguel.item.url}/tipoItem`)
          .then((res) => res.json())
          .then((dataTipoItem) => {
            return {
              id: extractId(dataTipoItem._links.self.href),
              nome: dataTipoItem.nome
            };
          })
      }))
        .then((tiposItem) => {
          return alugueis.map((aluguel, i) => {
            aluguel.item.tipoItem = tiposItem[i];
            return aluguel;
          });
        });
    });
}

function extractId(url) {
  return /\d+/.exec(new URL(url).pathname)[0];
}

export { loadData };