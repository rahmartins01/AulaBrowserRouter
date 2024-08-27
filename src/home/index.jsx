import './style.css';
import ListaP from '../components/ListaProdutos';
import{Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Home(){
    return(
        <>
            <h1>Loja de Alto Moveis</h1>
        <Carousel
            infiniteLoop
            useKeyboardArrows
            autoPlay
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            dynamicHeight
            >
            <div>
                <img src="https://garagem360.com.br/wp-content/uploads/2023/02/Bugatti-Divo-3.jpg" alt="carro bugatti"/>
            </div>

            <div>
                <img src="https://ogimg.infoglobo.com.br/in/25400568-0be-164/FT1086A/iris-1.jpg" alt="carro 2"/>
            </div>

            <div>
                <img src="https://ogimg.infoglobo.com.br/in/25400568-0be-164/FT1086A/iris-1.jpg" alt="carro"/>
            </div>
            </Carousel>
            <ListaP produtos={listaProdutos} /> {/* Assuming ListaP expects a 'produtos' prop */}
       </>
    )
}
 const [listaProdutos, setProdutos] = useState([
    {id: 5, nome: 'Bugatti', preco: 'R$105.000,00'},
    {id: 6, nome: 'Camaro',  preco: 'R$98.000,00'},
    {id: 4, nome: 'Lamborghini', preco: 'R$130.000,00'},
    {id: 11, nome: 'Ferrari', preco: 'R$99.000,00'},
    {id: 21, nome: 'Bentley', preco: 'R$95.000,00'},
    {id: 22, nome: 'Jaguar', preco: 'R$107.000,00'},
    {id: 15, nome: 'McLaren', preco: 'R$115.000,00'},
    {id: 16, nome: 'BMW', preco: 'R$85.000,00'},
    {id: 18, nome: 'Aston Martin', preco: 'R$118.000,00'},
    {id: 20, nome: 'Maybach', preco: 'R$125.000,00'},
    {id: 23, nome: 'Rolls-Royce', preco: 'R$128.000,00'},
    {id: 24, nome: 'Volvo XC90', preco: 'R$130.000,00'},
    {id: 26, nome: 'Audi Q3', preco: 'R$115.000,00'},
    {id: 28, nome: 'Porsche 911', preco: 'R$88.000,00'},
    {id: 29, nome: 'Porsche Macan', preco: 'R$118.000,00'},
 ])