function startTimer() {
            const startTime = localStorage.getItem('startTime');
            const now = new Date().getTime();
            const limitTime = 20 * 60 * 1000;

            // 如果没有开始时间，设置当前时间为开始时间
            if (!startTime) {
                localStorage.setItem('startTime', now);
            } else {
                const elapsedTime = now - startTime;
                if (elapsedTime >= limitTime) {
                    window.location.href = 'break.html';
                } else {
                    setTimeout(function() {
                        window.location.href = 'break.html';
                    }, limitTime - elapsedTime);
                }
            }
}
startTimer();