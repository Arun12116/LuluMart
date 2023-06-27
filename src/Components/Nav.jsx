
import React from 'react'
import "./Nav.css"
import { Link} from "react-router-dom"
import MyContext from '../Context/Context'
import { useContext } from 'react'
import { Button } from '@chakra-ui/react'

const Nav = () => {
    const {data}=useContext(MyContext)
    return (
        <>
            <div className="nav-Conatiner">
                <div className="nav-Body">
                    <div className="logo">
                        <p>Lulumart</p>
                    </div>
                    <ul className='list'>
                        <Link style={{color:"white",textDecoration:"none"}} to={"/Home"}>Home</Link>
                        <Link style={{color:"white",textDecoration:"none"}}  to={"/Product"}>Product</Link>
                        <Link style={{color:"white",textDecoration:"none"}} to={"/Cart"}>AddToCart 
                      <Button ml={5} colorScheme='red'>{data.length}</Button>
                        
                        </Link>
                    </ul>





                </div>


            </div>

        </>
    )
}

export default Nav