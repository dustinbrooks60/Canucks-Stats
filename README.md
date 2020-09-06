<!--
*** Thanks for checking out this README Template. If you have a suggestion that would
*** make this better, please fork the repo and create a pull request or simply open
*** an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
-->





<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Last Commit][last-commit-shield]][last-commit-url]
[![Commits][commit-shield]][commit-url]
[![Repo Size][repo-size-shield]][repo-size-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />

<p align="center">
  <a href="https://github.com/dustinbrooks60/Canucks-Stats">
    <img src="images/logo.png" alt="Logo" width="199" height="212">
  </a>

  <h3 align="center">Canucks Stats</h3>

  <p align="center">
    Retrieves live stats on Canucks games from the official NHL API.
    <br />
    <a href="https://github.com/dustinbrooks60/Canucks-Stats"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://dustinbrooks60.github.io/Canucks-Stats">View Demo</a>
    ·
    <a href="https://github.com/dustinbrooks60/Canucks-Stats/issues">Report Bug</a>
    ·
    <a href="https://github.com/dustinbrooks60/Canucks-Stats/issues">Request Feature</a>
  </p>

</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [Built With](#built-with)

* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



### Built With
* [React](https://reactjs.org)
* [Redux](https://redux.js.org)
* [Axios Library](https://github.com/axios/axios)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
```sh
npm install npm@latest -g
```

### Installation

2. Clone the repo
```sh
git clone https://github.com/dustinbrooks60/Canucks-Stats.git
```
2. Install NPM packages

```sh
npm install
```
<!-- USAGE EXAMPLES -->

## Usage

If you want live stats of a specific game, enter your API link in `fetchLiveGameAction.js`

```JS
const liveGameURL = 'ENTER YOUR API';
```

​	ex. 

```js
const liveGameURL = 'https://statsapi.web.nhl.com/api/v1/game/2019030234/feed/live';
```

Live game API links can be found by going to https://statsapi.web.nhl.com/api/v1/teams/23?expand=team.schedule.next and then clicking the nextGameSchedule -> dates -> 0 -> games -> 0 -> link

[![Live Stats Example][live-stats-example]](https://example.com)

_For more examples, please refer to the [Documentation](https://example.com)_



<!-- ROADMAP -->
## Roadmap

-Create some nice looking charts to show off the data. 

-Add Corsi stats.

See the [open issues](https://github.com/dustinbrooks60/Canucks-Stats/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->



<!-- CONTACT -->
## Contact

Dustin Brooks - dustinbrooks60@gmail.com - [@AmateurSketch_](https://twitter.com/AmateurSketch_)



Project Link: [https://github.com/dustinbrooks60/Canucks-Stats](https://github.com/dustinbrooks60/Canucks-Stats)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [NHL API Documentation](https://www.gitlab.com/dword4/nhlapi)
* [Hackernoon - NHL's Undocumented API](https://hackernoon.com/retrieving-hockey-stats-from-the-nhls-undocumented-api-zz3003wrw)
* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[last-commit-shield]: https://img.shields.io/github/last-commit/dustinbrooks60/Canucks-Stats.svg?style=flat-square
[last-commit-url]: https://github.com/dustinbrooks60/Canucks-Stats/graphs/contributors
[commit-shield]: https://img.shields.io/github/commit-activity/m/dustinbrooks60/Canucks-Stats
[commit-url]: https://github.com/dustinbrooks60/Canucks-Stats/commits
[repo-size-shield]: https://img.shields.io/github/repo-size/dustinbrooks60/Canucks-Stats
[repo-size-url]: https://github.com/dustinbrooks60/Canucks-Stats
[issues-shield]: https://img.shields.io/github/issues/dustinbrooks60/Canucks-Stats.svg?style=flat-square
[issues-url]: https://github.com/dustinbrooks60/Canucks-Stats/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/dustinbrooks60
[live-stats-example]: images/liveStatsExample.png

