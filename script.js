const products = {
  flight: {
    chapter: "CHAPTER 01 — FLIGHT",
    title: "비상 飛上 T–SHIRT",
    price: 198000,
    usdPrice: 155,
    image: "assets/flight-tee.png",
    alt: "학과 꽃넝쿨 자개 문양이 놓인 검은색 오버핏 티셔츠",
    stockBadge: "IN STOCK",
    modelNote: "MEN 185cm (L 착용) · WOMEN 172cm (S 착용) · 여유 있는 세미 오버핏",
    description:
      "왼쪽 가슴에서 비상하는 학과 오른쪽 밑단에서 등판으로 이어지는 꽃넝쿨. 넓은 여백 위에서 몸의 움직임에 따라 자개빛이 나타납니다.",
    stock: { S: 5, M: 8, L: 3 },
    sizeSpec: [
      { size: "S", shoulder: "50", chest: "56", sleeve: "23", length: "69" },
      { size: "M", shoulder: "53", chest: "60", sleeve: "25", length: "73" },
      { size: "L", shoulder: "56", chest: "64", sleeve: "26.5", length: "76" }
    ],
    fabricCare:
      "• 겉감: 코마사 헤비웨이트 코튼 100% (320gsm 고밀도 바이오 워싱)<br>• 아트워크: 특수 다층 홀로그래픽 나전(자개) 전사 및 실리콘 코팅 마감<br>• 세탁: 반드시 옷을 뒤집어 세탁망에 넣은 후 30°C 이하 찬물 단독 손세탁 또는 중성세제 울코스를 권장합니다. 건조기 사용 및 아트워크 부위 직접 다림질을 금합니다.",
    shippingInfo:
      "• 출고 일정: 결제/예약 확정 후 영업일 기준 1–2일 이내 아틀리에 전용 패키지로 출고됩니다.<br>• 배송비: 전 품목 무료배송 (CJ대한통운)<br>• 교환/반품: 수령 후 7일 이내 미착용·택 부착 상태에 한해 가능"
  },
  wind_men: {
    chapter: "CHAPTER 02 — AGAINST THE WIND (MEN)",
    title: "역풍 逆風 DENIM JACKET (MEN)",
    price: 680000,
    usdPrice: 520,
    image: "assets/hero-jacket.png",
    alt: "역동적인 소나무 자개 문양이 놓인 남성용 검은색 데님 재킷",
    stockBadge: "LOW STOCK",
    modelNote: "MEN 186cm / L 사이즈 착용 · 구조적인 어깨선의 오버사이즈 트러커 핏",
    description:
      "강풍을 정면으로 마주한 소나무를 날카로운 선으로 다시 그렸습니다. 등판의 대담한 소나무와 양팔·앞판의 줄기 문양이 하나의 흐름으로 이어지는 남성용 오버핏 데님 재킷입니다.",
    stock: { S: 2, M: 3, L: 1 },
    sizeSpec: [
      { size: "S", shoulder: "51", chest: "58", sleeve: "61", length: "64" },
      { size: "M", shoulder: "54", chest: "62", sleeve: "63", length: "66.5" },
      { size: "L", shoulder: "57", chest: "65", sleeve: "64.5", length: "69" }
    ],
    fabricCare:
      "• 겉감: 14oz 일본산 셀비지 블랙 데님 (Cotton 100%, 흑청 스톤 워싱)<br>• 디테일: 자개 광택 나전 필름 아플리케 자수 & 황동 흑니켈 각인 리벳<br>• 세탁: 형태 보존과 자개 광택 유지를 위해 전문 드라이클리닝 또는 오염 부위 부분 세탁을 권장합니다.",
    shippingInfo:
      "• 출고 일정: 영업일 기준 2–3일 이내 아틀리에 수트케이스 패키지 출고<br>• 배송비: 무료배송<br>• 교환/반품: 수령 후 7일 이내 가능"
  },
  wind_women: {
    chapter: "CHAPTER 02 — AGAINST THE WIND (WOMEN)",
    title: "역풍 逆風 CROPPED DENIM JACKET (WOMEN)",
    price: 640000,
    usdPrice: 490,
    image: "assets/cropped-jacket-woman-v3.png",
    alt: "등판 안에 소나무 자개 문양을 정돈한 여성용 크롭 데님 재킷",
    stockBadge: "IN STOCK",
    modelNote: "WOMEN 173cm / S 사이즈 착용 · 허리선 위에서 떨어지는 하이웨이스트 크롭 핏",
    description:
      "여성용 크롭 실루엣에 맞춰 등판 요크와 몸판 안에서 완결되는 소나무 자개 구도를 설계했습니다. 짧은 기장감과 선명한 자개광이 절제된 대비를 이룹니다.",
    stock: { S: 4, M: 5, L: 2 },
    sizeSpec: [
      { size: "S", shoulder: "45", chest: "51", sleeve: "57.5", length: "47" },
      { size: "M", shoulder: "47", chest: "53.5", sleeve: "59", length: "49" },
      { size: "L", shoulder: "49", chest: "56", sleeve: "60.5", length: "51" }
    ],
    fabricCare:
      "• 겉감: 13.5oz 블랙 코튼 데님 (Cotton 100%)<br>• 디테일: 등판 중앙 소나무 및 양 소매 넝쿨 자개 아트워크 인레이<br>• 세탁: 뒤집어 단추를 잠근 상태로 단독 드라이클리닝 권장. 고온 스팀 다림질 시 아트워크 위에 천을 덧대어 주십시오.",
    shippingInfo:
      "• 출고 일정: 영업일 기준 2–3일 이내 아틀리에 수트케이스 패키지 출고<br>• 배송비: 무료배송<br>• 교환/반품: 수령 후 7일 이내 가능"
  },
  pine_henley: {
    chapter: "CHAPTER 03 — PINE SHADOW",
    title: "송영 松影 ZIP-SLEEVE HENLEY",
    price: 420000,
    usdPrice: 325,
    image: "assets/pine-henley-model-front.png",
    alt: "소매 지퍼와 소나무 가지 자수, 자개 단추 디테일이 더해진 블랙 워싱 헨리넥 롱슬리브",
    stockBadge: "IN STOCK",
    modelNote: "MEN 184cm / L 사이즈 착용 · 자연스럽게 흐르는 드롭숄더 릴렉스 핏",
    description:
      "은은한 워싱감의 블랙 코튼 원단 위에 나전 매화꽃 모티브의 자개 단추를 세팅하고, 어깨부터 소매 끝까지 이어지는 지퍼 라인을 따라 소나무 가지 자수를 입체적으로 수놓았습니다. 밑단 디스트로이드 마감으로 전통과 현대적 스트릿 실루엣이 공존합니다.",
    stock: { S: 6, M: 7, L: 4 },
    sizeSpec: [
      { size: "S", shoulder: "52", chest: "57", sleeve: "61", length: "70" },
      { size: "M", shoulder: "55", chest: "60.5", sleeve: "63", length: "73" },
      { size: "L", shoulder: "58", chest: "64", sleeve: "65", length: "76" }
    ],
    fabricCare:
      "• 겉감: 피그먼트 차콜-블랙 워싱 헤비 저지 (Cotton 100%)<br>• 부자재: 천연 흑자개 매화 세공 단추 3구 · YKK 엑셀라 양방향 슬리브 지퍼 · 고밀도 메탈릭 실버 소나무 가지 자수<br>• 세탁: 지퍼를 모두 잠근 상태로 세탁망에 넣어 찬물 중성세제 단독 손세탁 또는 드라이클리닝 권장 (디스트로이드 밑단 올 풀림 주의)",
    shippingInfo:
      "• 출고 일정: 영업일 기준 1–2일 이내 출고<br>• 배송비: 무료배송<br>• 교환/반품: 수령 후 7일 이내 가능"
  },
  rose_biker: {
    chapter: "CHAPTER 04 — MOON ROSE (WOMEN)",
    title: "월계 月季 BIKER DENIM JACKET (WOMEN)",
    price: 690000,
    usdPrice: 530,
    image: "assets/rose-denim-jacket-model-front.png?v=2",
    alt: "비대칭 지퍼 여밈 왼쪽 앞판을 따라 자개 장미 넝쿨이 흐르는 여성용 블랙 데님 바이커 재킷",
    stockBadge: "IN STOCK",
    modelNote: "WOMEN 174cm / M 사이즈 착용 · 허리를 잡아주는 슬림 바이커 핏",
    description:
      "깃을 세운 하이넥과 사선 지퍼 여밈의 슬림 바이커 실루엣입니다. 왼쪽 앞판 지퍼 옆을 따라 자개 장미 넝쿨이 밑단까지 흘러내리고, 등판 오른쪽 아래에서 한 송이 장미가 다시 피어납니다. 소매 끝 지퍼로 손목 실루엣을 조절할 수 있습니다.",
    stock: { S: 3, M: 4, L: 2 },
    sizeSpec: [
      { size: "S", shoulder: "33.5", chest: "41.5", sleeve: "59", length: "52.5" },
      { size: "M", shoulder: "35", chest: "44", sleeve: "60", length: "54" },
      { size: "L", shoulder: "36.5", chest: "46.5", sleeve: "61", length: "55.5" }
    ],
    fabricCare:
      "• 겉감: 블랙 스트레치 코튼 데님<br>• 디테일: 앞판 지퍼 라인·등판 하단 자개(나전) 장미 넝쿨 아트워크 · 비대칭 메인 지퍼 · 웰트 지퍼 포켓 2구 · 소매 끝 지퍼<br>• 세탁: 지퍼를 모두 잠그고 뒤집은 상태로 드라이클리닝 권장. 아트워크 부위는 직접 다림질하지 마십시오.",
    shippingInfo:
      "• 출고 일정: 영업일 기준 2–3일 이내 아틀리에 수트케이스 패키지 출고<br>• 배송비: 무료배송<br>• 교환/반품: 수령 후 7일 이내 가능"
  },
  plum_coat: {
    chapter: "ATELIER EDITION — WINTER PLUM",
    title: "설매 雪梅 ASYMMETRIC WOOL COAT",
    price: 1480000,
    usdPrice: 1140,
    image: "assets/plum-wool-coat-model-front.png?v=2",
    alt: "비대칭 여밈과 등판 슬릿 속에 자개 매화 문양을 수놓은 하이엔드 테일러드 울 코트",
    stockBadge: "ATELIER MADE-TO-ORDER",
    modelNote: "WOMEN 174cm (S 착용) · MEN 186cm (L 착용) · 젠더리스 아틀리에 테일러드 핏",
    description:
      "전통 동정과 겹여밈의 사선미를 현대적인 테일러링으로 재해석한 아틀리에 한정 피스입니다. 은은한 문양 조직감이 살아있는 블랙 울 원단 위에, 칼라 안쪽·앞여밈 경계·등판의 비대칭 맞주름(플리츠) 트임 속으로 영롱한 자개 매화가 걸음마다 모습을 드러냅니다.",
    stock: { S: 2, M: 2, L: 2 },
    sizeSpec: [
      { size: "S (Women 55 / Men 95)", shoulder: "44", chest: "50.5", sleeve: "60", length: "67" },
      { size: "M (Women 66 / Men 100)", shoulder: "47.5", chest: "54.5", sleeve: "62.5", length: "71" },
      { size: "L (Men 105)", shoulder: "50.5", chest: "58", sleeve: "64.5", length: "74.5" }
    ],
    fabricCare:
      "• 겉감: 버진 울 90%, 캐시미어 10% (전통 기하 문양 마이크로 자카드 직조)<br>• 안감: 비스코스 레이온 55%, 큐프라 45%<br>• 세공: 칼라 안쪽·사선 라펠·등판 슬릿 수작업 자개(나전) 매화 아트워크 인레이 및 무광 호른 버튼<br>• 관리: 반드시 명품 의류 전문점 단독 드라이클리닝만 가능합니다. 전용 우드 행거와 가먼트 백에 보관해 주십시오.",
    shippingInfo:
      "• 제작 및 출고: 아틀리에 장인 검수를 거쳐 주문 확정 후 영업일 기준 5–7일 이내 전용 하드케이스 및 가먼트 백 패키지로 안전하게 발송됩니다.<br>• 컨시어지 서비스: 소매 기장 등 미세 수선 상담이 필요하신 경우 주문서 요청사항에 남겨주시면 전담 테일러가 연락드립니다."
  }
};

