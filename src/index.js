//Map function Using Numbers

const numbers = [1, 2, 3, 4, 5]

const newNumbers = numbers.map((num) => {
    return (num * num)
})

console.log(newNumbers) //[ 1, 4, 9, 16, 25 ]

//Map function Using Strings

const Names = ['naruto Uzumaki', 'sasuke Uchiha', 'sakura Haruno', 'kakashi Hatake']

const CapsNames = Names.map((names) => {
    return (names[0].toUpperCase() + names.slice(1))
})

console.log(CapsNames) //['Naruto Uzumaki','Sasuke Uchiha','Sakura Haruno','Kakashi Hatake']

//Map function incase of HTML

const Strings = ['Hello Every One', 'Good Morning', 'Good Afternoon', 'Good Evening', 'Good Night']

const NewString = Strings.map((item) => {
    return `<p>${item}</p>`
})

console.log(NewString)

/*[
  '<p>Hello Every One</p>',
  '<p>Good Morning</p>',
  '<p>Good Afternoon</p>',
  '<p>Good Evening</p>',
  '<p>Good Night</p>'
]*/