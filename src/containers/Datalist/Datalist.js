import React, { Component } from 'react';
import YRDatatable from '../../components/YRDatatable/YRDatatable';
import Styles from './Datalist.scss';

let _columns = [
    { title: 'Name', prop: 'name'  },
    { title: 'City', prop: 'city' },
    { title: 'Address', prop: 'address' },
    { title: 'Phone', prop: 'phone' }
];

let _data = [
    { name: 'name value', city: 'city value', address: 'address value', phone: 'phone value' }
    // It also supports arrays
    // [ 'name value', 'city value', 'address value', 'phone value' ]
];


class Datalist extends Component {

    render() {
        
        return (
            <div>
                Hier komt een datatable

                <YRDatatable
                    className="container"
                    keys={[ 'name', 'address' ]}
                    columns={_columns}
                    initialData={_data}
                    initialPageLength={5}
                    initialSortBy={{ prop: 'city', order: 'descending' }}
                    pageLengthOptions={[ 5, 20, 50 ]}
                />

            </div>
        );
    }
}

export default Datalist;
