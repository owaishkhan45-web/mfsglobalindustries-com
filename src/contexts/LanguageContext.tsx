import { createContext, useContext, useState } from "react";
const T = {
  EN:{ nav:{home:"Home",products:"Products",contact:"Contact"}, hero:{cta:"Request Quote"} },
  AR:{ nav:{home:"الرئيسية",products:"المنتجات",contact:"اتصل بنا"}, hero:{cta:"طلب عرض سعر"} },
  FR:{ nav:{home:"Accueil",products:"Produits",contact:"Contact"}, hero:{cta:"Demander un devis"} },
  ES:{ nav:{home:"Inicio",products:"Productos",contact:"Contacto"}, hero:{cta:"Solicitar cotización"} },
};
type Lang = keyof typeof T;
const Ctx = createContext<any>({lang:"EN",setLang:()=>{},t:T.EN,langs:["EN","AR","FR","ES"]});
export function LanguageProvider({children}:{children:any}){
  const [lang,setLang]=useState<Lang>("EN");
  return <Ctx.Provider value={{lang,setLang,t:T[lang],langs:["EN","AR","FR","ES"]}}>{children}</Ctx.Provider>;
}
export function useLanguage(){ return useContext(Ctx); }
export default Ctx;
