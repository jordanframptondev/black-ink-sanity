import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'expandContent',
  title: 'Expand Content',
  description: 'Component with an always-visible title and content intended to be hidden until expanded',
  type: 'object',
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
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Optional image to go along with the content text',
    }),
  ]
})