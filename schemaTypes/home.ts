import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      description: 'Background image for the homepage',
    },
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Testimonial',
          type: 'testimonial',
        }),
      ],
    }),
    defineField({
      name: 'image',
      title: 'Logo',
      type: 'array',
      of: [
        {
          title: 'Logo',
          type: 'image',
        },
      ],
    }),
    defineField({
      name: 'expandContent',
      title: 'Expand Content',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Expand Content List',
          type: 'expandContentList',
        }),
      ]
    })
  ],
})
