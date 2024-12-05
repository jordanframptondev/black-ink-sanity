import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'testimonialList',
      title: 'Testimonial List',
      type: 'array',
      of: [{type: 'testimonial'}],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Testimonials',
      }
    },
  },
})
