import React from 'react'

function TestiQuote(name, quote) {
  return (
    <div>
        <p>{quote}</p>
        <strong>- {name}</strong>
    </div>
  )
}

export default TestiQuote