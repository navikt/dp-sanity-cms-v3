import React from 'react'
import { TimelineItem, TimelineItemProps } from './TimelineItem'
import { PortableTextComponentProps } from '@portabletext/react'

export function Timeline(props: PortableTextComponentProps<{ elements: TimelineItemProps[] }>) {
  return <>{props.value.elements?.map(TimelineItem)}</>
}
