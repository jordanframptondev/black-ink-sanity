import { defineType } from 'sanity'

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
    }
  ],
})
