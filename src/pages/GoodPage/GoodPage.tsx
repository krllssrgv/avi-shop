import { useParams } from "react-router-dom";

function GoodPage() {
    const { id } = useParams<{ id: string }>();

    return(
        <></>
    );
}

export default GoodPage;
