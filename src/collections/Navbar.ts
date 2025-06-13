import type { CollectionConfig } from 'payload'

export const Navbar: CollectionConfig = {
  slug: 'navbar',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'buttons',
      label: 'Navigation Buttons',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Button Label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          label: 'Link URL',
          type: 'text',
          required: false,
        },
        {
          name: 'megaMenu',
          label: 'Mega Menu',
          type: 'array',
          admin: {
            condition: (_, siblingData) => Boolean(siblingData.label),
          },
          fields: [
            {
              name: 'title',
              label: 'Section Title',
              type: 'text',
              required: true,
            },
            {
              name: 'links',
              label: 'Links',
              type: 'array',
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'url',
                  type: 'text',
                  required: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
