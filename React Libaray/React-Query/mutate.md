## ✏️ 필기

### 1. useQueryClient() 호출하기

```js
const queryClient = useQueryClient();
```

### 2. useMutation() 호출하기

```js
const someMutation = useMutation({
    mutationFn: (),
    onSuccess: () => {
        queryClient.invalidateQueries();
    }
})
```
