import { encode } from "./encode"
import { expect, test } from 'vitest'

// A small fixed key so the expected results are easy to predict.
const key = { A: 5, B: 12, C: 7 }

test('Encodes a simple word', () => {
    expect(encode("ABC", key)).toEqual([
        { kind: 'cipher', value: 5 },
        { kind: 'cipher', value: 12 },
        { kind: 'cipher', value: 7 },
    ])
})

test('Keeps spaces and punctuation as literals', () => {
    expect(encode("A B!", key)).toEqual([
        { kind: 'cipher', value: 5 },
        { kind: 'literal', char: ' ' },
        { kind: 'cipher', value: 12 },
        { kind: 'literal', char: '!' },
    ])
})

test('Ignores letter case', () => {
    expect(encode("aBc", key)).toEqual(encode("ABC", key))
})

test('Keeps digits as literals', () => {
    expect(encode("A1", key)).toEqual([
        { kind: 'cipher', value: 5 },
        { kind: 'literal', char: '1' },
    ])
})
