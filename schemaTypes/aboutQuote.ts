import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'aboutQuote',
  title: 'About Quote',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'blockContent',
    }),
  ],
  preview: {
    prepare() {
        return {
            title: 'About Quote',
        }
    },
  },
})