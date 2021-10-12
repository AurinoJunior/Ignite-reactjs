import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@RocketShoes:cart');

    if (!storagedCart) {
      return [];
    }

    return JSON.parse(storagedCart);
  });

  const addProduct = async (productId: number) => {
    try {
      const updateCart = [...cart]
      const productExists = updateCart.find((product) => product.id === productId)

      const stock = await api.get(`/stock/${productId}`)
      const currentAmount = productExists ? productExists.amount : 0

      const stockAmount = stock.data.amount
      const amount = currentAmount + 1

      if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque')
        return
      }

      if (productExists) {
        productExists.amount = amount
      } else {
        const product = await api.get(`/products/${productId}`)

        const newProduct = {
          ...product.data,
          amount: 1
        }
        updateCart.push(newProduct)
      }
      setCart(updateCart)
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(updateCart))
    } catch {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const updateCart = [...cart]
      const productIndex = updateCart.findIndex((product) => product.id === productId)

      if (productIndex < 0) {
        throw new Error();
      }

      updateCart.splice(productIndex, 1);
      setCart(updateCart)
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(updateCart))
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      const updateCart = [...cart]
      const productExists = updateCart.find((product) => product.id === productId)

      if (!productExists || amount === 0) {
        throw new Error();
      }

      const stock = await api.get(`/stock/${productId}`)
      const stockAmount = stock.data.amount
      
      if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque')
        return
      }

      productExists.amount = amount
      setCart(updateCart)
      localStorage.setItem('@RocketShoes:cart', JSON.stringify(updateCart))
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
