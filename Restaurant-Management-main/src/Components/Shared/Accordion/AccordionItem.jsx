import { useState, useRef, useEffect } from 'react';

const AccordionItem = ({ title, content, isActive, onClick }) => {
    const contentRef = useRef(null);
    const [height, setHeight] = useState('0px');

    useEffect(() => {
        if (isActive) {
            setHeight(`${contentRef.current.scrollHeight}px`);
        } else {
            setHeight('0px');
        }
    }, [isActive]);

    return (
        <div className={`border-b ${isActive ? 'border-[#32CD32]' : 'border-[#FFD700]'}`}>
            <button
                className={`w-full text-left p-4 transition-colors duration-300 ${isActive ? 'text-[#32CD32]' : 'text-[#FFD700]'}`}
                onClick={onClick}
            >
                <h2 className="text-lg font-semibold">{title}</h2>
            </button>
            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ height }}
            >
                <div className="p-4">{content}</div>
            </div>
        </div>
    );
};

export default AccordionItem;
