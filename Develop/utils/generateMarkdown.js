// This function returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license == "GNU") {
    return `![License: GNU](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
  } else if (license == "ISC") {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  } else if (license == "Apache") {
    return `![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return `[MIT License Link](https://spdx.org/licenses/MIT.html)`;
  } else if (license == "GNU") {
    return `[GNU License Link](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  } else if (license == "ISC") {
    return `[ISC License Link](https://opensource.org/licenses/ISC)`;
  } else if (license == "Apache") {
    return `[Apache 2.0 License Link](https://opensource.org/licenses/Apache-2.0)`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description 
  ${data.description}
   
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

  ${renderLicenseLink(data.license)}
  
  ## Contributions
  ${data.contributions}
  
  ## Tests
  ${data.test}
  
  ## Questions
  
  If you would like to discuss this project, please reach out via my GitHub or Email:
  
  GitHub: [${data.questions1}](https://www.github.com/${data.questions1})
  
  Email: ${data.questions2}
`;
}

module.exports = generateMarkdown;
