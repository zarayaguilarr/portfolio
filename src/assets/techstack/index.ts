// Tech stack assets module - consolidates all tech stack icons
import GithubLight from './Github-Light.svg';
import HTML from './HTML.svg';
import JavaLight from './Java-Light.svg';
import JavaScript from './JavaScript.svg';
import NodeJSLight from './NodeJS-Light.svg';
import Python from './python.svg';
import RStudio from './RStudio.svg';
import Excel from './Excel.svg';
import Westlaw from './Westlaw.svg';
import GoogleWorkspace from './GoogleWorkspace.svg';
import MicrosoftOffice from './MicrosoftOffice.svg';
import Stata from './Stata.svg';
import Wordpress from './Wordpress.svg';
import Julia from './Julia.svg';

export const techStackIcons = {
  GithubLight,
  HTML,
  JavaLight,
  JavaScript,
  NodeJSLight,
  Python,
  RStudio,
  Excel,
  Westlaw,
  GoogleWorkspace,
  MicrosoftOffice,
  Stata,
  Wordpress,
  Julia,
 
};

// Export as array for easier iteration if needed
export const techStackArray = Object.entries(techStackIcons).map(([name, icon]) => ({
  name,
  icon,
}));

export default techStackIcons;