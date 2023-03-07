import {showTime, showGreeting, showDate} from './show-time.js'
import {setInitData} from './local-storage-items.js'
import {setInitRandomBg, setInitHandlers} from './bg-controller.js'
import {getWether} from './weather.js'

import {setInitCity} from './local-storage-items.js'


showTime();
showGreeting();
showDate();
setInitData();
setInitRandomBg();
setInitHandlers();

setInitCity();

getWether();