import { useEffect } from "react";

import { Header } from "widgets";

function CartPage() {
    useEffect(() => {
        document.title = 'Корзина';
    }, []);


    return(
        <>
            <Header />
        </>
    );
}

export default CartPage;
