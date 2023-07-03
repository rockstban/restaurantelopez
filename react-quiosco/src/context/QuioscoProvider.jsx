import{ createContext, useEffect, useState } from 'react'
import clienteAxios from '../config/axios';
const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {

    const [categorias, setCategorias ] = useState([]);
    const [categoriaActual, setCategoriaActual] = useState({})
    const [modal, setmodal] = useState(false)

    const obtenerCategorias = async () => {
        try {
            const {data} = await clienteAxios('/api/categorias')
            setCategorias(data.data)
            setCategoriaActual(data.data[0])
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(() => {
        obtenerCategorias();
    }, [])
    
    const handleClickCategoria = id => {
        const categoria = categorias.filter(categoria => categoria.id === id)[0]
        setCategoriaActual(categoria)
        
    }

    const handleClickModal = () => {
        setmodal(!modal)

    }

    return(

        <QuioscoContext.Provider

        value={{
            categorias,
            categoriaActual,
            handleClickCategoria,
            handleClickModal,
            modal

        }}
        
        
        
        >{children}</QuioscoContext.Provider>




    )

}
export {
    QuioscoProvider
}
export default QuioscoContext

