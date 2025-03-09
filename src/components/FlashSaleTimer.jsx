import { useEffect, useState } from "react"

const FlashSaleTimer = () => {
    const [timer, setTimer] = useState({ days: 3, hours: 0, minutes: 0, seconds: 0 });
    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prev) => {
                let { days, hours, minutes, seconds } = prev;

                if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
                    clearInterval(interval);
                    return prev;
                }

                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;
                            if (days > 0) {
                                days--;
                            }
                        }
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center gap-2">
            <div className="flex flex-col items-center">
                <span className='font-["poppins"] text-xs font-medium'>Days
                </span>
                <span className="text-2xl font-bold">{timer.days.toString().padStart(2, 0)}</span>
            </div>
            <span className="text-3xl text-[#E07575]">:</span>
            <div className="flex flex-col items-center">
                <span className='font-["poppins"] text-xs font-medium'>Hours
                </span>
                <span className="text-2xl font-bold">{timer.hours.toString().padStart(2, 0)}</span>
            </div>
            <span className="text-3xl text-[#E07575]">:</span>
            <div className="flex flex-col items-center">
                <span className='font-["poppins"] text-xs font-medium'>Minutes
                </span>
                <span className="text-2xl font-bold">{timer.minutes.toString().padStart(2, 0)}</span>
            </div>
            <span className="text-3xl text-[#E07575]">:</span>
            <div className="flex flex-col items-center">
                <span className='font-["poppins"] text-xs font-medium'>Seconds
                </span>
                <span className="text-2xl font-bold">{timer.seconds.toString().padStart(2, 0)}</span>
            </div>
        </div>
    )
}

export default FlashSaleTimer