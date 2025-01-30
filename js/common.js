const canvas = document.querySelector(".canvas");
const conText = canvas.getContext("2d");
conText.fillStyle = "white";
conText.fillRect(10, 10, 50, 50);

const button = document.querySelector(".button");

const click = (el) => {
    el.textContent = "A person devoid of ambition is a fool.";
    el.classList.toggle("test");
};

const greeting = (timeEl, nameEl) => {
    let greetingEl;
    if (timeEl === "朝") {
        greetingEl = "おはよう";
    } else if (time === "昼") {
        greetingEl = "こんにちは";
    } else if (time === "夜") {
        greetingEl = "こんばんは";
    }
    return console.log(`${greetingEl}! ${nameEl}ちゃん`);
};

const asa = "朝";
const namae = "おにぎり";

greeting(asa, namae);

// class basset{

// }

// const click = (el,object) => {
//     el.classList.toggle(object);
// }

// const count = 0;

// const counter = (el) =>{
//     el += 1;

//     console.log(el);

//     if(el >= 10){
//         el = 0;

//         console.log('!count is dangerously high!');

//     }
// }



let count = 0;

const counter = (count) => {
    count += 1;

    console.log(count);

    if (count >= 10) {
        count = 0;

        console.log("!count is dangerously high!");
    }

    return count;
};

count = counter(count);

const clickText = document.querySelector(".js_text");
const clickText02 = document.querySelector(".js_text02");

button.addEventListener("click", function () {
    click(clickText);
    click(clickText02);

});



const textArray = [{
    reply: '(弱虫モンブランが流れる)消す方法なんてねえよ',
    post: 'お前を消す方法'
},{
    reply: 'おやすみ！もう二度と来ないでね！',
    post: 'おはよう'
},{
    reply: 'ゲームやろうぜ！極周回しよ！',
    post: 'こんばんは'
},{
    reply: 'ラーメン食べに行こ！',
    post: 'こんにちは'
},{
    reply: 'ジョーズしか勝たん。でもシャークネード見た後にジョーズ見ると薄味に感じる',
    post:'サメ映画'
},];

const btnPost = document.querySelector('.yesinfo');


console.log(btnPost);


btnPost.addEventListener('click', () => {


    console.log('1');


    const postText = document.getElementById('input');
    console.log(postText.textContent);


    for (let i = 0; i < textArray.length; i++) {


        if (textArray[i].post == postText.textContent) {

            postText.textContent = textArray[i].reply;

        } /* else  {

            postText.textContent = 'ハハッ 何言ってるか全然判んねｗ';

        } */

    }



})


// function myFunction(event, element) {
//     alert('Element value: ' + element.value + ', Event type: ' + event.type);
// }

const clickInput = (element) => {
    if (element.value === 'Click Me') {

        console.log('click me');

    } else if (element.value === 'on Me') {

        console.log('on Me');

    } else if (element.value === 'nemui...') {

        console.log('okiteru');

    }
}

// document.querySelector(".date").textContent = new Date();
// Hero text animations
// const tl = gsap.timeline();

// tl.from("#hero-logo", {
//     scale: 0,
//     duration: 0.6,
// })
//     .from("#tagline-text", {
//         text: "",
//         duration: 1,
//     })
//     .from("#date-text", {
//         text: "",
//         duration: 1,
//     });

// const sectionTitles = gsap.utils.toArray(".titleBox");

// sectionTitles.forEach((sectionTitle) => {
//     const tl_Gallery = gsap.timeline({
//         scrollTrigger: {
//             trigger: sectionTitle,
//             start: "top 70%",
//             end: "+=400",
//         },
//     });

//     const q = gsap.utils.selector(sectionTitle);
//     const groups = q(".code");

//     groups.forEach((group) => {
//         tl_Gallery.from(group, { text: textJumble(10), duration: 0.4 }, ">");
//     });

// });



