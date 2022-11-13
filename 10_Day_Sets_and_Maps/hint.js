//set is a collection of elements 
//and set can only contains unqiue elements 


const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  const langSet = new Set(languages)
  console.log("In the form of set",langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
  console.log("set total size",langSet.size) // 4
  
  const counts = []
  
  for (const l of langSet) {
    const filteredLang = languages.filter((lng) => lng === l)
    console.log("filtered language",filteredLang) // ["English", "English", "English"]
    counts.push({ lang: l, count: filteredLang.length })
  }
  console.log("last o/p of counts",counts)




