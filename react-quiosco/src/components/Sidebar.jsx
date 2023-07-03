import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"


export default function Sidebar() {

    const{ categorias } = useQuiosco()
  return (
    <aside className="md:w-72">
        <div className="p-4">
        <img 
            className="w-40"
            src="img/logo2.jpg"
        
        
        />
        </div>

        <div className="mt-10">
        {categorias.map( categoria => (
            <Categoria 
                key={categoria.id}
                categoria={categoria}
            
            />

        ))}

        </div>

        <div className="my-5 py-5">
            <button
                type="button"
                className="text-center bg-slate-600 w-full p-5 font-bold text-white trunca
                "
            
            >
                Cancelar su orden 
            </button>

        </div>

    </aside>
  )
}
