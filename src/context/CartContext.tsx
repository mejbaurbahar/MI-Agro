import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';
import { useLanguage } from './LanguageContext';
import { toast } from 'sonner';
import { trackNerjaEvent } from '../utils/nerja';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  formatPrice: (price: number | null) => string;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'mi_agro_cart_v1';

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language, t } = useLanguage();
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(CART_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error('Failed to parse cart from localStorage:', e);
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save cart to localStorage:', e);
    }
  }, [items]);

  const addToCart = (product: Product, quantity: number = 1) => {
    if (quantity < 1) return;
    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const next = [...prevItems];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
        };
        return next;
      }
      return [...prevItems, { product, quantity }];
    });

    toast.success(
      language === 'bn' 
        ? `${product[language].name} কার্টে যোগ করা হয়েছে` 
        : `${product[language].name} added to cart`
    );

    trackNerjaEvent('add_to_cart', {
      product_id: product.id,
      product_name: product.en.name,
      product_price: product.price ? `৳ ${product.price.toFixed(2)}` : '',
      product_image: `/products/${product.id}.png`,
      product_category: product.category,
      price: product.price || 0,
      quantity,
    });
  };

  const removeFromCart = (productId: string) => {
    const itemToRemove = items.find((item) => item.product.id === productId);
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
    if (itemToRemove) {
      trackNerjaEvent('remove_from_cart', {
        product_id: itemToRemove.product.id,
        product_name: itemToRemove.product.en.name,
        product_price: itemToRemove.product.price ? `৳ ${itemToRemove.product.price.toFixed(2)}` : '',
      });
    }
  };

  const updateQuantity = (productId: string, quantity: number) => {
    const existing = items.find((item) => item.product.id === productId);
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    if (existing) {
      if (quantity > existing.quantity) {
        trackNerjaEvent('increase_quantity', {
          product_id: productId,
          product_name: existing.product.en.name,
          quantity,
        });
      } else if (quantity < existing.quantity) {
        trackNerjaEvent('decrease_quantity', {
          product_id: productId,
          product_name: existing.product.en.name,
          quantity,
        });
      }
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = items.reduce((sum, item) => {
    const unitPrice = item.product.price ?? 0;
    return sum + unitPrice * item.quantity;
  }, 0);

  const formatPrice = (price: number | null): string => {
    if (price === null || price === undefined) {
      return t('products.callForPrice');
    }
    return `৳ ${price.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        formatPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
