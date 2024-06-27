import { Link } from 'react-router-dom';
import { useState } from 'react';
import classNames from 'classnames';

import { routes } from 'shared';
import styles from './Header.module.scss';

import goodsImage from 'assets/icons/goods.svg';
import cartImage from 'assets/icons/cart.svg';
import profileImage from 'assets/icons/profile.svg';


function Header() {
    const [searchText, setSearchText] = useState<string>('');


    const displaySearchLink = () => {
        if (searchText !== '') {
            return(
                <Link to={routes.search + searchText} className={styles.search_button}>
                    Найти
                </Link>
            );
        } else {
            return(
                <div className={classNames(styles.search_button, styles.search_button_disabled)}>
                    Найти
                </div>
            );
        }
    }


    return(
        <header>
            <div className={styles.desktop_container}>
                <div className={styles.logo}>
                    <Link to={routes.main}>Главная</Link>
                </div>

                <div className={styles.search}>
                    <input 
                        type="text"
                        name="search"
                        placeholder="Поиск..."
                        className={styles.search_input}
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)} 
                    />

                    {displaySearchLink()}
                </div>

                <div className={styles.buttons}>
                    <Link to={routes.goods} className={styles.goods}>
                        Товары
                    </Link>

                    <Link to={routes.cart}>
                        <img src={cartImage} alt="Cart" />
                    </Link>

                    <Link to={routes.profile}>
                        <img src={profileImage} alt="Profile" />
                    </Link>
                </div>
            </div>

            <div className={styles.mobile_container}>

            </div>
        </header>
    );
}

export default Header;
