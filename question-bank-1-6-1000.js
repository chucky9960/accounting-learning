/* 第1-6章正式擴充題庫：6章×200題＝1,200題。以原創母題＋參數化情境生成，保留考點與解析。需在 question-bank.js 後載入。 */
(()=>{if(!window.QBANK)throw new Error('QBANK must load first');
const add=(c,topic,type,level,essence,mother,q,a,x,e)=>window.QBANK.push({id:`X${c+1}-${mother}-${String(window.QBANK.length+1).padStart(5,'0')}`,c,topic,type,level,essence,motherId:`C${c+1}-${mother}`,q,a,x,e});
const money=n=>Number(n).toLocaleString('zh-TW');
const pick=(correct,wrong)=>[correct,...wrong].slice(0,4);
// CH1 200：會計基本概念、五大要素、等式、交易分析
const elems=[['現金','資產'],['銀行存款','資產'],['應收帳款','資產'],['應收票據','資產'],['存貨','資產'],['用品','資產'],['預付租金','資產'],['預付保險費','資產'],['土地','資產'],['設備','資產'],['應付帳款','負債'],['應付票據','負債'],['應付薪資','負債'],['預收收入','負債'],['銀行借款','負債'],['業主資本','權益'],['保留盈餘','權益'],['服務收入','收入'],['銷貨收入','收入'],['利息收入','收入'],['租金費用','費用'],['薪資費用','費用'],['水電費','費用'],['廣告費','費用'],['保險費','費用']];
for(let i=0;i<50;i++){let [n,ans]=elems[i%elems.length];let opts=['資產','負債','權益','收入','費用'].filter(x=>x!==ans).slice(0,3);add(0,'五大要素','分類',1,i<20,'ELEM',`${n}在五大會計要素中最適合歸類為？`,pick(ans,opts),0,`${n}屬於${ans}。先辨認科目性質，再判斷交易影響。`)}
for(let i=0;i<75;i++){let asset=120000+i*7000,liab=30000+(i%15)*3000,equity=asset-liab;add(0,'會計等式','計算',1,i<25,'EQUITY',`某企業資產總額${money(asset)}元、負債總額${money(liab)}元，權益為多少？`,[money(equity),money(asset+liab),money(liab),money(asset)],0,`資產＝負債＋權益，所以權益＝${money(asset)}－${money(liab)}＝${money(equity)}元。`)}
const t1=[['業主投入現金','資產增加、權益增加','投入不是收入，而是權益交易。'],['向銀行借款並收現','資產增加、負債增加','收到現金增加資產，借款形成負債。'],['以現金購買設備','一項資產增加、另一項資產減少','設備增加、現金減少，總資產不因等額交換而改變。'],['賒購尚未耗用用品','資產增加、負債增加','用品增加且形成應付帳款。'],['支付應付帳款','資產減少、負債減少','現金與應付帳款同時減少。'],['提供服務並收現','資產增加、收入增加','現金增加且已賺得收入。'],['支付本月租金','資產減少、費用增加','現金減少，租金費用使權益下降。'],['收回應收帳款','一項資產增加、另一項資產減少','現金增加、應收帳款減少。'],['預收尚未提供服務之款項','資產增加、負債增加','尚未履約，通常先形成預收收入負債。'],['業主提款','資產減少、權益減少','提款不是企業費用。']];
for(let i=0;i<75;i++){let r=t1[i%t1.length];add(0,'交易分析','交易影響',2,i<30,'TX',`企業發生「${r[0]}」交易，主要影響為何？`,[r[1],'資產增加、權益增加','負債減少、收入增加','只有現金改變'],0,r[2])}
// CH2 200：借貸、分錄、過帳、試算
const rules=[['資產','增加','借方'],['資產','減少','貸方'],['負債','增加','貸方'],['負債','減少','借方'],['權益','增加','貸方'],['權益','減少','借方'],['收入','增加','貸方'],['費用','增加','借方']];
for(let i=0;i<64;i++){let r=rules[i%rules.length];add(1,'借貸法則','方向',1,i<24,'DRCR',`${r[0]}科目${r[1]}時，通常記在哪一方？`,[r[2],r[2]==='借方'?'貸方':'借方','借貸皆不記','視現金而定'],0,`${r[0]}${r[1]}通常記${r[2]}。`)}
const je=[['現金銷售商品或服務','現金','收入'],['賒銷服務','應收帳款','服務收入'],['支付租金','租金費用','現金'],['支付薪資','薪資費用','現金'],['賒購用品','用品','應付帳款'],['償還應付帳款','應付帳款','現金'],['向銀行借款收現','現金','銀行借款'],['業主投入現金','現金','資本']];
for(let i=0;i<96;i++){let r=je[i%je.length];add(1,'分錄','分錄',2,i<36,'JE',`「${r[0]}」的基本借貸方向何者正確？`,[`借：${r[1]}；貸：${r[2]}`,`借：${r[2]}；貸：${r[1]}`,'只記借方','只記貸方'],0,`先判斷科目屬性及增減：借記${r[1]}，貸記${r[2]}。`)}
const trial=[['整筆交易完全漏記','仍可能平衡'],['借貸雙方同額記錯科目','仍可能平衡'],['只漏記借方','通常不平衡'],['借方金額多記','通常不平衡'],['貸方金額少記','通常不平衡']];
for(let i=0;i<40;i++){let r=trial[i%trial.length];add(1,'試算','錯誤判讀',2,i<15,'TRIAL',`試算表發生「${r[0]}」，借貸合計最可能如何？`,[r[1],r[1]==='仍可能平衡'?'一定不平衡':'仍可能平衡','一定代表淨利錯誤','無法記帳'],0,`試算主要檢查借貸金額是否相等；${r[0]}時，${r[1]}。`)}
// CH3 200：調整、應計、遞延、折舊
for(let i=0;i<70;i++){let months=6+(i%7),total=months*(1000+(i%9)*200),used=1+(i%Math.max(1,months-1)),exp=total/months*used;add(2,'預付費用','調整計算',2,i<25,'PREPAID',`企業預付${months}個月保險費${money(total)}元，期末已有${used}個月到期。本期應認列保險費多少？`,[money(exp),money(total),money(total-exp),money(total/months)],0,`每月保險費＝${money(total)}÷${months}＝${money(total/months)}；到期${used}個月，費用＝${money(exp)}元。`)}
for(let i=0;i<60;i++){let cost=100000+(i%20)*10000,res=(i%5)*5000,life=4+(i%7),dep=Math.round((cost-res)/life);add(2,'折舊','直線法',2,i<25,'SLDEP',`設備成本${money(cost)}元、估計殘值${money(res)}元、耐用年限${life}年，直線法每年折舊約為多少？`,[money(dep),money(Math.round(cost/life)),money(res),money(cost-res)],0,`直線法折舊＝(成本－殘值)÷年限＝(${money(cost)}－${money(res)})÷${life}≈${money(dep)}元。`)}
const adj=[['已發生但尚未支付薪資','借薪資費用、貸應付薪資'],['已賺得但尚未收取服務收入','借應收款項、貸服務收入'],['預收款中已有部分履約','借預收收入、貸服務收入'],['預付保險已有部分到期','借保險費、貸預付保險費'],['用品期末已有部分耗用','借用品費用、貸用品']];
for(let i=0;i<70;i++){let r=adj[i%adj.length];add(2,'調整分錄','分錄',2,i<25,'ADJ',`期末發現「${r[0]}」，調整分錄方向應為？`,[r[1],'不作任何分錄','借現金、貸收入','借負債、貸現金'],0,`權責基礎要求將本期已發生或已賺得部分歸入本期，因此${r[1]}。`)}
// CH4 200：買賣業、永續盤存、銷貨成本、折扣退回
for(let i=0;i<70;i++){let beg=10000+(i%10)*2000,pur=50000+(i%15)*3000,end=8000+(i%12)*1500,cogs=beg+pur-end;add(3,'銷貨成本','計算',2,i<25,'COGS',`期初存貨${money(beg)}元、本期進貨淨額${money(pur)}元、期末存貨${money(end)}元，銷貨成本為多少？`,[money(cogs),money(beg+pur),money(pur-end),money(beg+end)],0,`銷貨成本＝期初存貨＋進貨淨額－期末存貨＝${money(cogs)}元。`)}
const merch=[['永續盤存制賒購商品','借存貨、貸應付帳款'],['永續盤存制現購商品','借存貨、貸現金'],['永續盤存制銷貨並收現（收入面）','借現金、貸銷貨收入'],['永續盤存制銷貨（成本面）','借銷貨成本、貸存貨'],['退回先前賒購商品','借應付帳款、貸存貨'],['客戶退回商品（收入面）','借銷貨退回、貸應收帳款或現金']];
for(let i=0;i<90;i++){let r=merch[i%merch.length];add(3,'買賣交易','分錄',2,i<35,'MERCH',`${r[0]}，主要分錄方向何者正確？`,[r[1],'借現金、貸存貨','借應付帳款、貸收入','不需記錄'],0,`${r[0]}時，${r[1]}。`)}
for(let i=0;i<40;i++){let sales=100000+(i%10)*10000,cost=60000+(i%8)*5000,gp=sales-cost;add(3,'毛利','計算',1,i<15,'GP',`銷貨收入${money(sales)}元、銷貨成本${money(cost)}元，銷貨毛利為多少？`,[money(gp),money(sales+cost),money(cost),money(sales)],0,`銷貨毛利＝銷貨收入－銷貨成本＝${money(gp)}元。`)}
// CH5 200：現金控制、零用金、銀行調節
const bankItems=[['未兌現支票','銀行對帳單餘額調整減項'],['在途存款','銀行對帳單餘額調整加項'],['銀行手續費公司尚未入帳','公司帳面餘額調整減項'],['銀行代收票據公司尚未入帳','公司帳面餘額調整加項'],['客戶存款不足退票公司尚未入帳','公司帳面餘額調整減項']];
for(let i=0;i<80;i++){let r=bankItems[i%bankItems.length];add(4,'銀行存款調節','分類',2,i<30,'BANKITEM',`銀行調節表中「${r[0]}」通常如何處理？`,[r[1],'銀行對帳單餘額調整加項','公司帳面餘額調整加項','完全不處理'],0,`${r[0]}通常屬於${r[1]}。`)}
for(let i=0;i<70;i++){let book=100000+(i%20)*5000,fee=100+(i%8)*50,collect=1000+(i%10)*500,nsf=(i%5)*200,adj=book-fee+collect-nsf;add(4,'銀行存款調節','計算',3,i<25,'BANKCALC',`公司帳面銀行存款${money(book)}元；銀行手續費${money(fee)}元、銀行代收${money(collect)}元、退票${money(nsf)}元均尚未入帳。調整後公司帳面餘額為？`,[money(adj),money(book+fee+collect+nsf),money(book-fee),money(book+collect)],0,`調整後＝${money(book)}－${money(fee)}＋${money(collect)}－${money(nsf)}＝${money(adj)}元。`)}
const controls=['收款與記帳由不同人負責','定期辦理銀行調節','重要付款需適當授權','現金收入及時存入銀行','保留完整憑證並定期盤點'];
for(let i=0;i<50;i++){let r=controls[i%controls.length];add(4,'現金內部控制','觀念',1,i<20,'CONTROL',`下列何者屬於較適當的現金內部控制措施？`,[r,'同一人同時保管現金與記帳','取消所有付款憑證','不需核對銀行紀錄'],0,`${r}有助降低錯誤與舞弊風險。`)}
// CH6 200：應收帳款、備抵、票據、利息
for(let i=0;i<70;i++){let recv=100000+(i%20)*10000,rate=1+(i%8),allow=Math.round(recv*rate/100);add(5,'應收帳款','備抵估計',2,i<25,'ALLOW',`期末應收帳款${money(recv)}元，估計${rate}%無法收回，若忽略調整前備抵餘額，期末應有備抵約多少？`,[money(allow),money(recv-allow),money(recv),money(rate)],0,`${money(recv)}×${rate}%＝${money(allow)}元。`)}
for(let i=0;i<80;i++){let principal=50000+(i%20)*5000,rate=3+(i%8),months=1+(i%6),interest=Math.round(principal*rate/100*months/12);add(5,'應收票據','利息計算',2,i<30,'NOTEINT',`票據本金${money(principal)}元，年利率${rate}%，期間${months}個月，以單利計算利息約為多少？`,[money(interest),money(Math.round(principal*rate/100)),money(principal+interest),money(principal)],0,`利息＝本金×年利率×期間＝${money(principal)}×${rate}%×${months}/12≈${money(interest)}元。`)}
const ar=[['賒銷商品或服務','借應收帳款、貸收入'],['收回應收帳款','借現金、貸應收帳款'],['備抵法沖銷確定無法收回帳款','借備抵損失、貸應收帳款'],['先前沖銷帳款重新恢復債權','借應收帳款、貸備抵損失'],['期末估計信用損失','借信用損失、貸備抵損失']];
for(let i=0;i<50;i++){let r=ar[i%ar.length];add(5,'應收款項','分錄',2,i<20,'ARJE',`${r[0]}時，典型分錄方向為？`,[r[1],'借現金、貸收入','借費用、貸現金','不需分錄'],0,`${r[0]}時，${r[1]}。`)}
window.QBANK_META=Object.assign({},window.QBANK_META,{chapters1to6Expanded:true,expandedQuestions1200:true});
window.QBANK_1_6_STATS=()=>({total:window.QBANK.filter(q=>q.c<=5).length,expanded:1200,byChapter:Array.from({length:6},(_,c)=>window.QBANK.filter(q=>q.c===c).length),essence:window.QBANK.filter(q=>q.c<=5&&q.essence).length});
})();