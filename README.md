# TeamIF-Site-Backend

## Intro

[TeamIf-Site](https://github.com/Team-IF/TeamIF-Site) backend

## API

### Models

#### user

```json
{
  "id": "AUTO_INCREASE",
  "role": "A B C",
  "name": "이름",
  "avatar": "https://cdn.discordapp.com/avatars/....",
  "description": "설명",
  "skills": "asdf bcda asdk",
  "github": "https://github.com/GithubLink",
  "email": "???@teamif.io",
  "personalEmail": "???@gmail.com",
  "homepage": "https://example.com"
}
```

> role와 skills는 스페이스바 기준으로 구분

### /Member

#### GET: /

Team-If 맴버들의 전체 리스트를 가져옴

#### GET: /:id

id에 해당하는 User만 가져옴

#### post: / (Member ONLY)

유저 프로필 추가(위의 형식처럼 해서 값 변경해서 요청)

#### patch: / (Member Only)

데이터 업데이트(업데이트 할 향목만 요청보내기)

#### delete: /:id (Member Only)

id에 해당하는 향목 삭제
