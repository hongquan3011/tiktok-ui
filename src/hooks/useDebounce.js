import { useState, useEffect } from 'react';
function useDebounce(value, delay) {
    const [debounceValue, setDeboundceValue] = useState(value);
    useEffect(() => {
     const handler =   setTimeout(() => setDeboundceValue(value), delay);
        return () =>clearTimeout(handler)
    }, // eslint-disable-next-line
    [value]);
    return debounceValue
}

export default useDebounce;
