<h1>REST란</h1>
===================
<h2>REST란?</h2>

<p>

- 자원을 이름으로 구분하여 해당 자원의 상태를 주고 받는 모든 것을 의미

- *자원의 표현에 의한 상태전달*
    - 자원의 표현: 그자원을 표현하기 위한 이름 
    ex)DB의 학생정보가 자원일 때, 'students'를 자원의 표현으로 정함

    - 상태전달: JSON혹은 XML을 통해 데이터가 요청되어지는 시점에서 자원의 상태 전달
- 월드 와이드 웹과 같은 분산 하이퍼미디어 시스템을 위한 소프트웨어 개발 아키텍처의 한 형식
    - 웹의 기존 기술과 HTTP프로토콜을 그대로 활용하므로 웹의 장점을 최대한 활용할 수 있는 아키텍처 스타일
    - 네트워크 상에서 client와 server사이의 통신방식 중 하나

- HTTP URI를 통해 자원을 명시하고, HTTP METHOD(POST,GET,PUT,DELETE)를 통해 해당 자원에 대한 CRUD Operation을 적용하는 것을 의미
    - 즉 REST는 자원기반의 구조 설계의 중심에 리소스가 있고 HTTP Method를 통해 Resoure를 처리하도록 설계된 아키텍쳐를 의미함
    - 웹 사이트의 이미지,텍스트,DB내용등의 모든 자원에 고유한 ID인 HTTP URI를 부여함
    - CRUD Operation:대부분의 소프트웨어가 가지는 기본적인 데이터 처리, 사용자 인터페이스가 갖추어야할 기능
        - Create:생성(POST)
        - Read:조회(GET)
        - Updatae:수정(PUT)
        - Delete:삭제(DELETE)
        - HEAD:header 정보조회(HEAD)

</p>

<h2>REST가 필요한 이유</h2>
========================

- 애플리케이션 분리 및 통합
- 다양한 클라이언트의 등장
- 최근의 서버프로그램은 다양한 브라우저와 안드로이드폰,아이폰과 같은 모바일 디바이스에서도 통신을 할 수 있어야함
<p>
=>매번 서버를 새로만드는 수고를 들이지 않기 위해서 범용적인 사용성을 보장하는 서버디자인</p>

<h2> REST의 주요 목표</h2>
========================

- 구성 요소 상호작용의 규모 확장성
- 인터페이스의 범용성
- 구성요소의 독립적인 배포
- 중간적 구성요소를 이용해 응답 지연 감소, 보안강화,레거시시스템을 인캡슐레이션

![RESTArchitecture](RESTArchitecture.png)
<h2>REST 구성요소</h2>
====================
<br>
<ol>
<li>자원:URI</li>
    -  모든 자원에 고유한 ID가 존재하고, 이 자원은 Server에 존재함
    - 자원을 구별하는 ID는 HTTP URI다
    - 클라이언트는 URI를 이용해서 자원을 지정하고 해당 자원의 상태에 대한 조작을 서버에 요청함

<li>행위:HTTP Method</li>
    - HTTP프로토콜의 Method사용
    - GET,POST,PUT,DELETE와 같은 메서드를 제공함
<li>표현</li>
    - 클라이언트가 자원의 상태에 대한 조작을 요청하면 Server는 이에 적절한 응답을 보냄
    - REST에서 하나의 자원은 JSON,XML,TEXT,RSS등 여러형태의 Representation으로 나타내어 질 수 있다
    - JSON 혹은 XML을 통해 데이터를 주고 받는 것이 일반적임

<h2>REST특징</h2>
======================
<ol><li>Server-Client(서버-클라이언트 구조)</li>
    - 자원이 있는 쪽이 Server,자원을 요청하는 쪽인 Client가 됨
        - REST Server:API를 제공하고 비즈니스 로직 처리 및 저장을 책임짐
        - Client:사용자 인증이나 context(세션,로그인 정보)등을 직접 관리하고 책임짐
    - 서로간 의존성이 줄어듬
