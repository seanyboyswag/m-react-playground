import { useEffect, useState } from 'react'

const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: e.pageX,
                y: e.page
            });
        }

        console.log('setting up event');
        document.addEventListener('mousemove', (e) => {
            setPosition({
                x: e.pageX,
                y: e.pageY
            });
        })

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    return position;
}

export { useMousePosition as default }