// const as_Gallery = gsap.timeline({
//     scrollTrigger: {
//         trigger: triggerSec,
//         start: "top 80%",
//         end: "+=400",
//     }
// });

// const test_Gallery = (el) => gsap.timeline({
//     scrollTrigger: {
//         trigger: el,
//         start: "top 80%",
//         end: "+=400",
//     }
// });



function twoDigit(num) {
    let ret;
    if (num < 10) ret = "0" + num;
    else ret = num;
    return ret;
}

function threeDigit(num) {
    let ret;
    if (num < 100) ret = "0" + num;
    else ret = num;
    return ret;
}

function showClock() {
    let nowTime = new Date();
    let nowYear = nowTime.getFullYear();
    let nowMonth = twoDigit(nowTime.getMonth() + 1);
    let nowDate = twoDigit(nowTime.getDate());
    let nowHour = twoDigit(nowTime.getHours());
    let nowMin = twoDigit(nowTime.getMinutes());
    let nowSec = twoDigit(nowTime.getSeconds());
    let nowMSec = threeDigit(nowTime.getMilliseconds());
    let msg = `${nowYear}:${nowMonth}:${nowDate}:${nowHour}:${nowMin}:${nowSec}:${nowMSec}`;
    document.getElementById("realtime").innerHTML = msg;
}
setInterval("showClock()", 1);

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "vertical",
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});


const triggerSec = document.querySelectorAll(".triggerBox");

const cont07 = document.getElementById("cont07");

const test = document.querySelector(".test");

const test_Gallery = (el) => {
    return gsap.timeline({
        scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "+=400",
        },
    });
};

const asGroups = document.getElementById("cont01");

triggerSec.forEach(sec => {

    const textContent = sec.textContent;

    const triggerLength = textContent.length;

    console.log(triggerLength);


    console.log(triggerSec);

    test_Gallery(asGroups).from(
        sec,
        { text: textJumble(triggerLength), duration: 2 },
        ">"
    );

    test_Gallery(test).from(test, { text: textJumble(300), duration: 2 });

    test_Gallery(test).from(test, { text: textJumble(15), duration: 2 });


});





console.log("hello");

const words = [
    "hello",
    "elite",
    "light",
    "exuberant",
    "destruction",
    "present",
];

// 数値の配列
const numbers = [10, 20, 30, 40, 50];

// 文字列の配列
const strings = ["apple", "banana", "cherry", "date", "elderberry"];

// ブール値の配列
const booleans = [true, false, true, false, true];

// 混合データ型の配列
const mixed = [42, "hello", true, null, { name: "John" }];

// オブジェクトの配列
const objects = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

// 配列の配列 (多次元配列)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// 空の配列
const emptyArray = [];

// ランダムな数値で埋められた配列
const randomNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));

// アルファベットの配列
const alphabet = Array.from("abcdefghijklmnopqrstuvwxyz");

// 1から10までの数値を生成
const range = Array.from({ length: 10 }, (_, i) => i + 1);

console.log("Numbers:", numbers);
console.log("Strings:", strings);
console.log("Booleans:", booleans);
console.log("Mixed:", mixed);
console.log("Objects:", objects);
console.log("Matrix:", matrix);
console.log("Empty Array:", emptyArray);
console.log("Random Numbers:", randomNumbers);
console.log("Alphabet:", alphabet);
console.log("Range:", range);


const result = (els) => {
    return els.filter((el) => el.length > 6);
};

console.log(result(words));
console.log(result(numbers));
console.log(result(strings));



const element = document.getElementById("headerMenu");
const style = window.getComputedStyle(element);

const fontFamily = style.getPropertyValue("font-family");

console.log(style);

console.log(fontFamily);

//youtube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var ytPlayer;
let firstVideo;
let firstText;

const videos = [
    {
        id: 'Bd2LThO0PcQ',
        title: 'GHOST IN THE SHELL'
    }, {
        id: 'MM8RufZr5lw',
        title: 'SERIAL EXPERIMENTS LAIN'
    }, {
        id: 'KhciEq8JvAs',
        title: 'MEMENTO MORI',
        style: { color: '#00bbfa' }
    }
];


