var fred = ['fred', "flinstone", "fred@gmail.com", 50]


//console.log('length = ', fred.length);


// for (var i in fred) {  .. alternatively use this...


// for (var i = 0; i < fred.length; i++) {
//     console.log(i);
//     console.log(fred[i]);
// }

for (var i in fred) {
    if (i == 0)
        console.log('Firsttt name:', fred[i])
    else if (i == 1)
        console.log("Lastttt name:", fred[i])
    else if (i == 2)
        console.log("Emailll:", fred[i])
    else // i == 3
        console.log('Ageee: ', fred[i])
}

// hey, the results is instantanous on brower, auto refresh, i dont even hv to re-load page
