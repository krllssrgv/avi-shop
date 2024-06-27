import { useEffect } from "react";

import { Header } from "widgets";


function ProfilePage() {
    useEffect(() => {
        document.title = 'Профиль';
    }, []);


    return(
        <>
            <Header />
        </>
    );
}

export default ProfilePage;