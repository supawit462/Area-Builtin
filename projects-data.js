/*
  All projects, used by:
  - the photo gallery on both pages (gallery.js)
  - the "ผลงานทั้งหมด" page (projects.html), which builds its cards from this list

  Fields:
    id      matches data-gallery="..." on the homepage cards (p1–p9)
    cat     "interior" or "renovate" (the filter buttons on projects.html)
    tag     small label above the title
    mock    true = example project, shows the "ตัวอย่าง Mock-up" badge
    photos  first photo is the card cover. Use your own paths (e.g. "images/grand-rama2/01.jpg")
            or Unsplash photo ids.
*/
window.AREA_PROJECTS = [
  {
    id: 'p1', cat: 'interior', tag: 'บ้านเดี่ยว',
    title: 'The Grand Rama 2', th: 'เดอะ แกรนด์ พระราม 2',
    desc: 'งานบิวท์อินบ้านเดี่ยวหรูหรา จัดสรรพื้นที่กว้างขวางให้ทรงคุณค่า ตกแต่งด้วยคิ้วบัวและวัสดุพรีเมียม ตอบโจทย์ครอบครัวใหญ่',
    photos: ['photo-1600210492486-724fe5c67fb0', 'photo-1600585154340-be6161a56a0c', 'photo-1600566753190-17f0baa2a6c3', 'photo-1616486338812-3dadae4b4ace', 'photo-1600607687939-ce8a6c25118c']
  },
  {
    id: 'p2', cat: 'interior', tag: 'Super Luxury Condo',
    title: 'Hyde Heritage Thonglor', th: 'ไฮด์ เฮอริเทจ ทองหล่อ',
    desc: 'คอนโด Super Luxury ใจกลางเมือง ออกแบบเฟอร์นิเจอร์ Custom-made ใช้พื้นที่จำกัดให้เกิดประโยชน์สูงสุด รังสรรค์ความหรูหราเหนือระดับ',
    photos: ['photo-1618221195710-dd6b41faaea6', 'photo-1616594039964-ae9021a400a0', 'photo-1600121848594-d8644e57abab', 'photo-1631679706909-1844bbd07221', 'photo-1615529182904-14819c35db37']
  },
  {
    id: 'p3', cat: 'interior', tag: 'Urban Condo',
    title: 'Ideo Rama 9 - Asoke', th: 'ไอดีโอ พระราม 9 - อโศก',
    desc: 'คอนโดมิเนียมสไตล์คนเมือง ปรับโฉมทันสมัยด้วยดีไซน์สะอาดตา เพิ่มระบบ Smart Storage จัดเก็บของอย่างเป็นระเบียบ',
    photos: ['photo-1600607687939-ce8a6c25118c', 'photo-1556912173-3bb406ef7e77', 'photo-1505693416388-ac5ce068fe85', 'photo-1617806118233-18e1de247200', 'photo-1484154218962-a197022b5858']
  },
  {
    id: 'p4', cat: 'interior', tag: 'Warm Natural',
    title: 'Park Origin Chula - Samyan', th: 'พาร์ค ออริจิ้น จุฬา-สามย่าน',
    desc: 'ออกแบบเน้นความอบอุ่นผ่อนคลาย ใช้วัสดุลายไม้โทนธรรมชาติ คลุมโทนทั้งห้องให้เป็นพื้นที่พักผ่อนที่สมบูรณ์แบบ',
    photos: ['photo-1586023492125-27b2c045efd7', 'photo-1615529182904-14819c35db37', 'photo-1616486338812-3dadae4b4ace', 'photo-1505693416388-ac5ce068fe85', 'photo-1600566752355-35792bedcfea']
  },
  {
    id: 'p5', cat: 'interior', tag: 'Kitchen', mock: true,
    title: 'Modern Luxury Kitchen', th: 'ห้องครัวบิวท์อินโมเดิร์นลักชัวรี',
    desc: 'ครัวบิวท์อินพร้อมไอส์แลนด์ท็อปหิน ตู้สูงจรดฝ้า ซ่อนเครื่องใช้ไฟฟ้าอย่างแนบเนียน ใช้งานง่ายและดูแลรักษาสะดวก',
    photos: ['photo-1600566753190-17f0baa2a6c3', 'photo-1556912173-3bb406ef7e77', 'photo-1484154218962-a197022b5858', 'photo-1600573472550-8090b5e0745e', 'photo-1600607687939-ce8a6c25118c']
  },
  {
    id: 'p6', cat: 'interior', tag: 'Bedroom', mock: true,
    title: 'Master Bedroom Retreat', th: 'ห้องนอนมาสเตอร์สไตล์โรงแรมหรู',
    desc: 'หัวเตียงบุผ้าพร้อมไฟซ่อน ตู้เสื้อผ้าบานสูงโทนเรียบหรู สร้างบรรยากาศผ่อนคลายเหมือนพักในโรงแรม 5 ดาว',
    photos: ['photo-1631679706909-1844bbd07221', 'photo-1505693416388-ac5ce068fe85', 'photo-1616594039964-ae9021a400a0', 'photo-1600121848594-d8644e57abab', 'photo-1618221195710-dd6b41faaea6']
  },
  {
    id: 'p7', cat: 'interior', tag: 'Natural Wood', mock: true,
    title: 'Natural Wood House', th: 'บ้านไม้จริงโทนธรรมชาติ',
    desc: 'บ้านอารมณ์คาเฟ่อบอุ่น ใช้ไม้จริงทั้งหลังผสานงานบิวท์อิน ให้ความรู้สึกเป็นธรรมชาติ ผ่อนคลายทุกมุมของบ้าน',
    photos: ['photo-1617806118233-18e1de247200', 'photo-1586023492125-27b2c045efd7', 'photo-1600566752355-35792bedcfea', 'photo-1615529182904-14819c35db37', 'photo-1600047509807-ba8f99d2cdde']
  },
  {
    id: 'p8', cat: 'renovate', tag: 'Renovation', mock: true,
    title: 'Home Renovation & Extension', th: 'รีโนเวทและต่อเติมบ้าน',
    desc: 'ปรับปรุงบ้านเก่าให้กลับมาสวยใหม่ ต่อเติมพื้นที่ใช้สอยเพิ่ม พร้อมควบคุมงานโครงสร้างและงานระบบจบในที่เดียว',
    photos: ['photo-1600585154526-990dced4db0d', 'photo-1600585154340-be6161a56a0c', 'photo-1600047509807-ba8f99d2cdde', 'photo-1600573472550-8090b5e0745e', 'photo-1600566752355-35792bedcfea']
  },
  {
    id: 'p9', cat: 'renovate', tag: 'Landscape', mock: true,
    title: 'Garden & Landscape', th: 'งานจัดสวนรอบบ้าน',
    desc: 'ออกแบบสวนและพื้นที่รอบบ้านให้สวยงามและใช้งานได้จริง เลือกพรรณไม้ที่ดูแลง่าย เชื่อมพื้นที่ภายในกับธรรมชาติภายนอก',
    photos: ['photo-1558904541-efa843a96f01', 'photo-1600585154340-be6161a56a0c', 'photo-1600047509807-ba8f99d2cdde', 'photo-1600585154526-990dced4db0d', 'photo-1600573472550-8090b5e0745e']
  },

  // ----- Extra example projects (shown on projects.html only) -----
  {
    id: 'p10', cat: 'renovate', tag: 'Townhome Renovation', mock: true,
    title: 'Townhome Full Renovation', th: 'รีโนเวททาวน์โฮมเก่าทั้งหลัง',
    desc: 'ปรับปรุงทาวน์โฮมอายุกว่า 20 ปี รื้อผนังเปิดพื้นที่ให้โปร่ง เปลี่ยนงานระบบไฟและประปาใหม่ทั้งหมด พร้อมบิวท์อินทั้งหลัง',
    photos: ['photo-1484101403633-562f891dc89a', 'photo-1502672260266-1c1ef2d93688', 'photo-1560448204-e02f11c3d0e2', 'photo-1522708323590-d24dbb6b0267', 'photo-1493809842364-78817add7ffb']
  },
  {
    id: 'p11', cat: 'renovate', tag: 'Home Extension', mock: true,
    title: 'Backyard Kitchen Extension', th: 'ต่อเติมครัวหลังบ้าน',
    desc: 'ต่อเติมครัวไทยหลังบ้านด้วยโครงสร้างที่แข็งแรง แยกฐานรากไม่ให้ทรุดตามตัวบ้าน พร้อมเคาน์เตอร์ปูนและระบบระบายอากาศ',
    photos: ['photo-1556912173-3bb406ef7e77', 'photo-1600566753190-17f0baa2a6c3', 'photo-1484154218962-a197022b5858', 'photo-1600573472550-8090b5e0745e', 'photo-1560448204-e02f11c3d0e2']
  },
  {
    id: 'p12', cat: 'renovate', tag: 'Bathroom Renovation', mock: true,
    title: 'Luxury Bathroom Makeover', th: 'รีโนเวทห้องน้ำสไตล์โรงแรม',
    desc: 'เปลี่ยนห้องน้ำเก่าเป็นห้องน้ำโทนหินอ่อน แยกโซนเปียก-แห้ง ทำกันซึมใหม่ทั้งหมด พร้อมตู้บิวท์อินใต้อ่างและกระจกไฟ LED',
    photos: ['photo-1552321554-5fefe8c9ef14', 'photo-1584622650111-993a426fbf0a', 'photo-1600566752355-35792bedcfea', 'photo-1600573472550-8090b5e0745e', 'photo-1600607687939-ce8a6c25118c']
  },
  {
    id: 'p13', cat: 'renovate', tag: 'Facade Renovation', mock: true,
    title: 'Modern Facade Upgrade', th: 'ปรับโฉมหน้าบ้านสไตล์โมเดิร์น',
    desc: 'ปรับภาพลักษณ์หน้าบ้านทั้งหลัง เปลี่ยนวัสดุผนัง ระแนง และประตูหน้าต่าง พร้อมจัดแสงไฟภายนอกให้บ้านโดดเด่นทั้งกลางวันและกลางคืน',
    photos: ['photo-1600596542815-ffad4c1539a9', 'photo-1564013799919-ab600027ffc6', 'photo-1580587771525-78b9dba3b914', 'photo-1613490493576-7fde63acd811', 'photo-1512917774080-9991f1c4c750']
  },
  {
    id: 'p14', cat: 'interior', tag: 'Kids Room', mock: true,
    title: 'Playful Kids Bedroom', th: 'ห้องนอนเด็กบิวท์อิน',
    desc: 'ออกแบบห้องนอนเด็กให้เติบโตไปพร้อมกัน เตียงบิวท์อินพร้อมลิ้นชักเก็บของ มุมอ่านหนังสือ และวัสดุขอบมนปลอดภัย',
    photos: ['photo-1586105251261-72a756497a11', 'photo-1540518614846-7eded433c457', 'photo-1505693416388-ac5ce068fe85', 'photo-1616594039964-ae9021a400a0', 'photo-1522708323590-d24dbb6b0267']
  },
  {
    id: 'p15', cat: 'interior', tag: 'Living Room', mock: true,
    title: 'Built-in TV Wall & Living', th: 'ผนังทีวีบิวท์อินและห้องนั่งเล่น',
    desc: 'ผนังทีวีบิวท์อินผสมหินและไม้ ซ่อนสายไฟและอุปกรณ์ทั้งหมด พร้อมชั้นโชว์ไฟซ่อน เปลี่ยนห้องนั่งเล่นให้หรูขึ้นทันที',
    photos: ['photo-1493809842364-78817add7ffb', 'photo-1484101403633-562f891dc89a', 'photo-1502672260266-1c1ef2d93688', 'photo-1616486338812-3dadae4b4ace', 'photo-1600210492486-724fe5c67fb0']
  }
];

// Builds an image URL: your own paths are used as-is, Unsplash ids get a sized URL.
window.AREA_IMG = (src, w) => (/^(https?:|\/|\.|images\/)/.test(src)
  ? src
  : `https://images.unsplash.com/${src}?auto=format&fit=crop&w=${w}&q=80`);
