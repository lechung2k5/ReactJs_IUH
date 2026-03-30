import { useState } from "react";

/* ─── DESIGN TOKENS ──────────────────────────────────── */
const Z = {
  blue: "#005AE0", blueDark: "#0044B0", blueLight: "#EBF2FF",
  bg: "#EBECF0", white: "#FFFFFF",
  text: "#081C36", sub: "#576574", muted: "#909EB2", border: "#D9DBDF",
  green: "#06C755", red: "#F53D3D", orange: "#F7931E", yellow: "#FFC400",
  purple: "#7C3AED", teal: "#0891B2",
  sv: "#005AE0", gv: "#059669", admin: "#0891B2",
};

const css = `
  *{box-sizing:border-box;margin:0;padding:0}
  ::-webkit-scrollbar{width:0}
  body{font-family:-apple-system,'SF Pro Text',BlinkMacSystemFont,sans-serif}
  .rpl{cursor:pointer;transition:opacity .15s}.rpl:active{opacity:.65}
  .ti:hover{background:rgba(0,0,0,.035)}
  @keyframes fu{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
  @keyframes pu{0%,100%{opacity:1}50%{opacity:.3}}
  .fu{animation:fu .18s ease}
  .dot{animation:pu 1.1s ease infinite}.dot:nth-child(2){animation-delay:.18s}.dot:nth-child(3){animation-delay:.36s}
`;

/* ─── ICONS ──────────────────────────────────────────── */
const I = ({ n, s = 22, c = "currentColor" }) => {
  const p = {
    chat: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />,
    contacts: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    class: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>,
    task: <><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></>,
    ai: <><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></>,
    me: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    back: <polyline points="15 18 9 12 15 6" />,
    send: <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill={c} stroke="none"/>,
    search: <><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></>,
    plus: <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    bell: <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></>,
    check: <polyline points="20 6 9 17 4 12" />,
    file: <><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></>,
    img: <><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></>,
    more: <><circle cx="5" cy="12" r="2" fill={c} stroke="none"/><circle cx="12" cy="12" r="2" fill={c} stroke="none"/><circle cx="19" cy="12" r="2" fill={c} stroke="none"/></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
    chart: <><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></>,
    users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></>,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
    attach: <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>,
    emoji: <><circle cx="12" cy="12" r="10"/><path d="M8 13s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></>,
    mic: <><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></>,
    upload: <><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"/></>,
    lock: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
    edit: <><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></>,
    trash: <><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></>,
    leave: <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></>,
    qr: <><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="5" y="5" width="3" height="3" fill={c} stroke="none"/><rect x="16" y="5" width="3" height="3" fill={c} stroke="none"/><rect x="5" y="16" width="3" height="3" fill={c} stroke="none"/><path d="M14 14h3v3h-3zM17 17h3v3h-3zM14 20h3"/></>,
    star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill={c} stroke="none"/>,
    eye: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></>,
    key: <><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/></>,
    logout: <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></>,
    noti: <><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/><line x1="12" y1="2" x2="12" y2="4"/></>,
  };
  return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={c} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{p[n]}</svg>;
};

/* ─── HELPERS ────────────────────────────────────────── */
const cols = ["#005AE0","#059669","#D97706","#DC2626","#7C3AED","#0891B2","#BE185D","#374151"];
const gc = i => cols[i % cols.length];

const Av = ({ name="?", sz=44, clr, i=0, online=false }) => (
  <div style={{ position:"relative", flexShrink:0 }}>
    <div style={{ width:sz, height:sz, borderRadius:sz/2, background:clr||gc(i), display:"flex", alignItems:"center", justifyContent:"center", color:"#fff", fontWeight:700, fontSize:sz*.36 }}>
      {typeof name==="string" ? name[0]?.toUpperCase() : name}
    </div>
    {online && <div style={{ position:"absolute", bottom:1, right:1, width:sz*.27, height:sz*.27, borderRadius:"50%", background:Z.green, border:"2px solid #fff" }}/>}
  </div>
);
const Bdg = ({ n, c=Z.red }) => n>0 ? <div style={{ background:c, color:"#fff", borderRadius:10, padding:"1px 6px", fontSize:11, fontWeight:700, minWidth:18, textAlign:"center" }}>{n>99?"99+":n}</div> : null;
const Tag = ({ label, c }) => <span style={{ background:c+"1A", color:c, borderRadius:6, padding:"3px 8px", fontSize:11, fontWeight:600 }}>{label}</span>;
const Divider = ({ label }) => <div style={{ padding:"10px 14px 4px", fontSize:11, fontWeight:700, color:Z.muted, letterSpacing:.5 }}>{label}</div>;
const Row = ({ label, sub, icon, c=Z.text, onTap, right }) => (
  <div onClick={onTap} className="rpl" style={{ background:Z.white, padding:"13px 16px", display:"flex", gap:14, alignItems:"center", borderBottom:`1px solid ${Z.border}` }}>
    {icon && <div style={{ width:40, height:40, borderRadius:12, background:gc(0)+"18", display:"flex", alignItems:"center", justifyContent:"center" }}>{icon}</div>}
    <div style={{ flex:1 }}><div style={{ fontSize:15, color:c, fontWeight:c===Z.red?600:400 }}>{label}</div>{sub&&<div style={{ fontSize:12, color:Z.muted, marginTop:2 }}>{sub}</div>}</div>
    {right || (!onTap ? null : <span style={{ color:Z.muted, fontSize:20 }}>›</span>)}
  </div>
);
const Scroll = ({ children, p="0" }) => <div style={{ flex:1, overflowY:"auto", padding:p }}>{children}</div>;
const Hdr = ({ title, sub, onBack, accent=Z.white, txtC=Z.text, right }) => (
  <div style={{ background:accent, padding:"10px 14px", display:"flex", alignItems:"center", gap:10, borderBottom:accent===Z.white?`1px solid ${Z.border}`:"none", flexShrink:0 }}>
    {onBack && <div onClick={onBack} className="rpl"><I n="back" s={24} c={accent===Z.white?Z.text:"#fff"}/></div>}
    <div style={{ flex:1 }}>
      <div style={{ fontWeight:700, fontSize:17, color:accent===Z.white?Z.text:"#fff" }}>{title}</div>
      {sub && <div style={{ fontSize:12, color:accent===Z.white?Z.muted:"rgba(255,255,255,.75)", marginTop:1 }}>{sub}</div>}
    </div>
    {right}
  </div>
);
const TabBar = ({ tabs, active, onTab, accent }) => (
  <div style={{ height:56, background:Z.white, borderTop:`1px solid ${Z.border}`, display:"flex", flexShrink:0 }}>
    {tabs.map(t => (
      <div key={t.id} onClick={()=>onTab(t.id)} className="ti" style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:3, position:"relative", cursor:"pointer" }}>
        {t.badge>0 && <div style={{ position:"absolute", top:6, right:"50%", transform:"translateX(14px)", background:Z.red, color:"#fff", borderRadius:8, padding:"0 4px", fontSize:10, fontWeight:700, minWidth:16, textAlign:"center" }}>{t.badge}</div>}
        <I n={t.icon} s={22} c={active===t.id?accent:Z.muted}/>
        <span style={{ fontSize:10, fontWeight:active===t.id?700:400, color:active===t.id?accent:Z.muted }}>{t.label}</span>
      </div>
    ))}
  </div>
);

