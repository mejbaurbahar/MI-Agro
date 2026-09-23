/**
 * Helper to ensure standard Nerja AI e-commerce events fire reliably
 * across both the auto-detect DOM classifier and the window.NerjaTracker API.
 */

declare global {
  interface Window {
    NerjaTracker?: {
      track: (eventName: string, properties?: Record<string, any>) => void;
      identify: (userId: string, traits?: Record<string, any>) => void;
      clearCart: () => void;
      flush: () => void;
    };
  }
}

export const trackNerjaEvent = (eventName: string, properties?: Record<string, any>) => {
  try {
    if (typeof window !== 'undefined' && window.NerjaTracker?.track) {
      window.NerjaTracker.track(eventName, properties || {});
    }
  } catch (err) {
    console.debug('[Nerja Tracker Helper] notice:', err);
  }
};