const randomIndex = Math.floor(Math.random() * videos.length);
firstVideo = videos[randomIndex].id;
animals.textContent = videos[randomIndex].title;

Object.assign(animals.style, videos[randomIndex].style);



// if (Math.random() < 0.5) {
//     firstVideo = 'Bd2LThO0PcQ';
//     animals.textContent = 'GHOST IN THE SHELL';
// } else {
//     firstVideo = 'MM8RufZr5lw';
//     animals.textContent = 'SERIAL EXPERIMENTS LAIN';
// }  {
//     firstVideo = 'KhciEq8JvAs';
//     animals.textContent = 'MEMENTO MORI';
// }

var ytData = [
    {
        id: 'LDU_Txk06tM'
    }, {
        id: '1v0hP5DuAZ8'
    }, {
        id: 'lX44CAz-JhU'
    }, {
        id: 'dvWGLcdI8o8'
    }
];
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('video', {//動画を表示させたいIDを指定
        videoId: /* ytData[0]['id'] */firstVideo,//動画のアドレスの指定
        playerVars: {
            playsinline: 1,// インライン再生を行う
            autoplay: 1,//自動再生を行う
            fs: 0,//全画面表示ボタンを表示しない    
            rel: 0,// 再生中の動画と同じチャンネルの関連動画を表示
            controls: 0,// プレーヤー コントロールを表示しない
            loop: 1,
            modestbranding: 0, // YouTubeロゴの非表示
            iv_load_policy: 3, // アノテーションの非表示
            start: 0,//50秒後から動画がスタート

        },
        events: {//　イベント
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}



//ミュートにしてから再生する設定
function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();

}
const btn = document.querySelectorAll('.btn');

const crab = document.getElementById('crab');
const shark = document.getElementById('shark');
const wolf = document.getElementById('wolf');
const goat = document.getElementById('goat');

let videoId;

const maskVideo = document.getElementById('youtube-mask');

const changeVideo = (ytPlayer, videoId) => {
    ytPlayer.loadVideoById(videoId);
}

btn.forEach(function (element) {

    element.addEventListener('click', function () {

        videoId = this.getAttribute('data-video-id');

        if (element.id === 'crab') {
            // animals.classList.add('crab');
            animals.textContent = 'CRAB PARTY!!!!';
            maskVideo.classList.add('crab');
            animals.classList.add('crabH1');
        } else if (element.id === 'shark') {
            // animals.classList.add('crab');
            animals.textContent = 'SMILE YOU SON OF A B***H';
            maskVideo.classList.add('shark');
        } else if (element.id === 'wolf') {
            // animals.classList.add('crab');
            animals.textContent = 'WOLF IS SO COOL…';
        } else if (element.id === 'goat') {
            // animals.classList.add('crab');
            animals.textContent = 'BAAAAA!!!!';
        }

        changeVideo(ytPlayer, videoId);
    })
});

// for(i = 0; i < btn.length; i++ ){
//     btn[i].addEventListener('click',(){

//     })
// }

// btn.addEventListener

// function animalsChange(){
//     let animals = document.getElementById('animals');

//     if (animals.classList.contains('shark')) {
//         animals.classList.remove('shark');
//         if (animals.classList.contains('crab')) {
//             animals.textContent = 'CRAB PARTY!!!!';
//         } else if (animals.classList.contains('wolf')) {
//             animals.textContent = 'WOLF IS SO COOL…';
//         }
//     } else if (animals.classList.contains('wolf')) {
//         animals.classList.remove('wolf');
//         if (animals.classList.contains('crab')) {
//             animals.textContent = 'CRAB PARTY!!!!';
//         } else if (animals.classList.contains('wolf')) {
//             animals.textContent = 'WOLF IS SO COOL…';
//         }
//     }
// }


// btn.addEventListener('click', function () {
//     if (btn.id === 'crab') {
//         animals.classList.add('crab');
//     }
// });


if (animals.classList.contains('crab')) {
    animals.textContent = 'CRAB PARTY!!!!';
}



//ループ設定
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED) {
        event.target.playVideo();
    }
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
// var done = false;
// function onPlayerStateChange(event) {
//     if (event.data == YT.PlayerState.PLAYING && !done) {
//         setTimeout(stopVideo, 6000);
//         done = true;
//     }
// }
// function stopVideo() {
//     player.stopVideo();
// }

