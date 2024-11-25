import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  description: 'Services Black Ink offers',
  fields: [
    defineField({
      name: 'contentList',
      title: 'Content List',
      type: 'array',
      of: [{type: 'expandContent'}],
    }),
  ],
  preview: {
    prepare(value, viewOptions) {
        const title = 'Services'
        return {
            title,
            subtitle: 'Services Black Ink offers',
        }
    },
  },
})
