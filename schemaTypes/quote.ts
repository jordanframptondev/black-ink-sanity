import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'quote',
  title: 'Quote',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})