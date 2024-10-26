import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'expandContent',
  title: 'Expand Content',
  description: 'Component with an always-visible title and content intended to be hidden until expanded',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'string',
      description: 'Content that will be initially hidden and revealed when the title is clicked',
    })
  ]
})