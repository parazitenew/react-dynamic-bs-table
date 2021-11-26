# react-dynamic-bs-table

> Dynamic reusable table component, with pagination feature, image support, custom classes and live search bar, for React, using Bootstrap default styling.

The purpose of this package is to propose a dynamic table React component, in fact, simply add table header labels and data to display as props, the component will take care to display all data whatever is the number of array's keys. It also support images.

It is possible to enable or disable the pagination and the search bar, by specifying it in props, number of items per page to display, custom table classes, and more...


[![NPM](https://img.shields.io/npm/v/react-dynamic-bs-table.svg)](https://www.npmjs.com/package/react-dynamic-bs-table) [![NPM](https://img.shields.io/npm/dw/react-dynamic-bs-table.svg)](https://www.npmjs.com/package/react-dynamic-bs-table) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![JavaScript Style Guide](https://img.shields.io/github/stars/parazitenew/react-dynamic-bs-table.svg)](https://github.com/parazitenew/react-dynamic-bs-table)
[![JavaScript Style Guide](https://img.shields.io/github/issues/parazitenew/react-dynamic-bs-table.svg)](https://github.com/parazitenew/react-dynamic-bs-table) [![NPM](https://img.shields.io/npm/types/react-dynamic-bs-table.svg)](https://www.npmjs.com/package/react-dynamic-bs-table) 
 
## Features

- [Install](#install)
- [Usage](#usage)
- [Live Search Bar](#live-search-bar)
- [Properties](#properties)
- [Example](#example)
- [Changelog](#changelog)
- [License](#license)

## Install

```bash
npm install --save react-dynamic-bs-table
```

## Usage

```jsx
import React, { Component } from 'react'

import CustomTable from 'react-dynamic-bs-table'
import 'react-dynamic-bs-table/dist/index.css'

const headList = [
  "Brand", "Model", "Country", 'Picture'
]

const dataToDisplay = [
  { brandName: "Ford", modelName: "Fusion", country: "USA", imagePath: "https://..." },
  { brandName: "Seat", modelName: "Ibiza", country: "Spain", imagePath: "https://..." },
  { brandName: "Volkswagen", modelName: "Golf", country: "Germany", imagePath: "https://..." },
  { brandName: "Renault", modelName: "Clio", country: "France", imagePath: "https://..." },
  { brandName: "Peugeot", modelName: "308", country: "France", imagePath: "https://..." },
  { brandName: "Chevrolet", modelName: "Cruze", country: "USA", imagePath: "https://..." },
  { brandName: "Renault", modelName: "Kangoo", country: "France", imagePath: "https://..." },
  { brandName: "Volkswagen", modelName: "Polo", country: "Germany", imagePath: "https://..." },
  { brandName: "Audi", modelName: "A3", country: "Germany", imagePath: "https://..." },
  { brandName: "Seat", modelName: "Ateca", country: "Spain", imagePath: "https://..." },
  { brandName: "BMW", modelName: "M4", country: "Germany", imagePath: "https://..." },
  { brandName: "Mercedes", modelName: "Class A 180", country: "Germany", imagePath: "https://..." },
  { brandName: "Ford", modelName: "Fiesta", country: "USA", imagePath: "https://..." },
]

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
              enableSearchBar
              />
          )
  }
}
```

## Live Search Bar
You can enable a live multiple keys search bar. It is used to filter the data through all the keys of the array you provide in `bodyList` prop.

The search bar use default Bootstrap styling, but you can custom it by providing your own classes in `searchBarClass` prop.

### Example
```jsx
...

class Example extends Component {
  ...
  render() {
    return (
            <CustomTable
              ...
              enableSearchBar
              searchBarClass="form-control my_other_class"
              searchBarPlaceholder="Find something..."
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
| imageHeight| Integer| `null`| No | Set the image height if in your data there is images to display (absolute image path) |
| imageWidth| Integer| `null`| No | Set the image width if in your data there is images to display (absolute image path) |
| rowNumber | Boolean | `false` | No | If set to `true` an extra column will be added to the table to display row number |
| enablePagination | Boolean | `false` | No | If set to `true` the pagination will be enabled |
| itemsPerPage | Integer | `10` | No | Number of items to be shown per page on the table |
| tableHover | Boolean | `false` | No | This applies `table-hover` bootstrap class |
| tableBkColor | String | N/A | No | This applies a background color to the table. Available values (`info`, `danger`, `warning`, `success`) |
| tableBordered | Boolean | `false` | No | This applies `table-bordered` bootstrap class |
| tableStriped | Boolean | `false` | No | This applies `table-striped` bootstrap class |
| tableResponsive | Boolean | `false` | No | This applies `table-responsive` bootstrap class |
| tableInverse | Boolean | `false` | No | This applies `table-inverse` bootstrap class |
| customClass | Object | N/D | No | This applies the classes you provide in this prop. `customClass` is an object that expects three keys, `tableClass`, `trClass` and `theadClass`, wich values are simply strings that refer to the class names of the css library you are using, example value: `{{tableClass:"table table-hover",trClass:"text-center p-0",theadClass:"text-primary"}}` |
| enableSearchBar | Boolean | `false` | No | When set to `true` a live search bar will be shown on top of the table |
| searchBarPlaceholder | String | `Search for...` | No | Placeholder of the live search bar |
| searchBarClass | String | N/D | No | Custom class you want to apply for the search bar. You can use your own classes ou some other CSS libraries you use |

## Example
[See live example here!](https://parazitenew.github.io/react-dynamic-bs-table/example/build/)

## Changelog

#### 1.3.0
- Added a live search bar feature
- Added `enableSearchBar`, `searchBarPlaceholder`, `searchBarClass` props for the live search bar
- Some code improvement
- README.md updated

#### 1.2.0:
- Added `theadClass` property for `customClass` prop

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
