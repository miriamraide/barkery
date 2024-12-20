
"use client";

import { useReducer, useState, useEffect } from 'react';
import { shoppingReducer } from '@/reducer/ShoppingReducer';
import Product from './Product';
import CartItem from './CartItem';
import ShoppingModal from '../ShoppingModal'; 
import { TYPES } from '@/actions/Actions';
import  HeaderMain from '../HeaderMain';  
import axios from 'axios';
import CustomAlert from '../customAlert'; // Importa la alerta personalizada

const { ADD_TO_CART, REMOVE_ONE_ITEM, REMOVE_ALL_ITEMS, CART_CLEAR } = TYPES;

const ShoppingCart = ({ setCartCount }) => {
  const [state, dispatch] = useReducer(shoppingReducer, { products: [], cart: [] });
  const { products, cart } = state;
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [modalAction, setModalAction] = useState(null); 
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isAlertVisible, setIsAlertVisible] = useState(false); // Estado para la visibilidad de la alerta

  // Nueva función para obtener productos
  useEffect(() => {
    const fetchProducts = async () => {
      try {
      const response = await axios.get('http://localhost:5000/products');
        dispatch({ type: 'SET_PRODUCTS', payload: response.data });
      } catch (error) {
        console.error('Error al cargar productos:', error);
      }
    };
    fetchProducts();
  }, []);

  const openModal = (action, productId = null) => {
    setModalAction(action);
    setSelectedProductId(productId);
    setIsModalOpen(true);
  };

  const addToCart = (id) => {
    openModal('add', id);
  };

  const deleteFromCart = (id, all = false) => {
    if (all) {
      dispatch({ type: REMOVE_ALL_ITEMS, payload: id });
      setCartCount((prevCount) => prevCount - 1); // Decrementar el contado
    } else {
      dispatch({ type: REMOVE_ONE_ITEM, payload: id });
    }
  };

  const clearCart = () => dispatch({ type: CART_CLEAR });

  const confirmAction = async () => {
    setIsModalOpen(false);

    if (modalAction === 'add' && selectedProductId) {
      dispatch({ type: ADD_TO_CART, payload: selectedProductId });
      setCartCount((prevCount) => prevCount + 1); // Aumentar el contador

     // Mostrar la alerta personalizada
     setIsAlertVisible(true);

    } else if (modalAction === 'purchase') {
      try {
        const response = await axios.post('/api/confirm-purchase', { cart });
        if (response.status === 200) {

          setIsAlertVisible(true); // Mostrar alerta al confirmar compra
          alert('Compra confirmada');
          clearCart();
          setCartCount(0); // Restablecer el contador al confirmar la compra
        }
      } catch (error) {
        console.error('Error confirmando la compra:', error);
      }
    }
  };

  const totalProducts = cart.reduce((total, item) => total + item.quantity, 0);
  useEffect(() => {
    setCartCount(totalProducts); // Actualizar el contador cada vez que cambie el carrito
  }, [cart]);





  return (
    <>
      <h2>Carrito de Compras</h2>
      <h3>Productos</h3>
      <div className="box grid-responsive">
        {products.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
  
      <h3>Carrito</h3>
      <div className="box">
        {cart.map((item, i) => (
          <CartItem key={i} item={item} deleteFromCart={deleteFromCart} />
        ))}
      </div>
  
      <button onClick={() => openModal('purchase')}>Comprar</button>
      <button onClick={clearCart}>Limpiar Carrito</button>
  
      <ShoppingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmAction}
      />

      {/* Componente de Alerta Personalizada */}
      <CustomAlert
        message="Producto agregado al carrito"
        isVisible={isAlertVisible}
        onClose={() => setIsAlertVisible(false)}
      />
    </>
  );
}

export default ShoppingCart;