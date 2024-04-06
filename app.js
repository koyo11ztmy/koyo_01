// JavaScriptを追加
// window.addEventListener('load', function() {
//     // ページが読み込まれた後に3秒後に非表示にするタイマーを設定
//     setTimeout(function() {
//         document.getElementById('loading-wrapper').style.display = 'none';
//     }, 3000); // 3秒間 (3000ミリ秒) 表示した後に非表示にする
// });



// document.querySelector('.menu-btn').addEventListener('click', function(){
//     document.querySelector('.menu').classList.toggle('is-active');
// });

// !!!!!!!!!!!!!!!!!!!!!!!!!

// document.addEventListener('DOMContentLoaded', function() {
//     // ページ読み込み後に3秒間Loading画面を表示し、その後非表示にする処理
//     setTimeout(function() {
//         document.getElementById('loading-wrapper').style.display = 'none';
//     }, 3000); // 3秒間 (3000ミリ秒) 表示した後に非表示にする

//     // ハンバーガーメニューのトグル処理
//     document.querySelector('.menu-btn').addEventListener('click', function(){
//         document.querySelector('.menu').classList.toggle('is-active');
//     });

//     // メニューアイテムをクリックした際にハンバーガーメニューを閉じる処理
//     document.querySelectorAll('.menu__item a').forEach(function(link) {
//         link.addEventListener('click', function() {
//             document.querySelector('.menu').classList.remove('is-active');
//         });
//     });
// });


// !!!!!!!!!!!!!!!!
// document.addEventListener('DOMContentLoaded', function() {
//     // メニューアイテムをクリックした際の処理
//     document.querySelectorAll('.menu__item a').forEach(function(link) {
//         link.addEventListener('click', function(event) {
//             event.preventDefault(); // リンクのデフォルトの動作を無効化

//             // Loading画面を表示
//             document.getElementById('loading-wrapper').style.display = 'block';

//             // 1.5秒後にリンク先に移動
//             setTimeout(function() {
//                 window.location.href = link.getAttribute('href');
//             }, 1500); // 1.5秒後に処理を実行
//         });
//     });
// });











// document.addEventListener('DOMContentLoaded', function() {
//     // リロード時の処理
//     document.getElementById('loading-wrapper').style.display = 'block'; // Loading画面を表示

//     setTimeout(function() {
//         document.getElementById('loading-wrapper').style.display = 'none'; // Loading画面を非表示
//     }, 3000); // 3秒間 (3000ミリ秒) 表示した後に非表示にする

//     // ハンバーガーメニューボタンをクリックしたときの処理
//     document.querySelector('.menu-btn').addEventListener('click', function() {
//         document.querySelector('.menu').classList.toggle('is-active'); // メニューの開閉をトグル
//     });

//     // メニューアイテムをクリックした際の処理
//     document.querySelectorAll('.menu__item a').forEach(function(link) {
//         link.addEventListener('click', function(event) {
//             event.preventDefault(); // リンクのデフォルトの動作を無効化

//             // Loading画面を表示
//             document.getElementById('loading-wrapper').style.display = 'block';

//             // 3秒後にLoading画面を非表示にし、ハンバーガーメニューを閉じてリンク先に移動
//             setTimeout(function() {
//                 document.getElementById('loading-wrapper').style.display = 'none'; // Loading画面を非表示
//                 document.querySelector('.menu').classList.remove('is-active'); // ハンバーガーメニューを閉じる
//                 window.location.href = link.getAttribute('href'); // リンク先に移動
//             }, 3000); // 3秒後に処理を実行
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function() {
    // リロード時の処理
    document.getElementById('loading-wrapper').style.display = 'block'; // Loading画面を表示

    setTimeout(function() {
        document.getElementById('loading-wrapper').style.display = 'none'; // Loading画面を非表示
    }, 3000); // 3秒間 (3000ミリ秒) 表示した後に非表示にする

    // メニューアイテムをクリックした際の処理
    document.querySelectorAll('.menu__item a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // リンクのデフォルトの動作を無効化

            // Loading画面を表示
            document.getElementById('loading-wrapper').style.display = 'block';

            // 3秒後にリンク先に移動
            setTimeout(function() {
                window.location.href = link.getAttribute('href'); // リンク先に移動
                // メニューを閉じる
                document.querySelector('.menu').classList.remove('is-active');
                // Loading画面を非表示にする
                document.getElementById('loading-wrapper').style.display = 'none';
            }, 3000); // 3秒後に処理を実行
        });
    });

    // ハンバーガーメニューボタンをクリックしたときの処理
    document.querySelector('.menu-btn').addEventListener('click', function() {
        document.querySelector('.menu').classList.toggle('is-active'); // メニューの開閉をトグル

        // メニューが閉じたときにLoading画面を非表示にする
        if (!document.querySelector('.menu').classList.contains('is-active')) {
            document.getElementById('loading-wrapper').style.display = 'none'; // Loading画面を非表示
        }
    });
});
