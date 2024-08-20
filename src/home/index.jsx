import './style.css';
import{Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/style/carousel.min.css'
export default function Home(){
    return(
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
        </Carousel>
    )
}