import React from 'react'

export default function Copyright() {
  const initialYear = 2022
  const currentYear = new Date().getFullYear()
  const dates =
    currentYear > initialYear
      ? `${initialYear} - ${currentYear}`
      : `${initialYear}`
  return (
    <>
      <p>Copyright &copy; {dates} Christelle Quilang</p>
    </>
  )
}
