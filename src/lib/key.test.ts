import { generateKey } from "./key";
import { mulberry32 } from "./random";
import { expect, test } from 'vitest'

// Test the array produces successfuly
test('All 26 letters are present', () => {
    // Make a key from a seeded generator
    const key = generateKey(mulberry32(123))
    // Ensure that there is 26 letters
    expect(Object.keys(key).length).toEqual(26)
})

test('Values are unique and in range', () => {
    const key = generateKey(mulberry32(123))
    const values = Object.values(key)
    expect(new Set(values).size).toEqual(26)
    expect(Math.min(...values)).toEqual(1)
    expect(Math.max(...values)).toEqual(26)
})

test('Same seed gives the same key', () => {
    const keyA = generateKey(mulberry32(123))
    const keyB = generateKey(mulberry32(123))
    expect(keyA).toEqual(keyB)
})

test('Different seeds give different keys', () => {
    const key1 = generateKey(mulberry32(123))
    const key2 = generateKey(mulberry32(124))
    expect(key1).not.toEqual(key2)
})