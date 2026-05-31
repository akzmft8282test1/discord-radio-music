// script.js

// 🚨 중요: 여기에 깃허브에 올린 560MB짜리 MP3 파일 이름을 확장자까지 똑같이 적어주세요!
// 예: "my_bgm.mp3", "test.mp3" 등
const AUDIO_FILE_NAME = "bgm1.mp3"; 

window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audioStream');
    
    // 캐시 방지 및 대용량 파일의 세그먼트 스트리밍을 돕기 위한 타임스탬프 주소 지정
    const streamUrl = `./${AUDIO_FILE_NAME}?t=${new Date().getTime()}`;
    
    // 오디오 소스 지정
    audio.src = streamUrl;
    
    // 디스코드 봇 및 외부 연결 시 오디오 청크를 안정적으로 밀어주기 위한 스트리밍 로드 설정
    audio.addEventListener('stalled', () => {
        console.log('대용량 파일 버퍼링 중... 스트림을 재연결합니다.');
        audio.load();
    });

    console.log("🎶 대용량 스트리밍 소스가 로드되었습니다.");
});
