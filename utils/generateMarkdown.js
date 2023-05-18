// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if(license == "Apache 2.0") {
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blueviolet.svg)]`
    } else if(license == "Boost Software License 1.0") {
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
    } else if(license == "BSD 3-Clause License") {
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`
    } else if(license == "Eclipse Public License 1.0") {
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`
    } else if(license == "GNU GPL v3") {
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    } else if(license == "The Hippocratic License 2.1") {
      return `[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)]`
    } else if (license == "IBM Public License Version 1.0") {
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`
    } else if(license == "ISC") {
      return `[![License](https://img.shields.io/badge/License-ISC-blueviolet.svg)]`
    } else if(license == "MIT") {
      return `[![License](https://img.shields.io/badge/License-MIT-blueviolet.svg)]`
    } else if(license == "Mozilla Public License 2.0") {
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
    } else if(license == "The Perl License") {
      return `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]`
    } else if(license == "SIL Open Font License 1.1") {
      return `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)]`
    } else if(license == "The Unlicense") {
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`
    } else if(license == "The Do What the Fuck You Want to Public License") {
      return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]`
    } else if(license == "Zlib") {
      return `[![License](https://img.shields.io/badge/License-Zlib-blueviolet.svg)]`
    } else if(license == "None") {
      return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license == "Apache 2.0") {
      return `(https://opensource.org/licenses/Apache-2.0)`
    }else if (license == "Boost Software License 1.0") {
      return `(https://www.boost.org/LICENSE_1_0.txt)`
    } else if (license == "BSD 3-Clause License") {
      return `(https://opensource.org/licenses/BSD-3-Clause)`
    } else if (license == "Eclipse Public License 1.0") {
      return `(https://opensource.org/licenses/EPL-1.0)`
    } else if (license == "GNU GPL v3") {
      return `(https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license == "The Hippocratic License 2.1") {
      return `(https://firstdonoharm.dev)`
    } else if (license == "IBM Public License Version 1.0") {
      return `(https://opensource.org/licenses/IPL-1.0)`
    } else if (license == "ISC") {
      return `(https://opensource.org/licenses/ISC)`
    } else if (license == "MIT") {
      return `(https://opensource.org/licenses/MIT)`
    } else if (license == "Mozilla Public License 2.0") {
      return `(https://opendatacommons.org/licenses/by/)`
    } else if (license == "The Perl License") {
      return `(https://opensource.org/licenses/Artistic-2.0)`
    } else if (license == "SIL Open Font License 1.1") {
      return `(https://opensource.org/licenses/OFL-1.1)`
    } else if (license == "The Unlicense") {
      return `(http://unlicense.org/)`
    } else if (license == "The Do What the Fuck You Want to Public License") {
      return `(http://www.wtfpl.net/about/)`
    } else if (license == "Zlib") {
      return `(https://opensource.org/licenses/Zlib)`
    } else if (license == "None") {
      return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  if (license == "Apache 2.0") {
    return `## License

    This repository is licensed under the Apache 2.0 license, click on the badge to learn more.`
  } else if (license == "Boost Software License 1.0") {
    return `## License

    This repository is licensed under the Boost Software License 1.0, click on the badge to learn more.`
  } else if (license == "BSD 3-Clause License") {
    return `## License

    This repository is licensed under the BSD 3-Clause License, click on the badge to learn more.`
  } else if (license == "Eclipse Public License 1.0") {
    return `## License

    This repository is licensed under the Eclipse Public License 1.0, click on the badge to learn more.`
  } else if (license == "GNU GPL v3") {
    return `## License

    This repository is licensed under the GNU GPL v3 license, click on the badge to learn more.`
  } else if (license == "The Hippocratic License 2.1") {
    return `## License

    This repository is licensed under The Hippocratic License 2.1, click on the badge to learn more.`
  } else if (license == "IBM Public License Version 1.0") {
    return `## License

    This repository is licensed under the IBM Public License Version 1.0, click on the badge to learn more.`
  } else if (license == "IPL 1.0") {
    return `## License

    This repository is licensed under the IPL 1.0 license, click on the badge to learn more.`
  } else if (license == "MIT") {
    return `## License

    This repository is licensed under the MIT license, click on the badge to learn more.`
  } else if (license == "MPL 2.0") {
    return `## License

    This repository is licensed under the MPL 2.0 license, click on the badge to learn more.`
  } else if (license == "Artistic-2.0") {
    return `## License

    This repository is licensed under the Artistic 2.0 license, click on the badge to learn more.`
  } else if (license == "Open Font-1.1") {
    return `## License

    This respitory is licensed under the Open Font 1.1 license, click on the badge to learn more.`
  } else if (license == "The Unlicense") {
    return `## License

    This repository is licensed under The Unlicense, click on the badge to learn more.`
  } else if (license == "The Do What the Fuck You Want to Public License") {
    return `## License

    This repository is licensed under The Do What the Fuck You Want to Public License, click on the badge to learn more.`
  } else if (license == "Zlib") {
    return `## License

    This repository is licensed under the Zlib license, click on the badge to learn more.`
  } else if (license == "None") {
    return ""
  };
};

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.applicationName}

  ${renderLicenseBadge(data.license)} ${renderLicenseLink(data.license)}

  ## Table of Contents

  [Description](#description) || [Installation](#installation) || [Usage](#usage) || [License](#license) || [Contributions](#contributions) || [Questions](#questions)

  ## Description

  ${data.appDescription}

  ## Installation

  To install dependencies for this application, please use ${data.installCommand}  
  
  ${data.installation}

  ## Usage

  ${data.usageInfo}  

  ${renderLicenseSection(data.license)}

  ## Contributions

  ${data.contributions}

  ## Testing

  The commands in order to test are ${data.testCommand}  
  
  ${data.test}

  ## Questions

  If there are any questions regarding the application, please [Email](mailto:${data.email}) me or contact me via [Github](${data.github})
`;
}

module.exports = generateMarkdown;
