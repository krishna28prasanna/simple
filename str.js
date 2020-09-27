function Str(str){
const arr = str.split(" ")
let str1 = ""
let myarr = []

for(let j=0;j<arr.length;j++){
    console.log(arr[j])
    for(let i=0;i<arr[j].length;i++){
        str1 = arr[j][i] + str1
        // console.log(arr[i])
        // temp = arr[j][i]
        // arr[j][i] = arr[j][arr[j].length-i-1]
        // arr[j][arr[j].length-i-1] = temp
    }
    myarr.push(str1)
    str1 = ""
}
return myarr.join(" ")

}
console.log(Str(
    "this is a test"))