/* ─── PHONE ──────────────────────────────────────────── */
const Phone = ({ children, label, accent }) => (
  <div style={{ display:"flex", flexDirection:"column", alignItems:"center" }}>
    <div style={{ background:accent, color:"#fff", borderRadius:"18px 18px 0 0", padding:"7px 22px", fontSize:13, fontWeight:700, letterSpacing:.3 }}>{label}</div>
    <div style={{ width:375, height:760, borderRadius:"0 0 34px 34px", overflow:"hidden", boxShadow:"0 28px 60px rgba(0,0,0,.3),0 0 0 8px #1C1C1E", display:"flex", flexDirection:"column" }}>
      {/* Status bar */}
      <div style={{ height:44, background:Z.white, display:"flex", alignItems:"center", justifyContent:"space-between", padding:"0 18px", flexShrink:0 }}>
        <span style={{ fontSize:14, fontWeight:700, color:Z.text }}>9:41</span>
        <div style={{ display:"flex", gap:5, alignItems:"center" }}>
          <svg width="17" height="12" viewBox="0 0 17 12"><rect x="0" y="3" width="3" height="9" rx="1" fill={Z.text} opacity=".4"/><rect x="4.5" y="2" width="3" height="10" rx="1" fill={Z.text} opacity=".65"/><rect x="9" y="0" width="3" height="12" rx="1" fill={Z.text}/><path d="M14 2v8" stroke={Z.text} strokeWidth="2.5" strokeLinecap="round"/></svg>
          <div style={{ width:25, height:13, borderRadius:3, border:`1.5px solid ${Z.text}`, position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", right:-3, top:"50%", transform:"translateY(-50%)", width:3, height:6, background:Z.text, borderRadius:"0 2px 2px 0" }}/>
            <div style={{ width:"80%", height:"100%", background:Z.green, borderRadius:1.5 }}/>
          </div>
        </div>
      </div>
      <div style={{ flex:1, overflow:"hidden", display:"flex", flexDirection:"column", background:Z.bg }}>
        {children}
      </div>
    </div>
  </div>
);

/* ─── LOGIN ──────────────────────────────────────────── */
const Login = ({ onLogin }) => {
  const [actor, setActor] = useState("sv");
  const actors = [
    { id:"sv", label:"Sinh viên", accent:Z.sv, icon:"task" },
    { id:"gv", label:"Giảng viên", accent:Z.gv, icon:"class" },
    { id:"admin", label:"Admin", accent:Z.admin, icon:"shield" },
  ];
  const cur = actors.find(a=>a.id===actor);
  const demos = { sv:"sv.21110001@edu.vn", gv:"gv.nguyennam@edu.vn", admin:"admin@system.vn" };
  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column", background:Z.white }}>
      <div style={{ background:`linear-gradient(155deg,${cur.accent},${cur.accent}CC)`, padding:"44px 30px 36px", textAlign:"center" }}>
        <div style={{ width:68, height:68, borderRadius:20, background:"rgba(255,255,255,.2)", margin:"0 auto 14px", display:"flex", alignItems:"center", justifyContent:"center", backdropFilter:"blur(6px)" }}>
          <I n={cur.icon} s={30} c="#fff"/>
        </div>
        <div style={{ color:"#fff", fontSize:24, fontWeight:800 }}>Zalo Education</div>
        <div style={{ color:"rgba(255,255,255,.75)", fontSize:13, marginTop:5 }}>Nền tảng học tập thông minh</div>
      </div>
      <div style={{ padding:"22px 22px 0" }}>
        <div style={{ background:Z.bg, borderRadius:12, padding:4, display:"flex", marginBottom:20 }}>
          {actors.map(a=>(
            <div key={a.id} onClick={()=>setActor(a.id)} className="rpl" style={{ flex:1, textAlign:"center", padding:"8px 0", borderRadius:9, background:actor===a.id?a.accent:"transparent", color:actor===a.id?"#fff":Z.sub, fontSize:13, fontWeight:actor===a.id?700:400, transition:"all .2s" }}>{a.label}</div>
          ))}
        </div>
        {["Email / Tài khoản","Mật khẩu"].map((lbl,i)=>(
          <div key={i} style={{ marginBottom:13 }}>
            <div style={{ fontSize:13, color:Z.sub, marginBottom:5, fontWeight:500 }}>{lbl}</div>
            <div style={{ background:Z.bg, border:`1.5px solid ${Z.border}`, borderRadius:10, padding:"11px 13px", fontSize:15, color:Z.text }}>
              {i===0 ? demos[actor] : "••••••••"}
            </div>
          </div>
        ))}
        <button onClick={()=>onLogin(actor)} className="rpl" style={{ width:"100%", background:cur.accent, color:"#fff", border:"none", borderRadius:10, padding:"12px", fontWeight:700, fontSize:15, marginTop:6 }}>
          Đăng nhập
        </button>
        <div style={{ textAlign:"center", marginTop:13, color:cur.accent, fontSize:14, fontWeight:500 }}>Quên mật khẩu?</div>
        {actor==="sv" && <div style={{ textAlign:"center", marginTop:20, color:Z.sub, fontSize:13 }}>Chưa có tài khoản? <span style={{ color:cur.accent, fontWeight:600 }}>Đăng ký (UC-01)</span></div>}
      </div>
    </div>
  );
};

/* ─── SHARED CHAT ────────────────────────────────────── */
const ChatList = ({ accent, onOpen }) => {
  const list = [
    { name:"Lớp Lập trình Web", last:"GV: Bài tập 3 đã đăng lên!", time:"10:32", unread:3, group:true },
    { name:"Thầy Nguyễn Văn Nam", last:"Em nộp trước deadline nhé!", time:"09:15", unread:1, online:true },
    { name:"Lớp Cơ sở dữ liệu", last:"Hôm nay nghỉ, học bù T7 nhé", time:"Hôm qua", unread:0, group:true },
    { name:"Cô Trần Thị Lan", last:"Điểm bài 2 của em đã có rồi", time:"Hôm qua", unread:0, online:false },
    { name:"Nhóm Đồ án CNM", last:"Bạn A: AI module ai làm vậy?", time:"T3", unread:4, group:true },
  ];
  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
      <div style={{ background:Z.white, padding:"12px 14px 10px", borderBottom:`1px solid ${Z.border}`, flexShrink:0 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
          <span style={{ fontSize:20, fontWeight:800, color:Z.text }}>Tin nhắn</span>
          <div style={{ display:"flex", gap:14 }}><I n="search" s={22} c={Z.muted}/><I n="plus" s={22} c={accent}/></div>
        </div>
        <div style={{ background:Z.bg, borderRadius:10, padding:"8px 12px", display:"flex", gap:8, alignItems:"center" }}>
          <I n="search" s={15} c={Z.muted}/><span style={{ fontSize:14, color:Z.muted }}>Tìm kiếm tin nhắn...</span>
        </div>
      </div>
      <Scroll>
        {list.map((c,i)=>(
          <div key={i} onClick={()=>onOpen({...c,i})} className="rpl" style={{ background:Z.white, padding:"11px 14px", display:"flex", gap:12, borderBottom:`1px solid ${Z.border}` }}>
            <Av name={c.group?"👥":c.name} sz={50} i={i} online={c.online}/>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ display:"flex", justifyContent:"space-between" }}>
                <span style={{ fontWeight:c.unread?700:600, fontSize:15 }}>{c.name}</span>
                <span style={{ fontSize:11, color:c.unread?accent:Z.muted, fontWeight:c.unread?600:400 }}>{c.time}</span>
              </div>
              <div style={{ display:"flex", justifyContent:"space-between", marginTop:3 }}>
                <span style={{ fontSize:13, color:c.unread?Z.sub:Z.muted, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", maxWidth:210 }}>{c.last}</span>
                <Bdg n={c.unread}/>
              </div>
            </div>
          </div>
        ))}
      </Scroll>
    </div>
  );
};

const ChatWindow = ({ contact, onBack, accent, role }) => {
  const msgs = [
    { me:false, text:"Bài tập 3 deadline ngày mai nhé em!", time:"09:00" },
    { me:true, text:"Dạ em biết rồi ạ, em đang làm 😅", time:"09:05" },
    { me:false, text:"Nhớ nộp file .zip source code nhé", time:"09:06" },
    { me:true, text:"Thầy ơi em chưa hiểu phần Socket.io ạ", time:"09:20" },
    { me:false, text:"Đọc lại slide tuần 4 nhé. Còn thắc mắc thì hỏi thêm 👍", time:"09:22" },
    { me:true, text:"Dạ cảm ơn thầy nhiều ạ 🙏", time:"09:30" },
  ];
  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
      <div style={{ background:accent, padding:"10px 14px", display:"flex", alignItems:"center", gap:10, flexShrink:0 }}>
        <div onClick={onBack} className="rpl"><I n="back" s={24} c="#fff"/></div>
        <Av name={contact.name} sz={38} clr="rgba(255,255,255,.25)" i={contact.i||0}/>
        <div style={{ flex:1 }}>
          <div style={{ fontWeight:700, fontSize:15, color:"#fff" }}>{contact.name}</div>
          <div style={{ fontSize:12, color:"rgba(255,255,255,.75)" }}>{contact.online?"Đang hoạt động":contact.group?"Nhóm":"Offline"}</div>
        </div>
        {/* UC-08 thu hồi, UC-09 reaction – available via more menu */}
        <I n="more" s={22} c="#fff"/>
      </div>
      <div style={{ flex:1, overflowY:"auto", padding:"10px 14px", background:"#DAE2ED", display:"flex", flexDirection:"column", gap:6 }}>
        <div style={{ textAlign:"center", fontSize:11, color:Z.sub, background:"rgba(255,255,255,.55)", borderRadius:8, padding:"3px 10px", alignSelf:"center" }}>Hôm nay</div>
        {msgs.map((m,i)=>(
          <div key={i} className="fu" style={{ display:"flex", justifyContent:m.me?"flex-end":"flex-start", gap:6, alignItems:"flex-end" }}>
            {!m.me && <Av name={contact.name} sz={28} i={contact.i||0}/>}
            <div>
              <div style={{ background:m.me?accent:Z.white, color:m.me?"#fff":Z.text, borderRadius:m.me?"16px 16px 4px 16px":"16px 16px 16px 4px", padding:"9px 13px", fontSize:14, maxWidth:220, lineHeight:1.45, boxShadow:"0 1px 2px rgba(0,0,0,.08)" }}>{m.text}</div>
              <div style={{ fontSize:10, color:Z.muted, marginTop:2, textAlign:m.me?"right":"left" }}>{m.time}</div>
            </div>
          </div>
        ))}
      </div>
      {/* UC-06/07: gửi text/ảnh/file/emoji */}
      <div style={{ background:Z.white, borderTop:`1px solid ${Z.border}`, padding:"8px 10px", display:"flex", gap:8, alignItems:"center", flexShrink:0 }}>
        <I n="attach" s={22} c={Z.muted}/>
        <I n="img" s={22} c={Z.muted}/>
        <div style={{ flex:1, background:Z.bg, borderRadius:22, padding:"9px 14px", fontSize:14, color:Z.muted }}>Nhắn tin...</div>
        <I n="emoji" s={22} c={Z.muted}/>
        <div style={{ width:38, height:38, borderRadius:19, background:accent, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <I n="send" s={17} c="#fff"/>
        </div>
      </div>
    </div>
  );
};

/* ════════════════════════════════════════════════════════
   SINH VIÊN
════════════════════════════════════════════════════════ */
// UC-13: Tham gia lớp & rời lớp
const SV_LopHoc = () => {
  const [joined, setJoined] = useState(false);
  const classes = [
    { name:"Lập trình Web", code:"WEB301", gv:"Thầy Nguyễn Văn Nam", sv:35, color:Z.sv },
    { name:"Cơ sở dữ liệu", code:"DB201", gv:"Cô Trần Thị Lan", sv:28, color:Z.gv },
    { name:"Công nghệ mới CNTT", code:"CNM401", gv:"Thầy Lê Minh Tuấn", sv:32, color:Z.purple },
  ];
  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
      <Hdr title="Lớp học của tôi" right={<Tag label="UC-13 ✓" c={Z.sv}/>}/>
      <Scroll p="12px">
        {classes.map((c,i)=>(
          <div key={i} style={{ background:Z.white, borderRadius:16, marginBottom:10, overflow:"hidden", boxShadow:"0 1px 5px rgba(0,0,0,.07)" }}>
            <div style={{ background:c.color, padding:"13px 16px", display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
              <div>
                <div style={{ color:"#fff", fontWeight:800, fontSize:16 }}>{c.name}</div>
                <div style={{ color:"rgba(255,255,255,.8)", fontSize:13, marginTop:2 }}>{c.gv}</div>
              </div>
              <div style={{ background:"rgba(255,255,255,.22)", borderRadius:14, padding:"4px 10px", fontSize:12, color:"#fff", fontWeight:600 }}>{c.sv} SV</div>
            </div>
            <div style={{ padding:"10px 16px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <span style={{ fontSize:13, color:Z.sub }}>Mã lớp: <b style={{ color:Z.text }}>{c.code}</b></span>
              {/* UC-13: rời lớp */}
              <div style={{ background:Z.red+"15", borderRadius:8, padding:"5px 12px", fontSize:12, color:Z.red, fontWeight:600, cursor:"pointer" }}>Rời lớp</div>
            </div>
          </div>
        ))}
        {/* UC-13: Tham gia lớp bằng mã QR */}
        <div style={{ background:Z.white, borderRadius:16, padding:16, textAlign:"center", border:`2px dashed ${Z.sv}`, cursor:"pointer" }}>
          <I n="qr" s={28} c={Z.sv}/>
          <div style={{ color:Z.sv, fontWeight:700, fontSize:14, marginTop:8 }}>Tham gia lớp bằng mã / QR</div>
          <div style={{ color:Z.muted, fontSize:12, marginTop:3 }}>UC-13</div>
        </div>
      </Scroll>
    </div>
  );
};

// UC-19: Bình luận thảo luận, UC-21: Xem lịch sử
const SV_ThaolUan = ({ onBack }) => {
  const topics = [
    { title:"Câu hỏi về JWT refresh token", replies:8, status:"open", time:"Hôm nay" },
    { title:"So sánh MongoDB vs MySQL", replies:15, status:"open", time:"Hôm qua" },
    { title:"Cách setup Socket.io client", replies:5, status:"closed", time:"T3" },
  ];
  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
      <Hdr title="Thảo luận lớp" onBack={onBack} right={<Tag label="UC-19,21 ✓" c={Z.sv}/>}/>
      <Scroll p="12px">
        {topics.map((t,i)=>(
          <div key={i} className="rpl" style={{ background:Z.white, borderRadius:14, padding:"13px 14px", marginBottom:9, boxShadow:"0 1px 4px rgba(0,0,0,.05)" }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
              <span style={{ fontWeight:700, fontSize:14, flex:1 }}>{t.title}</span>
              <Tag label={t.status==="open"?"Đang mở":"Đã đóng"} c={t.status==="open"?Z.green:Z.muted}/>
            </div>
            <div style={{ fontSize:12, color:Z.muted, marginTop:6 }}>💬 {t.replies} bình luận • {t.time}</div>
            {t.status==="open" && <div style={{ marginTop:10, background:Z.blueLight, borderRadius:8, padding:"7px 12px", fontSize:13, color:Z.sv, fontWeight:600, cursor:"pointer" }}>✏️ Tham gia bình luận (UC-19)</div>}
            {/* UC-21: xem lịch sử thảo luận dù đã đóng */}
            <div style={{ marginTop:6, fontSize:12, color:Z.muted, cursor:"pointer" }}>👁 Xem lịch sử thảo luận (UC-21)</div>
          </div>
        ))}
      </Scroll>
    </div>
  );
};

// UC-23→UC-26, UC-28: xem bài tập, nộp, chỉnh sửa, xem trạng thái & điểm
const SV_BaiTap = () => {
  const [sel, setSel] = useState(null);
  const list = [
    { title:"Bài tập 1 – REST API", cls:"Lập trình Web", due:"10/03", status:"graded", score:8.5, feedback:"Code sạch, logic tốt. Cần xử lý thêm edge cases ở validation." },
    { title:"Bài tập 2 – JWT Auth", cls:"Lập trình Web", due:"17/03", status:"submitted", submitTime:"16/03 23:45" },
    { title:"Bài tập 3 – Socket.io", cls:"Lập trình Web", due:"24/03", status:"pending" },
    { title:"ERD Database", cls:"Cơ sở dữ liệu", due:"15/03", status:"graded", score:9, feedback:"Thiết kế chuẩn, có index hợp lý. Xuất sắc!" },
    { title:"Báo cáo OTT", cls:"Công nghệ mới", due:"01/04", status:"pending" },
  ];
  const sm = { graded:{l:"Đã chấm",c:Z.green}, submitted:{l:"Đã nộp",c:Z.sv}, pending:{l:"Chưa nộp",c:Z.red} };

  if (sel) {
    const s = sm[sel.status];
    return (
      <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
        <Hdr title={sel.title} onBack={()=>setSel(null)} sub={`${sel.cls} • Hạn: ${sel.due}`}/>
        <Scroll p="14px">
          <div style={{ background:Z.white, borderRadius:14, padding:16, marginBottom:12 }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:12 }}>
              <Tag label={`${s.l} (UC-26)`} c={s.c}/>
              {sel.status==="graded" && <div style={{ fontSize:30, fontWeight:800, color:Z.sv }}>{sel.score}<span style={{ fontSize:13, color:Z.muted, fontWeight:400 }}>/10</span></div>}
            </div>
            {sel.submitTime && <div style={{ fontSize:13, color:Z.green }}>✅ Đã nộp lúc: {sel.submitTime}</div>}
          </div>
          {sel.status==="graded" && (
            <div style={{ background:Z.white, borderRadius:14, padding:16, marginBottom:12, borderLeft:`4px solid ${Z.sv}` }}>
              <div style={{ fontWeight:700, fontSize:14, color:Z.sv, marginBottom:8 }}>Nhận xét (UC-28)</div>
              <div style={{ fontSize:14, color:Z.text, lineHeight:1.65 }}>{sel.feedback}</div>
            </div>
          )}
          {/* UC-24: nộp bài */}
          {sel.status==="pending" && (
            <div style={{ background:Z.white, borderRadius:14, padding:16, marginBottom:12 }}>
              <div style={{ fontWeight:700, fontSize:15, marginBottom:14 }}>📤 Nộp bài (UC-24)</div>
              <div style={{ background:Z.bg, border:`2px dashed ${Z.border}`, borderRadius:12, padding:22, textAlign:"center", marginBottom:12 }}>
                <I n="file" s={30} c={Z.muted}/><div style={{ fontSize:13, color:Z.muted, marginTop:8 }}>Chọn file nộp</div>
                <div style={{ fontSize:11, color:Z.muted, marginTop:3 }}>PDF, DOCX, ZIP – tối đa 50MB</div>
              </div>
              <button className="rpl" style={{ width:"100%", background:Z.sv, color:"#fff", border:"none", borderRadius:10, padding:12, fontWeight:700, fontSize:15 }}>Nộp bài</button>
            </div>
          )}
          {/* UC-25: chỉnh sửa bài nộp nếu chưa hết deadline */}
          {sel.status==="submitted" && (
            <div style={{ background:Z.white, borderRadius:14, padding:16 }}>
              <div style={{ fontWeight:700, fontSize:14, marginBottom:10 }}>✏️ Chỉnh sửa bài nộp (UC-25)</div>
              <div style={{ fontSize:13, color:Z.muted, marginBottom:12 }}>Còn trong thời hạn – bạn có thể cập nhật bài nộp.</div>
              <button className="rpl" style={{ width:"100%", background:Z.bg, color:Z.text, border:`1.5px solid ${Z.border}`, borderRadius:10, padding:10, fontWeight:600, fontSize:14 }}>Cập nhật bài nộp</button>
            </div>
          )}
        </Scroll>
      </div>
    );
  }
  const pending = list.filter(x=>x.status==="pending").length;
  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
      <Hdr title="Bài tập" right={pending>0?<Tag label={`${pending} chưa nộp`} c={Z.red}/>:null}/>
      <div style={{ background:Z.white, padding:"4px 14px 10px", borderBottom:`1px solid ${Z.border}`, flexShrink:0 }}>
        <div style={{ fontSize:11, color:Z.muted }}>UC-23: Xem danh sách • UC-24: Nộp bài • UC-25: Chỉnh sửa • UC-26: Trạng thái • UC-28: Xem điểm</div>
      </div>
      <Scroll>
        {list.map((a,i)=>{
          const s=sm[a.status];
          return (
            <div key={i} onClick={()=>setSel(a)} className="rpl" style={{ background:Z.white, margin:"5px 12px", borderRadius:14, padding:"13px 14px", display:"flex", gap:12, boxShadow:"0 1px 4px rgba(0,0,0,.05)" }}>
              <div style={{ width:44, height:44, borderRadius:12, background:s.c+"18", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <I n={a.status==="graded"?"check":"file"} s={22} c={s.c}/>
              </div>
              <div style={{ flex:1, minWidth:0 }}>
                <div style={{ fontWeight:700, fontSize:14 }}>{a.title}</div>
                <div style={{ fontSize:12, color:Z.muted, marginTop:3 }}>{a.cls} • Hạn: {a.due}</div>
              </div>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:4 }}>
                <Tag label={s.l} c={s.c}/>
                {a.status==="graded" && <span style={{ fontSize:16, fontWeight:800, color:Z.sv }}>{a.score}</span>}
              </div>
            </div>
          );
        })}
      </Scroll>
    </div>
  );
};

// UC-36: Hỏi AI về tài liệu, UC-38: nhận gợi ý học tập
const SV_AI = () => {
  const [msgs, setMsgs] = useState([
    { ai:true, text:"Xin chào! Mình là AI trợ lý học tập 🤖\n\nHỏi mình về nội dung tài liệu lớp học hoặc nhận gợi ý học tập cá nhân hoá nhé!" },
    { ai:false, text:"JWT hoạt động như thế nào?" },
    { ai:true, text:"JWT gồm 3 phần: Header – Payload – Signature.\n\n✅ Khi login → server tạo JWT → client lưu lại\n✅ Mỗi request gửi kèm JWT trong header\n✅ Server verify chữ ký để xác thực\n\n📄 Nguồn: Slide tuần 4, trang 18–22", src:true },
  ]);
  const [val, setVal] = useState("");
  const send = () => {
    if (!val.trim()) return;
    const q=val; setVal("");
    setMsgs(p=>[...p,{ai:false,text:q},{ai:true,text:"⏳",loading:true}]);
    setTimeout(()=>setMsgs(p=>p.map((m,i)=>i===p.length-1?{ai:true,text:"Dựa trên tài liệu lớp học của bạn, mình tìm thấy thông tin liên quan.\n\nDựa trên kết quả bài tập gần đây, bạn nên ôn lại chương 3 để củng cố kiến thức. (UC-38)\n\n📄 Nguồn: Tài liệu lớp",src:true}:m)),1500);
  };
  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
      <div style={{ background:`linear-gradient(135deg,${Z.purple},#4338CA)`, padding:"12px 14px", flexShrink:0 }}>
        <div style={{ display:"flex", alignItems:"center", gap:10 }}>
          <div style={{ width:40, height:40, borderRadius:20, background:"rgba(255,255,255,.2)", display:"flex", alignItems:"center", justifyContent:"center" }}><I n="ai" s={20} c="#fff"/></div>
          <div><div style={{ fontWeight:700, fontSize:16, color:"#fff" }}>AI Trợ lý học tập</div><div style={{ fontSize:12, color:"rgba(255,255,255,.75)" }}>UC-36: hỏi tài liệu • UC-38: gợi ý học</div></div>
        </div>
        <div style={{ display:"flex", gap:8, marginTop:10, overflowX:"auto", paddingBottom:2 }}>
          {["Giải thích khái niệm","Cho ví dụ","Tóm tắt bài","Gợi ý ôn tập"].map((s,i)=>(
            <div key={i} onClick={()=>setVal(s)} style={{ background:"rgba(255,255,255,.18)", borderRadius:16, padding:"5px 12px", fontSize:12, color:"#fff", whiteSpace:"nowrap", cursor:"pointer", flexShrink:0 }}>{s}</div>
          ))}
        </div>
      </div>
      <div style={{ flex:1, overflowY:"auto", padding:"10px 14px", background:"#F3F0FF", display:"flex", flexDirection:"column", gap:10 }}>
        {msgs.map((m,i)=>(
          <div key={i} className="fu" style={{ display:"flex", gap:8, justifyContent:m.ai?"flex-start":"flex-end" }}>
            {m.ai && <div style={{ width:30, height:30, borderRadius:15, background:`linear-gradient(135deg,${Z.purple},#4338CA)`, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, alignSelf:"flex-end" }}><I n="ai" s={14} c="#fff"/></div>}
            <div style={{ maxWidth:"80%", background:m.ai?Z.white:Z.purple, borderRadius:m.ai?"16px 16px 16px 4px":"16px 16px 4px 16px", padding:"10px 13px", boxShadow:"0 2px 6px rgba(0,0,0,.07)" }}>
              {m.loading ? <div style={{ display:"flex", gap:4 }}>{[0,1,2].map(j=><div key={j} className="dot" style={{ width:7,height:7,borderRadius:"50%",background:Z.muted }}/>)}</div>
                : <><div style={{ fontSize:13.5, color:m.ai?Z.text:"#fff", lineHeight:1.6, whiteSpace:"pre-line" }}>{m.text}</div>
                   {m.src && <div style={{ marginTop:8, background:"#EDE9FE", borderRadius:8, padding:"5px 9px", fontSize:11.5, color:Z.purple, fontWeight:600 }}>📄 Trích dẫn từ tài liệu lớp học</div>}</>}
            </div>
          </div>
        ))}
      </div>
      <div style={{ background:Z.white, borderTop:`1px solid ${Z.border}`, padding:"8px 10px", display:"flex", gap:8, alignItems:"center", flexShrink:0 }}>
        <input value={val} onChange={e=>setVal(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()} style={{ flex:1, background:Z.bg, border:`1.5px solid ${Z.border}`, borderRadius:22, padding:"9px 14px", fontSize:14, color:Z.text, outline:"none" }} placeholder="Hỏi về nội dung bài học..."/>
        <div onClick={send} style={{ width:38, height:38, borderRadius:19, background:`linear-gradient(135deg,${Z.purple},#4338CA)`, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}><I n="send" s={17} c="#fff"/></div>
      </div>
    </div>
  );
};

// UC-40, UC-41: nhận thông báo
const SV_Notis = () => {
  const notis = [
    { icon:"task", title:"Bài tập 3 mới", body:"Thầy Nam vừa đăng bài tập 3 – Socket.io. Deadline 24/03.", time:"10:30", c:Z.sv, read:false, uc:"UC-40" },
    { icon:"bell", title:"Deadline sắp đến", body:"Bài tập 2 sẽ đóng sau 2 tiếng!", time:"09:00", c:Z.orange, read:false, uc:"UC-40" },
    { icon:"star", title:"Điểm bài tập 1", body:"Bạn đạt 8.5/10. Thầy Nam đã có nhận xét.", time:"Hôm qua", c:Z.green, read:true, uc:"UC-41" },
    { icon:"calendar", title:"Lịch học thay đổi", body:"Buổi học Thứ 5 dời sang 8:00 sáng.", time:"Hôm qua", c:Z.purple, read:true, uc:"UC-40" },
  ];
  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
      <Hdr title="Thông báo" right={<Tag label="UC-40,41 ✓" c={Z.sv}/>}/>
      <Scroll>
        {notis.map((n,i)=>(
          <div key={i} style={{ background:n.read?Z.white:Z.blueLight, padding:"12px 14px", display:"flex", gap:12, borderBottom:`1px solid ${Z.border}` }}>
            <div style={{ width:42, height:42, borderRadius:12, background:n.c+"18", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}><I n={n.icon} s={20} c={n.c}/></div>
            <div style={{ flex:1 }}>
              <div style={{ display:"flex", justifyContent:"space-between" }}>
                <span style={{ fontWeight:n.read?600:700, fontSize:14 }}>{n.title}</span>
                <span style={{ fontSize:10, color:Z.muted }}>{n.time}</span>
              </div>
              <div style={{ fontSize:13, color:Z.sub, marginTop:3, lineHeight:1.5 }}>{n.body}</div>
              <Tag label={n.uc} c={n.c}/>
            </div>
            {!n.read && <div style={{ width:8, height:8, borderRadius:4, background:Z.sv, flexShrink:0, marginTop:6 }}/>}
          </div>
        ))}
      </Scroll>
    </div>
  );
};

// UC-01, UC-02, UC-03, UC-04: profile + đăng ký/quên mật khẩu
const SV_Profile = ({ onLogout }) => (
  <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
    <div style={{ background:`linear-gradient(160deg,${Z.sv},#003BB5)`, padding:"18px 16px 0", flexShrink:0 }}>
      <div style={{ fontSize:18, fontWeight:800, color:"#fff", marginBottom:16 }}>Cá nhân</div>
      <div style={{ display:"flex", gap:14, alignItems:"center", marginBottom:16 }}>
        <div style={{ width:64, height:64, borderRadius:32, background:"rgba(255,255,255,.25)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, fontWeight:800, color:"#fff", border:"3px solid rgba(255,255,255,.4)" }}>A</div>
        <div>
          <div style={{ fontWeight:800, fontSize:17, color:"#fff" }}>Nguyễn Văn An</div>
          <div style={{ fontSize:13, color:"rgba(255,255,255,.8)" }}>Sinh viên • MSSV: 21110001</div>
          <div style={{ fontSize:12, color:"rgba(255,255,255,.65)" }}>DHKTPM18A</div>
        </div>
      </div>
      <div style={{ display:"flex", background:"rgba(255,255,255,.12)", borderRadius:14, padding:"10px 0" }}>
        {[["4","Lớp học"],["12","Bài tập"],["9","Đã nộp"]].map(([v,l],i)=>(
          <div key={i} style={{ flex:1, textAlign:"center", borderRight:i<2?"1px solid rgba(255,255,255,.2)":"none" }}>
            <div style={{ fontSize:22, fontWeight:800, color:"#fff" }}>{v}</div>
            <div style={{ fontSize:11, color:"rgba(255,255,255,.7)", marginTop:2 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
    <Scroll>
      <Divider label="TÀI KHOẢN"/>
      <Row label="Cập nhật hồ sơ" sub="UC-04: Tên, ảnh đại diện, liên hệ" icon={<I n="edit" s={18} c={Z.sv}/>} onTap={()=>{}}/>
      <Row label="Đổi mật khẩu" sub="UC-03: Quên mật khẩu / đổi mật khẩu" icon={<I n="key" s={18} c={Z.orange}/>} onTap={()=>{}}/>
      <Divider label="HỌC TẬP"/>
      <Row label="Thông báo của tôi" sub="UC-40, UC-41" icon={<I n="noti" s={18} c={Z.purple}/>} onTap={()=>{}}/>
      <Row label="Tiến độ học tập" icon={<I n="chart" s={18} c={Z.gv}/>} onTap={()=>{}}/>
      <Divider label="QUYỀN HẠN SINH VIÊN"/>
      <div style={{ background:Z.white, padding:"10px 14px", borderBottom:`1px solid ${Z.border}` }}>
        <div style={{ fontSize:12, color:Z.muted, lineHeight:1.8 }}>
          ✅ Chat 1-1 & nhóm (UC-06→10){"\n"}
          ✅ Tham gia/rời lớp (UC-13){"\n"}
          ✅ Bình luận thảo luận (UC-19,21){"\n"}
          ✅ Nộp/sửa/xem bài (UC-23→26,28){"\n"}
          ✅ Hỏi AI / nhận gợi ý (UC-36,38){"\n"}
          ❌ Không thể tạo lớp hay chấm bài
        </div>
      </div>
      <Row label="Đăng xuất" c={Z.red} icon={<I n="logout" s={18} c={Z.red}/>} onTap={onLogout}/>
    </Scroll>
  </div>
);

/* ════════════════════════════════════════════════════════
   GIẢNG VIÊN
════════════════════════════════════════════════════════ */
// UC-12, UC-14, UC-15: Tạo/quản lý/giải tán lớp
const GV_LopHoc = ({ onClass }) => {
  const classes = [
    { name:"Lập trình Web", code:"WEB301", sv:35, bt:3, cham:12, color:Z.gv },
    { name:"Cơ sở dữ liệu", code:"DB201", sv:28, bt:1, cham:0, color:Z.teal },
    { name:"Công nghệ mới CNTT", code:"CNM401", sv:32, bt:2, cham:8, color:Z.orange },
  ];
  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
      <div style={{ background:Z.white, padding:"12px 14px 10px", borderBottom:`1px solid ${Z.border}`, flexShrink:0 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}>
          <span style={{ fontSize:20, fontWeight:800 }}>Lớp học</span>
          {/* UC-12: Tạo lớp */}
          <div style={{ background:Z.gv, borderRadius:10, padding:"6px 14px", display:"flex", gap:5, alignItems:"center", cursor:"pointer" }}>
            <I n="plus" s={14} c="#fff"/><span style={{ fontSize:13, fontWeight:700, color:"#fff" }}>Tạo lớp (UC-12)</span>
          </div>
        </div>
        <div style={{ fontSize:11, color:Z.muted }}>UC-12: Tạo • UC-14: Quản lý thành viên • UC-15: Giải tán</div>
      </div>
      <Scroll p="12px">
        {classes.map((c,i)=>(
          <div key={i} onClick={()=>onClass(c)} className="rpl" style={{ background:Z.white, borderRadius:16, marginBottom:10, overflow:"hidden", boxShadow:"0 2px 8px rgba(0,0,0,.07)" }}>
            <div style={{ background:c.color, padding:"13px 16px", display:"flex", justifyContent:"space-between" }}>
              <div>
                <div style={{ color:"#fff", fontWeight:800, fontSize:16 }}>{c.name}</div>
                <div style={{ color:"rgba(255,255,255,.8)", fontSize:13, marginTop:2 }}>Mã: {c.code}</div>
              </div>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end", gap:4 }}>
                <div style={{ background:"rgba(255,255,255,.22)", borderRadius:14, padding:"3px 10px", fontSize:12, color:"#fff", fontWeight:600 }}>{c.sv} SV</div>
                {/* UC-15: giải tán */}
                <div style={{ background:"rgba(255,0,0,.25)", borderRadius:10, padding:"3px 8px", fontSize:11, color:"#fff", fontWeight:600, cursor:"pointer" }}>Giải tán</div>
              </div>
            </div>
            <div style={{ padding:"10px 16px", display:"flex", justifyContent:"space-between" }}>
              <span style={{ fontSize:13, color:Z.sub }}><b style={{ color:Z.text }}>{c.bt}</b> bài tập</span>
              {c.cham>0 && <Tag label={`${c.cham} chờ chấm`} c={Z.orange}/>}
            </div>
          </div>
        ))}
      </Scroll>
    </div>
  );
};

// Chi tiết lớp: chat, bài tập, thảo luận, thành viên (UC-14), AI phân tích (UC-42,34,35)
const GV_LopDetail = ({ cls, onBack }) => {
  const [tab, setTab] = useState("bt");
  const tabs2 = ["Chat","Bài tập","Thảo luận","Thành viên","AI"];
  const tabIds = ["chat","bt","tl","tv","ai"];
  const members = ["Nguyễn Văn An","Trần Thị Bình","Lê Minh Cường","Phạm Thu Dung","Hoàng Văn Em"];

  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
      <div style={{ background:cls.color, flexShrink:0 }}>
        <div style={{ padding:"10px 14px 0", display:"flex", alignItems:"center", gap:10 }}>
          <div onClick={onBack} className="rpl"><I n="back" s={24} c="#fff"/></div>
          <div style={{ flex:1 }}><div style={{ fontWeight:800, fontSize:16, color:"#fff" }}>{cls.name}</div><div style={{ fontSize:12, color:"rgba(255,255,255,.75)" }}>{cls.sv} sinh viên</div></div>
          <I n="bell" s={22} c="#fff"/>
        </div>
        <div style={{ display:"flex", overflowX:"auto", marginTop:6 }}>
          {tabs2.map((t,i)=>(
            <div key={i} onClick={()=>setTab(tabIds[i])} style={{ padding:"8px 14px", fontSize:13, fontWeight:600, color:tab===tabIds[i]?"#fff":"rgba(255,255,255,.6)", borderBottom:tab===tabIds[i]?"2.5px solid #fff":"2.5px solid transparent", cursor:"pointer", whiteSpace:"nowrap" }}>{t}</div>
          ))}
        </div>
      </div>

      {tab==="chat" && (
        <>
          <div style={{ flex:1, overflowY:"auto", padding:"10px 14px", background:"#DAE2ED", display:"flex", flexDirection:"column", gap:6 }}>
            {[
              { gv:true, text:"Bài tập 3 đã đăng lên! Deadline 24/3 nhé 📢", time:"09:00" },
              { gv:false, name:"Nguyễn Văn A", text:"Dạ em hiểu rồi ạ!", time:"09:05" },
              { gv:false, name:"Trần Thị B", text:"Thầy ơi nộp file gì ạ?", time:"09:08" },
              { gv:true, text:"File .zip source code nhé các em 👍", time:"09:10" },
            ].map((m,i)=>(
              <div key={i} style={{ display:"flex", justifyContent:m.gv?"flex-end":"flex-start", gap:6 }}>
                {!m.gv && <Av name={m.name} sz={28} i={i}/>}
                <div>
                  {!m.gv && <div style={{ fontSize:11, color:Z.muted, marginBottom:3 }}>{m.name}</div>}
                  <div style={{ background:m.gv?cls.color:Z.white, color:m.gv?"#fff":Z.text, borderRadius:14, padding:"9px 13px", fontSize:13.5, maxWidth:220 }}>{m.text}</div>
                  <div style={{ fontSize:10, color:Z.muted, marginTop:2, textAlign:m.gv?"right":"left" }}>{m.time}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background:Z.white, borderTop:`1px solid ${Z.border}`, padding:"8px 10px", display:"flex", gap:8, alignItems:"center", flexShrink:0 }}>
            <I n="attach" s={22} c={Z.muted}/>
            <div style={{ flex:1, background:Z.bg, borderRadius:22, padding:"9px 14px", fontSize:14, color:Z.muted }}>Gửi thông báo lớp...</div>
            <div style={{ width:38, height:38, borderRadius:19, background:cls.color, display:"flex", alignItems:"center", justifyContent:"center" }}><I n="send" s={17} c="#fff"/></div>
          </div>
        </>
      )}

      {tab==="bt" && (
        <Scroll>
          <div style={{ padding:"10px 12px 5px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
            <span style={{ fontWeight:700, fontSize:15 }}>Bài tập</span>
            {/* UC-22: tạo bài tập */}
            <div style={{ background:cls.color, borderRadius:8, padding:"5px 12px", fontSize:12, fontWeight:700, color:"#fff", cursor:"pointer" }}>+ Tạo bài (UC-22)</div>
          </div>
          {[
            { title:"Bài tập 1 – REST API", due:"10/03", nop:35, total:35, cham:35 },
            { title:"Bài tập 2 – JWT Auth", due:"17/03", nop:28, total:35, cham:12 },
            { title:"Bài tập 3 – Socket.io", due:"24/03", nop:5, total:35, cham:0 },
          ].map((a,i)=>(
            <div key={i} style={{ background:Z.white, margin:"5px 12px", borderRadius:14, padding:"13px 14px", marginBottom:8, boxShadow:"0 1px 4px rgba(0,0,0,.05)" }}>
              <div style={{ display:"flex", justifyContent:"space-between" }}>
                <span style={{ fontWeight:700, fontSize:14 }}>{a.title}</span>
                <div style={{ display:"flex", gap:5 }}>
                  {/* UC-22: chỉnh sửa / xóa */}
                  <I n="edit" s={16} c={Z.muted}/><I n="trash" s={16} c={Z.red}/>
                </div>
              </div>
              <div style={{ display:"flex", gap:14, marginTop:9 }}>
                <span style={{ fontSize:12, color:Z.sub }}>📥 Nộp: <b>{a.nop}/{a.total}</b></span>
                <span style={{ fontSize:12, color:Z.sub }}>✅ Chấm: <b style={{ color:a.cham===a.nop?Z.green:Z.orange }}>{a.cham}</b></span>
              </div>
              <div style={{ height:6, background:Z.bg, borderRadius:3, marginTop:8 }}>
                <div style={{ height:6, background:cls.color, borderRadius:3, width:`${a.nop/a.total*100}%` }}/>
              </div>
              {/* UC-27, UC-29: chấm bài + AI nhận xét */}
              {a.cham<a.nop && <div style={{ marginTop:10, display:"flex", gap:8 }}>
                <div style={{ flex:1, background:cls.color+"18", borderRadius:8, padding:"7px 10px", fontSize:12, color:cls.color, fontWeight:600, cursor:"pointer", textAlign:"center" }}>✏️ Chấm bài (UC-27)</div>
                <div style={{ flex:1, background:Z.purple+"18", borderRadius:8, padding:"7px 10px", fontSize:12, color:Z.purple, fontWeight:600, cursor:"pointer", textAlign:"center" }}>🤖 AI nhận xét (UC-29)</div>
              </div>}
            </div>
          ))}
        </Scroll>
      )}

      {tab==="tl" && (
        <Scroll p="12px">
          {/* UC-18: tạo chủ đề, UC-20: đóng/mở lại */}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:10 }}>
            <span style={{ fontWeight:700, fontSize:15 }}>Thảo luận</span>
            <div style={{ background:cls.color, borderRadius:8, padding:"5px 12px", fontSize:12, fontWeight:700, color:"#fff", cursor:"pointer" }}>+ Tạo (UC-18)</div>
          </div>
          {[
            { title:"So sánh REST vs GraphQL", replies:12, open:true },
            { title:"Hướng dẫn setup môi trường", replies:8, open:true },
            { title:"Bài tập 1 – Giải đáp thắc mắc", replies:20, open:false },
          ].map((t,i)=>(
            <div key={i} style={{ background:Z.white, borderRadius:14, padding:"13px 14px", marginBottom:8 }}>
              <div style={{ display:"flex", justifyContent:"space-between" }}>
                <span style={{ fontWeight:700, fontSize:14, flex:1 }}>{t.title}</span>
                {/* UC-20: đóng/mở lại */}
                <div style={{ background:t.open?Z.red+"15":Z.green+"15", borderRadius:8, padding:"4px 8px", fontSize:11, color:t.open?Z.red:Z.green, fontWeight:600, cursor:"pointer" }}>{t.open?"Đóng (UC-20)":"Mở lại (UC-20)"}</div>
              </div>
              <div style={{ fontSize:12, color:Z.muted, marginTop:5 }}>💬 {t.replies} bình luận</div>
            </div>
          ))}
        </Scroll>
      )}

      {tab==="tv" && (
        <Scroll>
          {/* UC-14: quản lý thành viên */}
          <div style={{ padding:"10px 14px 5px", display:"flex", justifyContent:"space-between" }}>
            <span style={{ fontWeight:700, fontSize:15 }}>Thành viên ({cls.sv})</span>
            <Tag label="UC-14 ✓" c={cls.color}/>
          </div>
          {members.map((m,i)=>(
            <div key={i} style={{ background:Z.white, padding:"11px 14px", display:"flex", gap:12, borderBottom:`1px solid ${Z.border}`, alignItems:"center" }}>
              <Av name={m} sz={42} i={i}/>
              <div style={{ flex:1 }}><div style={{ fontWeight:600, fontSize:14 }}>{m}</div><div style={{ fontSize:12, color:Z.muted }}>Sinh viên</div></div>
              {/* UC-14: xóa thành viên */}
              <I n="trash" s={17} c={Z.red}/>
            </div>
          ))}
        </Scroll>
      )}

      {tab==="ai" && (
        <Scroll p="12px">
          {/* UC-35: Upload tài liệu Knowledge Base */}
          <div style={{ background:Z.white, borderRadius:14, padding:14, marginBottom:10 }}>
            <div style={{ fontWeight:700, fontSize:14, marginBottom:10, display:"flex", gap:6, alignItems:"center" }}><I n="upload" s={16} c={cls.color}/> Upload tài liệu (UC-35)</div>
            <div style={{ background:Z.bg, border:`2px dashed ${cls.color}`, borderRadius:12, padding:"16px", textAlign:"center", cursor:"pointer" }}>
              <I n="file" s={26} c={cls.color}/><div style={{ fontSize:13, color:cls.color, fontWeight:600, marginTop:6 }}>Upload PDF/DOCX lên AI Knowledge Base</div>
              <div style={{ fontSize:11, color:Z.muted, marginTop:3 }}>AI sẽ dùng tài liệu này để trả lời câu hỏi SV</div>
            </div>
          </div>
          {/* UC-34: AI tóm tắt phiên học */}
          <div style={{ background:Z.white, borderRadius:14, padding:14, marginBottom:10 }}>
            <div style={{ fontWeight:700, fontSize:14, marginBottom:8 }}>🤖 AI tóm tắt phiên học (UC-34)</div>
            <div style={{ background:Z.bg, borderRadius:10, padding:"10px 12px", fontSize:13, color:Z.muted, marginBottom:10 }}>Dán transcript/ghi chú buổi học vào đây...</div>
            <div style={{ background:Z.purple+"18", borderRadius:8, padding:"8px 12px", fontSize:13, color:Z.purple, fontWeight:600, cursor:"pointer", textAlign:"center" }}>✨ Nhờ AI tóm tắt</div>
          </div>
          {/* UC-42: Thống kê lớp */}
          <div style={{ background:Z.white, borderRadius:14, padding:14 }}>
            <div style={{ fontWeight:700, fontSize:14, marginBottom:10 }}>📊 Thống kê lớp (UC-42)</div>
            {[["Tỉ lệ nộp bài","80%",Z.green],["Điểm trung bình","7.8/10",cls.color],["SV cần hỗ trợ","5 người",Z.orange]].map(([l,v,c],i)=>(
              <div key={i} style={{ display:"flex", justifyContent:"space-between", padding:"8px 0", borderBottom:i<2?`1px solid ${Z.border}`:"none" }}>
                <span style={{ fontSize:14, color:Z.sub }}>{l}</span>
                <span style={{ fontSize:14, fontWeight:700, color:c }}>{v}</span>
              </div>
            ))}
          </div>
        </Scroll>
      )}
    </div>
  );
};

// UC-30, UC-32, UC-33: Lịch học & phiên học
const GV_LichHoc = () => {
  const events = [
    { title:"Lập trình Web – Buổi 10", date:"Thứ 3, 18/03", time:"07:30 – 09:30", status:"upcoming" },
    { title:"Cơ sở dữ liệu – Buổi 8", date:"Thứ 4, 19/03", time:"09:45 – 11:45", status:"online" },
    { title:"Công nghệ mới – Buổi 6", date:"Thứ 6, 21/03", time:"13:00 – 15:00", status:"upcoming" },
  ];
  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
      <Hdr title="Lịch học" right={<Tag label="UC-30,32,33 ✓" c={Z.gv}/>}/>
      <Scroll p="12px">
        {/* UC-30: Tạo lịch học */}
        <div style={{ background:Z.gv, borderRadius:14, padding:"12px 16px", marginBottom:12, display:"flex", gap:12, alignItems:"center", cursor:"pointer" }}>
          <I n="plus" s={22} c="#fff"/>
          <div><div style={{ fontWeight:700, fontSize:14, color:"#fff" }}>Tạo lịch học mới (UC-30)</div><div style={{ fontSize:12, color:"rgba(255,255,255,.75)" }}>Đặt ngày giờ, nội dung buổi học</div></div>
        </div>
        {events.map((e,i)=>(
          <div key={i} style={{ background:Z.white, borderRadius:14, padding:"13px 16px", marginBottom:9, boxShadow:"0 1px 4px rgba(0,0,0,.05)" }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
              <span style={{ fontWeight:700, fontSize:14 }}>{e.title}</span>
              <Tag label={e.status==="online"?"Online":"Upcoming"} c={e.status==="online"?Z.green:Z.orange}/>
            </div>
            <div style={{ fontSize:13, color:Z.sub }}>📅 {e.date} • ⏰ {e.time}</div>
            <div style={{ display:"flex", gap:8, marginTop:10 }}>
              {/* UC-32: tạo phiên học online */}
              <div style={{ flex:1, background:Z.gv+"18", borderRadius:8, padding:"7px 0", fontSize:12, color:Z.gv, fontWeight:600, textAlign:"center", cursor:"pointer" }}>🎥 Tạo phiên (UC-32)</div>
              {/* UC-33: kết thúc phiên */}
              {e.status==="online" && <div style={{ flex:1, background:Z.red+"15", borderRadius:8, padding:"7px 0", fontSize:12, color:Z.red, fontWeight:600, textAlign:"center", cursor:"pointer" }}>⏹ Kết thúc (UC-33)</div>}
              {/* UC-30: cập nhật */}
              <div style={{ width:34, height:34, borderRadius:9, background:Z.bg, display:"flex", alignItems:"center", justifyContent:"center", cursor:"pointer" }}><I n="edit" s={16} c={Z.muted}/></div>
            </div>
          </div>
        ))}
      </Scroll>
    </div>
  );
};

const GV_Profile = ({ onLogout }) => (
  <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
    <div style={{ background:`linear-gradient(160deg,${Z.gv},#035F48)`, padding:"18px 16px 0", flexShrink:0 }}>
      <div style={{ fontSize:18, fontWeight:800, color:"#fff", marginBottom:16 }}>Cá nhân</div>
      <div style={{ display:"flex", gap:14, alignItems:"center", marginBottom:16 }}>
        <div style={{ width:64, height:64, borderRadius:32, background:"rgba(255,255,255,.25)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:26, fontWeight:800, color:"#fff", border:"3px solid rgba(255,255,255,.4)" }}>N</div>
        <div>
          <div style={{ fontWeight:800, fontSize:17, color:"#fff" }}>TS. Nguyễn Văn Nam</div>
          <div style={{ fontSize:13, color:"rgba(255,255,255,.8)" }}>Giảng viên • Khoa CNTT</div>
          <div style={{ fontSize:12, color:"rgba(255,255,255,.65)" }}>gv.nguyennam@edu.vn</div>
        </div>
      </div>
      <div style={{ display:"flex", background:"rgba(255,255,255,.12)", borderRadius:14, padding:"10px 0" }}>
        {[["3","Lớp dạy"],["95","Sinh viên"],["6","Bài tập"]].map(([v,l],i)=>(
          <div key={i} style={{ flex:1, textAlign:"center", borderRight:i<2?"1px solid rgba(255,255,255,.2)":"none" }}>
            <div style={{ fontSize:22, fontWeight:800, color:"#fff" }}>{v}</div>
            <div style={{ fontSize:11, color:"rgba(255,255,255,.7)", marginTop:2 }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
    <Scroll>
      <Divider label="TÀI KHOẢN"/>
      <Row label="Cập nhật hồ sơ" sub="UC-04" icon={<I n="edit" s={18} c={Z.gv}/>} onTap={()=>{}}/>
      <Divider label="QUYỀN HẠN GIẢNG VIÊN"/>
      <div style={{ background:Z.white, padding:"10px 14px", borderBottom:`1px solid ${Z.border}` }}>
        <div style={{ fontSize:12, color:Z.muted, lineHeight:1.8 }}>
          ✅ Tạo/giải tán lớp (UC-12,15){"\n"}
          ✅ Quản lý thành viên (UC-14){"\n"}
          ✅ Tạo/xóa/sửa bài tập (UC-22){"\n"}
          ✅ Chấm bài + AI nhận xét (UC-27,29){"\n"}
          ✅ Quản lý lịch học + phiên (UC-30,32,33){"\n"}
          ✅ Upload tài liệu AI (UC-35){"\n"}
          ❌ Không can thiệp tài khoản người dùng
        </div>
      </div>
      <Row label="Đăng xuất" c={Z.red} icon={<I n="logout" s={18} c={Z.red}/>} onTap={onLogout}/>
    </Scroll>
  </div>
);

/* ════════════════════════════════════════════════════════
   ADMIN
════════════════════════════════════════════════════════ */
// UC-05: Quản lý người dùng (xem, tìm, khoá/mở khoá, phân quyền)
const Admin_Users = () => {
  const users = [
    { name:"Nguyễn Văn Nam", role:"Giảng viên", email:"gv.nguyennam@edu.vn", active:true },
    { name:"Nguyễn Văn An", role:"Sinh viên", email:"sv.21110001@edu.vn", active:true },
    { name:"Trần Thị Bình", role:"Sinh viên", email:"sv.21110002@edu.vn", active:true },
    { name:"Lê Văn Cường", role:"Giảng viên", email:"gv.lecuong@edu.vn", active:false },
    { name:"Phạm Thu Dung", role:"Sinh viên", email:"sv.21110005@edu.vn", active:true },
  ];
  const rc = { "Giảng viên":Z.gv, "Sinh viên":Z.sv };
  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
      <div style={{ background:Z.white, padding:"12px 14px 10px", borderBottom:`1px solid ${Z.border}`, flexShrink:0 }}>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:6 }}>
          <span style={{ fontSize:20, fontWeight:800 }}>Người dùng</span>
          <Tag label="UC-05 ✓" c={Z.admin}/>
        </div>
        <div style={{ fontSize:11, color:Z.muted, marginBottom:8 }}>Xem • Tìm kiếm • Khoá/Mở khoá • Phân quyền GV/SV</div>
        <div style={{ background:Z.bg, borderRadius:10, padding:"8px 12px", display:"flex", gap:8 }}>
          <I n="search" s={15} c={Z.muted}/><span style={{ fontSize:14, color:Z.muted }}>Tìm kiếm người dùng...</span>
        </div>
      </div>
      <div style={{ display:"flex", gap:8, padding:"10px 14px", background:Z.white, borderBottom:`1px solid ${Z.border}`, flexShrink:0 }}>
        {["Tất cả","Giảng viên","Sinh viên","Bị khoá"].map((f,i)=>(
          <div key={i} style={{ borderRadius:20, padding:"5px 12px", background:i===0?Z.admin:Z.bg, color:i===0?"#fff":Z.sub, fontSize:12, fontWeight:i===0?600:400, cursor:"pointer" }}>{f}</div>
        ))}
      </div>
      <Scroll>
        {users.map((u,i)=>(
          <div key={i} style={{ background:Z.white, padding:"12px 14px", display:"flex", gap:12, borderBottom:`1px solid ${Z.border}`, alignItems:"center" }}>
            <Av name={u.name} sz={44} i={i}/>
            <div style={{ flex:1 }}>
              <div style={{ fontWeight:700, fontSize:14 }}>{u.name}</div>
              <div style={{ fontSize:12, color:Z.muted, marginTop:1 }}>{u.email}</div>
              <div style={{ display:"flex", gap:6, marginTop:5 }}>
                <Tag label={u.role} c={rc[u.role]}/>
                {/* UC-05: phân quyền */}
                <Tag label="Đổi quyền" c={Z.orange}/>
              </div>
            </div>
            {/* UC-05: khoá / mở khoá tài khoản */}
            <div style={{ display:"flex", flexDirection:"column", gap:5, alignItems:"flex-end" }}>
              <div style={{ width:10, height:10, borderRadius:5, background:u.active?Z.green:Z.red }}/>
              <div style={{ background:u.active?Z.red+"15":Z.green+"15", borderRadius:8, padding:"4px 8px", fontSize:11, color:u.active?Z.red:Z.green, fontWeight:600, cursor:"pointer" }}>{u.active?"Khoá":"Mở khoá"}</div>
            </div>
          </div>
        ))}
      </Scroll>
    </div>
  );
};

// UC-17: Admin quản lý lớp học
const Admin_LopHoc = () => {
  const classes = [
    { name:"Lập trình Web WEB301", gv:"Thầy Nguyễn Văn Nam", sv:35, active:true },
    { name:"Cơ sở dữ liệu DB201", gv:"Cô Trần Thị Lan", sv:28, active:true },
    { name:"Công nghệ mới CNM401", gv:"Thầy Lê Minh Tuấn", sv:32, active:true },
    { name:"Lập trình Mobile MOB302", gv:"Chưa phân công", sv:0, active:false },
  ];
  return (
    <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
      <Hdr title="Quản lý lớp học" right={<Tag label="UC-17 ✓" c={Z.admin}/>}/>
      <div style={{ background:Z.white, padding:"4px 14px 10px", borderBottom:`1px solid ${Z.border}`, fontSize:11, color:Z.muted, flexShrink:0 }}>
        Xem toàn bộ • Can thiệp khi cần (khoá lớp, xem nội dung vi phạm)
      </div>
      <Scroll p="10px">
        {classes.map((c,i)=>(
          <div key={i} style={{ background:Z.white, borderRadius:14, padding:"13px 14px", marginBottom:8, boxShadow:"0 1px 4px rgba(0,0,0,.05)" }}>
            <div style={{ display:"flex", justifyContent:"space-between" }}>
              <span style={{ fontWeight:700, fontSize:14 }}>{c.name}</span>
              <Tag label={c.active?"Hoạt động":"Chưa có GV"} c={c.active?Z.green:Z.orange}/>
            </div>
            <div style={{ fontSize:13, color:Z.sub, marginTop:5 }}>👨‍🏫 {c.gv} • {c.sv} SV</div>
            <div style={{ display:"flex", gap:8, marginTop:10 }}>
              <div style={{ flex:1, background:Z.admin+"15", borderRadius:8, padding:"6px 0", fontSize:12, color:Z.admin, fontWeight:600, textAlign:"center", cursor:"pointer" }}>👁 Xem nội dung</div>
              <div style={{ flex:1, background:Z.red+"15", borderRadius:8, padding:"6px 0", fontSize:12, color:Z.red, fontWeight:600, textAlign:"center", cursor:"pointer" }}>🔒 Khoá lớp</div>
            </div>
          </div>
        ))}
      </Scroll>
    </div>
  );
};

// UC-41: Gửi thông báo toàn hệ thống + UC-43: xem báo cáo
const Admin_Dashboard = () => (
  <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
    <div style={{ background:`linear-gradient(135deg,${Z.admin},#065F8A)`, padding:"14px 14px 16px", flexShrink:0 }}>
      <div style={{ fontSize:18, fontWeight:800, color:"#fff" }}>Tổng quan hệ thống</div>
      <div style={{ fontSize:12, color:"rgba(255,255,255,.7)" }}>Hôm nay, 10:30 • Admin Dashboard</div>
    </div>
    <Scroll p="12px">
      {/* UC-43: báo cáo hệ thống */}
      <div style={{ background:Z.white, borderRadius:14, padding:2, marginBottom:12, overflow:"hidden" }}>
        <div style={{ padding:"12px 14px 8px", fontWeight:700, fontSize:14 }}>📊 Báo cáo hệ thống (UC-43)</div>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:1, background:Z.border }}>
          {[["1,284","Người dùng",Z.admin],["48","Lớp học",Z.gv],["8,420","Tin nhắn/ngày",Z.purple],["342","Lượt AI hôm nay",Z.orange]].map(([v,l,c],i)=>(
            <div key={i} style={{ background:Z.white, padding:"12px 14px" }}>
              <div style={{ fontSize:22, fontWeight:800, color:c }}>{v}</div>
              <div style={{ fontSize:12, color:Z.muted, marginTop:2 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* UC-41: Gửi thông báo toàn hệ thống */}
      <div style={{ background:Z.white, borderRadius:14, padding:14, marginBottom:12 }}>
        <div style={{ fontWeight:700, fontSize:14, marginBottom:10, display:"flex", gap:6, alignItems:"center" }}>
          <I n="noti" s={16} c={Z.admin}/> Gửi thông báo hệ thống (UC-41)
        </div>
        <div style={{ background:Z.bg, borderRadius:10, padding:"10px 12px", fontSize:13, color:Z.muted, marginBottom:10 }}>Nhập nội dung thông báo toàn hệ thống...</div>
        <div style={{ display:"flex", gap:8 }}>
          <div style={{ flex:1, background:Z.bg, borderRadius:8, padding:"7px 0", fontSize:12, color:Z.sub, fontWeight:600, textAlign:"center", cursor:"pointer" }}>Gửi cho GV</div>
          <div style={{ flex:1, background:Z.bg, borderRadius:8, padding:"7px 0", fontSize:12, color:Z.sub, fontWeight:600, textAlign:"center", cursor:"pointer" }}>Gửi cho SV</div>
          <div style={{ flex:1, background:Z.admin, borderRadius:8, padding:"7px 0", fontSize:12, color:"#fff", fontWeight:700, textAlign:"center", cursor:"pointer" }}>📢 Gửi tất cả</div>
        </div>
      </div>

      <div style={{ background:Z.white, borderRadius:14, padding:14 }}>
        <div style={{ fontWeight:700, fontSize:14, marginBottom:10 }}>⚠️ Cần xử lý</div>
        {[
          { txt:"3 tài khoản mới chờ phân quyền", c:Z.orange, uc:"UC-05" },
          { txt:"2 lớp chưa có giảng viên phụ trách", c:Z.red, uc:"UC-17" },
          { txt:"Hệ thống AI hoạt động bình thường", c:Z.green, uc:"OK" },
        ].map((item,i)=>(
          <div key={i} style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"8px 0", borderBottom:i<2?`1px solid ${Z.border}`:"none" }}>
            <div style={{ display:"flex", gap:8 }}><div style={{ width:8, height:8, borderRadius:4, background:item.c, marginTop:5, flexShrink:0 }}/><span style={{ fontSize:13 }}>{item.txt}</span></div>
            <Tag label={item.uc} c={item.c}/>
          </div>
        ))}
      </div>
    </Scroll>
  </div>
);

const Admin_Profile = ({ onLogout }) => (
  <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
    <div style={{ background:`linear-gradient(160deg,${Z.admin},#065F8A)`, padding:"18px 16px 24px", flexShrink:0 }}>
      <div style={{ display:"flex", gap:14, alignItems:"center" }}>
        <div style={{ width:64, height:64, borderRadius:32, background:"rgba(255,255,255,.25)", display:"flex", alignItems:"center", justifyContent:"center" }}><I n="shield" s={28} c="#fff"/></div>
        <div>
          <div style={{ fontWeight:800, fontSize:17, color:"#fff" }}>Admin Hệ thống</div>
          <div style={{ fontSize:13, color:"rgba(255,255,255,.8)" }}>admin@system.vn</div>
          <Tag label="Super Admin" c="#fff"/>
        </div>
      </div>
    </div>
    <Scroll>
      <Divider label="QUẢN TRỊ"/>
      <Row label="Quản lý người dùng" sub="UC-05: xem, khoá, phân quyền" icon={<I n="users" s={18} c={Z.admin}/>} onTap={()=>{}}/>
      <Row label="Quản lý lớp học" sub="UC-17: xem, can thiệp vi phạm" icon={<I n="class" s={18} c={Z.gv}/>} onTap={()=>{}}/>
      <Row label="Gửi thông báo hệ thống" sub="UC-41: thông báo toàn hệ thống" icon={<I n="noti" s={18} c={Z.orange}/>} onTap={()=>{}}/>
      <Row label="Báo cáo hệ thống" sub="UC-43: users, lớp, messages, AI" icon={<I n="chart" s={18} c={Z.purple}/>} onTap={()=>{}}/>
      <Divider label="GIỚI HẠN QUYỀN HẠN"/>
      <div style={{ background:Z.white, padding:"10px 14px", borderBottom:`1px solid ${Z.border}` }}>
        <div style={{ fontSize:12, color:Z.muted, lineHeight:1.8 }}>
          ❌ Không can thiệp chấm bài{"\n"}
          ❌ Không đọc chat riêng GV/SV{"\n"}
          ❌ Không dùng AI chatbot{"\n"}
          ✅ Chỉ can thiệp khi xử lý vi phạm
        </div>
      </div>
      <Divider label="HỆ THỐNG"/>
      <Row label="Cấu hình AWS & OpenAI" icon={<I n="settings" s={18} c={Z.sub}/>} onTap={()=>{}}/>
      <Row label="Nhật ký hệ thống" icon={<I n="file" s={18} c={Z.sub}/>} onTap={()=>{}}/>
      <Row label="Đăng xuất" c={Z.red} icon={<I n="logout" s={18} c={Z.red}/>} onTap={onLogout}/>
    </Scroll>
  </div>
);

/* ════════════════════════════════════════════════════════
   ROOT
════════════════════════════════════════════════════════ */
export default function App() {
  const [actor, setActor] = useState(null);
  const [svTab, setSvTab]   = useState("chat");
  const [gvTab, setGvTab]   = useState("chat");
  const [adTab, setAdTab]   = useState("dashboard");
  const [chatOpen, setChatOpen]   = useState(null);
  const [classOpen, setClassOpen] = useState(null);
  const [subScreen, setSubScreen] = useState(null); // "tl" | "lịch"

  const logout = () => { setActor(null); setChatOpen(null); setClassOpen(null); setSubScreen(null); };
  const accent = actor==="gv"?Z.gv:actor==="admin"?Z.admin:Z.sv;

  const svTabs = [
    { id:"chat",  label:"Tin nhắn",  icon:"chat",     badge:8 },
    { id:"lop",   label:"Lớp học",   icon:"class",    badge:0 },
    { id:"bt",    label:"Bài tập",   icon:"task",     badge:2 },
    { id:"ai",    label:"AI",        icon:"ai",       badge:0 },
    { id:"me",    label:"Tôi",       icon:"me",       badge:0 },
  ];
  const gvTabs = [
    { id:"chat",  label:"Tin nhắn",  icon:"chat",     badge:4 },
    { id:"lop",   label:"Lớp học",   icon:"class",    badge:0 },
    { id:"lich",  label:"Lịch học",  icon:"calendar", badge:0 },
    { id:"me",    label:"Tôi",       icon:"me",       badge:0 },
  ];
  const adTabs = [
    { id:"dashboard", label:"Tổng quan",  icon:"chart",    badge:0 },
    { id:"users",     label:"Người dùng", icon:"users",    badge:3 },
    { id:"lop",       label:"Lớp học",    icon:"class",    badge:2 },
    { id:"me",        label:"Tôi",        icon:"me",       badge:0 },
  ];

  const renderSV = () => {
    if (chatOpen)         return <ChatWindow contact={chatOpen} onBack={()=>setChatOpen(null)} accent={Z.sv}/>;
    if (subScreen==="tl") return <SV_ThaolUan onBack={()=>setSubScreen(null)}/>;
    if (svTab==="chat")   return <ChatList accent={Z.sv} onOpen={c=>setChatOpen(c)}/>;
    if (svTab==="lop")    return <SV_LopHoc/>;
    if (svTab==="bt")     return <SV_BaiTap/>;
    if (svTab==="ai")     return <SV_AI/>;
    if (svTab==="me")     return <SV_Profile onLogout={logout}/>;
  };
  const renderGV = () => {
    if (chatOpen)          return <ChatWindow contact={chatOpen} onBack={()=>setChatOpen(null)} accent={Z.gv}/>;
    if (classOpen)         return <GV_LopDetail cls={classOpen} onBack={()=>setClassOpen(null)}/>;
    if (gvTab==="chat")    return <ChatList accent={Z.gv} onOpen={c=>setChatOpen(c)}/>;
    if (gvTab==="lop")     return <GV_LopHoc onClass={c=>setClassOpen(c)}/>;
    if (gvTab==="lich")    return <GV_LichHoc/>;
    if (gvTab==="me")      return <GV_Profile onLogout={logout}/>;
  };
  const renderAdmin = () => {
    if (adTab==="dashboard") return <Admin_Dashboard/>;
    if (adTab==="users")     return <Admin_Users/>;
    if (adTab==="lop")       return <Admin_LopHoc/>;
    if (adTab==="me")        return <Admin_Profile onLogout={logout}/>;
  };

  return (
    <>
      <style>{css}</style>
      <div style={{ minHeight:"100vh", background:"linear-gradient(145deg,#080C18 0%,#0D1929 55%,#071428 100%)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"40px 20px", gap:28 }}>
        <div style={{ textAlign:"center" }}>
          <div style={{ color:"#fff", fontSize:30, fontWeight:900, letterSpacing:-0.8 }}>Zalo Education</div>
          <div style={{ color:"rgba(255,255,255,.4)", fontSize:13, marginTop:5 }}>UI Mockup • 3 Actor • Phân quyền theo use case</div>
        </div>

        {!actor ? (
          <div style={{ display:"flex", gap:24, flexWrap:"wrap", justifyContent:"center" }}>
            {[
              { id:"sv",    label:"Sinh viên",  accent:Z.sv,    desc:"Chat · Bài tập · AI chatbot · Thông báo" },
              { id:"gv",    label:"Giảng viên", accent:Z.gv,    desc:"Lớp học · Chấm bài · Lịch dạy · AI phân tích" },
              { id:"admin", label:"Admin",      accent:Z.admin, desc:"Quản lý user · Lớp · Thông báo · Báo cáo" },
            ].map(a=>(
              <Phone key={a.id} label={a.label} accent={a.accent}>
                <Login onLogin={id=>{ setActor(id); setSvTab("chat"); setGvTab("chat"); setAdTab("dashboard"); }}/>
              </Phone>
            ))}
          </div>
        ) : (
          <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:14 }}>
            <Phone label={actor==="sv"?"Sinh viên":actor==="gv"?"Giảng viên":"Admin"} accent={accent}>
              {actor==="sv" && (
                <>
                  {renderSV()}
                  {!chatOpen && subScreen!=="tl" && <TabBar tabs={svTabs} active={svTab} onTab={t=>{ setSvTab(t); setSubScreen(null); }} accent={Z.sv}/>}
                </>
              )}
              {actor==="gv" && (
                <>
                  {renderGV()}
                  {!chatOpen && !classOpen && <TabBar tabs={gvTabs} active={gvTab} onTab={setGvTab} accent={Z.gv}/>}
                </>
              )}
              {actor==="admin" && (
                <>
                  {renderAdmin()}
                  <TabBar tabs={adTabs} active={adTab} onTab={setAdTab} accent={Z.admin}/>
                </>
              )}
            </Phone>
            <button onClick={logout} style={{ background:"rgba(255,255,255,.1)", color:"#fff", border:"none", borderRadius:20, padding:"9px 26px", fontSize:13, cursor:"pointer", fontWeight:600 }}>← Quay lại chọn Actor</button>
          </div>
        )}
        <div style={{ color:"rgba(255,255,255,.25)", fontSize:11, textAlign:"center" }}>Mỗi nút/action đều gắn nhãn UC tương ứng theo đặc tả</div>
      </div>
    </>
  );
}
