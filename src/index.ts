import './index.css';

import { darkModeContent } from '$utils/darkmode';
import { toggleSize } from '$utils/navbar';

window.Webflow ||= [];
window.Webflow.push(() => {
  darkModeContent();
  toggleSize();
});
