import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'careerQuote',
  title: 'Career Quote',
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
            title: 'Career Quote',
        }
    },
  },
})