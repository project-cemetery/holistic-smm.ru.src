import ContactFrom from './form'

export default () =>
    <footer id="footer">
        <div className="inner">

            <section>
                <h2>Связаться</h2>
                <ContactFrom />
            </section>

            <section>
                <h2>Способы связи</h2>
                <ul className="icons">
                    <li><a href="#" className="icon style2 fa-envelope-o"><span className="label">Email</span></a></li>
                </ul>
            </section>

            <ul className="copyright">
                <li>&copy; Holistic SMM Agency. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    </footer>