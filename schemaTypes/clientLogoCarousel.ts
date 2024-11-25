import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'clientLogoCarousel',
  title: 'Client Logo Carousel',
  description: 'Images to be used together as a list of logos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: '[not shown to users] Helper field to identify',
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