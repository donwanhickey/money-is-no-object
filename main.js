// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘


const isAdmin = function(userObj) {
if (userObj.userRole === "ADMIN") {
    return true;
 } else { 
      return false;
}
};


const getEmail = function(userObj) {
    return userObj.firstName[0].toLowerCase() + 
           userObj.lastName.toLowerCase() +
          '.prsvr@gmail.com';
    
   
};

const getPlaylistLength = function(getPlaylistObj) {
    const numberOfSongs = getPlaylistObj.songs.length;
    return numberOfSongs;
};

const getHardestHomework = function(homeworks) {
    if (homeworks.length === 0) {
        return '';

    }
     let lowestScore = homeworks[0].averageScore;
     let hardest = homeworks[0].name;
      
     for (let i = 1; i < homeworks.length; i++) {
        if (homeworks[i].averageScore < lowestScore) {
            lowestScore = homeworks[i].averageScore;
            hardest = homeworks[i].name;
        }
        }
        return hardest
     };

const createPhonebook = function(names, numbers) {
    const phonebook = {};

    for (let i = 0; i < names.length; i++) 
     phonebook[names[i]]  =  numbers[i];

           return phonebook;

   };


   
    
  




 





// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};