// const mainVtext = document.querySelector('.mainVisualText');
// const topValue = window.getComputedStyle(mainVtext).getPropertyValue('top');

// mainVtext.style.top = topValue;

// console.log(mainVtext);

// for(let i = 0; i < 100; i++){
//     // if(i % 2 === 0 && i & 5 === 0){
//     //     console.log(i);
//     // }

//     // if(i % 3  === 0 && i % 5 === 0){
//     //     console.log(i);
//     // }

//     if(i % 3 === 0 && i % 5 === 0){

//         console.log('FizzBuzz');

//     }else if(i % 3 === 0){

//         console.log('Fizz');

//     }else if(i % 5 === 0){

//         console.log('Buzz');

//     }else{

//         console.log(i);

//     }

// }

// const active = (el) =>{
//     gsap.timeline({
//         scrollTrigger:{
//             trigger: el,
//             start: "top 80%",
//             end: "+=400",
//         }
//     })
// }

// test_Gallery.from(asGroups, { text: textJumble(50), duration: 1 }, ">");

console.log("after");

// test_Gallery.from(test,{ text:textJumble(15),duration: 2,repeat: -1});

// asGroups.forEach((atItem) => {
//     as_Gallery.from(atItem, { text: textJumble(10), duration: 0.4 }, ">");
// });

