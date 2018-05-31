import Notifications, { notify as toast } from 'react-notify-toast'

import * as notify from '../../utils/notify'

export default class ContactForm extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    render() {
        const { name, email, message } = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <Notifications />
                <div className="field half first">
                    <input
                        type="text" name="name" id="name" placeholder="Имя"
                        value={name} onChange={this.handleChange('name')}
                    />
                </div>
                <div className="field half">
                    <input
                        type="email" name="email" id="email" placeholder="Email"
                        value={email} onChange={this.handleChange('email')}
                    />
                </div>
                <div className="field">
                    <textarea
                        name="message" id="message" placeholder="Сообщение"
                        value={message} onChange={this.handleChange('message')}
                    ></textarea>
                </div>
                <ul className="actions">
                    <li><input type="submit" value="Отправить" className="special" /></li>
                </ul>
            </form>
        )
    }

    handleChange = field => event => this.setState({
        [field]: event.target.value,
    })

    handleSubmit = (event) => {
        event.preventDefault()

        const { email, name, message } = this.state

        notify.telegram(email, name, message)
            .then(
                () => {
                    this.setState({ message: '' })
                    toast.show('Сообщение отправлено', 'success')
                },
                () => toast.show('Что-то пошло не так, попробуйте позже', 'warning')
            )

        
    }
}