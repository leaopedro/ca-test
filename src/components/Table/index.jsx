import React, { PropTypes } from 'react';

import TableItem from './TableItem.jsx';
import CarAdder from './CarAdder.jsx';
import Checkbox from './../GeneralComponents/Checkbox.jsx';

import './style.less';

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            search: '',
            carAdderVisible: false,
        };

        this.onClickSearch = this.onClickSearch.bind(this);
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.showAdder = this.showAdder.bind(this);
        this.closeAdder = this.closeAdder.bind(this);
    }

    componentDidMount() {
        this.props.fetchItems();
    }
    onClickSearch() {
        const text = this.state.search;
        if (text !== '') {
            this.props.triggerSearch(text);
        } else {
            this.props.resetItems();
        }
    }
    onChangeSearch(e) {
        this.setState({ search: e.target.value });
    }

    onKeyPress(target) {
        if(target.charCode==13){
            this.onClickSearch();
        }
    }
    showAdder() {
        this.setState({ carAdderVisible: true });
    }
    closeAdder() {
        this.setState({ carAdderVisible: false });
    }

    render() {
        const items = [];
        for (let i = 0; i < this.props.items.length; i++) {
            items.push(
                <TableItem key={i} item={this.props.items[i]} isSelected={this.props.selectedItems.indexOf(this.props.items[i].id) !== -1} toggleSelected={this.props.toggleSelected} />
            );
        }
        return (
            <section className="cars">
                <CarAdder show={this.state.carAdderVisible} close={this.closeAdder} addCar={this.props.addCar} />
                <div className="container">
                    <div className="col-xs-6">
                        <button className="btn btn-success add-car" onClick={this.showAdder}>Novo Carro</button>
                    </div>
                    <div className="col-xs-6">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Pesquisar" onKeyPress={this.onKeyPress} onChange={this.onChangeSearch} />
                            <div className="input-group-addon" onClick={this.onClickSearch}>
                                <span className="glyphicon glyphicon-search"> </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <td><Checkbox checked={this.props.selectedItems.length === this.props.items.length} error={false} onValueChange={this.props.toggleSelectAll} label="" /></td>
                            <td><p className="name">Placa</p></td>
                            <td><p className="name">Modelo</p></td>
                            <td><p className="name">Marca</p></td>
                            <td><p className="name">Foto</p></td>
                            <td><p className="name">Combustível</p></td>
                            <td><p className="name">Valor</p></td>
                        </thead>
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                </div>
                <div className="pages-container">
                    <span className="page-item arrow"><i className="fa fa-angle-double-left"></i></span>
                    <span className="page-item active">1</span>
                    <span className="page-item">2</span>
                    <span className="page-item">3</span>
                    <span className="page-item">4</span>
                    <span className="page-item">5</span>
                    <span className="page-item arrow"><i className="fa fa-angle-double-right"></i></span>
                </div>
            </section>
        );
    }

}

Table.propTypes = {
    items: PropTypes.array.isRequired,
    fetchItems: PropTypes.func.isRequired,
    selectedItems: PropTypes.array.isRequired,
    toggleSelectAll: PropTypes.func.isRequired,
    toggleSelected: PropTypes.func.isRequired,
    addCar: PropTypes.func.isRequired,
};

export default Table;
