export type Key = Record<string, number>

export const generateArray = () => {
    return Array.from({ length: 26}, (_, i) => i + 1)
}

export const generateKey = (rng: () => number): Key => {
    const numbers = generateArray()

    for (let i = numbers.length - 1; i >= 1; i--) 
    {
        const j = Math.floor(rng() * (i + 1))

        ;[numbers[i], numbers[j]] = [numbers[j], numbers[i]]
    }

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    const key: Key = {}

    for (let p = 0; p < 26; p++) 
    {
        key[letters[p]] = numbers[p]
    }

    return key
}