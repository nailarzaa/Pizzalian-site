import { createContext,useContext,useEffect,useState } from "react";
import axios from "axios";

export const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("https://mocki.io/v1/eee6a2c0-5c16-40fd-8099-d80efb9392c4")
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
                console.log(res.data)
            })
    }, [])



    return <ProductContext.Provider value={[products, setProducts]}>{children}</ProductContext.Provider>
}