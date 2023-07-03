import useSWR from 'swr'
import Producto from '../components/Producto'
import useQuiosco from '../hooks/useQuiosco'
import clienteAxios from '../config/axios'

export default function Inicio() {

    const { categoriaActual } = useQuiosco()
    // Consulta SWR
    const fetcher = () => clienteAxios('/api/productos').then(data => data.data)
    const { data, error, isLoading } = useSWR('/api/produtcos', fetcher)


    if(isLoading) return 'Cargando...';
    const productos = data.data.filter(producto => producto.categoria_id == categoriaActual.id)

  return (
    <>
    
    <h1 className='text-4xl font-black'>{categoriaActual.nombre}</h1>
    <p className='text-2xl my-10'> 
        Elige el alimento que más te agrade
    </p>
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>

        {productos.map(producto => (
            <Producto 
                key={producto.imagen}
                producto={producto}
            
            />

        ))}

    </div>
    </>
  )
}
