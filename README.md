# 바로오피스

광고·로그인 없이 휴대폰 브라우저에서 엑셀(.xlsx .xls .csv)과 PPT(.pptx)를 열고 고쳐서 다시 내려받는 웹 오피스.
파일은 서버로 보내지 않고 브라우저 안에서만 처리합니다.

## 구성
- `index.html` — 앱 전체(단일 파일). SheetJS·JSZip은 cdnjs, PptxGenJS(새 PPT 만들기)는 jsDelivr에서 불러옴
- `manifest.webmanifest`, `icon-*.png` — 홈 화면에 추가(PWA)용

## 기능
- 엑셀: 셀 값·수식 수정(SUM·AVERAGE·IF·SUMIF 등 자동 계산), 시트 이동, 확대·축소. 원본 xlsx는 바뀐 셀만 고쳐 서식 유지
- PPT: 글자·크기·굵기·색 수정, 표 칸 수정, 글상자 추가·이동·복제·삭제, 슬라이드 추가·복제·삭제·순서 변경, 발표 모드
- 최근 파일 20개를 브라우저(IndexedDB)에 자동 보관

## 배포
정적 사이트라 Vercel에 저장소를 연결하면 빌드 설정 없이 그대로 배포됩니다.
