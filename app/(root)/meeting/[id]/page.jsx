import React from 'react'

export default async function Meeting({params}) {
  const {slugs} = await params
  console.log(slugs);

  return (
    <div>Meeting Room: # {slugs}</div>
  )
}
