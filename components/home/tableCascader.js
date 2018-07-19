import { Cascader } from 'antd';
import React, { Component } from 'react';
import { Table } from 'antd';
import faker from 'faker';

export default class LoadingTablesCards extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

   onChange(value) {
    console.log('value', value);
  }
  

  render() {
    const options = 
    [
        {
        value: 'address',
        label: 'address',
        children: [
         {
          value: 'zipCode',
          label: 'zipcode'
         },
         {
          value: 'city',
          label: 'city'
         },
         {
          value: 'streetName',
          label: 'street name'
         },
         {
          value: 'streetSuffix',
          label: 'street suffix'
         },
         {
          value: 'streetPrefix',
          label: 'street prefix'
         },
         {
          value: 'secondaryAddress',
          label: 'secondary address'
         },
         {
          value: 'country',
          label: 'country'
         },
         {
          value: 'countryCode',
          label: 'country code'
         },
         {
          value: 'latitude',
          label: 'latitude'
         },
         {
          value: 'longitude',
          label: 'longitude'
         }
        ],
      }, {
        value: 'commerce',
        label: 'commerce',
        children: [
        {
          value: 'color',
          label: 'color'
        },
        {
          value: 'department',
          label: 'department'
        },
        {
          value: 'productName',
          label: 'product name'
        },
        {
          value: 'price',
          label: 'price'
        },
        {
          value: 'productAdjective',
          label: 'product adjective'
        },
        {
          value: 'productMaterial',
          label: 'product material'
        },
        {
          value: 'product',
          label: 'product'
        },
    ],
      },
    {
        value: 'date',
        label: 'date',
        children: [
            {
                value: 'past',
                label: 'past'
            },
            {
                value: 'future',
                label: 'future'
            },
            {
                value: 'between',
                label: 'between'
            },
            {
                value: 'recent',
                label: 'recent'
            },
            {
                value: 'month',
                label: 'month'
            },
            {
                value: 'weekday',
                label: 'weekday'
            },
        ]
    }
];


    return <Cascader defaultValue={['define column type']} options={options} onChange={this.onChange} />
  }

}














