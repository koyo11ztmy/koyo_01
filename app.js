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
