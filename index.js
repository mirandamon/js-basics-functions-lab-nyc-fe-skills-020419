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

function distanceTravelledInFeet(block1, block2) {
  // 43, 48
  // 43 -> 11352
  // 48 -> 12672
  return Math.abs((block1 * feetPerBlock) - (block2 * feetPerBlock))
  return Math.abs(block2 - block1) * feetPerBlock
}

function calculatesFarePrice(start, destination) {
  let feetTraveled = distanceTravelledInFeet(start, destination)
  // 43, 44
  if (feetTraveled < 400) {
    return 0
  } else if (feetTraveled >= 400 && feetTraveled <= 2000) {
    return (feetTraveled - 400) * 0.02
  } else if (feetTraveled > 2000) {
    return 25
  }
}