const policies = {
  shipping: {
    title: "배송 및 교환 / 환불 안내",
    html: `
      <h4>1. 배송 안내</h4>
      <ul>
        <li><strong>전 품목 무료배송:</strong> 나전, 하나의 모든 컬렉션은 아틀리에 전용 패키지와 함께 무료로 배송됩니다.</li>
        <li><strong>출고 소요일:</strong> 일반 컬렉션(비상·역풍·송영·월계)은 주문 확정 후 영업일 기준 1–3일 이내 출고됩니다.</li>
        <li><strong>아틀리에 오더(설매 코트):</strong> 세공 검수 및 테일러링 마감 후 영업일 기준 5–7일 이내 출고됩니다.</li>
      </ul>
      <h4>2. 교환 및 반품 규정</h4>
      <ul>
        <li>상품 수령일로부터 <strong>7일 이내</strong> 고객센터 또는 주문 조회 메뉴를 통해 접수하실 수 있습니다.</li>
        <li>착용 흔적, 향수 냄새, 세탁, 자개/자수 디테일 훼손, 정품 택(Tag) 제거 시 교환 및 환불이 불가합니다.</li>
        <li>단순 변심에 의한 반품 시 초기 포장 상태를 유지해 주셔야 하며, 왕복 택배비(₩6,000)가 차감됩니다.</li>
      </ul>
    `
  },
  care: {
    title: "나전(자개) 아트워크 및 원단 관리 가이드",
    html: `
      <h4>빛을 오래 유지하는 방법</h4>
      <p>나전, 하나의 의류는 검은 원단 위에 특수 설계된 다층 자개광 필름과 고밀도 입체 자수 기법을 결합하여 제작됩니다.</p>
      <ul>
        <li><strong>세탁 방식:</strong> 아우터 및 울 코트류는 반드시 <strong>단독 드라이클리닝</strong>을 권장하며, 티셔츠/헨리넥 제품은 옷을 뒤집어 세탁망에 넣은 후 찬물 중성세제로 가볍게 단독 손세탁해 주십시오.</li>
        <li><strong>열 건조 금지:</strong> 고온 기계 건조기(Tumble Dry) 사용 시 자개 아트워크 층의 변형이나 수축이 발생할 수 있으므로 그늘에서 자연 건조해 주십시오.</li>
        <li><strong>다림질 주의:</strong> 자개 문양 및 자수 부위에 다리미 열판이 직접 닿지 않도록 반드시 천을 덧대어 저온 스팀으로 관리해 주십시오.</li>
      </ul>
    `
  },
  terms: {
    title: "이용약관 (Terms of Service)",
    html: `
      <h4>제1조 (목적)</h4>
      <p>본 약관은 나전, 하나(NAJEON, HANA)가 운영하는 온라인 스토어에서 제공하는 전자상거래 관련 서비스의 이용 조건 및 절차, 회원과 회사의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.</p>
      <h4>제2조 (주문 및 계약의 성립)</h4>
      <p>이용자는 스토어 내 정해진 양식에 따라 주문서를 작성·제출함으로써 구매 또는 프리오더를 신청하며, 회사가 주문번호를 발급하고 승낙 의사표시를 도달하게 한 시점에 계약이 성립합니다.</p>
      <h4>제3조 (지식재산권의 보호)</h4>
      <p>본 웹사이트에 게시된 모든 의류 디자인, 자개 문양 도안, 사진, 텍스트 및 로고("나전, 하나 / NAJEON, HANA")의 저작권은 회사에 귀속되며 무단 복제 및 상업적 도용을 금합니다.</p>
    `
  },
  privacy: {
    title: "개인정보처리방침 (Privacy Policy)",
    html: `
      <h4>1. 수집하는 개인정보 항목 및 목적</h4>
      <ul>
        <li><strong>주문 및 배송 처리:</strong> 이름, 연락처, 이메일, 배송지 주소</li>
        <li><strong>드롭 알림(뉴스레터) 발송:</strong> 이메일 주소</li>
      </ul>
      <h4>2. 보유 및 이용 기간</h4>
      <p>수집된 개인정보는 원칙적으로 목적 달성 시 지체 없이 파기하며, 전자상거래 등에서의 소비자보호에 관한 법률에 따라 계약·대금결제 및 재화 등의 공급에 관한 기록은 5년간 보관합니다.</p>
    `
  }
};

