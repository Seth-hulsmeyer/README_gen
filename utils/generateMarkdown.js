// function to generate markdown for README

function generateMarkdown(data) {
  return `# <span style="color:darkgreen"> **${data.title}**</span>

  ![License](https://img.shields.io/badge/license-${encodeURIComponent(
    data.license
  )}-darkgreen.svg)

  ## Application Description:
  > *${data.description}*

  Below is a picture of the Application:
  
  ![Picture Alt](url)

  ## Table of Contents:

  * [Project Description](#description)
  * [Installation Process](#installation)
  * [Usage](#usage)
  * [How to Contribute](#contribution)
  * [License](#license)
  * [Questions](#questions)
  * [Creator Information](#creator)

  ## Installation:
  > *${data.install}*

  ## Usage:
  > *${data.usage}*

  ## Contribution:
  > *${data.contribute}*

  ## License:
  > *${data.license}*

  ## Questions:
  If you have questions, please reach out using the following link
  >[GitHub Profile](http://github.com/${data.username})


  ## Creator:
  * <span style="color:green">**Name:**</span> ${data.name}
  * <span style="color:green">**GitHub Username:**</span> ${data.username}
  * <span style="color:green">**Email:**</span> ${data.email}

`;
}

module.exports = generateMarkdown;
