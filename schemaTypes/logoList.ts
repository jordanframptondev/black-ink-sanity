import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'logoList',
  title: 'Logo List',
  description: 'Images to be used together as a list of logos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [{type: 'image'}],
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})