const i18nDict = {
  ko: {
    announcement_text: "ONLINE EXCLUSIVE · 2026 FIRST DROP & ATELIER PRE-ORDER",
    announcement_cta: "소식 받기",
    nav_lookup: "Order Lookup",
    hero_title: "빛은 움직일 때<br />완성된다.",
    hero_desc: "나전의 빛을 검은 옷 위에 옮깁니다.<br />정지된 전통에서, 움직이는 몸으로.",
    hero_cta: "컬렉션 보기",
    collection_title: "첫 번째 컬렉션",
    collection_desc: "전통 문양을 복제하지 않습니다.<br />빛과 여백, 움직임을 온라인 한정으로 선보입니다.",
    statement_title: "나전은 장식이 아니라,<br /><em>어둠 속에 빛을 심는 기술</em>이다.",
    statement_desc:
      "자개는 가만히 있을 때보다 움직일 때 살아납니다. 검은 표면에 숨어 있다가 각도가 바뀌는 순간 모습을 드러냅니다. 우리는 그 오래된 빛의 태도를 오늘의 실루엣 위에 옮깁니다.",
    statement_link: "빛을 만드는 방식",
    craft_title: "빛보다 먼저,<br />손의 시간이 있다.",
    craft_desc:
      "얇은 패각을 고르고, 검은 바탕 위에 한 조각씩 놓는 일. 완성된 빛 뒤에는 셀 수 없는 반복과 기다림이 있습니다. 나전, 하나는 그 손의 태도에서 출발합니다.",
    material_title: "화려함을<br />절제하는 방식.",
    material_desc:
      "깊은 검정은 빛을 감추고, 비대칭의 여백은 시선을 늦춥니다. 청록과 자주 사이를 오가는 차가운 광택은 착용자의 움직임에만 반응합니다.",
    mat_01: "검은 바탕 위의 최소한의 광택",
    mat_02: "몸을 따라 이어지는 비대칭 구도",
    mat_03: "각도에 따라 달라지는 자개광",
    chapters_title: "문양이 아닌 태도",
    ch_01: "익숙한 경계에서 벗어나는 움직임.",
    ch_02: "바람으로 더 선명한 형태를 얻는 힘.",
    ch_03: "앞과 뒤의 경계를 넘어 이어지는 생명.",
    newsletter_title: "새로운 빛은<br />인스타그램에서 먼저 공개됩니다.",
    newsletter_desc: "룩북, 제작 과정과 온라인 드롭 일정을 가장 먼저 전합니다.",
    newsletter_btn: "등록하기"
  },
  en: {
    announcement_text: "ONLINE EXCLUSIVE · 2026 FIRST DROP & WORLDWIDE SHIPPING",
    announcement_cta: "Get Notified",
    nav_lookup: "Order Lookup",
    hero_title: "Light completes<br />in motion.",
    hero_desc: "Translating the iridescence of Korean mother-of-pearl onto black silhouettes.<br />From still heritage to living movement.",
    hero_cta: "Explore Collection",
    collection_title: "The First Collection",
    collection_desc: "We do not reproduce ancient motifs.<br />Light, negative space, and motion—crafted exclusively online.",
    statement_title: "Nacre is not ornament;<br /><em>it is the craft of planting light in darkness.</em>",
    statement_desc:
      "Mother-of-pearl comes alive when in motion. Hidden against black lacquer, it reveals itself the moment the angle shifts. We translate that ancient attitude of light onto contemporary silhouettes.",
    statement_link: "How we shape light",
    craft_title: "Before the light,<br />there is the time of hands.",
    craft_desc:
      "Selecting paper-thin shells and placing them piece by piece upon deep black. Behind every gleam lies countless repetition and patience. NAJEON, HANA begins from that devotion.",
    material_title: "The discipline<br />of restraint.",
    material_desc:
      "Deep black conceals the glow, while asymmetric negative space slows the gaze. Cool iridescence shifting between cyan and violet responds only to the wearer's movement.",
    mat_01: "Minimal luster on deep matte black",
    mat_02: "Asymmetric flow following the body",
    mat_03: "Angle-reactive mother-of-pearl sheen",
    chapters_title: "Attitude, Not Motif",
    ch_01: "Movement breaking past familiar borders.",
    ch_02: "Strength sharpened against the wind.",
    ch_03: "Vitality extending beyond front and back.",
    newsletter_title: "New light is revealed<br />first on Instagram.",
    newsletter_desc: "Receive early access to lookbooks, craft archives, and online drop schedules.",
    newsletter_btn: "Subscribe"
  }
};

