import gsap from 'gsap';
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);

import React from 'react';

const App = () => {
    return (
        <div className="flex-center h-[100vhgi]">
            <h1 className="text-3xl text-indigo-300">Hello, Gsap!</h1>
        </div>
    )
}
export default App;