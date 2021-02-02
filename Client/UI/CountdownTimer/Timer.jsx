import React, { useEffect, useState, useRef } from 'react';
import './Timer.scss';

const Timer = (props) => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    function stopTimer(){
        console.log('stopTimer');
        clearInterval(interval);//
        setTimerDays('00');
        setTimerHours('00');
        setTimerMinutes('00');
        setTimerSeconds('00');
        //כשנגמר הזמן של פרסום השאלה - כל הדף של התשובות צריך להפוך ל disable
        // וכן לשלוח מייל סיכום למפרסם השאלה
        // להציע למפרסם לעשות את ההגרלה ולשלוח מייל לזוכה
    }

    const startTimer = () => {
        console.log('startTimer');
        const countdownDate = new Date(props.timer).getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                // stop timer
                stopTimer();
            } else {
                // update timer
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    };

    const addTimeToTimer = () => {
        console.log('addTimeToTimer');
        stopTimer();
        // setTimerDays(timerDays + (1000 * 60 * 60 * 24));
    }

    // componentDidMount
    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        };
    }, []);

    return (
        <div>
            <section className="timer-container">
                <section className="timer">
                    <div>
                        <span className="mdi mdi-calendar-clock timer-icon"></span>
                        <h2>Timer</h2>
                    </div>
                    <div>
                        <section>
                            <p>{timerDays}</p>
                            <p><small>Days</small></p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerHours}</p>
                            <p><small>Hours</small></p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerMinutes}</p>
                            <p><small>Minutes</small></p>
                        </section>
                        <span>:</span>
                        <section>
                            <p>{timerSeconds}</p>
                            <p><small>Seconds</small></p>
                        </section>
                    </div>
                </section>
            </section>
            <button className="ui left floated toggle top secondary basic button"
                onClick={addTimeToTimer}>Add Timer</button>
        </div>
    )
}

export default Timer;
