import { expect, test, describe } from 'bun:test'
import getAgent from '../getAgent'

describe('getAgent', () => {
  test('returns the correct agent', () => {
    expect(getAgent('mobile_ios')).toBe('Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1')
    expect(getAgent('mobile_android')).toBe('Mozilla/5.0 (Linux; Android 8.0.0;) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.137 Mobile Safari/537.36')
    expect(getAgent('desktop_chrome')).toBe('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36')
    expect(getAgent('desktop_firefox')).toBe('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Firefox/58.0')
    expect(getAgent('desktop_safari')).toBe('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0.3 Safari/605.1.15')
  })
})