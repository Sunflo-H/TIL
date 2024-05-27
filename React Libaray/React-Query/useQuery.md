## ✏️ useQuery 사용법

### 1. useQueryClient() 호출하기

```js
const queryClient = useQueryClient();
```

### 2. useQuery() 호출하기

```js
const somethingQuery = useQuery({
    queryKey: [메인 구분값, 추가구분값들...],
    queryFn: 비동기처리함수,
    staleTime: 60*1000//갱신시간
})
```
