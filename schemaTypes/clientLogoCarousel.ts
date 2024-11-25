import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'clientLogoCarousel',
  title: 'Client Logo Carousel',
  description: 'Images to be used together as a list of logos',
  type: 'document',
  fields: [
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [{type: 'image'}],
    })
  ],
  preview: {
    prepare() {
        return {
            title: 'Client Logo Carousel',
        }
    },
  },
})