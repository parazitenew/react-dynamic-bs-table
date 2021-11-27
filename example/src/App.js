import React from 'react'

import CustomTable from 'react-dynamic-bs-table'
import 'react-dynamic-bs-table/dist/index.css'

const headList = [
  "Brand", "Model", "Country", 'Picture'
]
const brandsList = [
  { brandName: "Ford", modelName: "Fusion", country: "USA", imagePath: "https://tdrresearch.azureedge.net/photos/chrome/Expanded/White/2018FOC270001/2018FOC27000101.jpg" },
  { brandName: "Seat", modelName: "Ibiza", country: "Spain", imagePath: "https://www.seat.be/content/countries/be/seat-website/fr/modeles/ibiza/fr/_jcr_content.resizedViewPort.noscale.specsMiniature.png" },
  { brandName: "Volkswagen", modelName: "Golf", country: "Germany", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "Renault", modelName: "Clio", country: "France", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "Peugeot", modelName: "308", country: "France", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "Chevrolet", modelName: "Cruze", country: "USA", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "Renault", modelName: "Kangoo", country: "France", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "Volkswagen", modelName: "Polo", country: "Germany", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "Audi", modelName: "A3", country: "Germany", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "Seat", modelName: "Ateca", country: "Spain", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "BMW", modelName: "M4", country: "Germany", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "Mercedes", modelName: "Class A 180", country: "Germany", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "Ford", modelName: "Fiesta", country: "USA", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
]
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      brandsList: []
    };
  };
  simulateDataUpdate() {
    this.setState({ brandsList: this.state.brandsList.slice(0, 4) })
  }
  handleButtonClick() {
    alert('Nice!')
  }
  componentDidMount() {
    this.setState({ brandsList: brandsList })
  }
  render() {
    return (
      <div >
        <button onClick={() => this.simulateDataUpdate()}>SIMULATE DATA UPDATE</button>
        <CustomTable
          bodyList={this.state.brandsList}
          headList={headList}
          imageHeight={75}
          rowNumber
          enablePagination
          itemsPerPage={5}
          customClass={{ tableClass: "", trClass: "", theadClass: "" }}
          enableSearchBar
          tableHover
          searchBarPlaceholder="Search..."
        ><button className="btn btn-primary" onClick={this.handleButtonClick}>Click me!</button></CustomTable>
      </div>
    )
  }
}

export default App
