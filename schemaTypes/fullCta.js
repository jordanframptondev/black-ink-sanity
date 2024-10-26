import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'fullCta',
  title: 'Full CTA',
  type: 'document',
  fields: [
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string'
    }),
    defineField({
      name: 'backgroundImage',
      title: 'CTA Background Image',
      type: 'image'
    })
  ]
})