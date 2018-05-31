import Link from 'next/link'

import image from '../../utils/image'

export default () =>
    <header id="header">
        <div className="inner">

            <Link href="/">
                <a href="/" className="logo">
                    <span className="symbol">
                        <img src={image('logo.svg')} alt="Holistic SMM Agency" />
                    </span>
                    <span className="title">Holistic SMM Agency</span>
                </a>
            </Link>

            <nav>
                <ul>
                    <li><a href="#menu">Меню</a></li>
                </ul>
            </nav>

        </div>
    </header>