import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://IamNOTfilint.github.io',
  base: '/marchy-public',
  integrations: [
    starlight({
      title: 'Marchy',
      description: 'Arch, as you like it.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/IamNOTfilint/marchy-public',
        },
      ],
      sidebar: [
        {
          label: 'Start here',
          items: [
            { label: 'Introduction', link: '/' },
            { label: 'Philosophy', link: '/philosophy/okonomi/' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Upstream projects', link: '/upstream/' },
            { label: 'Credits', link: '/credits/' },
          ],
        },
      ],
    }),
  ],
});
