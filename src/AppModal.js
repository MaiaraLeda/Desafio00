import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/modal';

function AppModal() {

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="App">
      <button onClick ={() => setIsModalVisible(true)}>Quero o meu!</button>
      {isModalVisible ? 
        <Modal onClose={() => setIsModalVisible(false)}>
          <h2 className='titleModal'>Pedido</h2>
          <form className='formulario'>
            <label className='label'>
              Digite seu nome:
              <input type="text" className='input' />
            </label>
            <label className='label'>
              Produto:
              <input type="text" className='input' />
            </label>
            <label className='label'>
              Quantidade:
              <input type="number" className='input' />
            </label>
            <input type="submit" value="Enviar" className='submit'></input>
          </form>
        </Modal> 
      : null}
    </div>
  );
}

export default AppModal;