const STORAGE_KEYS = {
  CART: "najeon_hana_cart_v1",
  ORDERS: "najeon_hana_orders_v1",
  SUBSCRIBERS: "najeon_hana_subscribers_v1",
  LOCALE: "najeon_hana_locale_v1"
};

let currentLocale = localStorage.getItem(STORAGE_KEYS.LOCALE) || "ko";
let activeProduct = null;
let activeDialogSlides = [];
let activeDialogIndex = 0;
let activePromoDiscountRate = 0;
let cart = loadStorage(STORAGE_KEYS.CART, []);

function loadStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // ignore quota errors
  }
}

function formatPrice(krwAmount) {
  if (currentLocale === "en") {
    const usd = Math.round(krwAmount / 1300);
    return `$${usd.toLocaleString("en-US")}`;
  }
  return `₩${krwAmount.toLocaleString("ko-KR")}`;
}

const body = document.body;
const cartDrawer = document.querySelector(".cart-drawer");
const drawerBackdrop = document.querySelector(".drawer-backdrop");
const cartItems = document.querySelector(".cart-items");
const cartCount = document.querySelector(".cart-count");
const cartTotal = document.querySelector(".cart-total");
const dialog = document.querySelector(".product-dialog");
const checkoutDialog = document.querySelector(".checkout-dialog");
const lookupDialog = document.querySelector(".lookup-dialog");
const policyDialog = document.querySelector(".policy-dialog");
const toast = document.querySelector(".toast");
const localeBtn = document.querySelector(".locale");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hero = document.querySelector(".hero");
const heroImage = document.querySelector(".hero-image");
const materialVisual = document.querySelector(".material-visual");
const materialImage = materialVisual.querySelector("img");
const craftSection = document.querySelector(".craft-origin");
const craftImage = craftSection.querySelector("img");
const siteHeader = document.querySelector(".site-header");
const scrollProgress = document.querySelector(".scroll-progress");

