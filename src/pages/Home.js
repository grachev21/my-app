import { NavLink } from 'react-router-dom';

import ButtonMenu from '../components/button_menu/ButtonMenu';
import { menu_list } from '../helpers/ButtonMenuLIst';


export default function Home() {
    return (
        <div className="home">

            {menu_list.map((menu_list, index) => {
                return (
                    <NavLink to={menu_list.link} className="link_menu">
                        <ButtonMenu
                            key={index}
                            title={menu_list.title}
                            img={menu_list.img}
                        />
                    </NavLink>
                );
            })}

        </div>



    );
}