import {showTime, showGreeting, showDate} from './show-time.js'
import {setInitData} from './local-storage-items.js'
import {setInitRandomBg, setInitHandlers} from './bg-controller.js'
import {setInitCitylogic} from './weather.js'
import dataQuotes from '../data.json' assert { type: "json" };

showTime();
showGreeting();
showDate();
setInitData();
setInitRandomBg();
setInitHandlers();
setInitCitylogic();


console.log(dataQuotes.quotes)