import React, { PropTypes } from 'react';

import TableItem from './TableItem.jsx';
import Checkbox from './../GeneralComponents/Checkbox.jsx';

import './style.less';

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount() {
        this.props.fetchItems();
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
                <div className="container">
                    <div className="col-xs-6">
                        <button className="btn btn-success add-car">Novo Carro</button>
                    </div>
                    <div className="col-xs-6">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Pesquisar" />
                            <div className="input-group-addon">
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
};

export default Table;
