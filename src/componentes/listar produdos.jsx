import { useStatefrom} from "react";

export default function ListaP() {
}

const [listaPedidos, setListaPedidos] = useState ([]);

const adicionarItemPedidos = (obj) => {
    setListaPedidos([...listaPedidos,obj])
}
 return(
    <div>
        {
            listaProdutos.map((produto)) }
            <div key={produto.id}>
            <p>{produto.nome}</p>
            <p>{produto.preco}</p>
            <button onClick={() => adicionarItemPedidos(produto)}>Selecionar</button>
            </div>
        
    </div>
 )