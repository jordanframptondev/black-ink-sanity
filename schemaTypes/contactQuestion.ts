export default {
  name: 'contactQuestion',
  type: 'document',
  title: 'Contact Question',
  fields: [
    {
      name: 'question',
      type: 'string',
      title: 'Question',
    },
    {
      name: 'answerOptions',
      type: 'array',
      title: 'Answer Options',
      of: [{type: 'string'}],
    },
    {
      name: 'order',
      type: 'number',
      title: 'Order',
    },
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
}
