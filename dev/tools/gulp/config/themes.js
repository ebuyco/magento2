/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

'use strict';

/**
 * Define Themes
 *
 * area: area, one of (frontend|adminhtml|doc),
 * name: theme name in format Vendor/theme-name,
 * locale: locale,
 * files: [
 * 'css/styles-m',
 * 'css/styles-l'
 * ],
 * dsl: dynamic stylesheet language (less|sass)
 *
 */
module.exports = {
    blank: {
        area: 'frontend',
        src: "vendor/magento/theme-frontend-bbong",
        name: "magento/theme-frontend-bbong",
        dest: "pub/static/frontend/BbongTheme/Magento_Theme",
        locale: ["fil_PH"],
        ignore: [".test"],
        dsl: 'sass'
      },
      stewart: {
        area: 'frontend',  
        src: "app/code/frontend/Magento/Stewart",
        name: "BbongTheme/stewart",
        dest: "pub/static/frontend/BbongTheme/Stewart",
        locale: ["fil_PH"],
        ignore: [".test"],
        dsl: 'sass'
      }
};
