<<<<<<< HEAD
var playlist= {name:"love"};



function updatePlaylist ( playlist,artistName,songTitle) {
  playlist[artistName] = songTitle;
   
return playlist;
}

function removeFromPlaylist(playlist,artistName) {
  delete playlist[artistName];
  return playlist;
}
=======
var playlist = {
  name: "amr",
  titles: 26
};
>>>>>>> b61de4705c41dd026582685fb7980509d7c9069b
