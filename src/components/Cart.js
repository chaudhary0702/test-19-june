import React from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import {delCart} from '../redux/action/index'
import { useEffect,useState } from 'react';

const Cart = () => {
    const state = useSelector((state)=> state.addCart)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    let componentMounted = true;



    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                // console.log(filter);
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])

    const cartItems = (product)=>{
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
                <div className="container py-4">
                    <button className="btn-close float-end" aria-label='Close'></button>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={product.img} alt={product.title} />
                        </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p>{product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
  return (
    <>
    {state.length !== 0 && state.map(cartItems)}
    </>
  );
}

export default Cart;