<li>Stateless(무상태)</li>
    <ul><li>HTTP프로토콜은 무상태 프로토콜이므로 REST역시 무상태성을 가짐</li>
    <li> 클라이언트의 conte
    xt를 서버에 저장하지 않음
        <li>즉,세션과 쿠키와 같은 context 정보를 신경쓰지 않아도 되므로 구현이 단순해짐</li></li>
    <li> Server는 각각의 요청을 완전히 별개의 것으로 인식하고 처리
        <li>각 API서버는 Client요청만을 단순 처리함</li>
        <li> 즉, 이전요청이 다음 요청의 처리에 연관되어서는 안됨</li>
        <li> 물론 이전 요청이 DB를 수정하여 DB에 의해 바뀌는 것은 허용</li>
        <li> Server의 처리방식에 일관성을 부여하고 부담이 줄어들며,서비스의 자유도가 높아짐</li>
    </li></ul>
<li>Cacheable(캐시처리기능)</li>
<ul><li>웹 표준 HTTP프로토콜을 그대로 사용하므로 웹에서 사용하는 기존의 인프라를 그대로 활용할 수 있다
<li>즉,HTTP가 가진 가장 강력한 특징 중 하나인 캐싱기능을 적용할 수 있다
</li>
<li>HTTP프로토콜 표준에서 사용하는 Last-Modified태그나 E-Tag를 이용하면 캐싱 구현이 가능하다</li>
</li></ul>
<ul><li>대량의 요청을 효율적으로 처리하기 위해 캐시가 요구된다</li></ul>
<ul><li>캐시 사용을 통해 응답시간이 빨라지고 REST Server 트랜잭션이 발생하지 않기 때문에 전체 응답시간,성능,서버의 자원이용률을 향상시킬 수 있다</li></ul>

<li>Self-descriptiveness(자체 표현구조)
</li>
<ul><li>동사(Method)+명사(URI)로 이루어져 있어 REST API메시지만 보고도 쉽게 이해할 수 있는 자체 표현구조로 되어있음</li></ul>

<li>계층형 구조</li>
<ul><li>REST서버는 다중계층으로 구성될 수 있으며 보안,로드밸런싱,암호화 계층을 추가해 구조상의 유연성을 둘 수 있고 PROXY,게이트웨이 같은 네트워크 기반의 중간매체를 사용할 수 있게 함</li></ul>

<li>인터페이스 일관성</li>
<ul><li>URI로 지정한 자원에 대한 조작을 통일되고 한정적인 인터페이스로 수행함</li>
<li>HTTP표준에만 따른다면 모든 플랫폼에 사용가능함</li>
</ol>


<h2>REST의 장단점</h2>
========================
<h3>장점</h3>

- (쉬운사용)HTTP프로토콜의 인프라를 그대로 사용하므로 REST API사용을 위한 별도의 인프라를 구축할 필요가 없다

- HTTP프로토콜의 표준을 최대한 활용하여 여러 추가적인 장점을 함께 가져갈 수 있게 해준다

 ※ HTTP프로토콜:HTTP는 인터넷상에서 데이터를 주고 받기 위한 서버/클라이언트 모델을 따르는 프로토콜, 어떤 종류의 데이터든지 전송할수 있도록 설계됨

 - HTTP표준 프로토콜에 따르는 모든 플랫폼에서 사용이 가능함

 - Hypermedia API의 기본을 충실히 지키면서 범용성을 보장함
    - Hypermedia API:링크클릭과 양식작성을 지원하며 요청된데이터와 사용 가능한 다른 리소스 또는 취해야 할 조치를 모두 사용하여 요청에 응답함으로써 달성

 - REST API메시지가 의도하는 바를 명확하게 나타내므로 의도하는 바를 쉽게 파악할 수 있음

 - 여러가지 서비스 디자인에서 생길 수 있는 문제를 최소화함

 - 서버와 클라이언트의 역할을 명확하게 분리함
    - REST의 특징인 Stateless에 따라 서버는 클라이언트의 Context를 유지할 필요가 없다

 <h3>단점</h3>
 
 - 표준이 존재하지 않음
    - REST는 설계 가이드일 뿐이지 표준이 아님

 - 사용할 수 있는 메소드가 4가지 밖에 없음
    - HTTP Method 형태가 제한적

- 브라우저를 통해 테스트할 일이 많은 서비스라면 쉽게 고칠 수 있는 URL보다 Header값이 왠지 더 어렵게 느껴짐
- 구형 브라우저가 아직 제대로 지원해주지 못하는 부분이 존재함
    - PUT,DELETE를 사용하지 못하는 점
    - pushState를 지원하지 않는 점
        - pushState: 브라우저의 세션기록 스택에 상태 추가

<h2>SOAP vs REST</h2>
<p>SOAP

