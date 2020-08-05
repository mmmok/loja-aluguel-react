import React from 'react';
import { Link } from 'react-router-dom'; 

export default function Home() {
  return (
    <div className='row'>
    <div className='col-md-6 offset-md-3'>
    <div className='row'>
    <div className='col'>
      <Link to='/alugar' role='button' className='btn btn-primary btn-lg'>
        Alugar
      </Link>
    </div>
    <div className='col'>
      <Link to='/alugar' role='button' className='btn btn-secondary btn-lg'>
        Devolver
      </Link>
    </div>
    <div className='w-100'></div>
    <div className='col'>
      <Link to='/alugar' role='button' className='btn btn-success btn-lg'>
        Agendar
      </Link>
    </div>
    <div className='col'>
      <Link to='/alugar' role='button' className='btn btn-secondary btn-lg'>
        Cancelar
      </Link>
    </div>
    </div>
    </div>
    </div>
  );
}