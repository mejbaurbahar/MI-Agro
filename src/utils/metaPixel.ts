/**
 * Meta Pixel (Facebook Pixel) Helper for MI UNIFYLD AGRO LTD
 * Facebook Page ID: 61594281573717
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    _fbq?: any;
  }
}

export interface MetaProduct {
  id: string;
  name: string;
  price?: number | null;
  category?: string;
}

/**
 * Safe invocation of Meta Pixel fbq()
 */
export const trackMetaEvent = (eventName: string, params?: Record<string, any>) => {
  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      if (params) {
        window.fbq('track', eventName, params);
      } else {
        window.fbq('track', eventName);
      }
    }
  } catch (err) {
    console.debug('[Meta Pixel] Error tracking event:', eventName, err);
  }
};

/**
 * Track PageView
 */
export const trackMetaPageView = () => {
  trackMetaEvent('PageView');
};

/**
 * Track ViewContent - Fired when a customer views a feed product
 * Enables Meta to build "Product Browsed but Not Purchased" retargeting audiences
 */
export const trackMetaViewContent = (product: MetaProduct) => {
  trackMetaEvent('ViewContent', {
    content_name: product.name,
    content_category: product.category || 'Agro Feeds',
    content_ids: [product.id],
    content_type: 'product',
    value: product.price || 0,
    currency: 'BDT',
  });
};

/**
 * Track AddToCart - Fired when customer adds feed bags to cart
 */
export const trackMetaAddToCart = (product: MetaProduct, quantity: number = 1) => {
  const value = (product.price || 0) * quantity;
  trackMetaEvent('AddToCart', {
    content_name: product.name,
    content_category: product.category || 'Agro Feeds',
    content_ids: [product.id],
    content_type: 'product',
    value,
    currency: 'BDT',
    quantity,
  });
};

/**
 * Track InitiateCheckout - Fired when customer enters /checkout
 */
export const trackMetaInitiateCheckout = (numItems: number, subtotal: number) => {
  trackMetaEvent('InitiateCheckout', {
    num_items: numItems,
    value: subtotal,
    currency: 'BDT',
  });
};

/**
 * Track Purchase - Fired on successful order submission
 */
export const trackMetaPurchase = (order: {
  orderId: string;
  value: number;
  numItems: number;
  items: Array<{ id: string; name: string; price: number; quantity: number }>;
}) => {
  trackMetaEvent('Purchase', {
    content_type: 'product',
    content_ids: order.items.map((i) => i.id),
    value: order.value,
    currency: 'BDT',
    num_items: order.numItems,
    order_id: order.orderId,
  });
};

/**
 * Track Contact - Fired when customer clicks Hotline, WhatsApp, or Messenger
 */
export const trackMetaContact = (channel: string, extraData?: Record<string, any>) => {
  trackMetaEvent('Contact', {
    content_name: channel,
    ...extraData,
  });
};

/**
 * Track Lead - Fired on inquiry or contact form submission
 */
export const trackMetaLead = (leadType: string, extraData?: Record<string, any>) => {
  trackMetaEvent('Lead', {
    content_name: leadType,
    currency: 'BDT',
    ...extraData,
  });
};
