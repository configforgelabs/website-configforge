import ComponentTypes from '@theme-original/NavbarItem/ComponentTypes';
import ThemeSwitcher from '@site/src/components/ThemeSwitcher';

export default {
  ...ComponentTypes,
  // Keep the custom mapping available; it won't render unless referenced in navbar items
  'custom-themeSwitcher': ThemeSwitcher,
};

 