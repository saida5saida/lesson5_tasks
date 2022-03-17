// Sual 1 
const array = ['cup', 'plate', 'spoon', 'knife', 'fork']
let elements = ""
for (let i = 0; i<array.length; i++) {
elements +=array[i] + " ,"
}
console.log(elements)

// 2-ci versiya - 
const array2 = ['cup', 'plate', 'spoon', 'knife', 'fork']
for (let i = 0; i<array2.length; i++) {
  console.log(array2[i])
}

// Sual 2 
const array3 = ['pomidor', 'sogan', 'yerkoku', 'sarimsaq', 'semeni']
let terevez = ""
for(let i=0; i<array3.length; i++) {
  terevez = array3[i]
  if(terevez[0]==="s") {
    console.log(terevez)
  }
}


// Sual 3 
// 1-dən 100-ə kimi olan bütün ədədlərin toplamını ilə tapın 
let sum = 0
for (let i=1; i<101; i++) {
sum+=i
}
console.log(sum)

// Sual 4 alinmadi
// const array4 = ['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']
// // let icindekiler = ""
// // for (let i=0; i<array4.length; i++) {
// //   icindekiler = array4[i]
// //   if(icindekiler!==5) {
// //     continue
// //   }
// //   console.log(array4[i])
// // }


// Sual 5 
100000-dən aşağı doğru gedərək 9999-a bölünən ilk ədədi konsolda göstərin
for (let i=100000; i>0; i--) {
  if (i%9999===0) {
    console.log(i)
    break
  }
  }

// Sual 7 
const computer = {
  cpu: 'intel i5',
  ram: '8',
  gpu: 'NVIDIA',
}
for(let compMelumat in computer) {
  console.log(computer[compMelumat])
  console.log(`${compMelumat}`)
}




