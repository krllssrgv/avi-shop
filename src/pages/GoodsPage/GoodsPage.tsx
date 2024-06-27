import { useEffect } from "react";

import { Header } from "widgets";


function GoodsPage() {
    useEffect(() => {
        document.title = 'Товары';
    });


    return(
        <>
            <Header />
        </>
    );
}

export default GoodsPage;
