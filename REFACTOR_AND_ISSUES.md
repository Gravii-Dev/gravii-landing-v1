# 프로젝트 점검 및 리팩터 요약

이 문서는 코드베이스 점검 결과와 적용한 수정, 남은 권장 사항을 정리합니다.

---

## 해결한 항목 (적용 완료)

### 1. Lint 스크립트
- **문제**: `bun run lint` 실행 시 `next lint`가 스크립트 이름을 디렉터리로 받아 실패.
- **조치**: `package.json`의 lint 스크립트를 `biome check .` 로 통일. Next.js 16부터 `next lint` 제거됨 → ESLint 직접 사용.
- **추가**: `eslint`, `eslint-config-next` 설치, `eslint.config.mjs`(flat config, core-web-vitals) 추가. `lint:next` = `eslint .`, `lint:all` = `biome check . && eslint .`.
- **효과**: `bun run lint`(Biome), `bun run lint:next`(ESLint/Next 규칙), `bun run lint:all`로 통합 실행.

### 2. Import 일관성 (app/page)
- **문제**: `app/page.tsx`에서 `@/components/...`와 `../src/components/...` 혼용.
- **조치**: `src` 경로를 `@/src/...`로 통일하고, import 순서 정리(Alphabetical).
- **효과**: alias 기반 import로 일관성 확보.

### 3. Image 컴포넌트 (규칙 준수)
- **문제**: 규칙상 `@/components/ui/image` 사용 권장인데 해당 컴포넌트 없음. 3곳에서 `next/image` 직접 사용.
- **조치**:
  - `components/ui/image/index.tsx` 추가 (next/image 래퍼).
  - `ArtCard`, `IdentityCard3D`, `PersonaCarousel`에서 `@/components/ui/image`로 교체.
- **효과**: 이미지 사용처를 한 곳으로 통일, 규칙 준수.

### 4. Layout Skip 링크
- **문제**: Biome/커스텀 규칙에서 `<a>` 대신 Link 컴포넌트 사용 요구.
- **조치**: `app/layout.tsx`의 "Skip to main content" 링크를 `@/components/ui/link`의 `Link`로 변경.
- **효과**: 내부 해시 링크도 Link로 처리, 규칙 및 a11y 유지.

### 5. Biome 자동 수정
- **조치**: `biome check . --write --unsafe`로 적용 가능한 항목 일괄 수정.
  - import 정렬, 포맷, useTemplate, 미사용 import 제거, useSortedClasses 등.
- **효과**: 포맷/스타일 일관성 및 일부 린트 경고 제거.

### 6. Button 스토리 a11y
- **문제**: Storybook SVG에 대한 `noSvgWithoutTitle` 경고.
- **조치**: `Button.stories.tsx`의 아이콘 SVG에 `<title>Plus icon</title>` 추가.
- **효과**: 스토리에서도 a11y 규칙 충족.

---

## 남은 권장 사항 (선택)

### 1. Biome 파일명 규칙 (useFilenamingConvention)
- **상태**: 경고. PascalCase 파일명(`ArtCard.tsx`, `Button.tsx` 등)이 kebab-case/camelCase 규칙에 맞지 않음.
- **선택지**:
  - **A**: 컴포넌트 파일을 kebab-case로 변경 (예: `ArtCard.tsx` → `art-card.tsx`) 후 import 경로 전부 수정.
  - **B**: `biome.json`에서 해당 규칙을 해당 경로만 완화 (React 컴포넌트는 PascalCase 허용).
- **권장**: React 관례를 고려하면 B(규칙 완화)가 실무와 잘 맞을 수 있음.

### 2. 테스트
- **상태**: Vitest 단위 테스트(Button, Link, ErrorBoundary, Input, Image, validators, uiStore, walletStore) 및 Playwright E2E(`e2e/home.spec.ts`) 추가 완료.
- **실행**: `bun run test:run`(단위), `bun run test:e2e`(E2E). E2E 최초 실행 전 `bunx playwright install` 필요.
- **권장**: Bento 카드, ScrollReveal 등 추가 단위/통합 테스트는 필요 시 확장.

### 3. next.config 이미지
- **상태**: Unsplash 호스트 및 quality 85 설정 반영 완료. 이전에 `search` 키 제거로 쿼리 파라미터 허용.
- **추가**: 다른 외부 이미지 도메인 사용 시 `images.remotePatterns`에 항목 추가 필요.

### 4. 컴포넌트 위치 이원화
- **상태**: `components/`(루트)와 `src/components/` 공존. `@/*`는 루트 기준.
- **권장**: 점진적으로 `src/components/`로 통합하거나, 규칙/README에 “레이아웃/공통 UI는 `components/`, 페이지/기능 컴포넌트는 `src/components/`” 등 역할을 명시.

---

## 2025 추가 정리 (손댄 부분)

- **Biome 파일명**: TSX/JSX에 `useFilenamingConvention: "off"` 적용.
- **시맨틱/a11y**: `role="status"` → `<output>` (WaitlistCard, ConnectWalletCard, LookupCard, SplineScene). PersonaCarousel: `<section>`, `<button type="button">`.
- **PersonaCarousel**: `useEffectEvent` + effect 의존성 `[]`.
- **next-env.d.ts**: Biome에서 제외. **lint**: `biome check .`만 실행.

---

## 테스트 및 문서 (추가 진행)

- **Vitest + RTL**: `vitest`, `@testing-library/react`, `@testing-library/jest-dom`, `jsdom`, `@testing-library/user-event`, `@vitejs/plugin-react` 추가.
- **vitest.config.ts**: path alias `@/`, jsdom, setup `test/setup.ts`, globals: true.
- **test/setup.ts**: `@testing-library/jest-dom` import.
- **Button.test.tsx**: Button 컴포넌트 4개 테스트 (렌더, 클릭, disabled, className).
- **validators.test.ts**: isValidEthAddress, isValidENS, isValidEmail, validateAddressOrENS 단위 테스트 10개.
- **README**: Scripts에 `test`, `test:run`, `next lint` 안내. Project Structure에 컴포넌트 위치 설명 및 `test/` 추가. Testing 섹션 추가.

---

## 오케스트레이션(태스크) 기준 작업 순서

1. **Lint 스크립트 수정** → CI/로컬에서 lint 안정 동작  
2. **Import 통일** → 유지보수성·일관성  
3. **Image 컴포넌트 도입** → 규칙 준수 및 확장성  
4. **Layout Link·Biome·스토리 a11y** → 규칙 준수 및 품질  
5. **문서화** → 이후 리팩터/온보딩 시 참고  

필요 시 파일명 규칙 완화, 테스트 추가, 컴포넌트 구조 정리를 다음 단계 태스크로 이어가면 됩니다.
