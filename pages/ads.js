import Layout from '../components/layout'

import image from '../utils/image'

export default () =>
    <Layout title="Размещение рекламы">
        <h1>Условия размещения рекламы</h1>
        <p>Мы не размещаем рекламу онлайн-казино, букмекерских контор и пирамид.</p>
        <span className="image main"><img src={image('ads.jpg')} alt="Размещение рекламы" /></span>
        <p>
            Вы можете разместить релкаму в любом нашем канале. 
            Рекламный пост будет находится в ленте канала первым 48 часов.
        </p>
        <p>
            Бронирование даты осуществляется после оплаты. 
            Перенос поста возможен при уплате 50% неустойки.
        </p>
        <p><a href="https://t.me/mashagoroshik">Напишите нам</a>, чтобы узнать цены и свободные даты.</p>
    </Layout>
