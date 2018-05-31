import Link from 'next/Link'

import menu from '../../data/menu'

export default () =>
    <nav id="menu">
        <h2>Меню</h2>
        <ul>
            {menu && menu.map(item =>
                <Link href={item.path}><li><a>{item.title}</a></li></Link>
            )}
        </ul>
    </nav>
    