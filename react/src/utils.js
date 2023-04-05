// Intercept navigations
// https://developer.chrome.com/docs/web-platform/navigation-api/
// This is a naive usage of the navigation API, to keep things simple.
export async function onLinkNavigate(callback) {
    navigation.addEventListener('navigate', (event) => {
      const toUrl = new URL(event.destination.url);
      
      if (location.origin !== toUrl.origin) return;
      
      const fromPath = location.pathname;
      const isBack = isBackNavigation(event);
      
      event.intercept({
        async handler() {
          if (event.info === 'ignore') return;
          
          await callback({
            toPath: toUrl.pathname,
            fromPath,
            isBack,
          });
        },
      });
    });
  }
  
  export function getLink(href) {
    const fullLink = new URL(href, location.href).href;
    
    return [...document.querySelectorAll('a')].find((link) =>
      link.href === fullLink
    );
  }
  
  // This helper function returns a View-Transition-like object, even for browsers that don't support view transitions.
  // It won't do the transition in unsupported browsers, it'll act as if the transition is skipped.
  // It also makes it easier to add class names to the document element.
  export function transitionHelper({
    skipTransition = false,
    classNames = '',
    updateDOM,
  }) {
    if (skipTransition || !document.startViewTransition) {
      const updateCallbackDone = Promise.resolve(updateDOM()).then(() => undefined);
  
      return {
        ready: Promise.reject(Error('View transitions unsupported')),
        domUpdated: updateCallbackDone,
        updateCallbackDone,
        finished: updateCallbackDone,
      };
    }
  
    const classNamesArray = classNames.split(/\s+/g).filter(Boolean);
  
    document.documentElement.classList.add(...classNamesArray);
  
    const transition = document.startViewTransition(updateDOM);
  
    transition.finished.finally(() =>
      document.documentElement.classList.remove(...classNamesArray)
    );
  
    return transition;
  }