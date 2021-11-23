import React from 'react'
import styles from './styles.module.css'

export class CustomTable extends React.Component {
  constructor(props) {
    super(props);
    this.bodyList = this.props.bodyList
    this.numberOfPages = null

    this.state = {
      currentPage: 1,
    }
  }
  componentDidUpdate() {
    if (this.bodyList.length !== this.props.bodyList.length) {
      this.bodyList = this.props.bodyList
      this.forceUpdate()
    }
  }

  nextPage() {
    if (this.state.currentPage < this.numberOfPages) {
      this.setState({ currentPage: this.state.currentPage + 1 })
    }
  }
  previousPage() {
    if (this.state.currentPage > 1) {
      this.setState({ currentPage: this.state.currentPage - 1 })
    }
  }
  render() {
    let { headList, bodyList, imageHeight, imageWidth, itemsPerPage, rowNumber, enablePagination, tableHover, tableBkColor, tableBordered, tableStriped, tableResponsive, tableInverse } = this.props

    imageWidth = imageWidth === undefined ? null : imageWidth
    imageHeight = imageHeight === undefined ? null : imageHeight
    itemsPerPage = itemsPerPage === undefined ? 10 : itemsPerPage
    rowNumber = rowNumber === undefined ? false : rowNumber
    enablePagination = enablePagination === undefined ? false : enablePagination
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
    return (
      <div>
        <table className={tableClassNames}>
          <thead>
            <tr>
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
                <tr key={index}>
                  {
                    //Displays row number
                    rowNumber &&
                    <td>{(index + ((this.state.currentPage - 1) * itemsPerPage)) + 1}</td>
                  }

                  {keys.map((element, index) => {
                    const myArray = value[element].split(".");
                    let lastElem = myArray[myArray.length - 1]
                    //Check if the data is an image path, if it is, we display img tag inside the td tag
                    if (lastElem === "jpg" || lastElem === "png" || lastElem === "jpeg" || lastElem === "gif") {
                      return (
                        < td key={index} ><img alt="logo" src={value[element]} style={{ height: imageHeight, width: imageWidth }}></img></td>
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