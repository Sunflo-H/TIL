## ✅ Hydration이란?

> 직역 : 수화 - 수분을 보충하는 행위  
> 페이지 요청이 들어오면 HTML에 필요한 파일들을 우선 클라이언트에게 보내고(pre-rendering[^1])  
> 이후에 JS,React파일을 보낸다.  
> 수분(JS,React)이 없는 몸(HTML)을 미리 보내고, 이후에 수분을 채운다.
>
> 서버에는 미리 HTML로만 정적 페이지를 만들어놓고, 이후 요청이 들어오면 페이지를 전달한다.  
> 이후 JS, React같은 동적인 파일을 전달한다.

[1]pre-rendering : Next.js는 Client-side의 JavaScript에 의해 실행하는 것 대신 사전에 각 페이지의 HTML을 생성한다.
