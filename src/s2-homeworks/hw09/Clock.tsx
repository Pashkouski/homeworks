import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'
import {log} from "util";

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)


    const start = () => {
        const id = setInterval(() => setDate(new Date()), 1000)
        setTimerId(+id);
    }


    const stop = () => {
        clearInterval(timerId)
        setTimerId(undefined)
    }


    const onMouseEnter = () => {
        setShow(true);
    }


    const onMouseLeave = () => {
        setShow(false);
    }

    function getZerro(num: number) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else
            return num;
    }

    // let hours = Math.floor((+date / 1000 / 60 / 60 + 3) % 24),
    //     minutes = Math.floor((+date / 1000 / 60) % 60),
    //     second = Math.floor((+date / 1000) % 60);

    const stringTime = `${getZerro(date.getHours())}:${getZerro(date.getMinutes())}:${getZerro(date.getSeconds())}` ||
        <br/>

    const stringDate = `${date.toLocaleDateString('eng', {weekday: "long"})}` || <br/>
    const stringDay = `${date.toLocaleDateString('eng', {weekday: "long"})}` || <br/>
    const stringMonth = `${date.toLocaleDateString('eng', {day: "2-digit", month: "2-digit", year: "2-digit"})}` || <br/>

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-date'}>{stringDate}</span>,{' '}
                            <span id={'hw9-month'}>{stringMonth}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
