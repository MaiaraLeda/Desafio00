import "./styles.css";
import Modal from "./AppModal";
import ImageHeader from "./images/oie_UpWonnIVTWm4.png";

//Bolos
import BoloCenoura from "./images/bolocenoura.jpg";
import BoloChocolate from "./images/bolochocolate.jpg";
import BoloRedVelvet from "./images/boloredvelvet.jpg";

//Docinhos
import DocinhoChurros from "./images/churros.png";
import Moranguinho from "./images/moranguinho.png";
import Brigadeiro from "./images/brigadeiro.jpg";

//Verrines
import VerrineCafe from "./images/verrinecafe.jpg";
import VerrineCaipirinha from "./images/verrinecaipirinha.jpg";
import VerrineMorango from "./images/verrinemorango.jpg";

//Macarons
import MacaronChocolate from "./images/macarronchocolate.jpg";
import MacaronBaunilha from "./images/macarronbaunilha.jpg";
import MacaronRedVelvet from "./images/macarronredvelvet.jpeg";


// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener ("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }


// const btnMobile = document.getElementById('btn-mobile');

// function toggleMenu() {
//   const nav = document.getElementById('nav');
//   nav.classList.toggle('active')
// }

// btnMobile.addEventListener('click', toggleMenu);



const App = () => {
  return(
    <body className="App">
      <header className="Menu">
        <div className="boxMenu">
          <img src={ImageHeader} className="ImageLogo" />
          <nav>
            <ul className="nav-menu">
                <li>
                    <a href="#Bolos" className="fontMenu">
                        Bolos
                    </a>
                </li>
                <li>
                    <a href="#Docinhos" className="fontMenu">
                        Docinhos
                    </a>
                </li>
                <li>
                    <a href="#Verrines" className="fontMenu">
                        Verrines
                    </a>
                </li>
                <li>
                    <a href="#Macarons" className="fontMenu">
                        Macarons
                    </a>
                </li>
            </ul>
            {/* <button id='btn-mobile'>Menu</button> */}
          </nav>
        </div>
      </header>
      <main className="Produtos">
        <div className="boxProdutos" id="Bolos">
          <h1>Bolos</h1>
          <div className="boxImage">
            <h2>Bolo de Cenoura</h2>
            <img src={BoloCenoura} className="ImageProducts" />
            <Modal />
          </div>
          <div className="boxImage">
            <h2>Bolo de Chocolate</h2>
            <img src={BoloChocolate} className="ImageProducts" />
            <Modal />
          </div>
          <div className="boxImage">
            <h2>Bolo Red Velvet</h2>
            <img src={BoloRedVelvet} className="ImageProducts" />
            <Modal />
          </div>
        </div>

        <div className="boxProdutos" id="Docinhos">
          <h1>Docinhos</h1>
          <div className="boxImage">
            <h2>Docinho de Churros</h2>
            <img src={DocinhoChurros} className="ImageProducts" />
            <Modal />
          </div>
          <div className="boxImage">
            <h2>Docinho de Morango</h2>
            <img src={Moranguinho} className="ImageProducts" />
            <Modal />
          </div>
          <div className="boxImage">
            <h2>Brigadeiro Tradicional</h2>
            <img src={Brigadeiro} className="ImageProducts" />
            <Modal />
          </div>
        </div>

        <div className="boxProdutos" id="Verrines">
          <h1>Verrines</h1>
          <div className="boxImage">
            <h2>Verrine de Café</h2>
            <img src={VerrineCafe} className="ImageProducts" />
            <Modal />
          </div>
          <div className="boxImage">
            <h2>Verrine de Caipirinha</h2>
            <img src={VerrineCaipirinha} className="ImageProducts" />
            <Modal />
          </div>
          <div className="boxImage">
            <h2>Verrine de Morango</h2>
            <img src={VerrineMorango} className="ImageProducts" />
            <Modal />
          </div>
        </div>

        <div className="boxProdutos" id="Macarons">
          <h1>Macarons</h1>
          <div className="boxImage">
            <h2>Macaron Chocolate</h2>
            <img src={MacaronChocolate} className="ImageProducts" />
            <Modal />
          </div>
          <div className="boxImage">
            <h2>Macaron Baunilha</h2>
            <img src={MacaronBaunilha} className="ImageProducts" />
            <Modal />
          </div>
          <div className="boxImage">
            <h2>Macaron Red Velvet</h2>
            <img src={MacaronRedVelvet} className="ImageProducts" />
            <Modal />
          </div>
        </div>
      </main>
      <footer className="footer">
        <h3>Amor Sabores</h3>
        <div className="lista">
          <a href="" className="linkFooter">
            Instagram
          </a>
          <a href="" className="linkFooter">
            WhatsApp
          </a>
          <a href="" className="linkFooter">
            Facebook
          </a>
        </div>
        <div className="lista">
          <a href="" className="linkFooter">
            Fale Conosco
          </a>
          <a href="" className="linkFooter">
            Faça sua encomenda
          </a>
          <a href="" className="linkFooter">
            Venha nos conhecer
          </a>
        </div>
        <div className="lista">
          <a href="" className="linkFooter">
            Seja parceiro
          </a>
          <a href="" className="linkFooter">
            Impacto Social
          </a>
          <a href="" className="linkFooter">
            Influenciadores
          </a>
        </div>
      </footer>
    </body>
  );
}

export default App;