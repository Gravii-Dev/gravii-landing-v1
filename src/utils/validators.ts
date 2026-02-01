/**
 * Validation utilities for Ethereum addresses and ENS names
 */

/**
 * Validates an Ethereum address
 * @param address - The address to validate
 * @returns true if valid Ethereum address (0x + 40 hex characters)
 */
export function isValidEthAddress(address: string): boolean {
  if (!address) return false

  // Remove whitespace
  const trimmed = address.trim()

  // Check format: 0x followed by 40 hexadecimal characters
  const ethereumAddressRegex = /^0x[a-fA-F0-9]{40}$/
  return ethereumAddressRegex.test(trimmed)
}

/**
 * Validates an ENS (Ethereum Name Service) domain
 * @param ens - The ENS name to validate
 * @returns true if valid ENS name (ends with .eth)
 */
export function isValidENS(ens: string): boolean {
  if (!ens) return false

  // Remove whitespace
  const trimmed = ens.trim().toLowerCase()

  // Check if it ends with .eth and has at least one character before .eth
  // Also ensure no spaces and valid characters
  const ensRegex = /^[a-z0-9-]+\.eth$/
  return ensRegex.test(trimmed)
}

/**
 * Validates either an Ethereum address or ENS name
 * @param input - The input to validate
 * @returns Object with validation result and type
 */
export function validateAddressOrENS(input: string): {
  isValid: boolean
  type: 'address' | 'ens' | 'invalid'
  normalized: string
} {
  const trimmed = input.trim()

  if (isValidEthAddress(trimmed)) {
    return {
      isValid: true,
      type: 'address',
      normalized: trimmed.toLowerCase(),
    }
  }

  if (isValidENS(trimmed)) {
    return {
      isValid: true,
      type: 'ens',
      normalized: trimmed.toLowerCase(),
    }
  }

  return {
    isValid: false,
    type: 'invalid',
    normalized: trimmed,
  }
}

/**
 * Validates email address format
 * @param email - The email to validate
 * @returns true if valid email format
 */
export function isValidEmail(email: string): boolean {
  if (!email) return false

  const trimmed = email.trim()

  // Basic email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(trimmed)
}
