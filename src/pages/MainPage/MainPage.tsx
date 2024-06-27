import { useEffect } from 'react';

import { Header } from 'widgets';
import styles from './MainPage.module.scss';


function MainPage() {
    useEffect(() => {
        document.title = 'Главная';
    }, []);


    return(
        <>
            <Header />
        </>
    );
}

export default MainPage;