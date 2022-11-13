import React, { useRef, useEffect } from 'react'

const { tableau } = window;

function Embedding() {
    const ref = useRef(null);
    const url = 'https://prod-apnortheast-a.online.tableau.com/t/riteshtrailsnwflk/views/new/Dashboard3'

    const initViz = () => {
        new tableau.Viz(ref.current, url, {
            width: "100%",
            height: "98vh",
        });

    };

    useEffect(initViz, []);
    return <div />;
}
export default Embedding