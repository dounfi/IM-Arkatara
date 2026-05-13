import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const daysOfWeek = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];

// Month names in Indonesian
const monthNames = [
  "Januari", "Februari", "Maret", "April", "Mei", "Juni",
  "Juli", "Agustus", "September", "Oktober", "November", "Desember"
];

// Event list for 2026
const calendarEvents = [
  // Januari
  { month: 0, date: 4, text: "#3 Rapat Pimpinan" },
  { month: 0, date: 9, text: "#4 Rapat Pimpinan" },
  { month: 0, startDate: 12, endDate: 17, text: "Open Recruitment Staff" },
  { month: 0, date: 16, text: "#5 Rapat Pimpinan" },
  { month: 0, startDate: 18, endDate: 21, text: "Open Recruitment Staff (Lanjutan)" },
  { month: 0, startDate: 22, endDate: 24, text: "Seleksi Berkas Staff" },
  { month: 0, date: 24, text: "#6 Rapat Pimpinan" },
  { month: 0, startDate: 25, endDate: 26, text: "Pengumuman Seleksi Berkas" },
  { month: 0, startDate: 26, endDate: 29, text: "Seleksi Wawancara Staff" },
  { month: 0, date: 30, text: "Hasil Seleksi Wawancara" },
  { month: 0, date: 31, text: "Diklat dan FGD" },

  // Februari
  { month: 1, date: 1, text: "Seleksi Mini Project Staff" },
  { month: 1, date: 8, text: "Seleksi Mini Project Staff" },
  { month: 1, date: 3, text: "#8 Rapat Pimpinan" },
  { month: 1, startDate: 9, endDate: 10, text: "Seleksi Hasil Mini Project Staff" },
  { month: 1, startDate: 9, endDate: 13, text: "Persiapan Welcoming Party" },
  { month: 1, startDate: 10, endDate: 11, text: "Fiksasi RAB, RKAT" },
  { month: 1, date: 11, text: "Pengumuman Final Staff" },
  { month: 1, date: 12, text: "#1 MID Radiv" },
  { month: 1, date: 13, text: "#1 PSDM Radiv & #9 Rapat Pimpinan" },
  { month: 1, date: 14, text: "Welcoming Party Arkatara" },
  { month: 1, startDate: 15, endDate: 20, text: "Radiv #1" },
  { month: 1, date: 18, text: "17.00 #1 HUBEKs Radiv, 17.30 #2 MID Radiv, 17.30 #2 PSDM Radiv" },
  { month: 1, date: 19, text: "17.30 #1 PDP Radiv" },
  { month: 1, date: 20, text: "17.00 #10 Rapat Pimpinan" },
  { month: 1, date: 27, text: "17.00 #11 Rapat Pimpinan" },
  { month: 1, date: 28, text: "15.00 IM-Gath & Sahabat" },

  // Maret
  { month: 2, date: 1, text: "15.00 Deadline Desain" },
  { month: 2, startDate: 2, endDate: 7, text: "Rapim #1 Mega Proker" },
  { month: 2, date: 6, text: "17.00 #12 Rapat Pimpinan" },
  { month: 2, date: 8, text: "14.00 Kolaborasi Eksterna" },
  { month: 2, startDate: 9, endDate: 13, text: "Radiv #1 Mega Proker" },
  { month: 2, date: 17, text: "15.00 IM-Quiz" },
  { month: 2, startDate: 29, endDate: 30, text: "Opsi #1 Temu Lentera" },

  // April
  { month: 3, date: 17, text: "15.30 Temu Lentera" },
  { month: 3, date: 18, text: "14.00 IM - Training x IM - B" },
  { month: 3, date: 19, text: "Opening IM - Blinks" },
  { month: 3, date: 25, text: "IM - Blinks Day 1 & 15.00 Opsi Stuba #1" },

  // Mei
  { month: 4, date: 2, text: "14.00 IM - Blinks Day 3 & 15.00 IM - Quiz" },
  { month: 4, date: 3, text: "14.00 IM - Blinks Day 4" },
  { month: 4, startDate: 3, endDate: 9, text: "Oprec Pengajar Inspiratif (PI)" },
  { month: 4, date: 9, text: "14.00 IM - Blinks Day 5" },
  { month: 4, date: 10, text: "14.00 IM - Blinks Day 6" },
  { month: 4, startDate: 10, endDate: 11, text: "Oprec Pengajar Inspiratif (PI - Lanjutan)" },
  { month: 4, date: 14, text: "07.00 Ragen #1" },
  { month: 4, date: 16, text: "14.00 IM - Blinks Day 7" },
  { month: 4, date: 17, text: "Tes TPU dan Psikotes PI & 14.00 IM - Blinks Day 8" },
  { month: 4, date: 23, text: "IM - Blinks & 14.00 IM - Tags #1" },
  { month: 4, date: 24, text: "Wawancara PI & 14.00 IM - Blinks Day 10" },
  { month: 4, date: 30, text: "15.00 Opsi Stuba #1" },

  // Juni
  { month: 5, date: 6, text: "Opsi IM - Makrab & Mini Project PI" },
  { month: 5, startDate: 7, endDate: 10, text: "Opsi IM - Makrab" },
  { month: 5, startDate: 27, endDate: 28, text: "Opsi IM - Makrab" },
  { month: 5, startDate: 28, endDate: 30, text: "Opsi IM - Journal (LTT)" },

  // Juli
  { month: 6, startDate: 1, endDate: 15, text: "Opsi IM - Journal" },
  { month: 6, date: 11, text: "14.00 IM - Training Edelwe..." },
  { month: 6, startDate: 19, endDate: 31, text: "Edelweis" },

  // Agustus
  { month: 7, startDate: 1, endDate: 8, text: "Edelweis (Lanjutan)" },
  { month: 7, date: 17, text: "15.00 IM - Quiz" },
  { month: 7, date: 22, text: "14.00 CTKIM" },
  { month: 7, date: 29, text: "14.00 IM - Talks" },
  { month: 7, date: 30, text: "Ragen #2" },

  // September
  { month: 8, date: 5, text: "14.00 Welcoming Party IM" },
  { month: 8, date: 11, text: "14.00 IM - Ink x IM - Traini..." },
  { month: 8, date: 12, text: "14.00 IM - Ink x IM - Intern..." },
  { month: 8, date: 19, text: "14.00 Project Internship" },
  { month: 8, date: 26, text: "14.00 Stuba #2" },

  // Oktober
  { month: 9, date: 3, text: "13.30 Diskusi Pendidika..." },
  { month: 9, date: 17, text: "15.00 IM - Podcast" },
  { month: 9, date: 24, text: "14.00 IM - Tags #2" },
  { month: 9, date: 31, text: "15.00 Mubes Direktur & W..." },

  // November
  { month: 10, date: 7, text: "15.00 IMCA" },
  { month: 10, date: 8, text: "15.00 Pergantian Penguru..." },
];

