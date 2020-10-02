// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

//switch the English options title to Chinese job title
function professionsToCHT(options) {
  switch (options) {
    case 'engineer':
      return '工程師';
    case 'designer':
      return '設計師';
    case 'entrepreneur':
      return '創業家';
  }
}

// define generatePassword function
function generateTrashTalk(options) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']

  if (!options) {
    return '請選擇一個對像說幹話！！！'
  }

  // create a collection to store things user picked up
  let Collection = []

  for (let [key, value] of Object.entries(task)) {
    if (options === key) {
      Collection = Collection.concat(value)
    }
  }

  return "身為一個" + professionsToCHT(options) + sample(Collection) + sample(phrase)
}

// export generatePassword function for other files to use
module.exports = generateTrashTalk