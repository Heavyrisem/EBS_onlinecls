# EBS 온라인클래스 URL 파인더
[![NPM info](https://nodei.co/npm/ebs_onlinecls.png)](https://www.npmjs.com/package/ebs_onlinecls)

EBS 온라인클래스의 주소를 학교 이름만으로 찾는 라이브러리입니다.

## 사용법
```
const EBSurl = require('ebs_onlinecls');

EBSurl("학교이름").then(res => {
    if (res.err) {
        // 오류 처리 루틴...
    }

    console.log(res);
});
```

## 결과값

결과값은 배열로 돌아옵니다.
```
[
  {
    cityNm: '경기',
    schulLevelCode: 'H',
    schulLevelNnm: '고등학교',
    schulNm: '한국디지털미디어고등학교',
    schulCcode: '04402',
    host: 'hoc32',
    url: 'https://hoc32.ebssw.kr/onlineClass/search/onlineClassSearchView.do?schulCcode=04402&schCssTyp=online_poc'
  }
]
```

## 오류

오류는 모두 err 객체에 담겨 돌아옵니다.

> NO_ARGUMENTS
필수 인자값이 비었습니다.