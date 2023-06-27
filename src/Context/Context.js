import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"
import axios from "axios"
import { flattenTokens } from "@chakra-ui/react";
const MyContext = createContext();

export default MyContext;


export const CustomComponents = ({ children }) => {
    const [product, setProduct] = useState([]);
    const [data, setData] = useState([]);

   

    useEffect(() => {

        axios.get("https://fakestoreapi.com/products").then((res) => {
            setProduct(res.data)


        }).catch(() => {
            alert("api error")

        })

    }, [])


    return (

        <>
            <MyContext.Provider value={{ product, data, setData}} >
                {children}
            </MyContext.Provider>


        </>
    )
}