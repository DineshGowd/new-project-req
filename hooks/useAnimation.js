'use client'
import { useEffect, useState } from 'react'

const useAnimation = (observedRef, options = {
    root: null,
    rootMargin: "0px",
    threshold: 1
}) => {
    const [visible, setVisible] = useState(false);
    const callback = ([entry], observer) => {
        // console.log("----if-------");
        console.log("myRef", entry.target);
        setVisible(entry.isIntersecting);
        // observer.unobserve(entry.target);
        // console.log("-----end------");
    }

    useEffect(() => {
        const observer = new IntersectionObserver(callback, options);
        if (observedRef.current) observer.observe(observedRef.current)
        return () => {
            if (observedRef.current) observer.unobserve(observedRef.current)
        }
    }, [observedRef, options])

    return visible;
}
export default useAnimation