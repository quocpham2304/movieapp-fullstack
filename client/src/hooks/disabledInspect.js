import React, { useEffect, useState } from 'react';

const DisabledInspect = () => {

    const [showMessage, setShowMessage] = useState(false);
    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();
        };

        const handleKeyDown = (e) => {
            const disabledEvent = (e) => {
                if (e.stopPropagation) {
                    e.stopPropagation();
                } else if (window.event) {
                    window.event.cancelBubble = true;
                }
                e.preventDefault();
                return false;
            };

            // "I" key
            if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
                setShowMessage(true);
                setTimeout(() => setShowMessage(false), 2000);
                disabledEvent(e);
            }
            // "J" key
            if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
                setShowMessage(true);
                setTimeout(() => setShowMessage(false), 2000);
                disabledEvent(e);
            }
            // "S" key + macOS
            if (e.keyCode === 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
                setShowMessage(true);
                setTimeout(() => setShowMessage(false), 2000);
                disabledEvent(e);
            }
            // "U" key
            if (e.ctrlKey && e.keyCode === 85) {
                setShowMessage(true);
                setTimeout(() => setShowMessage(false), 2000);
                disabledEvent(e);
            }
            // "F12" key
            if (e.keyCode === 123) {
                setShowMessage(true);
                setTimeout(() => setShowMessage(false), 2000);
                disabledEvent(e);
            }
        };

        window.addEventListener('contextmenu', handleContextMenu);
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('contextmenu', handleContextMenu);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div>
          {showMessage && <div>Function keys disabled.</div>}
        </div>
      );
};

export default DisabledInspect;