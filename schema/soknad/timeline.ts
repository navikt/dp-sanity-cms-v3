import { defineField, defineType } from 'sanity'

export const timeline = defineType({
  type: 'object',
  name: 'timeline',
  title: 'Tidslinje',
  fields: [
    defineField({
      name: 'elements',
      title: 'Tidslinjelementer',
      type: 'array',
      of: [{ type: 'timelineElement' }],
    }),
  ],
  preview: {
    select: {
      elements: 'elements',
    },
  },
  // components: {
  //   preview: Timeline,
  // },
})

export const timelineElement = defineType({
  type: 'object',
  name: 'timelineElement',
  title: 'Tidslinjelement',
  fields: [
    defineField({
      type: 'navIconPicker',
      name: 'iconName',
      title: 'Ikon',
    }),
    defineField({
      type: 'text',
      name: 'title',
      title: 'Tittel',
      rows: 3,
    }),
    defineField({
      type: 'array',
      name: 'body',
      title: 'Brødtekst',
      of: [
        {
          type: 'block',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      iconName: 'iconName',
    },
    prepare({ title, iconName }: { title?: string; iconName?: string }) {
      return {
        title: title,
        // @ts-ignore
        // media: <IconRender icon={NavIcons[iconName]} />,
      }
    },
  },
})

export const navIconPicker = {
  type: 'string',
  name: 'navIconPicker',
  title: 'Tidslinjeikon',
  // inputComponent: NavIconEditor,
}
