let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "Night Changes",
     path: "assets/audio/night-changes.weba",
     img: "images/thumbnail/night-changes.jpg",
     singer: "One Direction"
   },
   {
     name: "Kiss You",
     path: "assets/audio/kiss-you.weba",
     img: "images/thumbnail/kiss-you.jpg",
     singer: "One Direction"
   },
   {
     name: "Story of My Life",
     path: "assets/audio/story-of-my-life.weba",
     img: "images/thumbnail/story-of-my-life.jpg",
     singer: "One Direction"
   },
   {
     name: "What Makes Beautiful",
     path: "assets/audio/what-makes-you-beautiful.weba",
     img: "images/thumbnail/what-makes-you-beautiful.jpg",
     singer: "One Direction"
   },
   {
     name: "Live While Young",
     path: "assets/audio/live-while-we're-young.weba",
     img: "images/thumbnail/live-while-we're-young.jpg",
     singer: "One Direction"
   },
   {
     name: "One Way Another",
     path: "assets/audio/one-way-or-another.weba",
     img: "images/thumbnail/one-way-or-another.png",
     singer: "One Direction"
   },
   {
     name: "Stockholm Syndrome",
     path: "assets/audio/stockholm-syndrome.weba",
     img: "images/thumbnail/stockholm-syndrome.jpg",
     singer: "One Direction"
   },
   {
     name: "Steal My Girl",
     path: "assets/audio/steal-my-girl.weba",
     img: "images/thumbnail/steal-my-girl.jpg",
     singer: "One Direction"
   },
   {
     name: "You & I",
     path: "assets/audio/you-and-i.weba",
     img: "images/thumbnail/you-and-i.jpg",
     singer: "One Direction"
   },
   {
     name: "Drag Me Down",
     path: "assets/audio/drag-me-down.weba",
     img: "images/thumbnail/drag-me-down.jpg",
     singer: "One Direction"
   },
   {
     name: "One Thing",
     path: "assets/audio/ond-thing.weba",
     img: "images/thumbnail/one-thing.jpg",
     singer: "One Direction"
   },
   {
     name: "Magic",
     path: "assets/audio/magic.weba",
     img: "images/thumbnail/magic.jpg",
     singer: "One Direction"
   },
   {
     name: "They Don't Know Us",
     path: "assets/audio/they-don't-know-about-us.weba",
     img: "images/thumbnail/they-don't-know-about-us.jpg",
     singer: "One Direction"
   },
   {
     name: "Little Things",
     path: "assets/audio/little-things.weba",
     img: "images/thumbnail/little-things.jpg",
     singer: "One Direction"
   },
   {
     name: "Best Song Ever",
     path: "assets/audio/best-song-ever.weba",
     img: "images/thumbnail/best-song-ever.jpg",
     singer: "One Direction"
   },
   {
     name: "Perfect",
     path: "assets/audio/perfect.weba",
     img: "images/thumbnail/perfect.jpg",
     singer: "One Direction"
   },
   {
     name: "No Control",
     path: "assets/audio/no-control.weba",
     img: "images/thumbnail/no-control.jpg",
     singer: "One Direction"
   },
   {
     name: "18",
     path: "assets/audio/18.weba",
     img: "images/thumbnail/18.jpg",
     singer: "One Direction"
   },
   {
     name: "History",
     path: "assets/audio/history.weba",
     img: "images/thumbnail/history.jpg",
     singer: "One Direction"
   },
   {
     name: "If I Could Fly",
     path: "assets/audio/if-i-could-fly.weba",
     img: "images/thumbnail/if-i-could-fly.jpg",
     singer: "One Direction"
   },
   {
     name: "Walking in Wind",
     path: "assets/audio/walking-in-the-wind.weba",
     img: "images/thumbnail/walking-in-the-wind.jpg",
     singer: "One Direction"
   },
   {
     name: "Happily",
     path: "assets/audio/happily.weba",
     img: "images/thumbnail/happily.jpg",
     singer: "One Direction"
   },
   {
     name: "Gotta Be You",
     path: "assets/audio/gotta-be-you.weba",
     img: "images/thumbnail/gotta-be-you.jpg",
     singer: "One Direction"
   },
   {
     name: "Last First Kiss",
     path: "assets/audio/last-first-kiss.weba",
     img: "images/thumbnail/last-first-kiss.jpg",
     singer: "One Direction"
   },
   {
     name: "Through The Dark",
     path: "assets/audio/through-the-dark.weba",
     img: "images/thumbnail/through-the-dark.jpg",
     singer: "One Direction"
   },
   {
     name: "I Would",
     path: "assets/audio/i-would.weba",
     img: "images/thumbnail/i-would.jpg",
     singer: "One Direction"
   },
   {
     name: "Where Broken Hearts Go",
     path: "assets/audio/where-do-broken-hearts-go.weba",
     img: "images/thumbnail/where-do-broken-hearts-go.jpg",
     singer: "One Direction"
   },
   {
     name: "Better Than Words",
     path: "assets/audio/better-than-words.weba",
     img: "images/thumbnail/better-than-words.jpg",
     singer: "One Direction"
   },
   {
     name: "Ready To Run",
     path: "assets/audio/ready-to-run.weba",
     img: "images/thumbnail/ready-to-run.jpg",
     singer: "One Direction"
   },
   {
     name: "Over Again",
     path: "assets/audio/over-again.weba",
     img: "images/thumbnail/over-again.jpg",
     singer: "One Direction"
   },
   {
     name: "Love You Goodbye",
     path: "assets/audio/love-you-goodbye.weba",
     img: "images/thumbnail/love-you-goodbye.jpg",
     singer: "One Direction"
   },
   {
     name: "Olivia",
     path: "assets/audio/olivia.weba",
     img: "images/thumbnail/olivia.jpg",
     singer: "One Direction"
   },
];

// All functions

// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#22bf54";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }