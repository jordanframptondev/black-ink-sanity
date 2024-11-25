import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'partners',
  title: 'Partners',
  type: 'document',
  description: 'Partners content section',
  fields: [
    defineField({
      name: 'contentList',
      title: 'Content List',
      type: 'array',
      of: [{type: 'expandContent'}],
    }),
  ],
  preview: {
    prepare() {
        const title = 'Partners'
        return {
            title,
            subtitle: 'Partners content section',
        }
    },
  },
})
