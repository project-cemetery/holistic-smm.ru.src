import Link from 'next/link'

import menu from '../../data/menu'

export default () =>
    <nav id="menu">
        <h2>Меню</h2>
        <ul>
            {menu.map(item =>
                <li key={item.path}>
                    <Link href={item.path}><a>{item.title}</a></Link>
                </li>
            )}
        </ul>
    </nav>
    