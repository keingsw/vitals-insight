import { renderToStaticMarkup } from 'react-dom/server'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the heading and initial count', () => {
    const html = renderToStaticMarkup(<App />)

    expect(html).toContain('<h1>Get started</h1>')
    expect(html).toContain('Count is 0')
  })
})
