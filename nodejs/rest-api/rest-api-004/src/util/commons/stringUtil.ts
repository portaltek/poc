export const is = (text1: string | undefined, text2?: string): boolean => {
    if (text1 === undefined) return false
    if (text2 === undefined) return text1 === 'true'
    return text1 === text2
}

export const isNot = (text1: string | undefined, text2?: string): boolean => {
    return !is(text1, text2)
}
