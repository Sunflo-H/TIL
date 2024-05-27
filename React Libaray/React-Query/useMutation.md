## ✏️ 필기

### 🤔 useMutation은 어떨때 사용하나요?

기존 데이터를 Update 할 때 사용합니다.
HTTP method 로 보자면 POST, UPDATE에 해당합니다.

### ✅ useMutation 사용법

1. useQueryClient() 호출하기

```js
const queryClient = useQueryClient();
```

2. useMutation() 호출하기

```js
const someMutation = useMutation({
    mutationFn: (비동기 처리 함수),
    onSuccess: () => {
        queryClient.invalidateQueries();
    }
})
```
