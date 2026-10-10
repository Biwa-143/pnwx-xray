import { lazy, Suspense } from 'react';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { QuoteProvider } from '@/components/QuoteContext';
import Layout from '@/components/Layout';
import PageMetadata from '@/components/PageMetadata';
import Index from './pages/Index';
import { categories } from '@/data/catalog';
const Catalog=lazy(()=>import('./pages/Catalog'));
const ProductDetail=lazy(()=>import('./pages/ProductDetail'));
const Information=lazy(()=>import('./pages/Information'));
const Quote=lazy(()=>import('./pages/Quote'));
const NotFound=lazy(()=>import('./pages/NotFound'));
function ProductRoute(){const {slug}=useParams();return <ProductDetail key={slug}/>;}
export default function App(){return <TooltipProvider><Sonner/><BrowserRouter><QuoteProvider><PageMetadata/><Suspense fallback={<div className="site-container py-20 text-sm text-slate-600" role="status">Loading page…</div>}><Routes><Route element={<Layout/>}><Route path="/" element={<Index/>}/><Route path="/products" element={<Catalog/>}/><Route path="/categories/:categoryId" element={<Catalog/>}/><Route path="/products/:slug" element={<ProductRoute/>}/><Route path="/quote" element={<Quote/>}/>{['about','contact','support','ordering','shipping-returns','resources','privacy','terms','accessibility'].map(path=><Route key={path} path={'/'+path} element={<Information/>}/>)}<Route path="/Buy/" element={<Navigate to="/ordering" replace/>}/><Route path="/Accessories/" element={<Navigate to="/products" replace/>}/>{categories.map(c=><Route key={c.id} path={new URL(c.source).pathname} element={<Navigate to={'/categories/'+c.id} replace/>}/>)}<Route path="*" element={<NotFound/>}/></Route></Routes></Suspense></QuoteProvider></BrowserRouter></TooltipProvider>}
