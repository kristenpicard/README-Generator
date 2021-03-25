// Badge links
const mit = "[License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const gnu = "[License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](http://www.gnu.org/licenses/fdl-1.3)";
const isc = "[License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
const apache = "[License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

// GIVEN BY BOOTCAMP
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  return `![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)`;

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  // I think this will be attached to the badge links listed above and therefore will end up deleting this function?
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description 
  ${data.description}

  ${data.license}
   
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
    
  
  ## Installation
  ${data.install}
  
  ## Usage 
  ${data.usage}
  
  ## License
  ${renderLicenseBadge(data.license)}
  
  ## Contributions
  ${data.contributions}
  
  ## Tests
  ${data.test}
  
  ## Questions
  
  If you would like to discuss this project, please reach out via my GitHub or Email:
  
  GitHub: ${data.questions1}
  
  Email: ${data.questions2}
`;
}

module.exports = generateMarkdown;
