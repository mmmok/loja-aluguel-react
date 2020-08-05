import React, { useState, useEffect } from 'react';
import { loadData } from './ajax'

function Row(props) {
  return (
    <tr>
      <td>{props.item}</td>
      <td>{props.cliente}</td>
      <td>
        <button onClick={props.onSubmit(props.item)}
                className='btn btn-primary'>
          Alugar
        </button>
      </td>
    </tr>
  );
}

function Filter(props) {
  return (
    <div className='row'>
      <input type='text' value={props.text} onChange={props.onChange}
             className='form-control'
             placeholder='Digite cliente ou produto...'/>
    </div>
  );
}

function Table(props) {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Item</th>
          <th scope='col'>Cliente</th>
          <th scope='col'>Alugar</th>
        </tr>
      </thead>
      <tbody>
        {props.children}
      </tbody>
    </table>
  );
}

export default function Alugar() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if ((text.length > 2) && (data.length === 0)) {
      loadData()
        .then((loadedData) => {
          setIsLoaded(true);
          setData(loadedData.map((item) => ({
            id: item.id,
            item: `${item.item.tipoItem.nome} #${item.id}`,
            cliente: item.cliente.nome
          })))
        })
        .catch((error) => {
          setIsLoaded(true);
          setError(error);
        });
    }
    setFilteredData(data.filter((item) => {
      return item.cliente.includes(text) || item.item.includes(text);
    }));
  }, [text, data]);

  function handleSubmit(value) {

  }

  const table = error ? (
    <div className="alert alert-danger" role="alert">
      Error: {error.message}
    </div>
  ) : (
    <Table>
      {filteredData.map((item) => {
        return <Row key={item.id} item={item.item} cliente={item.cliente}
                    onSubmit={handleSubmit}/>;
      })}
    </Table>
  );

  return (
    <div>
      <Filter text={text} onChange={e => setText(e.target.value)}/>
      {table}
    </div>
  );
}