import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'expandContentList',
  title: 'Expand Content List',
  type: 'document',
  description: 'Collection of expandable content with a placement description',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the expandable content section',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string'
    }),
    defineField({
      name: 'contentList',
      title: 'Content List',
      type: 'array',
      of: [{type: 'expandContent'}],
    }),
  ],
})
