import { useEffect, useState } from "react";

const getSize = () => {
    return {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
    }
}

export const useWindowSize = () => {
    let [windowSize, setWindowSize] = useState(getSize())

    const handleResize = () => {
        setWindowSize(getSize())
    }
    useEffect(()=> {
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])
    return windowSize
}