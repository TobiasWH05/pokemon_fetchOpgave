const localstModule = (() => {
    
    return {
        create: (key, value) => localStorage.setItem(key, value),
        read: key => localStorage.getItem(key),
        remove: key => localStorage.removeItem(key)

    }
})();