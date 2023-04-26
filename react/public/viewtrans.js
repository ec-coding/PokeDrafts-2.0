import { getPageContent, onLinkNavigate, transitionHelper, getLink } from '../utils.js';

const galleryPath = '/';
const expPath = `${galleryPath}`;

function getNavigationType(fromPath, toPath) {
  console.log(toPath)
  if (fromPath.startsWith(expPath) && toPath === galleryPath) {
    return 'exp-page-to-gallery';
  }
  
  if (fromPath === galleryPath && toPath.startsWith(expPath)) {
    return 'gallery-to-exp-page';
  }
  
  return 'other';
}


onLinkNavigate(async ({ fromPath, toPath }) => {
  console.log('link being navigated')
  const navigationType = getNavigationType(fromPath, toPath);
  const content = await getPageContent(toPath);
  let targetThumbnail;
  
  if (navigationType === 'gallery-to-exp-page') {
    targetThumbnail = getLink(toPath).querySelector('img');
    targetThumbnail.style.viewTransitionName = 'banner-img';
  }
  
  const transition = transitionHelper({
    classNames: navigationType,
    updateDOM() {
      // This is a pretty heavy-handed way to update page content.
      // In production, you'd likely be modifying DOM elements directly,
      // or using a framework.
      // innerHTML is used here just to keep the DOM update super simple.
      document.body.innerHTML = content;

      if (navigationType === 'exp-page-to-gallery') {
        targetThumbnail = getLink(fromPath).querySelector('img');
        targetThumbnail.style.viewTransitionName = 'banner-img';
      }
    }
  });
  
  transition.finished.finally(() => {
    // Clear the temporary tag
    if (targetThumbnail) targetThumbnail.style.viewTransitionName = '';
  });
});

// A little helper function like this is really handy
// to handle progressive enhancement.
function startViewTransition(callback) {
  if (!document.startViewTransition) {
    callback();
    return;
  }

  document.startViewTransition(callback);
}
