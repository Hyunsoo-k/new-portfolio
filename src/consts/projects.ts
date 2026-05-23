import { Project } from "@/types/project";

export const PROJECTS: Project[] = [
  {
    name: "BeanTalk",
    thumbnailUrl: "/images/beanTalk/thumbnail.png",
    isSolo: true,
    summary: "일방적인 정보전달 방식의 웹 커뮤니티가 많은 커피 커뮤니티를 벗어나 다양한 카테고리에서의 사용자 참여와 운영자 권한으로 올리는 뉴스 카테고리를 가진 웹 애플리케이션 입니다.",
    details: [
      "Tiptap 위지위그와 DaumMapApi를 결합한 사용자 중심 CRUD 기능 구현",
      "TasntackQueryn를 이용한 서버 데이터 요청, 캐싱으로 최적화",
      "Zustand를 이용한 클라이언트 상태 관리",
      "서버, 클라이언트 데이터의 명확한 분리 관리"
    ],
    deployUrl: "https://bean-talk.vercel.app/",
    skills: ["typescript", "react", "tiptap", "reackHookForm", "scss", "daumMapApi"],
    skillIconUrls: ["/icons/typescript.svg", "/icons/react.svg", "/icons/tanstackQuery.svg", "/icons/sass.svg"],
    githubUrl: "https://github.com/Hyunsoo-k/bean-talk",
  },
  {
    name: "BeanTalk API Server",
    thumbnailUrl: "/images/beanTalkApiServer/thumbnail.jpg",
    isSolo: true,
    summary: "BeanTalk 프로젝트의 api 서버 프로젝트 입니다.",
    details: [
      "미들웨어와 컨트롤러의 명확한 분리로 프로세서의 명확성 강조",
      "DB레벨에서 작동하는 Agregation PipeLine 쿼리 사용.",
      "여러개의 스키마, 무거운 작업을 각각 비동기로 병렬처리하여 응답 퍼포먼스를 향상.",
      "클라이언트에서 사용하는 지도 sdk를 위한 프록시 라우트 구현."
    ],
    skills: ["typescript", "nodeJs", "mongoDb", "mongoose", "jwt"],
    skillIconUrls: ["/icons/nodeJs.svg", "/icons/expressJs.svg", "/icons/mongoDb.svg"],
    githubUrl: "https://github.com/Hyunsoo-k/bean-talk-server",
  },
  {
    name: "BlueNote",
    thumbnailUrl: "/images/blueNote/thumbnail.png",
    isSolo: true,
    summary: "음악을 전공하던 시절 재즈 뮤지션들을 위한 애플리케이션 시장이 상당히 좁다는걸 느끼고 시작한 프로젝트 입니다. 뉴스, 홍보, 자유게시판 등 사용자들의 자유로운 참여를 유도하였습니다.",
    details: [
      "nextJs + getServerSideProps를 이용한 서버사이드 데이터 패칭.",
      "tanstackQuery를 이용한 클라이언트 레벨의 서버 데이터 관리",
      "quill 위지위그 에디터를 이용한 사용자 경험 고려."
    ],
    skills: ["nestJs", "typescript", "tanstackQuery", "reactHookForm", "quill", "scss"],
    skillIconUrls: ["/icons/typescript.svg", "/icons/nextJs.svg", "/icons/tanstackQuery.svg", "/icons/sass.svg"],
    githubUrl: "https://github.com/Hyunsoo-k/BlueNote",
  },
  {
    name: "BlueNote API Server",
    thumbnailUrl: "/images/bluenoteApiServer/thumbnail.jpg",
    isSolo: true,
    summary: "BlueNote 프로젝트의 api 서버 프로젝트입니다.",
    details: [
      "여러 개의 textHTML을 반환하기 전 서버레벨에서 가상 dom을 이용한 WYSISYG 문자열 데이터 최적화.",
      "단일 프로세스에서 비동기 작업 병렬처리로 응답 퍼포먼스 향상",
      "@vercel/node를 이용한 타입스크립트 컴파일",
    ],
    skills: ["nodeJs", "mongoDb", "mongoose", "jwt"],
    skillIconUrls: ["/icons/nodeJs.svg", "/icons/expressJs.svg", "/icons/mongoDb.svg"],
    githubUrl: "https://github.com/Hyunsoo-k/bluenote-server",
  },
  // {
  //   name: "ZERO_C",
  //   thumbnailUrl: "/images/zeroC/thumbnail.png",
  //   isSolo: true,
  //   description: "(주)하나루프 면접 과제물 프로젝트 입니다. 탄소배출발자국을 대시보드 + recharts 라이브러리를 이용해 데이터 시각화를 하였고, 대시보드와 별개로 회사별 게시글 기능도 만들었습니다.",
  //   detail: "API 서버 없이 fake backend 파일을 만든 후, 데이터 조회, 수정, 삭제 등을 하는 과제물이였습니다. fake backend를 이용하여 데이터 시각화, tanstackquery로 접근하여 데이터 캐싱, 쿼리 무효화등을 구현해내는게 주요 과제였습니다.",
  //   skillUrls: ["/icons/typescript.svg", "/icons/nextJs.svg", "/icons/tanstackQuery.svg"],
  //   gitUrl: "https://github.com/Hyunsoo-k/ZERO_C",
  //   imageUrls: []
  // },
  {
    name: "NoteBookly",
    thumbnailUrl: "/images/noteBookly/thumbnail.png",
    isSolo: true,
    summary: "카카오 브런치스토리를 참고하여 만든 에세이 웹 애플리케이션 입니다.",
    details: [
      "quill 위지위그를 제치고 점유율 1위를 새롭게 갱신한 tiptap 사용.",
      "reactHookForm과 tiptap을 결합하여 입력데이터 실시간 검증",
      "이미지 리사이징, contenteditable 조작 구현.",
    ],
    skills: ["tpyescript", "react", "tiptap", "reactHookForm", "scss"],
    skillIconUrls: ["/icons/typescript.svg", "/icons/react.svg", "/icons/tanstackQuery.svg", "/icons/sass.svg"],
    githubUrl: "https://github.com/Hyunsoo-k/noteBookly",
  },
  {
    name: "NoteBookly API Server",
    thumbnailUrl: "/images/noteBooklyApiServer/thumbnail.jpg",
    isSolo: true,
    summary: "NoteBookly의 API 서버 프로젝트 입니다.",
    details: [
      "typescript + express를 적용한 첫 api 서버 개발.",
      "vercel이 serverless function을 어떻게 처리하는지 자세하게 알 수 있었던 프로젝트."
    ],
    skills: ["nodeJs", "typescript", "mongoose", "mongoDb"],
    skillIconUrls: ["/icons/nodeJs.svg", "/icons/typescript.svg", "/icons/expressJs.svg", "/icons/mongoDb.svg"],
    githubUrl: "https://github.com/Hyunsoo-k/noteBookly-server",
  },
  {
    name: "Developer_Hyunsoo_kim",
    thumbnailUrl: "/images/developerHyunsooKim/thumbnail.png",
    isSolo: true,
    deployUrl: "https://portfolio-orpin-five-18.vercel.app/",
    summary: "개발자답게 문서가 아닌 웹으로 소개하기위한 사이트 구 포트폴리오 사이트입니다.",
    details: [
      "이미지가 브라우저 메모리에 영향을 많이준다는 것을 고려하여 react-icons가 제공하는 svg파일로 대체.",
      "가벼운 기능만이 있는만큼 폴더 구조를 최대한 간결하고 직관적이게 설계."
    ],
    skills: ["typescript", "react", "scss", "reactIcons"],
    skillIconUrls: ["/icons/react.svg", "/icons/sass.svg"],
    githubUrl: "https://github.com/Hyunsoo-k/portfolio",
  },
  {
    name: "Synamon",
    thumbnailUrl: "/images/synamon/thumbnail.png",
    isSolo: false,
    deployUrl: "https://synamon.vercel.app/",
    summary: "동호회 활동을 위한 구인 사이트.",
    details: [
      "reactHookForm을 이용한 입력값 검증",
      "reactBigCalendar 이용한 일정 관리 달력의 UI/UX 향상",
      "tailwindCss로 초기 빠른 UI 구현"
    ],
    skills: ["typescript", "React", "tanstackQuery", "reactBigCalendar", "tailwindCss"],
    skillIconUrls: ["/icons/typescript.svg", "/icons/nextJs.svg", "/icons/tanstackQuery.svg", "/icons/tailwindCss.svg"],
    githubUrl: "https://github.com/Codeit-part4-team1/synamon",
  },
  {
    name: "The-julge",
    thumbnailUrl: "/images/theJulge/thumbnail.png",
    isSolo: false,
    summary: "급하게 아르바이트생이 필요한 가게 점주들을 위한 웹 애플리케이션 입니다.",
    details: [
      "reackHookForm을 사용하지 않은 커스텀 입력값 검증 함수 사용",
      "nextJs의 프리렌더링을 이용한 클라이언트에서의 빠른 렌더링 고려"
    ],
    skills: ["typescript", "nextJs", "tanstackQuery", "scss"],
    skillIconUrls: ["/icons/typescript.svg", "/icons/nextJs.svg", "/icons/tanstackQuery.svg", "/icons/sass.svg"],
    githubUrl: "https://github.com/sprintPart3Team4/the-julge",
  },
  {
    name: "Rolling",
    thumbnailUrl: "/images/rolling/thumbnail.jpg",
    isSolo: false,
    summary: "급하게 아르바이트생이 필요한 가게 점주들을 위한 웹 애플리케이션 입니다.",
    details: [
      "개발자로써의 첫 프로젝트, 오픈 레터 형식의 웹 애플리케이션",
      "reactRouterDom으로 SPA 기능 구현"
    ],
    skills: ["typescript", "react", "scss"],
    skillIconUrls: ["/icons/typescript.svg", "/icons/react.svg", "/icons/sass.svg"],
    githubUrl: "https://github.com/rollingproject/rolling7team?tab=readme-ov-file",
  },
];