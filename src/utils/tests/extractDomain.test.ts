import { expect, test, describe } from 'bun:test'
import extractDomain from '../extractDomain'

describe('extractDomain', () => {
  test('extractDomain_google', () => {
    const domain = extractDomain('https://www.google.com');
    expect(domain).toBe('www.google.com');
  })

  test('extractDomain_facebook', () => {
    const domain = extractDomain('https://www.facebook.com');
    expect(domain).toBe('www.facebook.com');
  })

  test('extractDomain_twitter', () => {
    const domain = extractDomain('https://www.twitter.com');
    expect(domain).toBe('www.twitter.com');
  })

  test('extractDomain_instagram', () => {
    const domain = extractDomain('https://www.instagram.com');
    expect(domain).toBe('www.instagram.com');
  })

  test('extractDomain_linkedin', () => {
    const domain = extractDomain('https://www.linkedin.com');
    expect(domain).toBe('www.linkedin.com');
  })
})