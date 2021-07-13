<p align="center">
 <img src="./assets/rental_api_cover.png" alt="Project logo">
</p>

<h3 align="center">rentals-api</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
![Issues](https://img.shields.io/github/issues/jessicacastro/rentals-api)
![Forks](https://img.shields.io/github/forks/jessicacastro/rentals-api)
![Stars](https://img.shields.io/github/stars/jessicacastro/rentals-api)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)
![Top Language](https://img.shields.io/github/languages/top/jessicacastro/rentals-api)
![Last Commit](https://img.shields.io/github/last-commit/jessicacastro/rentals-api)
![Tweet](https://img.shields.io/twitter/url?url=https%3A%2F%2Fgithub.com%2Fjessicacastro%2Frentals-api)
</div>

---

<p align="center">
  Keep track of your car rental in a simple way.
  <br>
</p>


#### Legends
**RF** => Functional Requirements

**RNF** => Non-Functional Requirements

**RN** => Business Rules

## Car Registration

**RF**

1. Must be possible to register a car.

**RN**

1. Must not be possible to register a car with an existing license plate.
2. Must not be possible to change the license plate of an already registered car.
3. The car must be registered as "available" by default.
4. Must not be possible to register a car without an admin user.

## Car Listing

**RF**
1. Must be possible to list all the available cars.

**RN**
