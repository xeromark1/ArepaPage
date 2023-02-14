import info from './imagenesinfo';
import WhatsApp_icon from './WhatsApp_icon.png';

function MostrarArepas(){

    var ListaArepas = [];

    for(let item of info){
      ListaArepas.push( <div className='dive'> 
                            <img src={require('./img/' + item.image)} alt='imagen' />

                            <div className='product-description'>
                                <h3>{item.name}</h3>
                                <p>{item.description}</p>

                                <small> <small className='trasparencia'> Precio:</small> {item.price}</small>
                            </div>

                        </div>);
      
    }
    
    return ListaArepas;
}

function App() {
  return (
    <div className="App">
      <header>
        <div>
          <h4>Contactos: <p>Heidy Perez</p>  <div className='ajuste'> <img src={WhatsApp_icon} className='icono' />  <p>+56 9 4730 4136</p> </div></h4>
        </div>
        
        <div className='h1-container'>
        <h1>Arepas de Harina de Trigo</h1>
        </div>
      </header>

        <div className='divConjunto'>
          <MostrarArepas />
        </div>

    </div>
  );
}

export default App;
