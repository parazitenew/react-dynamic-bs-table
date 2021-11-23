# react-dynamic-bs-table

> Dynamic reusable table with pagination and image support for react, using Bootstrap styling 

The purpose of this package is to propose a dynamic table React component, in fact, simply add table header labels and data to display as props, the component will take care to display all data whatever is the number of array's keys. It also support images.

It is possible to enable or disable the pagination, by specifying it in props, number of items per page to display, standard Bootstrap table class, and more...


[![NPM](https://img.shields.io/npm/v/react-dynamic-bs-table.svg)](https://www.npmjs.com/package/react-dynamic-bs-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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

## License

MIT © [parazitenew](https://github.com/parazitenew)
