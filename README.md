# react-dynamic-bs-table

> Dynamic reusable table with pagination and image support for react, using Bootstrap styling 

The purpose of this package is to propose a dynamic table React component, in fact, simply add table header labels and data to display as props, the component will take care to display all data whatever is the number of array's keys. It also support images.

It is possible to enable or disable the pagination, by specifying it in props, number of items per page to display, standard Bootstrap table class, and more...


[![NPM](https://img.shields.io/npm/v/react-dynamic-bs-table.svg)](https://www.npmjs.com/package/react-dynamic-bs-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Features

- [Install](#install)
- [Usage](#usage)
- [Properties](#properties)
- [License](#license)

## Install

```bash
npm install --save react-dynamic-bs-table
```

## Usage

```jsx
import React, { Component } from 'react'

import CustomTable from 'react-dynamic-bs-table'

class Example extends Component {
  render() {
    return (
            <CustomTable
              bodyList={dataToDisplay}
              headList={headLabels}
              imageHeight={75}
              rowNumber
              enablePagination
              itemsPerPage={5}
              tableHover
              />
          )
  }
}
```
## Properties
| Props | Type | Default | Required | Description |
|:-----:|:----:|:-------:|:--------:|:-----------:|
| **bodyList** | 2D array | N/A | Yes | This is the data you want to display, usually it's data you fetch from database|
| **headList** | 1D array | N/A| Yes | Labels to display in table head |
| imageHeight| Integer| `null`| No | Set the image height if in your data there is images to display (image path) |
| imageWidth| Integer| `null`| No | Set the image width if in your data there is images to display (image path) |
| rowNumber | Boolean | `false` | No | If set to `true` an extra column will be added to the table to display row number |
| enablePagination | Boolean | `false` | No | If set to `true` the pagination will be enabled |
| itemsPerPage | Integer | `10` | No | Number of items to be displayed per page on the table |
| tableHover | Boolean | `false` | No | This apply `table-hover` bootstrap class |
| tableBkColor | String | N/A | No | This apply a background color to the talbe. Available values (`info`, `danger`, `warning`, `success`) |
| tableBordered | Boolean | `false` | No | This apply `table-bordered` bootstrap class |
| tableStriped | Boolean | `false` | No | This apply `table-striped` bootstrap class |
| tableResponsive | Boolean | `false` | No | This apply `table-responsive` bootstrap class |
| tableInverse | Boolean | `false` | No | This apply `table-inverse` bootstrap class |

## Changelog

- 1.0.0: First Release

## License

MIT © [parazitenew](https://github.com/parazitenew)
