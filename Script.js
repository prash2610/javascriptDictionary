function solution() {

    let newDic = {};
    let mon = 0, tue = 0, wed = 0, thu = 0, fri = 0, sat = 0, sun = 0;
    let monval = null, tueval = null, wedval = null, thuval = null, frival = null, satval = null, sunval = null;
    let DAYS = { 1: "MON", 2: "TUE", 3: "WED", 4: "THU", 5: "FRI", 6: "SAT", 0: "SUN", };
    let Flag1 = 0, Flag2 = 0, iterationCnt = 0;
    let Dic1 = document.getElementById("Dictionary").value;
    let Dic = JSON.parse(Dic1)
    for (var key1 in Dic) {
        console.log(key1);
        if (key1 >= "1970-01-01" && key1 <= "2100-01-01" && Dic[key1] >= -1000000 && Dic[key1] <= 1000000) {
            console.log("y");
            let day1 = new Date(key1);
            if (DAYS[day1.getDay()] == "MON")
                Flag1 = 1;
            if (DAYS[day1.getDay()] == "SUN")
                Flag2 = 1
            iterationCnt++;
        } else {
            break;
        }
    }
    console.log(Flag1 + " " + Flag2 + " " + iterationCnt);
    if (Flag1 == 1 && Flag2 == 1 && iterationCnt == Object.keys(Dic).length) {
        for (var key in Dic) {
            var day = new Date(key);
            if (DAYS[day.getDay()] == "MON") {
                mon++;
                if (mon <= 1)
                    monval = Dic[key];
                else {
                    monval = monval + Dic[key]
                    mon = 1
                }
            }
            else if (DAYS[day.getDay()] == "TUE") {
                tue++;
                if (tue <= 1)
                    tueval = Dic[key];
                else {
                    tueval = tueval + Dic[key]
                    tue = 1
                }
            }
            else if (DAYS[day.getDay()] == "WED") {
                wed++;
                if (wed <= 1)
                    wedval = Dic[key];
                else {
                    wedval = wedval + Dic[key]
                    wed = 1
                }
            }
            else if (DAYS[day.getDay()] == "THU") {
                thu++;
                if (mon <= 1)
                    thuval = Dic[key];
                else {
                    thuval = thuval + Dic[key]
                    thu = 1
                }
            }
            else if (DAYS[day.getDay()] == "FRI") {
                fri++;
                if (fri <= 1)
                    frival = Dic[key];
                else {
                    frival = frival + Dic[key]
                    fri = 1
                }
            }
            else if (DAYS[day.getDay()] == "SAT") {
                sat++;
                if (sat <= 1)
                    satval = Dic[key];
                else {
                    satval = satval + Dic[key]
                    sat = 1
                }
            } else if (DAYS[day.getDay()] == "SUN") {
                sun++;
                if (sun <= 1)
                    sunval = Dic[key];
                else {
                    sunval = sunval + Dic[key]
                    sun = 1
                }
            }
        }

        newDic = [{ "day": "MON", "value": monval }, { "day": "TUE", "value": tueval }, { "day": "WED", "value": wedval }, { "day": "THU", "value": thuval }, { "day": "FRI", "value": frival }, { "day": "SAT", "value": satval }, { "day": "SUN", "value": sunval }];
        for (let iterator in newDic) {
            if (newDic[iterator].value == null) {
                if (iterator == 0) {
                    nindex = 6;
                    pindex = parseInt(iterator + 1);
                }
                else if (iterator == 6) {
                    nindex = parseInt(iterator - 1);
                    pindex = 0
                }
                else {
                    nindex = parseInt(iterator) - 1;
                    pindex = 1 + parseInt(iterator);
                }
                if ((newDic[nindex].value) != null && (newDic[pindex].value) == null) {

                    console.log("y");
                    newDic[iterator].value = (newDic[nindex].value * 2) - newDic[nindex - 1].value
                }
                else {

                    newDic[iterator].value = (newDic[nindex].value + newDic[pindex].value) / 2;
                }
                console.log(newDic[iterator].value);

            }
        }
        function reducer(acc, cur) {
            return { ...acc, [cur.day]: cur.value };
        }
        let val = JSON.stringify(newDic.reduce(reducer, {}))
        document.getElementById("output").innerHTML = val;
        // newDic = {}
        // Dic = null;
        // Dic1 = null;
    }
    else{
        alert("Check Data as per condition")
    }
}
