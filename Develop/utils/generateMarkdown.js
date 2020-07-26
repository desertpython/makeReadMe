// function to generate markdown for README
function renderLicenseBadge(projectLicense) {
  if (projectLicense !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${projectLicense}-blue.svg)`
  }
  return ''
}

function renderLicenseLink(projectLicense) {
  if (projectLicense !== "None") {
    return (
      `\n* [License](#license)\n`
    )
  }
  return ''
}

function renderLicenseSection(projectLicense) {
  if (projectLicense !== "None") {
    return (
      `## License

This project is licensed under the ${projectLicense} license.`
    )
  }
  return ''
}

function generateMarkdown(data) {
  return `# ${data.nameProject}
${renderLicenseBadge(data.projectLicense)}

## Description

${data.desc}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.projectLicense)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.projectInstall}
\`\`\`

## Usage

${data.useApp}

${renderLicenseSection(data.projectLicense)}
  
## Contributing

${data.contributors}

## Tests

To run tests, run the following command:

\`\`\`
${data.commandForTest}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${data.userEmail}. You can find more of my work at [${data.gitHubName}](https://github.com/${data.gitHubName}/).

`;
}

module.exports = generateMarkdown;

