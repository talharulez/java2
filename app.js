// assignment # 17-20 task 1

// var Arr=[[],[],[]];
// console.log(Arr)

// assignment # 17-20 task 2

// var arr =["0123"]
// console.log(arr)

// var arr1 =["1012"]
// console.log(arr1)

// var arr2 = ["1012"]
// console.log(arr2)


// assignment # 17-20 task 3

// for (var i = 1; i<=10 ; i++){
//     console.log(i)



// }

// assignment # 17-20 task 4



        
// var num=+prompt("Enter any number");
// var num2=+prompt("Give length");
// for(var i=1;i<=num2;i++){
//     document.write(num+"x"+i+"="+num*i+"<br>");
// }


// assignment # 17-20 task 5


// var  fruits = ["apple", "banana", "mango", "orange","strawberry"]
// for (var i = 0; i < fruits.length; i++) {
// 	document.write(fruits[i] + "<br>");
// }


// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(var i=0;i<fruits.length;i++){
//     document.write("Element of index " + " " + i + fruits[i] + "<br>");  
// }

// assignment # 17-20 task 6 a

// for (var i = 1; i <= 15 ; i++){
//     document.write((i) +  "<br>");
// }

// assignment # 17-20 task 6 b

// for (var i =10; i >=0 ; i--){
//     document.write((i) +  "<br>");
// }
// assignment # 17-20 task 6 c

// for (i=0; i<=20; i= i+2){
   
//     document.write( (i) +  "<br>")
// }

// assignment # 17-20 task 6 d
// for(var i=1; i<=20; i++){
//     if((i % 2) != 0){
//         document.write([i] + "<br>")
//     }
// }

// assignment # 17-20 task 6 e
// for (i=0; i<=20; i= i+2){
   
//     document.write( (i) +  "k" + "<br>")
// }



// assignment # 17-20 task 7

// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var b = prompt("Enter item to search");
// var flag = true

// for(var i=0; i<a.length; i++){
//     if(b == a[i]){
//         flag = false
//         document.write(a[i] +" "+ "is avaliable at index"+" " + i)
//     }
// }

// if (flag){
//     document.write("we are sorry"+" " +b+ " " + "is not avaliable in our bakery")
// }
// assignment # 17-20 task 8

// var array = [24 , 53, 78, 91, 12];
// var largest= 0;

// for (i=0; i<=largest;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }

// document.write(largest);




// console.log("the largest number is " + largest);

// assignment # 17-20 task 9

// var arr = [24,53 , 78, 91 ,12];
// var smallest= 0;

// for (i=0; i>=smallest;i++){
//     if (arr<smallest) {
//         var smallest=arr[i];
//     }
// }
// assignment # 17-20 task 10
// for(var i=1; i<=100; i++){
//     if((i % 5) == 0){
//        console.log(i  )
//     }
// }


// =====================================================================================================
// assignment # 21-25 task1

// var firstName = prompt("enter firstName")
// var lastName= prompt("enter lastName")

// var fullName = firstName +  lastName 
// console.log(fullName +  " " +  'welcome' )

// assignment # 21-25 task2

// var userInput = prompt ("enter your mobile model")

// document.write(userInput.length)


// assignment # 21-25 task3


// var a ="pakistan"
// var b = a.indexOf ("n") 
// document.write(b)


// assignment # 21-25 task4

// var a ="Hello World"
//  var b = a.lastIndexOf ("l") 
//  document.write(b)

// assignment # 21-25 task5

// var a = "pakistani"

//  var b = a.charAt (3) 
//   document.write(b)

// assignment # 21-25 task6


// var a = "q1" 
// var b = a.repeat(4)
// console.log(b)


// assignment # 21-25 task7

// var a = "islamabad"

// for (var i=0; i<Text.length ; i++ ){
//     if (Text.slice(i , i+6 ) === "hyder")
//     text = text.slice(0, 1) + "hyder" + text.slice(i + 6);
// }

// document.write(a)

// assignment # 21-25 task8



//  var a = "Ali and Sami are best friends. They play cricket and football together."
//  for( var i = 0 ; i <a.length ; i ++){
//      if(a.slice(i,i+3) === "and"){
//         a = a.slice(0,i) + "&" +a.slice(i+3);
//     }
//  }

//  document.write(a)
// assignment # 21-25 task9

// var a = "472"

// var b = parseInt(a)
// document.write(a)

// assignment # 21-25 task10





// var cap = prompt ( "Enter a letter" ); 
// document . write ( cap . toUpperCase ());

// assignment # 21-25 task11


// var a = prompt("enter your name")

// document.write("user input: " + a + "<br>")
// document.write("Title case: " + a[0].toUpperCase() + a.slice(1).toLowerCase())


// assignment # 21-25 task12

// var d = "35.36";
// var s = d + '';
// s =s.replace('.', '');
// s = parseInt(s);
// document.write("Number: "+ d + "<br>" + "Result: " + s )

// assignment # 21-25 task13


// var str = prompt("Enter your password");
// var numChars = str.length;
// var flag = true
// for (var i = 0; i < numChars; i++) {
// if (str.slice(i, i + 1) == "!" || str.slice(i, i + 1) == "@" || str.slice(i, i + 1) == "," || str.slice(i, i + 1) == ".")  {
//     var flag = false

// document.write("your password should not contail !,@,,,.")
// break;
// }
// }

// if(flag){
//     document.write("correct password has been enter");
// }


// assignment # 21-25 task14

// var a = prompt("enter your fav cookie")
// var arr = ["Cake", "Apple pie", "Cookie"," Chips", "Patties"]
// var flag = true

// var firstletter = a.slice(0,1)
// firstletter = firstletter.toUpperCase()
// var otherletter = a.slice(1)
// otherletter = otherletter.toLowerCase()

// var fullletter = firstletter + otherletter

// for(i=0; i<arr.length; i++){
// if(fullletter === arr[i]){
//     flag = false
//     document.write(fullletter +" "+ "is avaliable at index " + i + " in our bakery")
// }
// }
// if(flag){
//     document.write("We are sorry " + fullletter + " is not avaliable in out bakery")
// }

// assignment # 21-25 task16

// var university = "University of Karachi";
// var b = university.split("")
// for (i=0; i<b.length ; i++)
// {document.write(b[i] + "<br>")}


// assignment # 21-25 task17

// var a = prompt("enter your country name")

// var b = a.charAt(a.length -1)
// document.write("User input: " + a + "<br>")
// document.write("Last character of input: " + b)

// Q.18

// var a =  "The quick brown fox jumps over the la

// assignment # 21-25 task18

// var a =  "The quick brown fox jumps over the lazy dog";
// var b = a.match(/the|The/g  || []).length;
// document.write("Text: The quick brown fox jumps over the lazy dog " + "<br>")
// document.write("there are "+b+"  occurrence(s) of words 'the'" );
