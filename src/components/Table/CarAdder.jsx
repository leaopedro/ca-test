import React, { PropTypes } from 'react';
import { Modal, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

import Checkbox from './../GeneralComponents/Checkbox.jsx';

class CarAdder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            form: {
                plate: {
                    value: '',
                    id: 'placa',
                },
                model: {
                    value: '',
                    id: 'modelo',
                },
                brand: {
                    value: '',
                    id: 'marca',
                },
                fuel: {
                    value: '',
                    id: 'combustivel',
                },
                price: {
                    value: '',
                    id: 'valor',
                },
            },

        };

        this.addCar = this.addCar.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const field = e.target;
        const newSt = Object.assign({}, this.state);
        newSt.error = null;
        newSt.form[field.id].value = field.value;
        // Efetuar validaçoes
        this.setState(newSt);
    }
    addCar() {
        const car = {};
        const newSt = Object.assign({}, this.state);
        for (let i in this.state.form) {
            if (!this.state.form[i].value || this.state.form[i].value === '') {
                newSt.error = 'Preencha todos os campos.';
                this.setState(newSt);
                return;
            } else {
                car[this.state.form[i].id] = this.state.form[i].value;
            }
        }
        this.props.addCar(car);
        this.props.close();
    }
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.close}>
                <Modal.Header closeButton>
                    <Modal.Title>Novo Carro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="text-danger">{this.state.error}</p>
                    <FormGroup>
                        <ControlLabel>Placa</ControlLabel>
                        <FormControl type="text"
                                     id="plate"
                                     value={this.state.form.plate.value}
                                     placeholder="Placa"
                                     onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Modelo</ControlLabel>
                        <FormControl type="text"
                                     id="model"
                                     value={this.state.form.model.value}
                                     placeholder="Modelo"
                                     onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Marca</ControlLabel>
                        <FormControl type="text"
                                     id="brand"
                                     value={this.state.form.brand.value}
                                     placeholder="Marca"
                                     onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Combustível</ControlLabel>
                        <FormControl type="text"
                                     id="fuel"
                                     value={this.state.form.fuel.value}
                                     placeholder="Combustível"
                                     onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel>Preço</ControlLabel>
                        <FormControl type="text"
                                     id="price"
                                     value={this.state.form.price.value}
                                     placeholder="Preço"
                                     onChange={this.handleChange} />
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-default" onClick={this.props.close}>Cancelar</button>
                    <button className="btn btn-success" onClick={this.addCar}>Adicionar</button>
                </Modal.Footer>
            </Modal>
        );
    }

}

CarAdder.propTypes = {
//    isSelected: PropTypes.bool.isRequired,
};

export default CarAdder;
