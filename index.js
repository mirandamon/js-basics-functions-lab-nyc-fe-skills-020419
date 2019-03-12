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
  // 43, 44
  if (distanceTravelledInFeet(start, destination) < 400) {
    return 0
  }
}