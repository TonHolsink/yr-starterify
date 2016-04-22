import React, { Component } from 'react';
import { DataTable } from 'react-data-components';
import 'react-data-components/css/table-twbs.css';
import './YRDatatable.scss';

class YRDatatable extends Component {

    static defaultProps = {
        className: 'container',
        columns: [{ title: 'Name', prop: 'name' }],
        initialData: [{ name: 'name value' }]
    };

    render() {
        console.log(this.props.initialData);
        return (
            <div><DataTable
                className="{this.props.className}"
                keys={[ 'name', 'address' ]}
                columns={this.props.columns}
                initialData={this.props.initialData}
                initialPageLength={5}
                initialSortBy={{ prop: 'city', order: 'descending' }}
                pageLengthOptions={this.props.pageLengthOptions}
            /></div>
        );
    }
}

export default YRDatatable;
