import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { Header } from "widgets";


function GoodPage() {
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        document.title = `Товар №${id}`;
    }, []);

    
    return(
        <>
            <Header />
        </>
    );
}

export default GoodPage;
