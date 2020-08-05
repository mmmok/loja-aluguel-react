import React, { useState, useEffect } from "react";
import { loadData } from './ajax'

function DashboardFilter(props) {
  return (
    <div>
      <select value={props.filterValue} onChange={e => (
        props.onFilterValueChange(e.target.value)
      )} className='form-control'>
        <option value='alugueis'>Alugueis no período</option>
        <option value='devolucoes'>Devoluções no período</option>
      </select>
    </div>
  );
}

function PeriodoDisplay(props) {
  return (
    <span>
      <span>{props.dataInicio.toLocaleDateString()}</span>
      <span>  -  </span>
      <span>{props.dataFim.toLocaleDateString()}</span>
    </span>
  );
}

function PeriodoFilter(props) {
  const dataInicio = props.dataInicio;
  const dataFim = getDataFim(dataInicio);
  return (
    <div className='row justify-content-between'>
      <div className='col'>
      <button onClick={() => {
        const dataInicio = new Date(props.dataInicio.getTime());
        dataInicio.setDate(dataInicio.getDate() - 7);
        props.onDataInicioChange(dataInicio);
      }} className='btn btn-light'>&lt;</button>
      </div>
      <div className='col'>
      <PeriodoDisplay dataInicio={dataInicio} dataFim={dataFim} />
      </div>
      <div className='col'>
      <button onClick={() => {
        const dataInicio = new Date(props.dataInicio.getTime());
        dataInicio.setDate(dataInicio.getDate() + 7);
        props.onDataInicioChange(dataInicio);
      }} className='btn btn-light'>&gt;</button>
      </div>
    </div>
  );

  function getDataFim(dataInicio) {
    const dataFim = new Date(dataInicio.getTime());
    dataFim.setDate(dataFim.getDate() + 6);
    return dataFim;
  }
}

function Item(props) {
  return (
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">
          <span>{props.aluguel.item.tipoItem.nome}</span>
          <span> </span>
          <span>#{props.aluguel.item.id}</span>
        </h5>
        <p className="card-text">
          <span>{props.aluguel.dataInicio.toLocaleDateString()}</span>
          <span> - </span>
          <span>{props.aluguel.dataFim.toLocaleDateString()}</span>
        </p>
        <p className="card-text">R$ {props.aluguel.valor}</p>
      </div>
    </div>
  );
}

export default function Dashboard(props) {
  const [filter, setFilter] = useState('alugueis');
  const now = new Date();
  const [dataInicio, setDataInicio] = useState(
    new Date(now.getFullYear(), now.getMonth(), now.getDate()));
  const [dataItems, setDataItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  function handleFilterChange(value) {
    setFilter(value);
  }

  function handleDataInicioChanged(value) {
    setDataInicio(value);
  }

  useEffect(() => {
    const dataFim = new Date(dataInicio.getTime());
    dataFim.setDate(dataFim.getDate() + 6);
    setFilteredItems(dataItems.filter((item) => {
      let date = (filter === 'alugueis') ? item.dataInicio : item.dataFim;
      return ((dataInicio <= date) && (date <= dataFim));
    }));
  }, [filter, dataInicio, dataItems]);

  useEffect(() => {
    loadData()
      .then((alugueis) => {
        setIsLoaded(true);
        setDataItems(alugueis);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
        console.log(`ERRO!!! ${error}`);
      })
  }, []);


  function extractId(url) {
    return /\d+/.exec(new URL(url).pathname)[0];
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Error: {error.message}
      </div>
    );
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <DashboardFilter filterValue={filter}
                         onFilterValueChange={handleFilterChange} />
        <PeriodoFilter dataInicio={dataInicio}
          onDataInicioChange={handleDataInicioChanged} />
        <div>
          {filteredItems.map(item => {
            return <Item key={item.id} aluguel={item} />;
          })}
        </div>
      </div>
    );
  }
}