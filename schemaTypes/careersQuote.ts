import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'careersQuote',
  title: 'Careers Quote',
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
            title: 'Careers Quote',
        }
    },
  },
})