import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='form_container'>
      <div className='form_header'>
        <h1 className='form_title'>
          mi primer formulario
        </h1>
      </div>
      <div className='form_body'>
        <div className='form'>
          <label className='form_label'>
            NOMBRES Y APELLIDOS:
          </label>
          <div className='form_input-ico'>
            <i className='fa fa-user form_ico' aria-hidden="true">
              <input className='form_input'
                id="nombre_apellidos"
                name='nombre_apellidos'>


              </input>
            </i>
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;
