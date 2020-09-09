const request = require("request");



module.exports = function EBSinfobyName(target) {
    return new Promise((resolve, reject) => {
        if (target == undefined) return resolve({err: "NO_ARGUMENTS"});

        let dt = new Date();
    
        let info = {
            uri: `https://oc.ebssw.kr/resource/schoolList.js?v=${dt.getFullYear()}${dt.getMonth()+1}${dt.getDate()}`
        }
    
        request.get(info, (err, response, body) => {
            if (err) return resolve({err: err});

            var schulJSONObj = {
                schulList: []
            };
    
            let resUrlList = [];
            try {
                eval(body);
            } catch (err){
                return resolve({err: "SERVER_REQUEST_FAIL"});
            }
            schulJSONObj.schulList.forEach((school, index) => {
                if (school.schulNm.indexOf(target) != -1) {
                    school.url = `https://${school.host}.ebssw.kr/onlineClass/search/onlineClassSearchView.do?schulCcode=${school.schulCcode}&schCssTyp=online_poc`;
                    resUrlList.push(school);
                }
    
            });
            
            return resolve(resUrlList);
        });

    });
}