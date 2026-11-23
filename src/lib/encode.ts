import type { Key } from "./key"

export type Token = 
    | { kind: 'cipher'; value: number }
    | { kind: 'literal'; char: string }

export const encode = (text: string, key: Key): Token[] => {
    const tokens: Token[] = []

    for (const ch of text) {
        const upper = ch.toUpperCase()

        if (upper in key)
        {
            tokens.push({ kind: 'cipher', value: key[upper] })
        } 
        else 
        {
            tokens.push({ kind: 'literal', char: ch })
        }
    }
    return tokens
}