if (!reducedMotion) {
  let ticking = false;
  const updateMotion = () => {
    const scrollY = window.scrollY;
    const scrollRange = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    scrollProgress.style.setProperty("--scroll-progress", String(Math.min(scrollY / scrollRange, 1)));
    const heroProgress = Math.min(scrollY / Math.max(hero.offsetHeight, 1), 1);
    heroImage.style.setProperty("--hero-shift", `${heroProgress * 34}px`);
    siteHeader.classList.toggle("floating", scrollY > hero.offsetHeight * 0.72);

    const materialRect = materialVisual.getBoundingClientRect();
    const materialProgress = Math.max(0, Math.min(1, (window.innerHeight - materialRect.top) / (window.innerHeight + materialRect.height)));
    materialImage.style.setProperty("--material-shift", `${-7 + materialProgress * 8}%`);

    const craftRect = craftSection.getBoundingClientRect();
    const craftProgress = Math.max(0, Math.min(1, (window.innerHeight - craftRect.top) / (window.innerHeight + craftRect.height)));
    craftImage.style.setProperty("--craft-shift", `${-1.5 + craftProgress * 3}%`);
    ticking = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateMotion);
        ticking = true;
      }
    },
    { passive: true }
  );
  updateMotion();

  window.addEventListener(
    "pointermove",
    event => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    },
    { passive: true }
  );

  document.querySelectorAll(".product-image-wrap").forEach(card => {
    card.addEventListener(
      "pointermove",
      event => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        card.style.setProperty("--my", `${event.clientY - rect.top}px`);
      },
      { passive: true }
    );
  });
} else {
  siteHeader.classList.remove("floating");
}

document.querySelectorAll("[data-scroll-to]").forEach(button => {
  button.addEventListener("click", () => document.getElementById(button.dataset.scrollTo)?.scrollIntoView({ behavior: "smooth" }));
});

/* Mobile Menu */
const menuButton = document.querySelector(".menu-trigger");
const mobileMenu = document.querySelector(".mobile-menu");
function closeMenu() {
  menuButton.classList.remove("open");
  mobileMenu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  mobileMenu.setAttribute("aria-hidden", "true");
}
menuButton.addEventListener("click", () => {
  const opening = !mobileMenu.classList.contains("open");
  menuButton.classList.toggle("open", opening);
  mobileMenu.classList.toggle("open", opening);
  menuButton.setAttribute("aria-expanded", String(opening));
  mobileMenu.setAttribute("aria-hidden", String(!opening));
});
mobileMenu.querySelectorAll("a, button").forEach(link => link.addEventListener("click", closeMenu));

/* Reveal Animations */
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal, .image-reveal, .scene-reveal").forEach(element => revealObserver.observe(element));

/* Category Filter Tabs */
const productGrid = document.querySelector(".product-grid");
const filterTabs = document.querySelectorAll(".filter-tab");
filterTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;
    filterTabs.forEach(t => {
      t.classList.toggle("active", t === tab);
      t.setAttribute("aria-selected", String(t === tab));
    });
    productGrid.classList.toggle("filtered", filter !== "all");
    document.querySelectorAll(".product-card").forEach(card => {
      const cats = (card.dataset.category || "").split(/\s+/);
      const match = filter === "all" || cats.includes(filter);
      card.classList.toggle("is-hidden", !match);
    });
  });
});

/* Language & Currency Toggle */
function applyLocale() {
  const dict = i18nDict[currentLocale] || i18nDict.ko;
  localeBtn.textContent = currentLocale === "ko" ? "KR / ₩" : "EN / $";
  const currencyNote = document.querySelector("[data-currency-note]");
  if (currencyNote) {
    currencyNote.textContent = currentLocale === "ko" ? "KRW (₩) · 무료배송" : "USD ($) · FREE WORLDWIDE SHIPPING";
  }
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.querySelectorAll("[data-price-product]").forEach(el => {
    const p = products[el.dataset.priceProduct];
    if (p) el.textContent = formatPrice(p.price);
  });
  renderCart();
  if (dialog.open && activeProduct) {
    dialog.querySelector(".dialog-price").textContent = formatPrice(products[activeProduct].price);
  }
}

localeBtn.addEventListener("click", () => {
  currentLocale = currentLocale === "ko" ? "en" : "ko";
  localStorage.setItem(STORAGE_KEYS.LOCALE, currentLocale);
  applyLocale();
  showToast(currentLocale === "ko" ? "한국어 (KRW ₩) 모드로 전환되었습니다." : "Switched to English (USD $).");
});

/* Product Detail Modal */
function renderDialogImage() {
  const activeSlide = activeDialogSlides[activeDialogIndex];
  const previewImage = activeSlide?.querySelector("img");
  const product = products[activeProduct];
  dialog.classList.toggle("show-product-only", Boolean(activeSlide?.classList.contains("product-only")));
  dialog.classList.toggle("show-light-bg", Boolean(activeSlide?.classList.contains("light-bg")));
  dialog.querySelector(".dialog-image img").src = previewImage?.src || product.image;
  dialog.querySelector(".dialog-image img").alt = previewImage?.alt || product.alt;
  dialog.querySelector(".dialog-gallery-count").textContent = `${String(activeDialogIndex + 1).padStart(2, "0")} / ${String(
    Math.max(activeDialogSlides.length, 1)
  ).padStart(2, "0")}`;
  dialog.classList.toggle("single-preview", activeDialogSlides.length <= 1);
}

function moveDialogImage(direction) {
  if (activeDialogSlides.length <= 1) return;
  activeDialogIndex = (activeDialogIndex + direction + activeDialogSlides.length) % activeDialogSlides.length;
  renderDialogImage();
}

function updateSizeStockHint() {
  if (!activeProduct) return;
  const product = products[activeProduct];
  const checkedInput = dialog.querySelector('input[name="size"]:checked');
  const size = checkedInput ? checkedInput.value : "M";
  const count = product.stock?.[size] ?? 3;
  const hintEl = dialog.querySelector(".size-stock-hint");
  if (count <= 2) {
    hintEl.textContent = `품절 임박 — 잔여 ${count}점 (Only ${count} left)`;
  } else {
    hintEl.textContent = `즉시 주문 가능 (잔여 ${count}점)`;
  }
}