function textJumble(length) {
    let result = "";
    const characters = `!"£$%^&*()SYSTEM_+{}:@<>?,./;'[]¬¦#~ERROR`;
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

// looking for a non-scrubbing version? https://codepen.io/GreenSock/pen/QWYdgjG

// let frameCount = 147,
//     urls = new Array(frameCount)
//         .fill()
//         .map(
//             (o, i) =>
//                 `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${(
//                     i + 1
//                 )
//                     .toString()
//                     .padStart(4, "0")}.jpg`
//         );

// imageSequence({
//     urls, // Array of image URLs
//     canvas: "#image-sequence", // <canvas> object to draw images to
//     //clear: true, // only necessary if your images contain transparency
//     //onUpdate: (index, image) => console.log("drew image index", index, ", image:", image),
//     scrollTrigger: {
//         start: 0, // start at the very top
//         end: "+=400", // entire page
//         scrub: true, // important!
//     },
// });

/*
Helper function that handles scrubbing through a sequence of images, drawing the appropriate one to the provided canvas.
Config object properties:
- urls [Array]: an Array of image URLs
- canvas [Canvas]: the <canvas> object to draw to
- scrollTrigger [Object]: an optional ScrollTrigger configuration object like {trigger: "#trigger", start: "top top", end: "+=1000", scrub: true, pin: true}
- clear [Boolean]: if true, it'll clear out the canvas before drawing each frame (useful if your images contain transparency)
- paused [Boolean]: true if you'd like the returned animation to be paused initially (this isn't necessary if you're passing in a ScrollTrigger that's scrubbed, but it is helpful if you just want a normal playback animation)
- fps [Number]: optional frames per second - this determines the duration of the returned animation. This doesn't matter if you're using a scrubbed ScrollTrigger. Defaults to 30fps.
- onUpdate [Function]: optional callback for when the Tween updates (probably not used very often). It'll pass two parameters: 1) the index of the image (zero-based), and 2) the Image that was drawn to the canvas

Returns a Tween instance
*/
// function imageSequence(config) {
//     let playhead = { frame: 0 },
//         canvas =
//             gsap.utils.toArray(config.canvas)[0] ||
//             console.warn("canvas not defined"),
//         ctx = canvas.getContext("2d"),
//         curFrame = -1,
//         onUpdate = config.onUpdate,
//         images,
//         updateImage = function () {
//             let frame = Math.round(playhead.frame);
//             if (frame !== curFrame) {
//                 // only draw if necessary
//                 config.clear && ctx.clearRect(0, 0, canvas.width, canvas.height);
//                 ctx.drawImage(images[Math.round(playhead.frame)], 0, 0);
//                 curFrame = frame;
//                 onUpdate && onUpdate.call(this, frame, images[frame]);
//             }
//         };
//     images = config.urls.map((url, i) => {
//         let img = new Image();
//         img.src = url;
//         i || (img.onload = updateImage);
//         return img;
//     });
//     return gsap.to(playhead, {
//         frame: images.length - 1,
//         ease: "none",
//         onUpdate: updateImage,
//         duration: images.length / (config.fps || 30),
//         paused: !!config.paused,
//         scrollTrigger: config.scrollTrigger,
//     });
// }

const modal = document.querySelectorAll('.js-modal'); // layer要素に付与したjs-modalクラスを取得し変数に格納
const modalButton = document.querySelectorAll('.js-modal-button'); // button要素に付与したjs-modal-buttonクラスを取得し、変数に格納


console.log(modalButton);


const modalClose = document.querySelectorAll('.js-close-button');// xボタンのjs-close-buttonを取得し変数に格納


console.log(modal);

console.log(modalButton);



let modalId;

modalButton.forEach(function (btn) {
    btn.addEventListener('click', function () {

        modalId = this.getAttribute('data-id');

        for (let i = 0; i < modal.length; i++) {

            if (modal[i].id === modalId) {
                modal[i].classList.add('is-open');
            }

        }

    })
});
// modalButton.forEach(btn => {
//     btn.addEventListener('click',() => {

//         // modal.forEach(element => {
//         //     element.classList.remove('is-open');
//         // });

//         modalId = this.getAttribute('data-id');


//         for (let i = 0; i < modal.length; i++) {

//             if(modal[i].id === modalId){
//                 modal[i].classList.add('is-open');
//             }

//         }

//     })
// });

modalClose.forEach(btn => {
    btn.addEventListener('click', () => {

        // modal.forEach(element => {
        //     element.classList.remove('is-open');
        // });

        for (let i = 0; i < modal.length; i++) {
            modal[i].classList.remove('is-open');
        }

    })
});



// modalButton.addEventListener('click', () => {
//     modal.classList.add('is-open');
// });

// modalClose.addEventListener('click', () => { 
//     modal.classList.remove('is-open');
// });

// スクロール検知用の関数
function handleScroll() {
    // .movieWrap要素を取得
    const movieWrap = document.querySelector('.movieWrap');

    // .headerBox要素を取得
    const headerBox = document.querySelector('.headerBox');

    // .movieWrapと.headerBoxの位置とサイズを取得
    const movieRect = movieWrap.getBoundingClientRect();
    const headerRect = headerBox.getBoundingClientRect();

    // 画面の高さを取得
    const windowHeight = window.innerHeight;

    // .movieWrapが画面外に出ているか判定
    const isMovieOutOfViewport = movieRect.bottom < 0 || movieRect.top > windowHeight;

    // 画面外に出ている場合は.headerBoxにheaderBoxScクラスを追加、そうでない場合は削除
    if (isMovieOutOfViewport) {
        headerBox.classList.add('headerBoxSc');
    } else {
        headerBox.classList.remove('headerBoxSc');
    }
}

// スクロールイベントにhandleScroll関数を登録
window.addEventListener('scroll', handleScroll);

// ページ読み込み時にも初回の判定を行う
window.addEventListener('load', handleScroll);




