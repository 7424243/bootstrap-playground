import React from 'react';
import './App.css';

export const App = () => {
  return (
    <div className='App container'>
      <h1>Bootstrap Components</h1>
      <div className='row align-items-center my-5'>
        <div className='col'>
          <button className='btn btn-info btn-lg' type="button">
            Info Theme Button (large)
          </button>
        </div>
      </div>
      <div className='row align-items-center my-5'>
        <div className='col'>
          <button className='btn btn-danger btn-sm' type="button">
            Danger Theme Button (small)
          </button>
        </div>
      </div>
      <div className='row align-items-center my-5'>
        <div className='col'>
          <button className='btn btn-info btn-lg' type="button">
            Info Theme Button (large)
          </button>
        </div>
      </div>
      <div className='row align-items-center my-5'>
        <div className='col'>

        </div>
      </div>
    </div>
  );
}