- 일반적으로 널리 알려진 HTTP,HTTPS,SMTP등을 통해 XML기반의 메시지를 컴퓨터 네트워크 상에서 교환하는 프로토콜 
- 웹 서비스에서 기본저인 메시지를 전달하는 기반
- XML을 이용해서 분산처리 환경에서 정보교환을 쉽게 할 수 있도록 도와줌
- 플랫폼에 독립적,프로그래밍언어에도 독립적 
- HTTP를 이용하므로 Proxy와 방화벽에 제약을 받지 않고 쉽게 통신 가능
</p>

<p>SOAP이용한 일반적인 웹서비스 방식</p>

![soap](SOAP.png)

<br>
<p>REST이용한 방식(URL요청)</p>

![REST](REST.png)

<h5>SOAP과REST의 차이</h5>

![SOAPvsREST](SOAPvsREST.png)
<br>

<h2>RESTful</h2>
========================
<h3>RESTful이란<h3>

![Restful](Restful.png)
<br>
- RESTful은 일반적으로 REST라는 아키텍처를 구현하는 웹서비스를 나타내기 위해 사용되는 용어
    - 'REST API'를 제공하는 웹 서비스를 'RESTful'하다고 할수 있다
- RESTful은 REST를 REST답게 쓰기 위한 방법으로, 누군가가 공식적으로 발표한것은 아니다
    - 즉, REST원리를 따르는 시스템은 RESTful이란 용어로 지칭된다

<h3>RESTful의 목적</h3>
=======================

- 이해하기 쉽고 사용하기 쉬운 REST API를 만드는 것
- RESTful한 API를 구현하는 근본적인 목적이 성능향상에 있는 것이아니라 일관적인 컨벤션을 통한 API의 이해도 및 호환성을 높이는 것이 주 동기이므로 성능이 중요한 상황에서는 굳이 RESTful한 API를 구현할 필요가 없다

*RESTful하지 못한 경우*
<pre>
<p>
ex)CRUD기능을 모두 POST로만 처리하는 API
ex)route에 resource,id외의 정보가 들어가는 경우
(/students/updateName)
</pre>
<h1>REST API</h1>
====================

![restapi2](restapi2.png)
<br>
<p>REST기반으로 서비스 API를 구현한 것</p>
<p>최근 OpenAPI,마이크로 서비스등을 제공하는 업체 대부분은 REST API를 제공함</p>

- API:데이터와 기능의 집합을 제공하여 컴퓨터 프로그램 간 상호작용을 촉진하며, 서로 정보를 교환가능 하도록 하는 것

<h3>REST API의 특징</h3>
=======================

- 사내 시스템들도 REST기반으로 시스템을 분산해 확장성과 재상용성을 높여 유지보수 및 운용을 편리하게 할 수 있음
- REST는 HTTP표준을 기반으로 구현하므로, HTTP를 지원하는 프로그램 언어로 클라이언트,서버를 구현할 수 있다
- 즉,REST API를 제작하면 델파이 클라이언트 뿐아니라, 자바,C#,웹 등을 이용해 클라이언트를 제작할 수 있다

<h3>REST API 설계 기본 규칙</h3>
=======================
<p>참고 리소스 원형</p>

- 도큐먼트:객체 인스턴스나 데이터베이스 레코드와 유사한 개념
- 컬렉션:서버에서 관리하는 디렉터리라는 리소스
- 스토어:클라이언트에서 관리하는 리소스 저장소

<ol>
<li>URI는 정보의 자원을 표현해야한다</li>
<ul><li>Resource는 동사보다 명사를,대문자보다는 소문자를 사용한다</li>
<li>Resource의 도큐먼트 이름으로는 단수 명사를 사용해야한다</li>
<li>Resource의 컬렉션 이름으로는 복수 명사를 사용해야한다</li>
<li>Resource의 스토어 이름으로는 복수 명사를 사용해야한다</li>
</ul>
<pre>
<p>BAD
              GET /Member/1
GOOD
              GET /members/1</p></pre>
<li>자원엥 대한 행위는 HTTP Method로 표현한다</li>
<ul><li> URI에 HTTP Method가 들어가면 안된다</li>
<pre>
<p>BAD
              GET /members/delete/1
GOOD
              DELETE /members/1
              </p>
