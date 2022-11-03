// Copyright (c) 2022 Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: OCT 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-03-JS/sw.js", {
    scope: "/ICS2O-Unit3-03-JS/",
  })
}

// calculate volume of sphere

function submit() {
  // input
  const sphereRadius = parseFloat(
    document.getElementById("sphere-radius").value
  )

  // process
  const sphereVolume = (4 / 3) * sphereRadius ** 3 * Math.PI

  // output
  document.getElementById("sphereVolume").innerHTML =
    "Volume of the sphere is: " + sphereVolume.toFixed(2) + "cm³"
}
