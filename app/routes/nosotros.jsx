import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  
  return [
    {title: 'GuitarLA - Sobre Nosotros'},
    {description: 'Venta de guitarras, blog de música'}
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">

        <img src={imagen} alt="Imagen sobre Nosotros" />

        <div>
          <p>Suspendisse nunc purus, convallis ac quam eget, faucibus elementum magna. Nunc id sagittis mauris, non ullamcorper quam. Donec faucibus, odio congue ullamcorper suscipit, augue tellus varius dui, vel facilisis diam mauris a leo. Quisque eu imperdiet tortor, sed blandit nisi. Proin vel massa sed lorem ultricies ornare sed eget diam.</p>

          <p>Suspendisse nunc purus, convallis ac quam eget, faucibus elementum magna. Nunc id sagittis mauris, non ullamcorper quam. Donec faucibus, odio congue ullamcorper suscipit, augue tellus varius dui, vel facilisis diam mauris a leo. Quisque eu imperdiet tortor, sed blandit nisi. Proin vel massa sed lorem ultricies ornare sed eget diam.</p>
        </div>

      </div>

    </main>
  )
}

export default Nosotros