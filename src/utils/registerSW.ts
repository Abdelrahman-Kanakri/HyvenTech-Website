/**
 * Service Worker Registration Utility
 * Registers service worker only in production for PWA capabilities
 */

export const registerServiceWorker = async (): Promise<void> => {
  // Only register in production and if browser supports service workers
  if (import.meta.env.MODE !== 'production' || !('serviceWorker' in navigator)) {
    return;
  }

  try {
    // Register service worker
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
    });

    if (import.meta.env.DEV) {
      console.log('Service Worker registered successfully:', registration.scope);
    }

    // Check for updates
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            // New service worker available
            if (import.meta.env.DEV) {
              console.log('New version available! Please refresh.');
            }
            
            // Optionally notify user
            if (confirm('A new version is available. Would you like to update?')) {
              newWorker.postMessage({ type: 'SKIP_WAITING' });
              window.location.reload();
            }
          }
        });
      }
    });

    // Handle controller change
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload();
    });

  } catch (error) {
    console.error('Service Worker registration failed:', error);
  }
};

/**
 * Unregister service worker (useful for development/debugging)
 */
export const unregisterServiceWorker = async (): Promise<void> => {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.ready;
      await registration.unregister();
      if (import.meta.env.DEV) {
        console.log('Service Worker unregistered');
      }
    } catch (error) {
      console.error('Service Worker unregistration failed:', error);
    }
  }
};
