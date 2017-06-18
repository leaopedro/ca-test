import React, { PropTypes } from 'react';

import Checkbox from './../GeneralComponents/Checkbox.jsx';

class TableItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

        this.toggleChecked = this.toggleChecked.bind(this);
    }
    toggleChecked() {
        this.props.toggleSelected(this.props.item.id);
    }
    render() {
        return (
            <tr className="table-item">
                <td><Checkbox checked={this.props.isSelected} error={false} onValueChange={this.toggleChecked} label="" /></td>
                <td><p className="table-data plate">{this.props.item.placa}</p></td>
                <td><p className="table-data model">{this.props.item.modelo}</p></td>
                <td><p className="table-data brand">{this.props.item.marca}</p></td>
                <td><p className="table-data image"><a href={this.props.item.imagem || '#'}>{(this.props.item.imagem)? 'Imagem' : 'Sem foto'}</a></p></td>
                <td><p className="table-data fuel">{this.props.item.combustivel}</p></td>
                <td><p className="table-data price">{this.props.item.valor}</p></td>
            </tr>
        );
    }

}

TableItem.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    toggleSelected: PropTypes.func.isRequired,
};

export default TableItem;
