## 🤔 useMutation은 어떨때 사용하나요?

기존 데이터를 Update 할 때 사용합니다.
HTTP method 로 보자면 POST, UPDATE에 해당합니다.

## ✅ useMutation 사용법

1. useQueryClient() 호출하기

```js
const queryClient = useQueryClient();
```

2. useMutation() 호출하기

```js
const someMutation = useMutation({
    mutationFn: (비동기 처리 함수),
    onSuccess: () => {
        console.log('성공!');
        queryClient.invalidateQueries('query key');
    }
})
```

## 🤔 invalidateQueries('query key')는 무엇인가요?

유효성을 제거하는 코드입니다.  
우선 useMutation을 통해 성공 결과를 서버로 전달합니다.  
그러면 서버에는 업데이트된 데이터가 존재하겠지요? 하지만 아직 클라이언트에는 업데이트 전 데이터가 존재합니다.  
따라서 데이터의 유효성을 제거해서 다시 서버로부터 데이터를 받을 수 있도록 하는 함수입니다.  
'query key'는 특정 key를 의미합니다.
