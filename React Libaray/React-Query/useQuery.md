## ✏️ useQuery 사용법

### 🤔 useQuery는 어떨때 사용하나요?

fetch 데이터를 가지고 올 때 사용합니다.  
HTTP method 로 보자면 GET에 해당합니다.

### useQuery() 호출하기

```js
const somethingQuery = useQuery({
    queryKey: [메인 구분값, 추가구분값들...],
    queryFn: 비동기처리함수,
    staleTime: 60*1000//갱신시간
})
```
