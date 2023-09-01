# githubFinder

<img src="https://user-images.githubusercontent.com/137373182/264563407-56ab66de-e8d4-4e6c-b6f9-d6b0bb24e3dc.gif">


+user name 검색으로 github이용자 정보를 불러옴 
+X-Ratelimit-Limit: 60으로 제한(api 요청 가능횟수) -> user token으로 가능횟수를 5000으로 늘려줌
+user token을 사용 안할시에는 keyup마다 X-Ratelimit-Limit 횟수가 줄어드는 것을 확인하고
+ -> 3글자이상의 user name을 입력시에 검색 되도록하며, timeout기능을 주어 500ms동안 입력이 없을시에 검색이 되도록 하였다
+잔디밭 가져오기 `<img id="ghchart" src="https://ghchart.rshah.org/${user.login}" alt="${user.name}'s Github chart" />`

