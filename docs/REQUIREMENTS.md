## 구현 기능 목록

- [x] 영화 목록 조회
  - [x] 초기 진입 시 영화 목록 불러온다
    - [x] 영화 목록 아이템에는 '제목', '포스터', '평점'을 포함한다.
    - [x] 인기순으로 불러온다.
    - [x] 1페이지(20개씩)를 불러온다.
  - [x] 더보기를 누르면 다음 페이지의 영화 목록을 불러온다.
    - [x] 단, 페이지 끝에 도달한 경우 더보기 버튼을 화면에 출력하지 않는다.
  - [x] api 응답 대기 시간 동안 스켈레톤 UI를 보여준다.
- [x] 영화를 검색할 수 있다.
  - [x] 2가지 방법을 통해 검색을 할 수 있다(엔터키, 검색 버튼 클릭)
  - [x] 검색된 영화를 목록에 표시한다.
- [x] 오류
  - [x] 오류가 발생하는 경우 오류 메시지를 alert로 표시한다.
    - [x] API 요청 실패
    - [x] 검색어 길이 초과

## 컴포넌트

### MovieHeader

### MovieItem

### MovieList
