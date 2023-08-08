// Функции
function processFile(input, block) {
    var theFile = input;
    //
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
    //
    if (TextSimi('.csv',theFile.value)) {
    //
        if (typeof (FileReader) != "undefined") {
        //
        var headerLine = "";
        //
        var myReader = new FileReader();
        //
        myReader.onload = function(e) {
            var content = (myReader.result).split(';');
            //
            var contentNew = [];
            for(var n = 0; n <= content.length-1; n++) {
                var NewP = '';
                for(var s = 0; s <= content[n].length-1; s++) {
                    if(!(isNaN(Number(content[n][s])))) {
                        NewP+=content[n][s];
                    }
                }
                if((NewP.replace(/\s/g, "").replace(/\s/g, "\n")).length == 11) {
                    contentNew.push(NewP.replace(/\s/g, ""));
                }
            }
            var finish = '';
            for(var n = 0; n <= contentNew.length-1; n++) {
                if(n == 0) {
                    finish+=contentNew[n];
                } else {
                    finish+=','+contentNew[n];
                }
            }
            block.value = finish;
        }
            myReader.readAsText(theFile.files[0]);
        } else {
            alert("Для загрузки нужна более новая версия браузера - HTML5.");
        }     
    } else {
        alert("Нужен csv файл");
    }
}
function letter(str, t, b) {
    var StrNew = '';
    for(var n = 0; n <= str.length-1; n++) {
        if(n == t) {
            StrNew+=b;
        } else {
            StrNew+=str[n];
        }
    }
    return StrNew;
}
function WhatsAppPhone(b) {
    var bool = true;
    //
    var p = (b.value.replace(/\s/g, "").split(','));
    for(var n = 0; n <= p.length-1; n++) {
        var NewP = '';
        for(var s = 0; s <= p[n].length-1; s++) {
            if(!(isNaN(Number(p[n][s])))) {
                NewP+=p[n][s];
            }
        }
        p[n] = NewP;
    }
    for(var n = 0; n <= p.length-1; n++) {
        if(p[n].length !== 11) {
            bool = false;
        } else {
            p[n] = letter(p[n], 0, '8');
        }
    }
    //
    if(bool) {
        return Array.from(new Set(p));
    } else {
        return bool;
    }
}    
function TextWhatsApp(bText, between) {
    var TWApp = bText.value.split('\n');
    //
    var NewText = '';
    //
    for(var n = 0; n <= TWApp.length-1; n++) {
        NewText+=(TWApp[n]+between)
    }
    return NewText;
}
function letter(str, t, b) {
    var StrNew = '';
    for(var n = 0; n <= str.length-1; n++) {
        if(n == t) {
            StrNew+=b;
        } else {
            StrNew+=str[n];
        }
    }
    return StrNew;
}
function TextSimi(str1, str2) {
     if((str2.toUpperCase()).indexOf(str1.toUpperCase()) >= 0) {
        return true;
    } else {
        return false;
    }
}
function ID(block, bite) {
    bite = IdSettings(bite);
    try {
        return (this.parent.document).querySelector(bite+block);
    } catch (err) {
        return this.querySelector(bite+block);
    }
}
function IDall(block, bite) {
    bite = IdSettings(bite);
    try {
        return (this.parent.document).querySelectorAll(bite+block);
    } catch (err) {
        return this.querySelectorAll(bite+block);
    }
}
function IdSettings(bite) {
    if(bite !== undefined) {
        bite = bite.toLowerCase()
        if(bite == 'i' || bite == 'id') {return '#';} else if(bite == 'c' || bite == 'class') {return '.';}else if(bite == 'b' || bite == 'block') {return '';}
    } else {return '';}
}
HTMLElement.prototype.ID = ID;
HTMLElement.prototype.IDall = IDall;
function isNumeric(str) {
    if (typeof str != "string") return false
    return !isNaN(str) &&
    !isNaN(parseFloat(str))
}
function PhoneFinish(SRT) {
    SRT = SRT.replace(/\s/g, "");
    SRT = SRT.split(',');
    for(n in SRT) {
        if(!(isNumeric(SRT[n]))) {
            return false;
        }
    }
    return SRT;
}
function NOpx() {
    var num = '';
    for(n in this) {
        if(!isNaN(Number(this[n]))) {
            num+=this[n];
        }
    }
    return num.replace(/\s/g, "");;
}
String.prototype.NOpx = NOpx;
// Сам код
window.onload = () => {if(TextSimi('https://web.whatsapp.com/', window.location.href)) {OPEN();}}
function OPEN() {
    // Создание input
    var InputCSV = document.createElement('input');
    InputCSV.type = 'file';
    InputCSV.style.display = 'none';
    ID('body').appendChild(InputCSV);
    InputCSV.onchange = () => {
        var W_PHONE = ID('#W_PHONE');
        if(W_PHONE !== null) {
            processFile(InputCSV, W_PHONE);
        }
    }
    // Создание активное ссылки
    var ButtonHref = document.createElement('a');
    ID('body').appendChild(ButtonHref);
    // Создать иконку
    var icon = document.createElement('div');
    //
    icon.classList.add('icon_whatsapp_sender');
    //
    icon.style = 
    'width: 35px;'+
    'height: 35px;'+
    'background:url(https://i.ibb.co/1TVrtV2/128x128.png);'+
    'background-size: 100% 100%;'+
    'cursor: pointer;';
    //
    Interval();
    function Interval() {
        var PassIcon = document.querySelector('._64p9P');
        if(PassIcon !== null) {
            document.querySelector('.aiput80m').appendChild(icon);
        } else {
            setTimeout(Interval);
        }
    }
    icon.onclick = () => {
        var ClassBlock = 'WhatsApp_Sender';
        if(ID('.'+ClassBlock) == null) {
            var WhatsAppSender = document.createElement('div');
            //
            WhatsAppSender.style.display = 'flex';
            WhatsAppSender.classList.add(ClassBlock);
            //
            WhatsAppSender.innerHTML = 
            '<div class="center">'+
                '<button class="csv">CSV</button>'+
                '<div class="close" id="close_popup">×</div>'+
                '<p>Введите телефоны</p>'+
                '<textarea id="W_PHONE" placeholder="89202163553, 89678903553,и так далее" inputmode="numeric"></textarea>'+
                '<div class="arror_cender_1 arror_cender"></div>'+
                '<p>Введите текст</p>'+
                '<textarea id="W_TEXT" placeholder="Что именно вы хотите переслать?" inputmode="numeric" style="height: 250px; font-size: 15px"></textarea>'+
                '<div class="arror_cender_2 arror_cender"></div>'+
                '<button id="W_SENDER">'+
                    '<img src="https://i.ibb.co/1TVrtV2/128x128.png">'+
                    '<span>Отправить</span>'+
                '</button>'+
            '</div>';
            //
            ID('body').appendChild(WhatsAppSender);
            //
            ID('#close_popup').onclick = () => {
                ID('.'+ClassBlock).style.display = 'none';
            }
            ID('.csv').onclick = () => {
                InputCSV.click();
            }
            //
            var error1 = ID('.arror_cender_1');
            var error2 = ID('.arror_cender_2');
            ID('#W_SENDER').onclick = () => {
                var bool = true;
                //
                error1.textContent = '';
                error2.textContent = '';
                //
                var WPHONE = WhatsAppPhone(ID('#W_PHONE'));
                if(WPHONE == false) {
                    error1.textContent = 'Ошибка в синтаксисе';
                    //
                    bool = false;
                }
                //
                var WTEXT = ID('#W_TEXT');
                if((WTEXT.value).length < 3) {
                    error2.textContent = 'Текст должен быть больше 3-х символов';
                    //
                    bool = false;
                }
                if(bool) {
                    Puch(WhatsAppSender, WPHONE, ButtonHref, TextWhatsApp(WTEXT, '%0a'));
                }
            } 
        } else {
            ID('.'+ClassBlock).style.display = 'flex';
        }
    }
}
function Puch(WhatsAppSender, phone, ButtonHref, text) {
    WhatsAppSender.innerHTML = 
    '<div class="center">'+
        '<p>Отправленно</p>'+
        '<div class="sent">0</div>'+
        '<p>Номера не найдены</p>'+
        '<div class="not_found">0</div>'+
        '<p>Секунды до отправки</p>'+
        '<div class="seconds">0</div>'+
        '<button class="cancellation">'+
            '<img src="https://i.ibb.co/1TVrtV2/128x128.png">'+
            '<span>Остановить</span>'+
        '</button>'+
    '</div>';
    //
    var pass = true;
    ID('.cancellation').onclick = () => {
        ID('body').removeChild(WhatsAppSender);
        //
        pass = false;
    }
    //
    var end = 10;
    var PhoneNum = 0;
    //
    INTERVAL();
    function Begin() {
        if(!pass) {return};
        //
        var num = end;
        //
        if(PhoneNum <= phone.length-1) {
            setTimeout(fail, 1000);
        }
        function fail() {
            if(!pass) {return};
            //
            if(PhoneNum >= phone.length-1) {
                //ID('.cancellation').ID('span').textContent = 'Готово';
                //ID('.cancellation').classList.remove('cancellation');
                ID('body').removeChild(WhatsAppSender);
                return;
            }
            if(num < 0) {
                num = end;
                //
                PhoneNum++;
                //
                INTERVAL();
                //
                return;
            }
            //
            ID('.seconds').textContent = num+'s';
            //
            num--;
            setTimeout(fail, 1000);
        }
    }
    function INTERVAL() {
        if(!pass) {return};
        //
        if(PhoneNum > phone.length-1) {
            ID('body').removeChild(WhatsAppSender);
            return;
        }
        //
        //ButtonHref.href = "https://web.whatsapp.com/send/?phone=8"+phone[PhoneNum];
        ButtonHref.href = 'https://api.whatsapp.com/send?phone=8'+phone[PhoneNum]+'&text='+text;
        ButtonHref.click();
        fun();
        function fun() {
            if(!pass) {return};
            //
            var arr = document.querySelector('.paav9g0k');
            //
            var ArrBool = false;
            if(arr !== null) {
                if(arr.textContent == 'Неверный номер телефона.OK') {
                    ArrBool = true;
                }
            }
            if(ArrBool) {
                arr.innerHTML = '';
                //
                ID('.not_found').textContent = Number(ID('.not_found').textContent)+1;
                //
                Begin();
            } else {
                var NewPhone = document.querySelector('._3W2ap');
                if(NewPhone !== null) {
                    var PhoneOpen = letter(phone[PhoneNum], 0, '7');
                    if(((NewPhone.textContent).NOpx()) == PhoneOpen) {
                        var Send = ID('.epia9gcq');
                        if(Send.ariaLabel == 'Отправить') {
                            Send.click();
                            //
                            ID('.sent').textContent = Number(ID('.sent').textContent)+1;
                            //
                            Begin();
                            //
                            return;
                        }
                    }
                }
                //
                setTimeout(fun, 100);
            }
        }
    }
}
function sendMessage(message){
  const mainEl = document.querySelector('#main')
  const textareaEl = mainEl.querySelector('div[contenteditable="true"]')

  if(!textareaEl) {
    throw new Error('There is no opened conversation')
  }

  textareaEl.focus()
  document.execCommand('insertText', false, message)
  textareaEl.dispatchEvent(new Event('change', { bubbles: true }))

  setTimeout(() => {
    (mainEl.querySelector('[data-testid="send"]') || mainEl.querySelector('[data-icon="send"]')).click()
  }, 100)
}
/*
// Когда приходит сообщение из popup.js
chrome.runtime.onMessage.addListener(
    function (data, sender, sendResponse) {
        //сообщение из popup.js
        parseMessage(data)

        // Если нужно отправить ответ в popup.js
        sendResponse({"data": "Content принял"});
    }
);
*/