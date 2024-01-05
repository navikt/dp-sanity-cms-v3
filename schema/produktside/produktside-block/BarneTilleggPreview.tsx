import React, { ReactNode, useEffect, useRef, useState } from 'react'
import { FaChild } from 'react-icons/fa'
import classNames from 'classnames'
// @ts-ignore
import styles from './styles.module.css'

interface Props {
  children: ReactNode
}

export function BarneTilleggPreview(props: Props) {
  const [content, setContent] = useState<undefined | string>(undefined)
  const notNumeric = isNaN(Number(content))
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    setContent(ref.current?.innerText)
  }, [props.children])

  const colorClassName = notNumeric ? styles.invalidColor : styles.validColor

  return (
    <>
      <span className={styles.faChild}>
        <FaChild style={{ marginRight: '1px' }} />
      </span>
      <span ref={ref} className={colorClassName}>
        {props.children}
      </span>
      <span className={classNames(colorClassName, styles.feedback)}>
        {notNumeric ? 'Ikke ett tall!' : ' barnetillegg beløp'}
      </span>
    </>
  )
}
