import './menu_brg.css'
import ItemHome from './Item'

import { BsHouseDoor } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { SiLibreoffice } from "react-icons/si";
import { BsPerson } from "react-icons/bs";



function Menu() {
    const items = [
        { id: 1, icon: BsHouseDoor },
        { id: 2, icon: BsSearch },
        { id: 3, icon: SiLibreoffice },
        { id: 4, icon: BsPerson },



    ]
    return (
        <div className='menu_flex'>
            {items.map(item => (
                <ItemHome icon={item.icon} key={item.id} />
            ))}
        </div>
    )
}

export default Menu