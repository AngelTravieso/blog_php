"use strict"

// Variables
const year = new Date().getFullYear();

// Selectores
const yearSelector = document.querySelector(".year");

// Imprimir año actual en el footer
yearSelector.textContent = year;

