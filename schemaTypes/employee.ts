import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'employee',
  title: 'Employee',
  type: 'object',
  fields: [
    defineField({
      name: 'displayText',
      title: 'Display Text',
      type: 'blockContent',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'displayText',
    },
  },
})