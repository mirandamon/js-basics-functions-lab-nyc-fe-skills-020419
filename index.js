const headquartersBlock = 42
const feetPerBlock = 264

// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  return Math.abs(block - headquartersBlock)
}

function distanceFromHqInFeet(block) {
  // return Math.abs(block - headquartersBlock) * feetPerBlock
  return distanceFromHqInBlocks(block) * feetPerBlock
}

function distanceTravelledInFeet() {
  
}