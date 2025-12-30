import React, { useState, useEffect } from 'react';
import {
  Heart,
  Check,
  Plus,
  Music,
  Calendar,
  Clock,
  Star,
  Settings,
  Layout,
  Smile,
  PenTool,
  Coffee,
  MoreHorizontal
} from 'lucide-react';

export default function KawaiiDashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [tasks, setTasks] = useState([
    { id: 1, text: "Finish illustration sketch", completed: false, color: "bg-pink-100 text-pink-500" },
    { id: 2, text: "Review color palette", completed: true, color: "bg-purple-100 text-purple-500" },
    { id: 3, text: "Water the plants 🌱", completed: false, color: "bg-green-100 text-green-600" },
  ]);
  const [mood, setMood] = useState('happy');

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  // --- Components ---

  const SidebarItem = ({ icon: Icon, label, id, active }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`
        w-full p-3 mb-3 rounded-2xl flex items-center gap-3 transition-all duration-300
        ${active
          ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg shadow-pink-200 transform scale-105'
          : 'text-slate-400 hover:bg-white/60 hover:text-pink-400 hover:shadow-sm'}
      `}
    >
      <Icon size={20} strokeWidth={2.5} />
      <span className="font-bold text-sm tracking-wide">{label}</span>
    </button>
  );

  const MoodButton = ({ icon: Icon, value, current, color }) => (
    <button
      onClick={() => setMood(value)}
      className={`
        p-3 rounded-2xl transition-all duration-300 hover-spring
        ${current === value
          ? `${color} text-white shadow-md transform scale-110`
          : 'bg-slate-50 text-slate-300 hover:bg-white'}
      `}
    >
      <Icon size={24} strokeWidth={2.5} />
    </button>
  );

  const Card = ({ children, className = "", title, icon: Icon, accentColor = "text-slate-700" }) => (
    <div className={`bg-white rounded-[32px] p-6 shadow-sm border border-slate-50/50 hover:shadow-lg hover:shadow-pink-100/50 transition-all duration-500 ease-out hover:-translate-y-1 ${className}`}>
      {title && (
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            {Icon && <div className={`p-2 rounded-xl bg-slate-50 ${accentColor}`}><Icon size={18} strokeWidth={2.5}/></div>}
            <h3 className="font-bold text-slate-700 text-lg">{title}</h3>
          </div>
          <button className="text-slate-300 hover:text-pink-400 transition-colors">
            <MoreHorizontal size={20} />
          </button>
        </div>
      )}
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FFFBF7] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-50 via-purple-50 to-orange-50 text-slate-600 p-4 md:p-8 flex gap-8 overflow-hidden relative">
      {/* Decorative Background Blobs */}
      <div className="fixed top-20 left-20 w-64 h-64 bg-yellow-100/40 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-pink-100/40 rounded-full blur-3xl -z-10"></div>

      {/* --- Sidebar Navigation --- */}
      <nav className="hidden md:flex flex-col w-64 shrink-0">
        <div className="mb-10 px-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center text-white shadow-lg shadow-purple-200">
            <Star size={20} fill="currentColor" />
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
            MochiUI
          </h1>
        </div>

        <div className="flex-1">
          <SidebarItem icon={Layout} label="Dashboard" id="home" active={activeTab === 'home'} />
          <SidebarItem icon={PenTool} label="Creative Board" id="creative" active={activeTab === 'creative'} />
          <SidebarItem icon={Calendar} label="Schedule" id="schedule" active={activeTab === 'schedule'} />
          <SidebarItem icon={Music} label="Relaxation" id="music" active={activeTab === 'music'} />
        </div>

        <div className="mt-auto">
          <div className="bg-white/60 backdrop-blur-sm p-4 rounded-3xl border border-white mb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-pink-200 overflow-hidden border-2 border-white shadow-sm">
                <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix" alt="User" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-700">Sophie</p>
                <p className="text-xs text-slate-400">Pro Artist</p>
              </div>
            </div>
            <button className="w-full py-2 rounded-xl bg-indigo-50 text-indigo-400 text-xs font-bold hover:bg-indigo-100 transition-colors">
              Settings
            </button>
          </div>
        </div>
      </nav>

      {/* --- Main Content --- */}
      <main className="flex-1 h-[calc(100vh-4rem)] overflow-y-auto pr-2 pb-20">

        {/* Header Greeting */}
        <header className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">
              Good Morning! <span className="inline-block hover-spring cursor-default">✨</span>
            </h2>
            <p className="text-slate-400 font-medium">Ready to create something magic today?</p>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="flex bg-white rounded-full p-1 pl-4 shadow-sm items-center border border-slate-100">
               <span className="text-sm font-bold text-slate-400 mr-2">Focus Mode</span>
               <button className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center hover:bg-pink-400 hover:text-white transition-all btn-press">
                 <Coffee size={14} />
               </button>
            </div>
            <button className="w-12 h-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:shadow-md transition-all btn-press">
              <Settings size={20} />
            </button>
          </div>
        </header>

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* 1. Daily Focus / Hero Card (Span 8) */}
          <div className="md:col-span-8">
            <Card className="h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white border-none shadow-xl shadow-purple-200 relative overflow-hidden group">
              {/* Decorative shapes */}
              <div className="absolute top-[-20px] right-[-20px] w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute bottom-[-10px] left-[-10px] w-24 h-24 bg-yellow-300/30 rounded-full blur-xl"></div>

              <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
                <div className="flex justify-between items-start">
                  <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/20">
                    Daily Goal
                  </div>
                  <Clock className="text-white/60" size={24} />
                </div>

                <div className="mt-4">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Finish Character Sheet</h3>
                  <div className="w-full bg-black/10 h-2 rounded-full overflow-hidden backdrop-blur-sm">
                    <div className="bg-yellow-300 h-full w-3/4 rounded-full shadow-[0_0_10px_rgba(253,224,71,0.5)]"></div>
                  </div>
                  <div className="flex justify-between text-sm font-medium mt-2 text-white/90">
                    <span>75% Completed</span>
                    <span>1h 20m Left</span>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all active:scale-95 flex items-center gap-2">
                    <PenTool size={16} /> Continue
                  </button>
                </div>
              </div>
            </Card>
          </div>

          {/* 2. Mood Tracker (Span 4) */}
          <div className="md:col-span-4">
            <Card title="How are you?" icon={Heart} accentColor="text-rose-400" className="h-full flex flex-col justify-center">
              <div className="flex justify-between items-center bg-slate-50 p-2 rounded-3xl">
                <MoodButton icon={Smile} value="happy" current={mood} color="bg-yellow-400" />
                <MoodButton icon={Coffee} value="tired" current={mood} color="bg-indigo-400" />
                <MoodButton icon={Star} value="inspired" current={mood} color="bg-pink-400" />
              </div>
              <p className="text-center mt-6 text-sm text-slate-400 font-medium">
                {mood === 'happy' && "Keep shining! ✨"}
                {mood === 'tired' && "Time for a break? 🍵"}
                {mood === 'inspired' && "Create magic! 🎨"}
              </p>
            </Card>
          </div>

          {/* 3. Soft To-Do List (Span 5) */}
          <div className="md:col-span-5">
            <Card title="My Tasks" icon={Check} accentColor="text-emerald-500">
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`
                      group flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-all duration-300
                      ${task.completed ? 'bg-slate-50 opacity-60' : 'bg-white hover:bg-slate-50 hover:shadow-sm hover:-translate-y-0.5'}
                      border border-transparent hover:border-slate-100
                    `}
                  >
                    <div className={`
                      w-6 h-6 rounded-lg flex items-center justify-center transition-all duration-300
                      ${task.completed ? 'bg-emerald-400 rotate-0' : 'bg-slate-100 group-hover:bg-emerald-100 -rotate-12'}
                    `}>
                      {task.completed && <Check size={14} className="text-white" strokeWidth={4} />}
                    </div>
                    <span className={`flex-1 font-bold text-sm ${task.completed ? 'text-slate-400 line-through decoration-pink-300 decoration-2' : 'text-slate-600'}`}>
                      {task.text}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${task.color.split(' ')[0].replace('bg-', 'bg-')}`}></div>
                  </div>
                ))}

                <button className="w-full py-3 mt-2 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 font-bold text-sm hover:border-pink-300 hover:text-pink-400 hover:bg-pink-50 transition-all flex items-center justify-center gap-2 btn-press">
                  <Plus size={16} /> Add New
                </button>
              </div>
            </Card>
          </div>

          {/* 4. Inspiration / Color Palette (Span 7) */}
          <div className="md:col-span-7">
             <div className="grid grid-cols-2 gap-6 h-full">
                {/* Palette Card */}
                <Card className="col-span-2 md:col-span-1 bg-gradient-to-br from-orange-50 to-amber-50" title="Palette" icon={Layout} accentColor="text-orange-400">
                   <div className="flex gap-2 h-24 items-end">
                      <div className="flex-1 h-full bg-rose-300 rounded-2xl shadow-sm hover:h-[110%] transition-all duration-300 cursor-pointer"></div>
                      <div className="flex-1 h-3/4 bg-amber-200 rounded-2xl shadow-sm hover:h-[110%] transition-all duration-300 cursor-pointer"></div>
                      <div className="flex-1 h-5/6 bg-emerald-200 rounded-2xl shadow-sm hover:h-[110%] transition-all duration-300 cursor-pointer"></div>
                      <div className="flex-1 h-2/3 bg-sky-200 rounded-2xl shadow-sm hover:h-[110%] transition-all duration-300 cursor-pointer"></div>
                   </div>
                   <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs font-bold text-orange-300 uppercase tracking-wider">Summer Picnic</span>
                      <button className="w-8 h-8 bg-white rounded-full text-orange-300 shadow-sm flex items-center justify-center hover:scale-110 transition-transform">
                        <Plus size={14} />
                      </button>
                   </div>
                </Card>

                {/* Music/Vibe Card */}
                <Card className="col-span-2 md:col-span-1" title="Vibe" icon={Music} accentColor="text-violet-400">
                    <div className="flex items-center gap-4 mt-2">
                        <div className="relative w-16 h-16 shrink-0">
                           <div className="absolute inset-0 bg-violet-200 rounded-2xl animate-spin-slow opacity-50 blur-md"></div>
                           <div className="absolute inset-0 bg-violet-100 rounded-2xl flex items-center justify-center border-2 border-white shadow-sm overflow-hidden">
                              <img src="https://api.dicebear.com/7.x/shapes/svg?seed=Music" className="w-full h-full object-cover opacity-60" alt="album" />
                           </div>
                        </div>
                        <div>
                           <h4 className="font-bold text-slate-700 text-sm">Lo-Fi Beats</h4>
                           <p className="text-xs text-slate-400">Chill Raccoon</p>

                           <div className="flex gap-2 mt-3">
                              <button className="p-1.5 rounded-full bg-slate-100 text-slate-400 hover:bg-violet-400 hover:text-white transition-colors">
                                 <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-current border-b-4 border-b-transparent ml-0.5"></div>
                              </button>
                              <div className="flex-1 h-1.5 bg-slate-100 rounded-full self-center w-16 overflow-hidden">
                                 <div className="h-full w-1/2 bg-violet-300 rounded-full"></div>
                              </div>
                           </div>
                        </div>
                    </div>
                </Card>
             </div>
          </div>

          {/* 5. Sticky Note Widget (Span 4) */}
          <div className="md:col-span-4">
            <div className="bg-[#FEF9C3] p-6 rounded-[32px] shadow-sm rotate-1 hover:rotate-0 transition-transform duration-300 h-full min-h-[180px] flex flex-col items-center justify-center text-center relative border-t-8 border-white/40">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 bg-yellow-400/20 backdrop-blur-sm rounded-sm transform -rotate-1"></div>
                <h3 className="font-bold text-yellow-700/60 mb-2 uppercase text-xs tracking-widest">Daily Quote</h3>
                <p className="font-bold text-yellow-800 text-lg font-[handwriting]">
                  "Creativity is intelligence having fun."
                </p>
                <div className="mt-4 text-2xl">🍋</div>
            </div>
          </div>

          {/* 6. Calendar Mini (Span 8) */}
          <div className="md:col-span-8">
             <Card className="h-full flex items-center justify-between gap-4">
                 <div className="flex items-center gap-4">
                    <div className="bg-rose-50 p-4 rounded-2xl text-center min-w-[80px]">
                       <span className="block text-xs font-bold text-rose-300 uppercase">Dec</span>
                       <span className="block text-3xl font-bold text-rose-500">30</span>
                    </div>
                    <div>
                       <h3 className="font-bold text-lg text-slate-700">Team Brainstorm</h3>
                       <p className="text-slate-400 text-sm flex items-center gap-1">
                          <Clock size={12} /> 10:00 AM - 11:30 AM
                       </p>
                       <div className="flex mt-2 -space-x-2">
                          {[1,2,3].map(i => (
                             <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white"></div>
                          ))}
                       </div>
                    </div>
                 </div>
                 <button className="px-6 py-3 rounded-xl bg-slate-50 text-slate-400 font-bold text-sm hover:bg-rose-400 hover:text-white transition-all btn-press shadow-sm hover:shadow-lg hover:shadow-rose-200">
                    Join Meeting
                 </button>
             </Card>
          </div>

        </div>
      </main>
    </div>
  );
}
