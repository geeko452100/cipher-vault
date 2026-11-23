import { expect, test } from 'vitest'
import { mulberry32 } from './random'

// A test has 3 parts: set things up, do the thing, check the result.

test('same seed gives the same sequence', () => {
  // 1. Set up: make two generators from the SAME seed
  const a = mulberry32(123)
  const b = mulberry32(123)

  // 2. Do the thing: call each one 5 times and collect the numbers
  const fromA = [a(), a(), a(), a(), a()]
  const fromB = [b(), b(), b(), b(), b()]

  // 3. Check: the two lists should be identical
  expect(fromA).toEqual(fromB)
})

test('different seeds give different sequences', () => {
    // 1. Set up: make two generators from a DIFFERENT seed
  const a = mulberry32(123)
  const b = mulberry32(124)

  // 2. Do the thing: call each one 5 times and collect the numbers
  const fromA = [a(), a(), a(), a(), a()]
  const fromB = [b(), b(), b(), b(), b()]

  expect(fromA).not.toEqual(fromB)
})