const CalendarGrid = () => {
  // Start at current date
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get the number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  // Get the day of the week for the 1st of the month (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Create an array for the grid cells
  const gridCells = [];
  
  // Empty cells for days before the 1st
  for (let i = 0; i < firstDayOfMonth; i++) {
    gridCells.push(<div key={`empty-${i}`} className="w-full aspect-square md:aspect-[4/3] rounded-xl bg-transparent" />);
  }

  // Helper to get events for a specific day
  const getEventsForDay = (y: number, m: number, d: number) => {
    if (y !== 2026) return [];
    return calendarEvents.filter(e => {
      if (e.month !== m) return false;
      if (e.date) return e.date === d;
      if (e.startDate && e.endDate) return d >= e.startDate && d <= e.endDate;
      return false;
    });
  };

  // Cells for the days of the month
  for (let d = 1; d <= daysInMonth; d++) {
    const today = new Date();
    const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
    const dayEvents = getEventsForDay(year, month, d);
    
    gridCells.push(
      <div 
        key={`day-${d}`} 
        className={`min-w-0 w-full aspect-square md:aspect-[4/3] rounded-lg md:rounded-xl p-1 md:p-3 transition-colors flex flex-col overflow-hidden ${
          isToday 
            ? 'bg-white border-2 border-primary shadow-sm' 
            : 'bg-cream/50 hover:bg-cream border border-transparent'
        }`}
      >
        <span className={`font-jakarta font-bold text-sm md:text-base mb-0.5 ${isToday ? 'text-primary' : 'text-foreground/80'}`}>
          {d}
        </span>
        {dayEvents.length > 0 && (
          <div className="flex flex-col gap-1 overflow-hidden">
            {dayEvents.map((ev, i) => (
              <Tooltip key={i} delayDuration={100}>
                <TooltipTrigger asChild>
                  <span className="text-[8px] md:text-[11px] leading-tight text-primary/90 font-semibold line-clamp-2 break-all md:break-normal cursor-pointer hover:text-accent outline-none">
                    {ev.text}
                  </span>
                </TooltipTrigger>
                <TooltipContent side="bottom" align="center" className="max-w-[200px] z-[100] bg-primary text-yellow-primary border-none shadow-xl">
                  <p className="text-xs font-jakarta font-medium text-center">{ev.text}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl p-3 md:p-10 shadow-[0_10px_40px_-15px_rgba(31,54,88,0.15)] border border-border/20 mt-10 md:mt-20">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button 
          onClick={handlePrevMonth}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-accent transition-colors shadow-md"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
        </button>

        <h3 className="font-display font-bold text-2xl md:text-4xl text-primary">
          {monthNames[month]} {year}
        </h3>

        <button 
          onClick={handleNextMonth}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-accent transition-colors shadow-md"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
        </button>
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-2 md:gap-4 mb-4">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center font-jakarta font-bold text-sm md:text-base text-primary">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div 
        key={`${year}-${month}`}
        className="grid grid-cols-7 gap-2 md:gap-4"
      >
        {gridCells}
      </div>
    </div>
  );
};

export default CalendarGrid;
