export interface Product {
  id: string; sku: string; name: string; slug: string; manufacturer: string;
  category: string; type: string; description: string; images: string[];
  specifications: Record<string, string>; publishedPrice?: number;
  variants?: string[]; documentation?: { label: string; url: string }[]; source: string;
}
export const company = {
  name: 'Pacific Northwest X-Ray Inc.', phone: '503-667-3000', tollFree: '800-827-9729',
  email: 'SalesD@pnwx.com', fax: '503-666-8855', address: 'P.O. Box 625, Gresham, OR 97030, U.S.A.',
  hours: 'Monday–Friday, 8am–5pm Pacific', legacy: 'https://www.pnwx.com/',
  orderForm: 'https://www.pnwx.com/PNWX-OrderForm.pdf',
};
const base = company.legacy;
const revolution = 'Accessories/LeadProducts/Aprons/Infab/Revolution/';
export const categories = [
  { id: 'radiation-protection', name: 'Radiation Protection', description: 'Protective aprons, eyewear, barriers and shielding.', source: base+'Accessories/LeadProducts/', image: base+revolution+'ElasticBackFullWrap/603-S-RL_1.jpg', subcategories: ['Aprons', 'Eyewear', 'Thyroid collars', 'Mobile barriers'] },
  { id: 'imaging-accessories', name: 'Imaging Accessories', description: 'Cassette holders, covers and storage for imaging.', source: base+'Accessories/Cassettes/', image: base+'Accessories/Cassettes/Holders/MCH-40_1.jpg', subcategories: ['Plate holders', 'Cassette covers', 'Cassette racks'] },
  { id: 'quality-assurance', name: 'Quality Assurance & Phantoms', description: 'Resolution patterns and imaging test tools.', source: base+'Accessories/Phantoms/', image: base+'Accessories/Phantoms/Test/LinePair/05-401_1.jpg', subcategories: ['Resolution patterns', 'Focal spot patterns', 'Training phantoms'] },
  { id: 'patient-positioning', name: 'Patient Positioning', description: 'Merchant boards and patient positioning aids.', source: base+'Accessories/PatAsst/', image: base+'Accessories/PatAsst/MerchantBoards/1104-C3a_1.jpg', subcategories: ['Merchant boards', 'Table pads', 'Positioning aids'] },
];
const apronData = [
  ['603','Elastic Back Full Wrap Apron','ElasticBackFullWrap','603-S-RL',1265,'S, M, L, XL','Unisex full-wrap apron with elastic back and Cool Wear moisture-wicking lining.'],
  ['103','Revolution Premium Vest & Skirt','VestSkirt','103M-S-RL',1160,'S, M, L, XL','Two-piece Revolution Premium vest and skirt with interior pockets and Cool Wear lining.'],
  ['303','Hook-n-Loop Frontal Apron','HooknLoopFrontal','303M-S-RL',689,'S, M, L, XL','Frontal apron with hook-and-loop fastening straps and Cool Wear moisture-wicking lining.'],
  ['703','Full Overlap Lumbar Vest & Skirt','FullOverlapVestSkirt','703F-XS-RL',1355,'XS, S, M, L, XL','Full overlap vest and skirt with a built-in Black Belt for lumbar support.'],
  ['403','Elastic Back Frontal Apron','ElasticBackFrontal','403M-S-RL',815,'S, M, L, XL','Elastic back frontal apron with hook-and-loop fastening and Cool Wear lining.'],
  ['L103','Lumbar Vest & Skirt','LumbarVestSkirt','L103F-XS-RL',1350,'S, M, L, XL','Revolution vest and skirt with a built-in Black Belt in the vest.'],
  ['503','Frontal Black Belt Apron','FrontalBlackBelt','503M-S-RL',750,'S, M, L, XL','Frontal apron with a six-inch orthopedic elastic belt and built-in back strap.'],
  ['903','Reverse Vest & Skirt','ReverseVestSkirt','903M',1265,'XS, S, M, L, XL','Two-piece design with left shoulder drop-away closure and elastic back.'],
] as const;
const aprons: Product[] = apronData.map(([sku,name,path,image,price,sizes,description]) => ({
  id:sku, sku, name, slug: sku.toLowerCase()+'-'+path.toLowerCase(), manufacturer:'Infab', category:'radiation-protection', type:'Aprons', description,
  source:base+revolution+path+'/', images:[base+revolution+path+'/'+image+'_1.jpg',base+revolution+path+'/'+image+'_2.jpg'],
  publishedPrice:price, specifications:{'Available sizes':sizes,'Core in published price':'KiArmor lead-free'}, variants:sizes.split(', '),
}));
const patternData = [
  ['05-401','Pro-Res RF BarType 1','50 × 50 mm','0.6–5.0', '20','3','0.05',1050],
  ['05-402','Pro-Res RF BarType 2','57 × 47 mm','0.5–5.0','21','5','0.1',995],
  ['05-403','Pro-Res RF BarType 3','57 × 47 mm','0.5–14.3','30','5','0.05',1195],
  ['05-404','Pro-Res RF BarType 4','110 × 40 mm','1.0–4.86','16','5','0.1',865],
  ['05-408','Pro-Res RF BarType 5','50 × 50 mm','0.6–5.0','20','3','0.01',999],
  ['05-410','Pro-Res RF BarType 6','57 × 47 mm','0.5–5.0','21','5','0.05',916],
] as const;
const patterns: Product[] = patternData.map(([sku,name,size,range,groups,bars,thickness,price])=>({id:sku,sku,name,slug:sku,manufacturer:'Pro-Project',category:'quality-assurance',type:'Resolution patterns',description:'Bar-type resolution test pattern for evaluating imaging system resolution. Custom pattern requirements can be discussed with the sales team.',images:[base+'Accessories/Phantoms/Test/LinePair/05-401_1.jpg'],source:base+'Accessories/Phantoms/Test/LinePair/',publishedPrice:price,specifications:{'Physical size':size,'Line pairs/mm':range,'Number of groups':groups,'Bars per group':bars,'Lead thickness':thickness+' mm','Image note':'Source image represents this product family.'}}));
export const products: Product[] = [...aprons,
  {id:'1104-C3a',sku:'1104-C3a',name:'Merchant Board for DR Panels',slug:'1104-c3a-merchant-board',manufacturer:'PNWX',category:'patient-positioning',type:'Merchant boards',description:'Solid-box-design Merchant board with dual removable aluminum side arms and adjustable depth stops. Specify your panel dimensions when ordering.',images:[base+'Accessories/PatAsst/MerchantBoards/1104-C3a_1.jpg',base+'Accessories/PatAsst/MerchantBoards/1104-C3a_2.jpg',base+'Accessories/PatAsst/MerchantBoards/1104-C3a_3.jpg'],source:base+'Accessories/PatAsst/MerchantBoards/',publishedPrice:2296,specifications:{'Angle':'Fixed 45°','Box height':'29 inches','Box depth':'18 inches','Approximate width':'20 inches','Panel thickness':'Up to 1¼ inches','Panel positioning':'8 or 12 inches down the slope'}},
  {id:'1104',sku:'1104',name:'Light Duty Merchant Board',slug:'1104-merchant-board',manufacturer:'PNWX',category:'patient-positioning',type:'Merchant boards',description:'Solid oak Merchant board with a laminate top and adjustable tilting section. Suitable for CR and film cassettes; not suitable for DR panels.',images:[base+'Accessories/PatAsst/MerchantBoards/1104_1.jpg',base+'Accessories/PatAsst/MerchantBoards/1104_2.jpg'],source:base+'Accessories/PatAsst/MerchantBoards/',publishedPrice:1375,specifications:{'Tabletop height range':'29½–36 inches','Tilt section':'12⅜ inches wide × 18 inches long','Tilt range':'10 to about 80 degrees','Compatibility':'CR and film cassettes; not DR panels'}},
  {id:'VV-500',sku:'VV-500',name:'TOMAHAWK Portable Cassette Positioner',slug:'vv-500-tomahawk',manufacturer:'Diagnostic Imaging Systems',category:'imaging-accessories',type:'Plate holders',description:'Lightweight aluminum portable cassette positioner with a cassette clamp, adjustable ground-supporting post and adjustable handle. Specify Film, CR or DR when ordering.',images:[base+'Accessories/Cassettes/Holders/Veterinary/VV-500_1.jpg',base+'Accessories/Cassettes/Holders/Veterinary/VV-500_2.jpg'],source:base+'Accessories/Cassettes/Holders/Veterinary/',publishedPrice:690,specifications:{'Weight':'2.5 lbs','Maximum cassette size':'14 × 17 inches','Maximum plate thickness':'1.20 inches','Long handle':'32–54 inches','Short handle':'0–20 inches'},variants:['Film','CR','DR']},
  {id:'CRU-20',sku:'CRU-20',name:'Multiple Cassette Rack',slug:'cru-20-cassette-rack',manufacturer:'Techno-Aide',category:'imaging-accessories',type:'Cassette racks',description:'Four-compartment rack to keep cassettes clean and organized in limited spaces.',images:[base+'Accessories/Cassettes/Racks/CRU-20_1.jpg'],source:base+'Accessories/Cassettes/Racks/',publishedPrice:510,specifications:{'Main dimensions':'21 W × 39 H × 6 D inches','Overall with side bins':'24 W × 39 H × 9 D inches','Shipping weight':'43 lbs','Cassette sizes':'8 × 10 to 14 × 17 inches'}},
  {id:'SY-STD-CH',sku:'SY-STD-CH',name:'V-Base Mobile Cassette Holder',slug:'sy-std-ch-holder',manufacturer:'Soyee',category:'imaging-accessories',type:'Plate holders',description:'Lateral-position V-base mobile holder for CR, DR and standard cassettes with four locking swivel casters.',images:[base+'Accessories/Cassettes/Holders/SY-STD-CH_1.jpg',base+'Accessories/Cassettes/Holders/SY-STD-CH_2.jpg'],source:base+'Accessories/Cassettes/Holders/',specifications:{'Height adjustment':'5¾–50 inches, floor to bottom of tray','DR plate size':'Up to 17 × 17 inches','Weight capacity':'Up to 40 lbs'}},
  {id:'911417-ZT',sku:'911417-ZT',name:'Zip Top Cassette Covers — 14 × 17',slug:'911417-zt-cassette-covers',manufacturer:'Infab',category:'imaging-accessories',type:'Cassette covers',description:'Disposable polyethylene cassette covers with zip-top closure, packed in a dispenser box of 100.',images:[base+'Accessories/Cassettes/Covers/910810-ZT_1.jpg',base+'Accessories/Cassettes/Covers/910810-ZT_2.jpg'],source:base+'Accessories/Cassettes/Covers/',publishedPrice:100,specifications:{'Cassette size':'14 × 17 inches','Pack quantity':'100','Thickness':'2 mil','Material':'Polyethylene','Image note':'Source image represents this cover family.'}},
  ...patterns,
];
export const normalize = (text: string) => text.toLowerCase().replace(/[^a-z0-9]/g,'');
export function searchProducts(query: string, records = products) {
  const terms = query.toLowerCase().trim().split(/\s+/).map(normalize).filter(Boolean);
  return records.filter(p => terms.every(term => normalize([p.name,p.sku,p.manufacturer,p.type,p.category,categories.find(c=>c.id===p.category)?.name].join(' ')).includes(term)));
}
export const money = (value: number) => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format(value);
