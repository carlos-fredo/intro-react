import { Link } from 'react-router-dom'

export default function Encabezado() {

    return(
    <div>
        <h1>Programacion III </h1>
        <ul>
            <li>
               <Link to = "/Contacto" > Contacto </Link>
            </li>
            <li>
            <Link to = "/Productos" > Productos </Link> 
            </li>
        </ul>
        <hr/>
    </div>
    )
}
