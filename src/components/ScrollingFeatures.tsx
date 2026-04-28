"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { useInView, motion, AnimatePresence } from "framer-motion";

const features = [
  {
    title: "Your entire life, in one place.",
    description: "See your Focus Time, Habits, and Tasks at a glance. Start your day with clarity and a curated motivational quote that keeps you grounded.",
    image: "/images/main_dashboard_screen.png",
  },
  {
    title: "Build consistent habits.",
    description: "Track what matters. Neurodo's Pulse score measures your consistency, not just your streaks. Cast a vote for your future self every single day.",
    image: "/images/habbit_screen.png",
  },
  {
    title: "Seamless task management.",
    description: "Organize your day with priority tagging. Always know what needs your attention next and never let important tasks slip through the cracks.",
    image: "/images/todo-task_screen.png",
  },
  {
    title: "Deep focus & flow.",
    description: "Enter the flow state with our built-in Pomodoro timer. Block out distractions and dedicate time to what truly moves the needle.",
    image: "/images/pomodoro_ruuning_screen.png",
  },
  {
    title: "Insights & Analytics.",
    description: "Measure your progress. Beautiful charts and insights help you understand your productivity patterns, so you can continuously improve your system.",
    image: "/images/pomodoro-goal-analytics_screen.png",
  },
  {
    title: "Your Personal AI Assistant.",
    description: "Control the app with chat or voice mode. Neurodo's intelligent assistant can tell you your schedule, suggest improvements, and do everything for you.",
    image: "/images/chatbot_screen.png",
  }
];

const FeatureBlock = ({ title, description, setActive, index }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    margin: "-50% 0px -50% 0px",
    amount: "some"
  });

  useEffect(() => {
    if (isInView) {
      setActive(index);
    }
  }, [isInView, index, setActive]);

  return (
    <div ref={ref} className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ margin: "-20% 0px -20% 0px" }}
        className="space-y-6"
      >
        <h2 className="text-4xl md:text-6xl font-black leading-tight text-foreground">
          {title}
        </h2>
        <p className="text-xl md:text-2xl text-muted leading-relaxed font-medium">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export const ScrollingFeatures = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full bg-background pt-20" id="how-it-works">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto relative">
        
        {/* Sticky Mobile Frame */}
        <div className="w-full md:w-1/2 sticky top-0 h-[60vh] md:h-screen flex items-center justify-center z-20 pointer-events-none">
          <div className="relative w-[240px] md:w-[320px] aspect-[9/19.5] rounded-[2.5rem] md:rounded-[3rem] border-[10px] md:border-[12px] border-[#1e1e1e] bg-[#1e1e1e] overflow-hidden shadow-[0_0_80px_rgba(6,182,212,0.15)] ring-1 ring-white/10">
            {/* iPhone Notch */}
            <div className="absolute top-0 inset-x-0 h-6 md:h-7 flex justify-center z-50">
               <div className="w-24 md:w-36 h-5 md:h-6 bg-[#1e1e1e] rounded-b-2xl"></div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={features[activeIndex].image}
                  alt={features[activeIndex].title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Scrolling Content */}
        <div className="w-full md:w-1/2 pb-[20vh] z-10">
          {features.map((feature, index) => (
            <FeatureBlock
              key={index}
              index={index}
              title={feature.title}
              description={feature.description}
              setActive={setActiveIndex}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
