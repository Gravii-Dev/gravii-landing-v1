import { describe, expect, it } from 'vitest'
import {
  isValidEmail,
  isValidENS,
  isValidEthAddress,
  validateAddressOrENS,
} from './validators'

describe('validators', () => {
  describe('isValidEthAddress', () => {
    it('returns true for valid 0x + 40 hex', () => {
      expect(
        isValidEthAddress('0x742d35Cc6634C0532925a3b844Bc454e4438f44e')
      ).toBe(true)
    })
    it('returns false for empty or whitespace', () => {
      expect(isValidEthAddress('')).toBe(false)
      expect(isValidEthAddress('   ')).toBe(false)
    })
    it('returns false for wrong length or format', () => {
      expect(isValidEthAddress('0x123')).toBe(false)
      expect(
        isValidEthAddress('742d35Cc6634C0532925a3b844Bc454e4438f44e')
      ).toBe(false)
    })
  })

  describe('isValidENS', () => {
    it('returns true for valid .eth name', () => {
      expect(isValidENS('vitalik.eth')).toBe(true)
      expect(isValidENS('name123.eth')).toBe(true)
    })
    it('returns false for empty or non-.eth', () => {
      expect(isValidENS('')).toBe(false)
      expect(isValidENS('vitalik')).toBe(false)
    })
  })

  describe('isValidEmail', () => {
    it('returns true for valid email', () => {
      expect(isValidEmail('user@example.com')).toBe(true)
    })
    it('returns false for empty or invalid', () => {
      expect(isValidEmail('')).toBe(false)
      expect(isValidEmail('invalid')).toBe(false)
    })
  })

  describe('validateAddressOrENS', () => {
    it('returns type address for valid eth address', () => {
      const result = validateAddressOrENS(
        '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'
      )
      expect(result.isValid).toBe(true)
      expect(result.type).toBe('address')
    })
    it('returns type ens for valid .eth', () => {
      const result = validateAddressOrENS('vitalik.eth')
      expect(result.isValid).toBe(true)
      expect(result.type).toBe('ens')
    })
    it('returns invalid for unknown input', () => {
      const result = validateAddressOrENS('not-valid')
      expect(result.isValid).toBe(false)
      expect(result.type).toBe('invalid')
    })
  })
})