function openDialog(productKey, previewSlide = null) {
  activeProduct = productKey;
  const product = products[productKey];
  activeDialogSlides = previewSlide ? [...previewSlide.closest(".product-card").querySelectorAll(".gallery-slide")] : [];
  activeDialogIndex = Math.max(0, activeDialogSlides.indexOf(previewSlide));
  renderDialogImage();

  dialog.querySelector(".dialog-chapter").textContent = product.chapter;
  dialog.querySelector(".dialog-stock-badge").textContent = product.stockBadge || "IN STOCK";
  dialog.querySelector(".dialog-title").textContent = product.title;
  dialog.querySelector(".dialog-description").textContent = product.description;
  dialog.querySelector(".dialog-model-note").textContent = product.modelNote || "";
  dialog.querySelector(".dialog-price").textContent = formatPrice(product.price);

  // Render Size Table
  const tbody = dialog.querySelector(".dialog-size-tbody");
  tbody.innerHTML = (product.sizeSpec || [])
    .map(
      row =>
        `<tr><td><strong>${row.size}</strong></td><td>${row.shoulder}</td><td>${row.chest}</td><td>${row.sleeve}</td><td>${row.length}</td></tr>`
    )
    .join("");

  dialog.querySelector(".dialog-fabric-care").innerHTML = product.fabricCare || "";
  dialog.querySelector(".dialog-shipping-info").innerHTML = product.shippingInfo || "";

  updateSizeStockHint();
  dialog.showModal();
}

dialog.querySelectorAll('input[name="size"]').forEach(input => {
  input.addEventListener("change", updateSizeStockHint);
});

document.querySelectorAll(".product-card").forEach(card => {
  card.querySelectorAll(".product-image-wrap").forEach(slide => {
    slide.addEventListener("click", () => openDialog(card.dataset.product, slide));
  });
});

