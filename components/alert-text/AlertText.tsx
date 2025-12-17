import React from 'react'
import { PortableText } from '@portabletext/react'
import {
  XMarkOctagonFillIcon,
  InformationSquareFillIcon,
  CheckmarkCircleFillIcon,
  ExclamationmarkTriangleFillIcon,
} from '@navikt/aksel-icons'
import classNames from 'classnames'

// @ts-ignore
import styles from './AlertText.module.css'

export function AlertText(props: any) {
  const { body, title, type } = props.value

  return (
    <div
      className={classNames(
        styles['alert-text'],
        { [styles['alert-text--info']]: type === 'info' },
        { [styles['alert-text--error']]: type === 'error' },
        { [styles['alert-text--warning']]: type === 'warning' },
        { [styles['alert-text--success']]: type === 'success' },
      )}
    >
      <AlertBoxIcon variant={type} />
      <div>
        {title && <h4>{title}</h4>}
        {body && <PortableText value={body} />}
      </div>
    </div>
  )
}

interface Props {
  variant: 'info' | 'success' | 'warning' | 'error'
}

function AlertBoxIcon(props: Props) {
  switch (props.variant) {
    case 'info':
      return <InformationSquareFillIcon />
    case 'success':
      return <CheckmarkCircleFillIcon />
    case 'warning':
      return <ExclamationmarkTriangleFillIcon />
    case 'error':
      return <XMarkOctagonFillIcon />
    default:
      return <></>
  }
}
