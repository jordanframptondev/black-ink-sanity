import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'employeeList',
  title: 'Employee List',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'employees',
      title: 'Employees',
      type: 'array',
      of: [{type: 'employee'}],
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})