/* Product Card Galleries */
document.querySelectorAll("[data-gallery]").forEach((gallery, galleryIndex) => {
  const track = gallery.querySelector(".gallery-track");
  const slides = [...gallery.querySelectorAll(".gallery-slide")];
  const count = gallery.querySelector(".gallery-count");
  const autoInterval = 3200;
  const initialDelay = 3000 + (galleryIndex % 3) * 1100;
  const resumeDelay = 2600 + (galleryIndex % 3) * 650;
  let activeIndex = 0;
  let scrollFrame = null;
  let autoTimer = null;
  let resumeTimer = null;

  const updateCount = () => {
    activeIndex = Math.max(0, Math.min(slides.length - 1, Math.round(track.scrollLeft / Math.max(track.clientWidth, 1))));
    count.textContent = `${String(activeIndex + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    scrollFrame = null;
  };

  const move = direction => {
    if (!track.clientWidth) return;
    const next = (activeIndex + direction + slides.length) % slides.length;
    const wrapping = (direction > 0 && activeIndex === slides.length - 1) || (direction < 0 && activeIndex === 0);
    if (wrapping) {
      track.classList.add("is-jumping");
      track.scrollTo({ left: next * track.clientWidth, behavior: "instant" });
      activeIndex = next;
      updateCount();
      window.requestAnimationFrame(() => window.requestAnimationFrame(() => track.classList.remove("is-jumping")));
      return;
    }
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  };

  const stopAuto = () => {
    window.clearTimeout(autoTimer);
    window.clearTimeout(resumeTimer);
  };

  const scheduleAuto = (delay = autoInterval) => {
    window.clearTimeout(autoTimer);
    if (reducedMotion || document.hidden) return;
    autoTimer = window.setTimeout(() => {
      move(1);
      scheduleAuto(autoInterval);
    }, delay);
  };

  const pauseAndResume = () => {
    stopAuto();
    if (reducedMotion) return;
    resumeTimer = window.setTimeout(() => scheduleAuto(autoInterval), resumeDelay);
  };

  gallery.querySelector(".gallery-prev").addEventListener("click", () => {
    move(-1);
    pauseAndResume();
  });
  gallery.querySelector(".gallery-next").addEventListener("click", () => {
    move(1);
    pauseAndResume();
  });
  track.addEventListener("pointerdown", pauseAndResume, { passive: true });
  gallery.addEventListener("pointerenter", stopAuto);
  gallery.addEventListener("pointerleave", () => scheduleAuto(1400 + (galleryIndex % 3) * 500));
  track.addEventListener(
    "scroll",
    () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(updateCount);
    },
    { passive: true }
  );
  window.addEventListener("resize", () => track.scrollTo({ left: activeIndex * track.clientWidth }), { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopAuto();
    else scheduleAuto(initialDelay);
  });
  updateCount();
  scheduleAuto(initialDelay);
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
document.querySelector(".dialog-gallery-prev").addEventListener("click", () => moveDialogImage(-1));
document.querySelector(".dialog-gallery-next").addEventListener("click", () => moveDialogImage(1));

function setupBackdropClose(modalEl) {
  modalEl.addEventListener("click", event => {
    if (event.target === modalEl) modalEl.close();
  });
}
[dialog, checkoutDialog, lookupDialog, policyDialog].forEach(setupBackdropClose);

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

/* Cart Logic with Quantity & localStorage */
function addItemToCart(productKey, size) {
  const existing = cart.find(item => item.key === productKey && item.size === size);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ key: productKey, size, qty: 1 });
  }
  saveStorage(STORAGE_KEYS.CART, cart);
  renderCart();
}

function getCartSubtotal() {
  return cart.reduce((sum, item) => {
    const product = products[item.key];
    return sum + (product ? product.price * (item.qty || 1) : 0);
  }, 0);
}

function getCartTotalCount() {
  return cart.reduce((sum, item) => sum + (item.qty || 1), 0);
}

function renderCart() {
  // Clean up any invalid product keys from old storage
  cart = cart.filter(item => Boolean(products[item.key]));
  cartCount.textContent = getCartTotalCount();
  cartTotal.textContent = formatPrice(getCartSubtotal());

  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty-cart">아직 담긴 빛이 없습니다.</p>';
    return;
  }

  cartItems.innerHTML = cart
    .map((item, index) => {
      const product = products[item.key];
      const qty = item.qty || 1;
      return `<article class="cart-item">
        <img src="${product.image}" alt="${product.title}" />
        <div>
          <h3>${product.title}</h3>
          <p>SIZE ${item.size}</p>
          <div class="cart-qty-row" aria-label="수량 조절">
            <button type="button" class="qty-btn" data-qty-dec="${index}" aria-label="수량 감소">−</button>
            <span class="qty-val">${qty}</span>
            <button type="button" class="qty-btn" data-qty-inc="${index}" aria-label="수량 증가">+</button>
          </div>
        </div>
        <div class="cart-item-right">
          <strong>${formatPrice(product.price * qty)}</strong>
          <button type="button" class="cart-remove-btn" data-remove="${index}">Remove</button>
        </div>
      </article>`;
    })
    .join("");

  cartItems.querySelectorAll("[data-qty-dec]").forEach(btn =>
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.qtyDec);
      if ((cart[idx].qty || 1) > 1) {
        cart[idx].qty -= 1;
      } else {
        cart.splice(idx, 1);
      }
      saveStorage(STORAGE_KEYS.CART, cart);
      renderCart();
    })
  );

  cartItems.querySelectorAll("[data-qty-inc]").forEach(btn =>
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.qtyInc);
      cart[idx].qty = (cart[idx].qty || 1) + 1;
      saveStorage(STORAGE_KEYS.CART, cart);
      renderCart();
    })
  );

  cartItems.querySelectorAll("[data-remove]").forEach(button =>
    button.addEventListener("click", () => {
      cart.splice(Number(button.dataset.remove), 1);
      saveStorage(STORAGE_KEYS.CART, cart);
      renderCart();
    })
  );
}

function openCart() {
  cartDrawer.classList.add("open");
  drawerBackdrop.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  body.classList.add("locked");
}
function closeCart() {
  cartDrawer.classList.remove("open");
  drawerBackdrop.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  body.classList.remove("locked");
}

document.querySelector(".cart-trigger").addEventListener("click", openCart);
document.querySelector(".drawer-close").addEventListener("click", closeCart);
drawerBackdrop.addEventListener("click", closeCart);

document.querySelector(".add-to-bag").addEventListener("click", () => {
  if (!activeProduct) return;
  const size = dialog.querySelector('input[name="size"]:checked').value;
  addItemToCart(activeProduct, size);
  dialog.close();
  showToast("장바구니에 담았습니다.");
  window.setTimeout(openCart, 300);
});

document.querySelector(".buy-now-btn").addEventListener("click", () => {
  if (!activeProduct) return;
  const size = dialog.querySelector('input[name="size"]:checked').value;
  addItemToCart(activeProduct, size);
  dialog.close();
  openCheckoutModal();
});

/* Checkout / Order Form Flow */
const checkoutForm = document.getElementById("checkout-form");
const orderCompleteView = document.querySelector(".order-complete-view");
const promoInput = document.getElementById("promo-input");
const promoFeedback = document.querySelector(".promo-feedback");

function renderCheckoutSummary() {
  const listEl = document.querySelector(".checkout-items-list");
  const subtotal = getCartSubtotal();
  const discount = Math.round(subtotal * activePromoDiscountRate);
  const finalTotal = Math.max(0, subtotal - discount);

  listEl.innerHTML = cart
    .map(item => {
      const p = products[item.key];
      const qty = item.qty || 1;
      return `<div class="co-item">
        <span>${p.title} (${item.size}) × ${qty}</span>
        <strong>${formatPrice(p.price * qty)}</strong>
      </div>`;
    })
    .join("");

  document.querySelector(".co-subtotal").textContent = formatPrice(subtotal);
  document.querySelector(".co-discount").textContent = discount > 0 ? `-${formatPrice(discount)}` : formatPrice(0);
  document.querySelector(".co-total").textContent = formatPrice(finalTotal);
}

function openCheckoutModal() {
  if (!cart.length) {
    showToast("장바구니에 담긴 상품이 없습니다.");
    return;
  }
  closeCart();
  activePromoDiscountRate = 0;
  promoInput.value = "";
  promoFeedback.textContent = "";
  checkoutForm.hidden = false;
  orderCompleteView.hidden = true;
  renderCheckoutSummary();
  checkoutDialog.showModal();
}

document.querySelector(".checkout-trigger").addEventListener("click", openCheckoutModal);
document.querySelectorAll("[data-close-checkout]").forEach(btn => btn.addEventListener("click", () => checkoutDialog.close()));

document.getElementById("apply-promo-btn").addEventListener("click", () => {
  const code = promoInput.value.trim().toUpperCase();
  if (code === "FIRSTLIGHT" || code === "NAJEON10") {
    activePromoDiscountRate = 0.1;
    promoFeedback.textContent = "첫 번째 컬렉션 10% 프로모션 혜택이 적용되었습니다.";
  } else if (!code) {
    activePromoDiscountRate = 0;
    promoFeedback.textContent = "프로모션 코드를 입력해 주세요.";
  } else {
    activePromoDiscountRate = 0;
    promoFeedback.textContent = "유효하지 않은 코드입니다. (사용 가능 코드: FIRSTLIGHT)";
  }
  renderCheckoutSummary();
});

checkoutForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!cart.length) return;

  const formData = new FormData(checkoutForm);
  const subtotal = getCartSubtotal();
  const discount = Math.round(subtotal * activePromoDiscountRate);
  const total = Math.max(0, subtotal - discount);

  const now = new Date();
  const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  const randomPart = Math.floor(1000 + Math.random() * 9000);
  const orderId = `NH-${datePart}-${randomPart}`;

  const orderRecord = {
    orderId,
    createdAt: now.toLocaleString("ko-KR"),
    customerName: String(formData.get("customerName") || "").trim(),
    customerPhone: String(formData.get("customerPhone") || "").trim(),
    customerEmail: String(formData.get("customerEmail") || "").trim(),
    address: `(${formData.get("zipCode")}) ${formData.get("address1")} ${formData.get("address2")}`,
    deliveryNote: String(formData.get("deliveryNote") || "").trim(),
    items: cart.map(item => ({
      title: products[item.key].title,
      size: item.size,
      qty: item.qty || 1,
      price: products[item.key].price
    })),
    totalKrw: total,
    status: "주문/예약 접수 완료 (컨시어지 확인 중)"
  };

  const orders = loadStorage(STORAGE_KEYS.ORDERS, []);
  orders.unshift(orderRecord);
  saveStorage(STORAGE_KEYS.ORDERS, orders);

  // Clear cart
  cart = [];
  saveStorage(STORAGE_KEYS.CART, cart);
  renderCart();

  // Populate receipt view
  document.querySelector(".receipt-id").textContent = orderRecord.orderId;
  document.querySelector(".receipt-customer").textContent = `${orderRecord.customerName} / ${orderRecord.customerPhone}`;
  document.querySelector(".receipt-address").textContent = orderRecord.address;
  document.querySelector(".receipt-items").textContent = orderRecord.items.map(i => `${i.title} (${i.size}) × ${i.qty}`).join(", ");
  document.querySelector(".receipt-total").textContent = formatPrice(orderRecord.totalKrw);

  checkoutForm.reset();
  checkoutForm.hidden = true;
  orderCompleteView.hidden = false;
  showToast(`주문번호 ${orderId} 접수가 완료되었습니다.`);
});

/* Guest Order Lookup Modal */
const lookupForm = document.getElementById("lookup-form");
const lookupResults = document.querySelector(".lookup-results");

function renderOrderLookupList(orders, emptyMessage) {
  if (!orders.length) {
    lookupResults.innerHTML = `<p class="empty-cart">${emptyMessage}</p>`;
    return;
  }
  lookupResults.innerHTML = orders
    .map(
      o => `<article class="lookup-card">
        <div class="lookup-card-head">
          <strong>${o.orderId}</strong>
          <span>${o.createdAt}</span>
        </div>
        <div><strong>상태:</strong> ${o.status}</div>
        <div><strong>주문자:</strong> ${o.customerName} (${o.customerPhone})</div>
        <div><strong>배송지:</strong> ${o.address}</div>
        <div><strong>품목:</strong> ${o.items.map(i => `${i.title} (${i.size}) × ${i.qty}`).join(", ")}</div>
        <div><strong>결제 예정 금액:</strong> ${formatPrice(o.totalKrw)}</div>
      </article>`
    )
    .join("");
}

document.querySelectorAll("[data-open-lookup]").forEach(btn => {
  btn.addEventListener("click", () => {
    const allOrders = loadStorage(STORAGE_KEYS.ORDERS, []);
    renderOrderLookupList(allOrders.slice(0, 3), "아직 이 브라우저에서 접수된 주문 내역이 없습니다.");
    lookupDialog.showModal();
  });
});

document.querySelectorAll("[data-close-lookup]").forEach(btn => btn.addEventListener("click", () => lookupDialog.close()));

lookupForm.addEventListener("submit", event => {
  event.preventDefault();
  const q = String(new FormData(lookupForm).get("query") || "")
    .trim()
    .toLowerCase()
    .replace(/-/g, "");
  const allOrders = loadStorage(STORAGE_KEYS.ORDERS, []);
  const matched = allOrders.filter(
    o =>
      o.orderId.toLowerCase().replace(/-/g, "").includes(q) ||
      o.customerPhone.replace(/-/g, "").includes(q) ||
      o.customerName.toLowerCase().includes(q)
  );
  renderOrderLookupList(matched, "일치하는 주문번호 또는 연락처 내역을 찾을 수 없습니다.");
});

/* Policy & Guide Modal */
document.querySelectorAll("[data-open-policy]").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.openPolicy;
    const data = policies[key];
    if (!data) return;
    policyDialog.querySelector(".policy-title").textContent = data.title;
    policyDialog.querySelector(".policy-body").innerHTML = data.html;
    policyDialog.showModal();
  });
});

document.querySelectorAll("[data-close-policy]").forEach(btn => btn.addEventListener("click", () => policyDialog.close()));

/* Newsletter Subscription with localStorage persistence */
document.querySelector(".signup-form").addEventListener("submit", event => {
  event.preventDefault();
  const email = String(new FormData(event.currentTarget).get("email") || "").trim();
  if (!email) return;
  const subs = loadStorage(STORAGE_KEYS.SUBSCRIBERS, []);
  const already = subs.includes(email.toLowerCase());
  if (!already) {
    subs.push(email.toLowerCase());
    saveStorage(STORAGE_KEYS.SUBSCRIBERS, subs);
  }
  document.querySelector(".form-note").textContent = already
    ? `${email} — 이미 첫 번째 빛의 명단에 등록되어 있습니다.`
    : `${email} — 첫 번째 빛의 명단에 등록되었습니다. (프로모션 코드: FIRSTLIGHT)`;
  event.currentTarget.reset();
});

document.addEventListener("keydown", event => {
  if (dialog.open && event.key === "ArrowLeft") moveDialogImage(-1);
  if (dialog.open && event.key === "ArrowRight") moveDialogImage(1);
  if (event.key === "Escape") {
    closeCart();
    closeMenu();
  }
});

applyLocale();
