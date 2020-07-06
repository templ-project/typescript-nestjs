# Templ Javascript

[![HitCount](http://hits.dwyl.com/templ-project/javascript.svg)](http://hits.dwyl.com/templ-project/javascript)
[![Contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/templ-project/javascript/issues)
[![TravisCI](https://travis-ci.org/templ-project/javascript.svg?branch=master)](https://travis-ci.org/templ-project/javascript)
![JSCPD](.jscpd/jscpd-badge.svg?raw=true)
<!-- CI Badges -->
<!-- [![CircleCI](https://circleci.com/gh/templ-project/javascript.svg?style=shield)](https://circleci.com/gh/templ-project/javascript) -->

[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=templ-project_javascript&metric=alert_status)](https://sonarcloud.io/dashboard?id=templ-project_javascript)
[![SonarCloud Coverage](https://sonarcloud.io/api/project_badges/measure?project=templ-project_javascript&metric=coverage)](https://sonarcloud.io/component_measures/metric/coverage/list?id=templ-project_javascript)
[![SonarCloud Bugs](https://sonarcloud.io/api/project_badges/measure?project=templ-project_javascript&metric=bugs)](https://sonarcloud.io/component_measures/metric/reliability_rating/list?id=templ-project_javascript)
[![SonarCloud Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=templ-project_javascript&metric=vulnerabilities)](https://sonarcloud.io/component_measures/metric/security_rating/list?id=templ-project_javascript)

<!-- Donation Badges -->
[![Donate to this project using Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://patreon.com/dragoscirjan)
[![Donate to this project using Paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QBP6DEBJDEMV2&source=url)

<img alt="JavaScript Logo" src="https://github.com/templ-project/javascript/blob/master/javascript.svg?raw=true" width="20%" align="right" />
<img alt="TypeScript Logo" src="https://github.com/templ-project/javascript/blob/master/typescript.svg?raw=true" width="20%" align="right" />

> *Any fool can write code that a computer can understand. Good programmers write code that humans can understand.* – Martin Fowler

> **javascript** is a template project, designed by [Templ Project](http://templ-project.github.io).
>
> **javascript** includes instructions for initializing a new
> **JavaScript/[TypeScript](https://www.typescriptlang.org/)** project, and configuring it for development, unit
> testing as well as code linting and analysis.
>
> **javascript** implements:
>
> - [jscpd](https://github.com/kucherenko/jscpd), [dependency-cruiser](https://github.com/sverweij/dependency-cruiser) for code analisys
> - [prettier](https://prettier.io/) for code formatting
> - [eslint](https://eslint.org/) for linting
>
> By default, this implementation uses [npm](https://www.npmjs.com/), but you can easily change it to [yarn](https://yarnpkg.com/) or [pnpm](https://pnpm.js.org/) or any other package manager.

## Getting Started

### Prerequisites / Dependencies

##### For Windows

- Please install [git-scm](https://git-scm.com/download/win) tool.
- Please install a form of make
  - Install [Make for Windows](http://gnuwin32.sourceforge.net/packages/make.htm)
  - Install [make](https://sourceforge.net/projects/ezwinports/files/) from [ezwinports](https://sourceforge.net/projects/ezwinports/files/)
  - Install [chocolatey](https://chocolatey.org/), run `choco install make`

##### For Linux/Unix/OSX

- Please install `git` and `make`

```bash
# i.e debian
sudo apt-get install git make -y
# i.e mac OS
brew install make git
```

<!-- #### Known Issues / Troubleshooting

None for now. -->

### Installation

```bash
git clone https://github.com/templ-project/javascript your_project
cd your_project
rm -rf .git
git init
git add remote origin https://url/to/your/project/repository
git add .
git commit -am "init"
git push origin master
npm run change:language -- javascript # to use javascript
# or
# npm run change:language -- typescript # to use typescript
npm install
# yarn install
# pnpm install
```

### Development

#### Requirements

- Please install [NodeJs](https://nodejs.org/en/). We support version 10.x and above.
- Please instal a JavaScript/TypeScript IDE
  - [Visual Studio Code](https://code.visualstudio.com/) with [ITMCDev Babel Extension Pack](https://marketplace.visualstudio.com/items?itemName=itmcdev.node-babel-extension-pack) or [ITMCDev TypeScript Extension Pack](https://marketplace.visualstudio.com/items?itemName=itmcdev.node-typescript-extension-pack)
  - [Jetbrains WebStorm](https://www.jetbrains.com/webstorm/)
  - [Vim](https://www.vim.org/) with [neoclide/coc.nvim](https://github.com/neoclide/coc.nvim) and [HerringtonDarkholme/yats.vim](https://github.com/HerringtonDarkholme/yats.vim) extensions.
  - Any other IDE you trust.


### Testing

Run unit tests using `npm run test`.

Testing is currently set to use unittest.

#### Single Tests

Run single unit tests file, by calling `make test:single -- test/path/to/file.test.js`

```bash
make test:single -- test/path/to/index.test.js
```

### Deployment

Please check [release-it](https://www.npmjs.com/package/release-it) for making releases to [npmjs.com](https://www.npmjs.com/) or any other repository tool, then run:

```bash
npm run release
```

## Authors

* [Dragos Cirjan](mailto:dragos.cirjan@gmail.com) - Initial work

## Issues / Support

Add a set of links to the [issues](/templ-project/javascript/issues) page/website, so people can know where to add issues/bugs or ask for support.

## License

(If the package is public, add licence)
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

<!-- ## Changelog

Small changelog history. The rest should be added to [CHANGELOG.md](CHANGELOG.md).

See here a template for changelogs: https://keepachangelog.com/en/1.0.0/

Also see this tool for automatically generating them: https://www.npmjs.com/package/changelog -->

> Remove Everything above this line

<hr />














# Project Title

<!-- Set of shield/badges explaining where to find more information about the project (i.e. Where to look for unit test reports, where to see code coverage and code scans, etc.). You can find a lot of them on https://shields.io/) -->

<!-- CI Badges -->
<!-- [![TravisCI](https://travis-ci.org/templ-project/generic.svg?branch=master)](https://travis-ci.org/templ-project/generic) -->
<!-- [![CircleCI](https://circleci.com/gh/templ-project/generic.svg?style=shield)](https://circleci.com/gh/templ-project/generic) -->

<!-- Sonar Badges -->
<!-- [![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=templ-project_generic&metric=alert_status)](https://sonarcloud.io/dashboard?id=templ-project_generic)
[![SonarCloud Coverage](https://sonarcloud.io/api/project_badges/measure?project=templ-project_generic&metric=coverage)](https://sonarcloud.io/component_measures/metric/coverage/list?id=templ-project_generic)
[![SonarCloud Bugs](https://sonarcloud.io/api/project_badges/measure?project=templ-project_generic&metric=bugs)](https://sonarcloud.io/component_measures/metric/reliability_rating/list?id=templ-project_generic)
[![SonarCloud Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=templ-project_generic&metric=vulnerabilities)](https://sonarcloud.io/component_measures/metric/security_rating/list?id=templ-project_generic) -->

<!-- Donation Badges -->
<!-- [![Donate to this project using Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://patreon.com/dragoscirjan)
[![Donate to this project using Paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UMMN8JPLVAUR4&source=url)
[![Donate to this project using Flattr](https://img.shields.io/badge/flattr-donate-yellow.svg)](https://flattr.com/profile/balupton)
[![Donate to this project using Liberapay](https://img.shields.io/badge/liberapay-donate-yellow.svg)](https://liberapay.com/dragoscirjan)
[![Donate to this project using Thanks App](https://img.shields.io/badge/thanksapp-donate-yellow.svg)](https://givethanks.app/donate/npm/badges)
[![Donate to this project using Boost Lab](https://img.shields.io/badge/boostlab-donate-yellow.svg)](https://boost-lab.app/dragoscirjan/badges)
[![Donate to this project using Buy Me A Coffee](https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg)](https://buymeacoffee.com/balupton)
[![Donate to this project using Open Collective](https://img.shields.io/badge/open%20collective-donate-yellow.svg)](https://opencollective.com/dragoscirjan)
[![Donate to this project using Cryptocurrency](https://img.shields.io/badge/crypto-donate-yellow.svg)](https://dragoscirjan.me/crypto)
[![Donate to this project using Paypal](https://img.shields.io/badge/paypal-donate-yellow.svg)](https://dragoscirjan.me/paypal)
[![Buy an item on our wishlist for us](https://img.shields.io/badge/wishlist-donate-yellow.svg)](https://dragoscirjan.me/wishlist)
-->

One Paragraph of project description goes here

<!--
Insert Table of Contents Here
This can be done using [AlanWalk.markdown-toc](https://marketplace.visualstudio.com/items?itemName=AlanWalk.markdown-toc) plugin, 
which is also included in 
[itmcdev.generic-extension-pack](https://marketplace.visualstudio.com/items?itemName=itmcdev.generic-extension-pack) extension pack.
-->
<!-- TOC -->

- [Templ Javascript](#templ-javascript)
  - [Getting Started](#getting-started)
    - [Prerequisites / Dependencies](#prerequisites--dependencies)
        - [For Windows](#for-windows)
        - [For Linux/Unix/OSX](#for-linuxunixosx)
    - [Installation](#installation)
    - [Development](#development)
      - [Requirements](#requirements)
    - [Testing](#testing)
      - [Single Tests](#single-tests)
    - [Deployment](#deployment)
  - [Authors](#authors)
  - [Issues / Support](#issues--support)
  - [License](#license)
- [Project Title](#project-title)
  - [Getting Started](#getting-started-1)
    - [Prereqiusites / Dependencies](#prereqiusites--dependencies)
      - [For Windows](#for-windows-1)
      - [For Linux](#for-linux)
      - [Known Issues / Troubleshooting](#known-issues--troubleshooting)
    - [Installation](#installation-1)
      - [Say what the step will be](#say-what-the-step-will-be)
      - [And repeat](#and-repeat)
    - [Development](#development-1)
    - [Testing](#testing-1)
      - [Break down into (at least) unit tests](#break-down-into-at-least-unit-tests)
      - [and end to end tests](#and-end-to-end-tests)
      - [And coding style tests](#and-coding-style-tests)
    - [Deployment](#deployment-1)
  - [Authors](#authors-1)
  - [Issues / Support](#issues--support-1)
  - [License](#license-1)
  - [Changelog](#changelog)

<!-- /TOC -->

## Getting Started

### Prereqiusites / Dependencies

What things you need to install the software and how to install them (based on each OS type). 

#### For Windows
```bash
# Give Examples

npm install -g node-gyp windows-build-tools
# Warning: Please note windows-build-tools will install MSVS which takes a 
# LONG amount of time.
```

#### For Linux

```bash
# Give Examples

apt-get install build-essential mono
npm install -y node-gyp
```

#### Known Issues / Troubleshooting

Describe a list of known issues, and how to bypass them.

### Installation

A step by step series of examples that tell you how to get a development env running


#### Say what the step will be

```
Give the example
```

#### And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

### Development

Explain any development process for the project, if necesary

```
give examples
```

### Testing


Explain how to run the automated tests for this system

#### Break down into (at least) unit tests
Explain what these tests test and why

```
Give an example
```

#### and end to end tests
Explain what these tests test and why

```
Give an example
```

#### And coding style tests

Explain what these tests test and why

```
Give an example
```

### Deployment

Add additional notes about how to deploy this on a live system

## Authors
* [Dragos Cirjan](mailto:dragos.cirjan@gmail.com) - Initial work - [PurpleBooth](#link-to-change)

See also the list of contributors who participated in this project.

## Issues / Support

Add a set of links to the [issues](/templ-project/generic/issues) page/website, so people can know where to add issues/bugs or ask for support.

## License

(If the package is public, add licence)
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Changelog

Small changelog history. The rest should be added to [CHANGELOG.md](CHANGELOG.md).

See here a template for changelogs: https://keepachangelog.com/en/1.0.0/

Also see this tool for automatically generating them: https://www.npmjs.com/package/changelog
