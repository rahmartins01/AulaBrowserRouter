import './style.css';
import{Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/style/carousel.min.css'
export default function Home(){
    return(
        <div>
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
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fnxboats.com.br%2Fmarcas-de-carros-de-luxo%2F&psig=AOvVaw0Ra0HcqNoRis2I2qT3d1gK&ust=1724275238970000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPDhsv-_hIgDFQAAAAAdAAAAABAI" alt="Slide 1"/>
            </div>

            <div>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Folhardigital.com.br%2F2021%2F04%2F14%2Fcarros-e-tecnologia%2Fford-mustang-e-o-esportivo-mais-vendido-do-mundo-pelo-segundo-ano%2F&psig=AOvVaw0XImSk0l77VP6jfmwaqh9A&ust=1724361328832000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNiVrNyAh4gDFQAAAAAdAAAAABAJ" alt="Slide 1"/>
            </div>

            <div>
                <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com.br%2FLamborghini-Aventador-esportivos-decora%25C3%25A7%25C3%25A3o-pinturas%2Fdp%2FB07WP54T15&psig=AOvVaw2adhXB3tlPtFDy-hAmmUM6&ust=1724361872476000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjorNmCh4gDFQAAAAAdAAAAABAJ" alt="Slide 1"/>
            </div>
            </Carousel>
       </div>
    )
}