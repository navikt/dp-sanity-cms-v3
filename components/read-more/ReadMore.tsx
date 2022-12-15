import React from 'react'
import { PreviewProps } from 'sanity'
import { TypedObject } from '@portabletext/types'

interface IProps {
  title: string
  size: 'medium' | 'small'
  body: TypedObject | TypedObject[]
  defaultOpen: boolean
}

export function ReadMore(props: PreviewProps<any>) {
  console.log(props)
  return (
    <div></div>
    // <div style={{ background: 'red' }}>{props.title}</div>
    // <NAVReadMore header={props?.title}>
    //   <div>{props?.body && <PortableText value={props?.body} />}</div>
    // </NAVReadMore>
  )
}
