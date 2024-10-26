import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'fullCta',
  title: 'Full CTA',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'This is to help you know where on the site this CTA will live',
      type: 'string'
    }),
    defineField({
      name: 'displayText',
      title: 'CTA Text',
      type: 'string'
    }),
    defineField({
      name: 'backgroundImage',
      title: 'CTA Background Image',
      type: 'image'
    }),
    defineField({
      name: 'link',
      title: 'CTA Link',
      type: 'string'
    }),
    defineField({
      name: 'overlay',
      title: 'Overlay Color',
      type:'string',
    })
  ]
})