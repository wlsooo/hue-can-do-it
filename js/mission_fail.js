function tissueCrush() {
    // 미션 실패 컨테이너 안보이게
    var missionFailContainer = document.querySelector('.missionfail-container');
    missionFailContainer.style.display = 'none';

    // tissue-crush-container 클래스가 보이게
    var tissueCrushContainer = document.querySelector('.tissue-crush-container');
    tissueCrushContainer.style.display = 'flex';
}
