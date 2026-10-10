import { createContext, useContext, useState, type ReactNode } from 'react';
import { products } from '@/data/catalog';
import { toast } from 'sonner';
export type QuoteItem = { id: string; variant: string; quantity: number };
const QuoteContext = createContext<{items:QuoteItem[]; add:(id:string,variant?:string,quantity?:number)=>void; update:(index:number,quantity:number)=>void; remove:(index:number)=>void}>({items:[],add:()=>{},update:()=>{},remove:()=>{}});
export function QuoteProvider({children}:{children:ReactNode}) {
  const [items,setItems] = useState<QuoteItem[]>(()=>{
    try { const data:unknown=JSON.parse(localStorage.getItem('pnwx-quote') || '[]'); return Array.isArray(data)?data.filter((i):i is QuoteItem=>i && typeof i.id==='string' && products.some(p=>p.id===i.id) && typeof i.variant==='string' && Number.isInteger(i.quantity) && i.quantity>0 && i.quantity<=999):[]; } catch { return []; }
  });
  function save(next:QuoteItem[]) { setItems(next); try{localStorage.setItem('pnwx-quote',JSON.stringify(next));}catch{toast.error('Your quote list could not be saved on this device.');} }
  return <QuoteContext.Provider value={{items,add:(id,variant='',quantity=1)=>{const index=items.findIndex(i=>i.id===id&&i.variant===variant);save(index<0?[...items,{id,variant,quantity}]:items.map((i,n)=>n===index?{...i,quantity:Math.min(999,i.quantity+quantity)}:i));toast.success('Added to your quote list. No request has been sent.');},update:(index,quantity)=>save(items.map((i,n)=>n===index?{...i,quantity:Math.max(1,Math.min(999,Math.round(quantity)||1))}:i)),remove:index=>save(items.filter((_,n)=>n!==index))}}>{children}</QuoteContext.Provider>;
}
export const useQuote = ()=>useContext(QuoteContext);
