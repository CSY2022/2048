        function startTimer() {

            const startTime = localStorage.getItem('startTime');
            const now = new Date().getTime();
            const twentyMinutes = 0.1 * 60 * 1000;
while(1){
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay)) 
await sleep(500)
            // 如果没有开始时间，设置当前时间为开始时间
            if (!startTime) {
                localStorage.setItem('startTime', now);
            } else {
                const elapsedTime = now - startTime;
                if (elapsedTime >= twentyMinutes) {
                    window.location.href = 'break.html';
                } else {
                    setTimeout(function() {
                        window.location.href = 'break.html';
                    }, twentyMinutes - elapsedTime);
                }
            }
            SetTimeout () 
            }
        }
startTimer();