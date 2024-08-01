import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    title: 'Dataflow',
    favicon: '/public/favicon.svg',
    logo: {
      src: './src/assets/greenlogo.png',
      replacesTitle: true
    },
    customCss: ['./src/styles/custom.css'],
    social: {
      github: 'https://github.com/withastro/starlight',
	  
    },
    sidebar: [{
      label: 'Guides',
      items: [
      // Each item here is one entry in the navigation menu.
      {
        label: 'Example Guide',
        link: '/guides/example/'
      }]
    }, {
      label: 'Reference',
      autogenerate: {
        directory: 'reference'
      }
    }]
  }), tailwind({

  })]
});