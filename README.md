# react-dynamic-bs-table

> Dynamic reusable table with pagination and image support for react, using Bootstrap default styling 

The purpose of this package is to propose a dynamic table React component, in fact, simply add table header labels and data to display as props, the component will take care to display all data whatever is the number of array's keys. It also support images.

It is possible to enable or disable the pagination, by specifying it in props, number of items per page to display, standard Bootstrap table class, and more...


[![NPM](https://img.shields.io/npm/v/react-dynamic-bs-table.svg)](https://www.npmjs.com/package/react-dynamic-bs-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
 [![JavaScript Style Guide](https://img.shields.io/github/stars/parazitenew/react-dynamic-bs-table.svg)](https://github.com/parazitenew/react-dynamic-bs-table)
 [![JavaScript Style Guide](https://img.shields.io/github/issues/parazitenew/react-dynamic-bs-table.svg)](https://github.com/parazitenew/react-dynamic-bs-table)
 [![JavaScript Style Guide](https://img.shields.io/github/downloads/parazitenew/react-dynamic-bs-table/total.svg)](https://github.com/parazitenew/react-dynamic-bs-table)
 
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

              //this is just an example, you have to specify the class names
              //of your css library you are using (bootsrap, material...)
              customClass={{
                tableClass:"table table-hover",
                trClass:"text-center",
              }}
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
| tableHover | Boolean | `false` | No | This applies `table-hover` bootstrap class |
| tableBkColor | String | N/A | No | This applies a background color to the talbe. Available values (`info`, `danger`, `warning`, `success`) |
| tableBordered | Boolean | `false` | No | This applies `table-bordered` bootstrap class |
| tableStriped | Boolean | `false` | No | This applies `table-striped` bootstrap class |
| tableResponsive | Boolean | `false` | No | This applies `table-responsive` bootstrap class |
| tableInverse | Boolean | `false` | No | This applies `table-inverse` bootstrap class |
| customClass | Object | N/D | No | This applies the classes you provide in this prop. `customClass` is an object that expects tow keys, `tableClass` and `trClass`, wich values are simply strings that refers to the class names of the css library you use, example value: `{{tableClass:"table table-hover",trClass:"text-center p-0"}}` |

## Changelog
#### 1.1.0:
- Added `customClass` prop
- Added `PropTypes`
- Changed named export for the component to default export
- Some corrections to README.md
- Added typing definitions for the package
#### 1.0.1: 
- Update README.md
#### 1.0.0: 
- First Release of my first library in history

## License

MIT © [parazitenew](https://github.com/parazitenew)
