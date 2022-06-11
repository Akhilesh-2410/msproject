import React, { useState, useEffect, useRef } from "react";


let useClickOutside = (handler) => {
    let domNode = useRef();

    useEffect(() => {
        let maybeHandler = (event) => {
            if (!domNode.current.contains(event.target)) {
                handler();
            }
        };

        document.addEventListener("mousedown", maybeHandler);

        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    });

    return domNode;
};

const Dropdown = ({
    type = 'submit',
    className = '',
    processing,
    children,
    options,
    consell,
    grade,
    menus
}) => {
    const [showOptions, setShowOptions] = useState(false);
    const handleClick = () => {
        setShowOptions(!showOptions);
    }

    let domNode = useClickOutside(() => {
        setShowOptions(false);
    });

    return (
        <div ref={domNode} class="relative inline-block text-left">
            <div>
                <button onClick={handleClick} type={type} className={
                    `w-full inline-flex font-poppins border-2 border-clinic-700  justify-center w-full rounded-md border border-teal-300 shadow-sm px-2 py-2 bg-white text-sm font-medium  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-teal-100 focus:ring-teal-500 ${processing && 'opacity-25'
                    } ` + className
                }
                    disabled={processing}

                    id="menu-button" aria-expanded="true" aria-haspopup="true">{children}


                    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>

            {showOptions && (


                <div class="origin-top-right relative right-0 mt-2 w-55 rounded-md shadow-lg  ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                    <div class="bg-white py-1" role="none">

                        {options && options.map((option) =>

                            <a href="#"
                                class="text-gray-700 block px-6 py-2 text-sm hover:bg-gray-400 hover:text-white "
                                role="menuitem"
                                tabindex="-1"
                                id="menu-item-0">{option}</a>
                        )}

                        {consell && consell.map((counsel) =>

                            <a href="#"
                                class="text-gray-700 block px-6 py-2 text-sm hover:bg-gray-400 hover:text-white "
                                role="menuitem"
                                tabindex="-1"
                                id="menu-item-0">{counsel}</a>
                        )}

                        {grade && grade.map((grad) =>

                            <a href="#"
                                class="text-gray-700 block px-6 py-2 text-sm hover:bg-gray-400 hover:text-white "
                                role="menuitem"
                                tabindex="-1"
                                id="menu-item-0">{grad}</a>
                        )}

                        {menus && menus.map((menu) =>

                            <a href={menu.link}
                                class="text-gray-700 block px-6 py-2 text-sm hover:bg-gray-400 hover:text-white "
                                role="menuitem"
                                tabindex="-1"
                                id="menu-item-0">{menu}</a>
                        )}

                    </div>
                </div>

            )}
        </div>)
}


export default Dropdown;

