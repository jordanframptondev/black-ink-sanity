import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ethos',
  title: 'Ethos',
  type: 'document',
  description: 'Ethos content section',
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
        const title = 'Ethos'
        return {
            title,
            subtitle: 'Ethos content section',
        }
    },
  },
})