</pre>
<li>URI에 행위에 대한 동사 표현이 들어가면 안된다.(즉 CRUD기능을 나타내는 것은 URI에 사용하지 않음)
</li>
<pre>
<p>BAD
              GET /members/show/1

              GET /members/insert/2
GOOD
              GET /members/1

              POST /members/2
</p></pre>
<li>경로 부분 중 변하는 부분은 유일한 값으로 대체한다.(즉, id는 하나의 특정 resource를 나타내는 고유값)</li>
<pre><p>
student를 생성하는 route: POST /students

id=12인 student를 삭제하는 route:DELETE/students/12
</p></pre>
</ol>
<br>
<h2>REST API설계 규칙</h2>
=========================

<ol><li>슬래시 구분자(/)는 계층관계를 나타내는데 사용
</li>
<pre>
ex)http://restapi.example.com/houses/apartments
</pre>
<li>URI 마지막 문자로 슬래시(/)를 포함하지 않음</li>
<ul><li>URI에 포함되는 모든 글자는 리소스의 유일한 식별자로 사용되어야 하며 URI가 다르다는 것은 리소스가 다르다는 것이고, 역으로 리소스가 다르면 URI도 달라져야한다</li></ul>
<li>REST API는 분명한 URI를 만들어 통신을 해야하기 때문에 혼동을 주지 않도록 URI경로의 마지막에는 슬래시(/)를 사용하지 않는다</li>
<pre>
http://restapi.example.com/houses/apartments/(x)</pre>
<li>하이픈(-)을 지향하고 밑줄(_)은 URI에 사용하지 않는다</li>
<ul><li>불가피하게 긴 URI경로를 사용하게 된다면 하이픈을 사용해 가독성을 높인다</li>
<li>밑줄은 보기 어렵거나 밑줄 때문에 문자가 가려지기도 하므로 가독성을 위해 밑줄은 사용하지 않는다</li></ul>
<li>URI 경로에는 소문자가 적합하다</li>
<ul><li>RFC3986(URI 문법형식)은 URI스키마와 호스트를 제외하고는 대소문자를 구별하도록 규정하기 때문이다</li>
</ul>
<li>파일확장자는 URI에 포함하지 않는다</li>
<ul><li>REST API에서는 메시지 바디 내용의 포맷을 나타내기 위한 파일 확장자를 URI안에 포함시키지 않는다</li>
<li>Accept Header를 사용한다</li>
</ul>
<pre>
<p>
ex)http://restapi.example.com/members/soccer(X)
ex)GET / members/soccer/345/photo HTTP/1.1 HOST:restapi.example.com Accept: image/jpg(o)
</p></pre>
<li>리소스간에는 연관관계가 있는 경우</li>
<ul><li>/리소스명/리소스ID/관계가 있는 다른 리소스명</li>
<li>ex)GET: /users/{userid}/devices('has'관계 표현)</li>
</ul>
</ol>

*REST API설계 예시*

![RESTAPI](RESTAPI.png)

<h3>REST API 구현사례</h3>
======================

- 네이버 개발자 센터
    <p>
    - 단축 URL API
    : 원본 URL을 짧은 형태의 URL로 반환하는 RESTful API이다.
    네이버가 서비스하는 QR코드 이미지도 함께 생성된다
    비로그인 방식 오픈API로 HTTP요청 헤더에 클라ㅣ언트 아디와 클라이언트 시크릿 값만 전송해 사용할 수 있는 오픈 API이다.
    </p>
- Google Developer
    - <p> Fitness REST API에 대한 액세스를 활성화하고 OAuth액세스 토큰을 획득하며 HTTP요청을 사용하여 API 메소드를 호출한다
    - OAuth:데스크탑과 웹 어플리케이션에서 간단하고 표준적인 방법으로 안전한 API인증을 하도록 하는 공개 프로토콜
    </p>
- Twitter Developer
    - <p> REST를 기반으로해서 만들어지는 Twitter의 API는 사용하기 쉽기때문에 많은 개발자들이 다양한 어플리케이션,웹 서비스를 만들고 있음
    
    </p>
- 다음
    - <p>Daum 검색 API는 포털 사이트 DAUM에서 방대한 웹 문서,동영상, 이미지등을 검색하는 기능을 제공함
    검색 결과는 JSON객체로 전달돼 서비스에서 자유롭게 출력하거나 활용할 수 있음
    </p>
    - 카카오로그인,사용자관리,카카오 스토리등에사용하고 있음