import ContactFrom from './form'

import contacts from '../../data/contacts'

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
                    {contacts.map(contact =>
                        <li key={contact.link}>
                            <a href={contact.link} className={`icon style2 fa-${contact.icon}`}>
                                <span className="label">{contact.title}</span>
                            </a>
                        </li>
                    )}
                </ul>
            </section>

            <ul className="copyright">
                <li>&copy; Holistic SMM Agency. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
            </ul>
        </div>
    </footer>