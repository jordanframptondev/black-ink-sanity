import React, {useEffect} from 'react'
import {useFormValue, set, unset, PatchEvent} from 'sanity'
import {SlugInput} from 'sanity'

export default function SlugInputComponent(props) {
  const title = useFormValue(['title']) as string
  const {onChange, value} = props

  useEffect(() => {
    if (title) {
      const newSlug = slugify(title)
      if (value?.current !== newSlug) {
        onChange(PatchEvent.from(set({_type: 'slug', current: newSlug})))
      }
    } else {
      onChange(PatchEvent.from(unset()))
    }
  }, [title])

  return <SlugInput {...props} />
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, '-').slice(0, 96)
}
