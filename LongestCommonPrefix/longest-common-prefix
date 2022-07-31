function longestCommonPrefix(strs: string[]): string {
    
	// if only one element, return that element
    if (strs.length === 1) return strs[0]
    
	// just focus on comparing the current character, don't worry about whats behind it
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) return strs[0].substring(0, i)
        }
    }
    
	// return the first element if no 'not equals' happened
    return strs[0]
};