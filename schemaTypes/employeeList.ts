import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'employeeList',
  title: 'Employee List',
  type: 'document',
  fields: [
    defineField({
      name: 'employees',
      title: 'Employees',
      type: 'array',
      of: [{type: 'employee'}],
    })
  ],
  preview: {
    prepare() {
        const title = 'Employee List'
        return {
            title,
            subtitle: 'Employee List with display text and image',
        }
    },
  },
})