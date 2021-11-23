import React from 'react'

import { CustomTable } from 'react-dynamic-bs-table'
import 'react-dynamic-bs-table/dist/index.css'
const headList = [
  "Brand", "Model", "Country"
]
const brandsList = [
  { brandName: "Ford", ModelName: "Fusion", country: "USA", imagePath: "https://tdrresearch.azureedge.net/photos/chrome/Expanded/White/2018FOC270001/2018FOC27000101.jpg" },
  { brandName: "Seat", ModelName: "Ibiza", country: "Spain", imagePath: "https://www.seat.be/content/countries/be/seat-website/fr/modeles/ibiza/fr/_jcr_content.resizedViewPort.noscale.specsMiniature.png" },
  { brandName: "Volkswagen", ModelName: "Golf", country: "Germany", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "Renault", ModelName: "Clio", country: "France", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "Peugeot", ModelName: "308", country: "France", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "Chevrolet", ModelName: "Cruze", country: "USA", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "Renault", ModelName: "Kangoo", country: "France", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "Volkswagen", ModelName: "Polo", country: "Germany", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "Audi", ModelName: "A3", country: "Germany", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "Seat", ModelName: "Ateka", country: "Spain", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "BMW", ModelName: "M4", country: "Germany", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "Mercedes", ModelName: "Class A 180", country: "Germany", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
  { brandName: "Ford", ModelName: "Fiesta", country: "USA", imagePath: "https://github.githubassets.com/images/modules/logos_page/Octocat.png" },
]
const App = () => {
  return (
    <div style={{ width: 600, marginLeft: 200, marginTop: 100, padding: 5, borderColor: 'grey', borderWidth: 1, borderStyle: 'solid', borderRadius: 10 }}>
      <CustomTable
        bodyList={brandsList}
        headList={headList}
        imageHeight={75}
        rowNumber
        enablePagination
        itemsPerPage={5}
      />
    </div>
  )
}

export default App
