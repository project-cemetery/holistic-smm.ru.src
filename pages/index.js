import Link from 'next/link'

import Layout from '../components/layout'

import channels from '../data/channels'
import image from '../utils/image'


export default () =>
    <Layout>
        <header>
            <h1>
                Это холистическое СММ-агенство. <br />
                Мы просто делаем хороший контент. 
            </h1>
            <p>
                Все наши каналы направлены на свободное распространение знаний. 
                Содержать их позволяет <Link href="/ads"><a>размещение рекламы</a></Link> и <a href="https://www.patreon.com/holistic">поддержка патронов</a>.
            </p>
        </header>

        <section className="tiles">
            {channels.map((channel, i) =>
                <article className={`style${i + 1}`} key={channel.link}>
                    <span className="image">
                        <img src={image(channel.image)} alt={channel.title} />
                    </span>
                    <a href={`https://t.me/${channel.link}`}>
                        <h2>{channel.title}</h2>
                        <div className="content">
                            <p>
                                {channel.description}<br />
                                @{channel.link}<br />
                                {channel.followers} подписчиков
                            </p>
                        </div>
                    </a>
                </article>
            )}
        </section>
    </Layout>
