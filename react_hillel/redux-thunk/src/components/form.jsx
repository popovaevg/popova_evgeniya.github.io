import React from 'react';


export class Form extends React.Component {
    state = {
        value: 'hello',
        textAreaValue: '',
        checkBoxChacked: false,
        selectValue: 0,
        langs: ['HTML', 'CSS', 'JS'],
        radioOption: 'option1'
    }
    handleChange = (event) =>{ // функция-обработчик, которая обновляет состояние React-компонента, работает при каждом нажатии
        console.log(event); // event - это объект-событие
        const { value } = event.target; // target - это наш input
        this.setState({
            value 
        });
    };
    handleChangeTextArea = (event) =>{
        console.log(event);
        this.setState({
            textAreaValue: event.target.value
        });
    };
    handleChangeCheckbox = (event) =>{
        console.log(event.target.value);
        this.setState((prevState) => ({
            checkBoxChacked: !prevState.checkBoxChacked
        }));
    };
    handleSelectChange = (event) => {
		this.setState({selectValue: event.target.value});
    };
    handleRadioChange = (event) => {
		this.setState({radioOption: event.target.value});
	}
    render(){
        const {
            value, 
            textAreaValue, 
            checkBoxChacked, 
            selectValue, 
            langs, 
            radioOption
        } = this.state; //деструктуризация
        return (
             <div>
                <input 
                    value={value}
                    onChange={this.handleChange} //событие, которое используется при изменении значения элемента формы
                />
                <br/>
                <p>Введите текст:{textAreaValue}</p>
                <textarea 
                    cols="10" 
                    rows="5" 
                    value={textAreaValue}
                    onChange={this.handleChangeTextArea}
                />
                <br/>
                <input 
                    type="checkbox"
                    checked={checkBoxChacked}
                    onChange={this.handleChangeCheckbox}
                />
                <br/>
                <p>Ваш выбор: {langs[selectValue]}</p>
                <select
                    value={selectValue}
                    onChange={this.handleSelectChange}
                >
                    {
                        langs.map((item, i) => {
                            return(
                                <option key={i} value={i}>{item}</option>
                            );
                        })
                    }
                </select>
                <br/>
                <p>Ваш выбор: {radioOption}</p>
                <input 
                    name="lang" 
                    type="radio" 
                    value="option1" 
                    checked={radioOption === 'option1'}
                    onChange={this.handleRadioChange}
                />
                <input 
                    name="lang" 
                    type="radio" 
                    value="option2" 
                    checked={radioOption === 'option2'}
                    onChange={this.handleRadioChange}
                />
             </div>
        )
    }
}