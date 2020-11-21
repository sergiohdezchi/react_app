import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            mail: '',
            date: new Date()
        }

        this.changeName = this.changeName.bind(this)  
        this.changeMail = this.changeMail.bind(this)  
        this.changeDate = this.changeDate.bind(this)  
    }

    changeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    changeMail(e) {
        this.setState({
            mail: e.target.value
        })
    }

    changeDate() {
        this.setState({
            date: new Date()
        })
    }

    render(){
        return (
            <div className="ed-grid">
                <h1>Formulario {this.props.name}</h1>
                <h4>Fecha: {Math.ceil(this.state.date/1000)}</h4>
                <form>
                    <div className="ed-item form__item" id='form-element'>
                        <label>Nombre completo</label>
                        <input 
                        type="text"
                        onChange={ this.changeName }
                        />
                    </div>                    
                    <div className="ed-item form__item">
                        <label>Correo electronico</label>
                        <input 
                        type="email"
                        onChange={ this.changeMail }
                        />
                    </div>                    
                    <div className="ed-item form__item">
                        <input className='button full' type='submit' value='Enviar' />
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.name}`}</h2>
                    <span>{`Tu correo es: ${this.state.mail}`}</span>
                </div>
            </div>
        )
    }

    componentDidMount() {
        const t = document.getElementById('form-element');
        console.log(t);
        // esto es una funcion de javascript
        this.dateInterval = setInterval(() => {
            this.changeDate()
        }, 1000);
    }

    componentDidUpdate(prevProp, prevState) {
        console.log('--------')
        console.log(prevProp)
        console.log(prevState)
        console.log('---------')
    }

    componentWillUnmount() {
        clearInterval(this.dateInterval)
    }
}

export default Form;