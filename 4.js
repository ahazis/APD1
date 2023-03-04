
// let numbers = [1,2,3,4,5,5]

// for (let i = 0; i < numbers.length;i++) {
//    if (numbers[i] === 4) {
//        console.log(numbers[i])
//        console.log(i)
//        break
//    }	
// }

// let number = numbers.find(number =>  number === 1)
// console.log(number) //mecari number

// let numberIndex = numbers.findIndex(number =>  number === 6) //-1 jika tidak memenuhi
// console.log(numberIndex) //mecari index

// let persons = [
//    {
//        "name":"feri",	
//        "score":80,
//    },
//    {
//        "name":"susi",
//        "score":85,
//    },
//    {
//        "name":"joko",
//        "score":70,
//    },
//    {
//        "name":"sinta",
//        "score":82,
//    },
// ]

// for (let i = 0; i < persons.length; i++) {
//    if (persons[i].name === "susi") {
//        console.log(persons[i])
//        console.log(i)
//        break
//    }
// }

// let person = persons.find(person => person.name === "joko")
// console.log(person)
// let personIndex = persons.findIndex(person => person.name === "joko")
// console.log(personIndex)



// let nama = "Ferianto"

// console.log(nama.search("anto"))
// console.log(nama.includes("anto"))



// let ages = [3, 10, 18, 20]

// cek suatu array memenuhi kriteria atau tidak
// const haveAdult = ages.some(umur => umur > 4) //some (ada = true atau tidak = false)
// console.log(haveAdult)

// cek semua array memenuhi kriteria atau tidak
// const everyAges = ages.every(umur => umur > 2) // semua(every)
// console.log(everyAges)

// let persons = [
//    {
//        "name":"feri",
//        "score":80,
//    },
//    {
//        "name":"susi",
//        "score":85,
//    },
//    {
//        "name":"joko",
//        "score":70,
//    },
//    {
//        "name":"sinta",
//        "score":82,
//    },
// ]

// const haveLowScore = persons.some(person => person.score < 80)
// console.log(haveLowScore)

// const allHighScore = persons.every(person => person.score >= 80)
// console.log(allHighScore)


// let oldArr = [50, 60, 20, 30, 40, 100, 90]

// const newArrFilter = oldArr.filter(currentValue => currentValue > 40)
// console.log(newArrFilter)

// let persons = [
//    {
//        "name":"feri",
//        "score":80,
//    },
//    {
//        "name":"susi",
//        "score":85,
//    },
//    {
//        "name":"joko",
//        "score":70,
//    },
//    {
//        "name":"sinta",
//        "score":82,
//    },
//    {
//        "name":"budi",
//        "score":60,
//    },
// ]

// const highScorePersons = persons.filter(a => a.score > 70)
// console.table(highScorePersons)
// console.log(highScorePersons)



// let persons = [
//     {
//         "name":"Ferianto Surya Wijaya",
//         "score":80,
//     },
//     {
//         "name":"Susi",
//         "score":85,
//     },
//     {
//         "name":"Joko Wijaya",
//         "score":70,
//     },
//     {
//         "name":"Sinta",
//         "score":82,
//     },
//     {
//         "name":"Budi Wijaya",
//         "score":60,
//     },
//  ]
 
//  const mencariwijaya = persons.filter (person => person.name.includes("Wijaya"))
//  const kurang80 = mencariwijaya.find (person => person.score < 80)
//  const lebihsamadengan80 = mencariwijaya.every (person => person.score >= 80)
//  const kurangdari80 = mencariwijaya.some (person => person.score < 80)

//  console.table(mencariwijaya)
//  console.table(kurang80)
//  console.table(lebihsamadengan80)
//  console.log(kurangdari80)


// let persons = [
//     {
//         "name": "Ferianto Surya Wijaya",
//         "height": 185,
//         "gender": "male"
//     },
//     {
//         "name": "Susi",
//         "height": 170,
//         "gender": "female"
//     },
//     {
//         "name": "Dewi",
//         "height": 160,
//         "gender": "female"
//     },
//     {
//         "name": "Sinta",
//         "height": 150,
//         "gender": "female"
//     },
//     {
//         "name": "Joko",
//         "height": 140,
//         "gender": "male"
//     },
//  ]
 
// const cwtinggi150 = persons.filter (person => person.gender == ("female") && person.height > 150)
// const semua = cwtinggi150.every (person => person.height > 160)
// const beberapa = cwtinggi150.some (person => person.height <= 160)

// console.log(cwtinggi150)
// console.log(semua)
// console.log(beberapa)

// function likes(names) {
//     const length = names.length;
//     switch (length) {
//       case 0:
//         return 'no one likes this';
//       case 1:
//         return `${names[0]} likes this`;
//       case 2:
//         return `${names[0]} and ${names[1]} like this`;
//       case 3:
//         return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//       default:
//         return `${names[0]}, ${names[1]} and ${length - 2} others like this`;
//     }
//   }
  
//   console.log(likes([]));
//   console.log(likes(['Peter']));
//   console.log(likes(['Jacob', 'Alex']));
//   console.log(likes(['Max', 'John', 'Mark']));
//   console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));


  
function unitTest(input, output) {
    console.log(output, input === output);
    }
    
    function reverse(str) {
    // split str menjadi array kata
    const words = str.split(" ");
    
    // reverse array kata
    const reversedWords = words.reverse();
    
    // join array kata menjadi string dengan spasi sebagai penghubung antar kata
    const reversedStr = reversedWords.join(" ");
    
    // capitalize karakter pertama di string
    const capitalizedStr = reversedStr.charAt(0).toUpperCase() + reversedStr.slice(1);
    
    // tambahkan titik pada akhir kalimat
    const sentence = capitalizedStr + ".";
    
    // kembalikan kalimat yang telah dibalik
    return sentence;
    }
    
    unitTest(reverse("drow olleh"), "Hello word.");
    unitTest(reverse("eko atad"), "Data oke.");
    unitTest(reverse("gnitset tinu"), "Unit testing.");
    
    
    
    
  