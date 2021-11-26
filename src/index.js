import React from 'react'
import PropTypes from 'prop-types';
import styles from './styles.module.css'

class CustomTable extends React.Component {
  constructor(props) {
    super(props);
    this.numberOfPages = null
    this.state = {
      currentPage: 1,
      bodyList: [], //Initial data sent from parent
      bodyListFiltered: [],//Filtred data with searchbar
    }
  }
  //Define prop types
  static propTypes = {
    headList: PropTypes.array,
    bodyList: PropTypes.array,
    imageHeight: PropTypes.number,
    imageWidth: PropTypes.number,
    itemsPerPage: PropTypes.number,
    rowNumber: PropTypes.bool,
    enablePagination: PropTypes.bool,
    tableHover: PropTypes.bool,
    tableBkColor: PropTypes.string,
    tableBordered: PropTypes.bool,
    tableStriped: PropTypes.bool,
    tableResponsive: PropTypes.bool,
    tableInverse: PropTypes.bool,
    customClass: PropTypes.object,
    enableSearchBar: PropTypes.bool,
    searchBarPlaceholder: PropTypes.string,
    searchBarClass: PropTypes.string,
  }
  //Listen when the data fetched is updated in parent component
  componentDidUpdate() {
    //Check if data is updated (only length for now)
    if (this.state.bodyList.length !== this.props.bodyList.length) {
      this.setState({ bodyList: this.props.bodyList, bodyListFiltered: this.props.bodyList })
    }
  }

  //Handle next page button
  nextPage() {
    if (this.state.currentPage < this.numberOfPages) {
      this.setState({ currentPage: this.state.currentPage + 1 })
    }
  }
  //Handle previous page button
  previousPage() {
    if (this.state.currentPage > 1) {
      this.setState({ currentPage: this.state.currentPage - 1 })
    }
  }
  //Handle live search bar
  searchFor(event) {
    let bodyListFiltered = this.state.bodyList.filter(row => {
      const keys = Object.keys(row)
      return keys.some(key => row[key].toLowerCase().indexOf(event.target.value) != -1)
    });
    this.setState({ bodyListFiltered: bodyListFiltered, currentPage: 1 })
  }
  render() {
    let { headList, imageHeight, imageWidth, itemsPerPage, rowNumber, enablePagination, tableHover, tableBkColor, tableBordered, tableStriped, tableResponsive, tableInverse, customClass, enableSearchBar, searchBarPlaceholder, searchBarClass } = this.props
    let bodyList = this.state.bodyListFiltered
    imageWidth = imageWidth === undefined ? null : imageWidth
    imageHeight = imageHeight === undefined ? null : imageHeight
    itemsPerPage = itemsPerPage === undefined ? 10 : itemsPerPage
    rowNumber = rowNumber === undefined ? false : rowNumber
    enablePagination = enablePagination === undefined ? false : enablePagination
    enableSearchBar = enableSearchBar === undefined ? false : enableSearchBar
    searchBarPlaceholder = searchBarPlaceholder === undefined ? 'Search for...' : searchBarPlaceholder
    searchBarClass = searchBarClass === undefined ? styles.searchbar : searchBarClass
    let numberOfPages = Math.ceil(bodyList.length / itemsPerPage)
    this.numberOfPages = numberOfPages

    let startingRow = enablePagination === true ? (this.state.currentPage - 1) * itemsPerPage : 0
    let endingRow = enablePagination === true ? this.state.currentPage * itemsPerPage : bodyList.length

    //Default table class
    let tableClassNames = styles.table
    //table-hover class handler
    tableClassNames = tableHover ? tableClassNames + " " + styles['table-hover'] : tableClassNames
    //table-responsive class handler
    tableClassNames = tableResponsive ? tableClassNames + " " + styles['table-responsive'] : tableClassNames
    //table-bordered class handler
    tableClassNames = tableBordered ? tableClassNames + " " + styles['table-bordered'] : tableClassNames
    //table-inverse class handler
    tableClassNames = tableInverse ? tableClassNames + " " + styles['table-inverse'] : tableClassNames
    //table-striped class handler
    tableClassNames = tableStriped ? tableClassNames + " " + styles['table-striped'] : tableClassNames
    //table background color class handler
    switch (tableBkColor) {
      case 'info':
        tableClassNames = tableClassNames + " " + styles['table-info']
        break;
      case 'success':
        tableClassNames = tableClassNames + " " + styles['table-success']
        break;
      case 'danger':
        tableClassNames = tableClassNames + " " + styles['table-danger']
        break;
      case 'warning':
        tableClassNames = tableClassNames + " " + styles['table-warning']
        break;

      default:
        break;
    }
    //Custom styling handler
    let trClass = ""
    let theadClass = ""
    if (customClass !== undefined && typeof customClass === 'object' && customClass !== "") {
      //Check if table classes are provided
      if (customClass.tableClass !== undefined && customClass.tableClass !== "") {
        tableClassNames = customClass.tableClass
      }
      if (customClass.trClass !== undefined && customClass.trClass !== "") {
        trClass = customClass.trClass
      }
      if (customClass.theadClass !== undefined && customClass.theadClass !== "") {
        theadClass = customClass.theadClass
      }
    }
    return (
      <div>
        {
          enableSearchBar &&
          <input type="text" className={searchBarClass} placeholder={searchBarPlaceholder} onChange={(event) => this.searchFor(event)} />
        }

        <table className={tableClassNames}>
          <thead className={theadClass}>
            <tr className={trClass}>
              {rowNumber && <th>#</th>}
              {
                headList.map((value, index) => {
                  return (
                    <th key={index}>{value}</th>
                  )
                })
              }
            </tr>
          </thead>
          <tbody>
            {bodyList.slice(startingRow, endingRow).map((value, index) => {
              let keys = Object.keys(value)
              return (
                <tr key={index} className={trClass}>
                  {
                    //Displays row number
                    rowNumber &&
                    <th>{(index + ((this.state.currentPage - 1) * itemsPerPage)) + 1}</th>
                  }

                  {keys.map((element, index) => {
                    const myArray = value[element].split(".");
                    let lastElem = myArray[myArray.length - 1]
                    //Check if the data is an image path, if it is, we display img tag inside the td tag
                    if (lastElem === "jpg" || lastElem === "png" || lastElem === "jpeg" || lastElem === "gif") {
                      return (
                        < td key={index} ><img alt="image" src={value[element]} style={{ height: imageHeight, width: imageWidth }}></img></td>
                      )
                    } else {
                      return (
                        <td key={index}>{value[element]}</td>
                      )
                    }
                  })}
                </tr>)
            })}
          </tbody>
        </table>
        {
          enablePagination &&
          <nav>
            <ul className={styles.pagination}>
              <li className={styles['page-item']}><a className={styles['page-link']} href="#" onClick={() => this.previousPage()}>Previous</a></li>
              <li className={styles['page-item']}><a className={styles['page-link']} href="#">{this.state.currentPage + " / " + numberOfPages}</a></li>
              <li className={styles['page-item']}><a className={styles['page-link']} href="#" onClick={() => this.nextPage()}>Next</a></li>
            </ul>
          </nav>
        }
      </div >
    );
  }
}
export default CustomTable