import { useLoaderData, useRouteError, isRouteErrorResponse } from '@remix-run/react'
import { getGuitarra } from '~/models/guitarras.server'

export async function loader({ params }) {
    
    const { guitarraUrl } = params
    const guitarra = await getGuitarra(guitarraUrl)

    //Si no encuentra la guitarra se lanza el error
    if(guitarra.data.length === 0) {
        throw new Response('', {
            status: 404,
            statusText: 'Guitarra No Encontrada'
        })
    }

    return guitarra
}

export function meta({data}) {
    
    if(!data) {
        return [
            {title: 'GuitarLA - Guitarra no Encontrada'},
            {description: `Guitarras, venta de guitarras, guitarra no encontrada`}
        ]
    }

    return [
        {title: `GuitarLA - ${data.data[0].attributes.nombre}`},
        {description: `Guitarras, venta de guitarras, guitarra ${data.data[0].attributes.nombre}, ${data.data[0].attributes.descripcion}`}
    ]
}

const Guitarra = () => {

    const guitarra = useLoaderData()
    const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes

    return (
        <div className='guitarra'>
            <img className='imagen' src={imagen.data.attributes.url} alt={`Imagen de la Guitarra ${nombre}`}/>

            <div className='contenido'>
                <h3>{nombre}</h3>
                <p className='texto'>{descripcion}</p>
                <p className='precio'>${precio}</p>
            </div>
        </div>
    )
}

export default Guitarra