import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs'
import { Activity, Clock, Scale, Heart } from 'lucide-react';

const HabitProgram = () => {
 const programs = {
   strength: {
     title: "Strength & Growth Habits",
     weeks: [
       {
         week: 1,
         focus: "Foundation",
         habits: [
           {
             habit: "Track protein intake daily (1.6-2.2g/kg)",
             example: "Example: 80kg person needs 128-176g protein. Track breakfast (30g), lunch (40g), dinner (40g), snacks (20g)"
           },
           {
             habit: "Plan 3 training days with rest between",
             example: "Example: Monday/Wednesday/Friday training, Tuesday/Thursday/Weekend rest"
           },
           {
             habit: "Log exercises and weights used", 
             example: "Example: Bench Press - 60kg x 8,8,8 reps, felt 7/10 difficulty"
           }
         ]
       },
       {
         week: 2,
         focus: "Consistency",
         habits: [
           {
             habit: "Meal prep basics for 3 days/week",
             example: "Example: Sunday prep - 6 chicken breasts, 3 cups rice, 600g vegetables"
           },
           {
             habit: "Establish pre-workout routine",
             example: "Example: 10min mobility, 5min light cardio, 3 warm-up sets per exercise"
           },
           {
             habit: "Sleep 7-8 hours consistently",
             example: "Example: Bed by 10:30pm, wake 6:30am, no screens after 10pm"
           }
         ]
       },
       {
         week: 3,
         focus: "Progressive Loading",
         habits: [
           {
             habit: "Track progressive overload weekly",
             example: "Example: Week 1 Squat: 80kg x 8, Week 2: 82.5kg x 8 or 80kg x 9"
           },
           {
             habit: "Add post-workout recovery routine",
             example: "Example: 10min stretching, protein shake, 10min walk, contrast shower"  
           },
           {
             habit: "Plan meals around training days",
             example: "Example: Training days +300 calories, extra 50g carbs pre/post workout"
           }
         ]
       },
       {
         week: 4,
         focus: "Recovery Focus", 
         habits: [
           {
             habit: "Implement deload strategy",
             example: "Example: Reduce weights by 40%, maintain form, focus on mind-muscle connection"
           },
           {
             habit: "Track sleep quality",
             example: "Example: Rate 1-10: Falling asleep (8/10), Staying asleep (7/10), Morning energy (8/10)"
           },
           {
             habit: "Practice proper stretching",
             example: "Example: 5min dynamic pre-workout, 10min static post-workout, focus on worked muscles"
           }
         ]
       },
       {
         week: 5,
         focus: "Advanced Nutrition",
         habits: [
           {
             habit: "Time carbs around workouts",
             example: "Example: 50g carbs 2hrs pre-workout, 25g intra-workout, 50g post-workout"
           },
           {
             habit: "Track macronutrient ratios",
             example: "Example: Training days - 40% carbs, 30% protein, 30% fats. Rest days - 30/40/30"
           },
           {
             habit: "Hydration strategy",
             example: "Example: 500ml 2hrs pre-workout, 250ml every 15mins during, 1L post-workout"
           }
         ]
       },
       {
         week: 6,
         focus: "Performance",
         habits: [
           {
             habit: "Track strength progress metrics",
             example: "Example: Monthly PR tests: Squat 100kg→105kg, Bench 80kg→82.5kg, Dead 120kg→125kg"
           },
           {
             habit: "Video form check weekly",
             example: "Example: Record main lift side view, compare against previous week, note improvements"
           },
           {
             habit: "Adjust training splits",
             example: "Example: If shoulder recovery poor, move push day further from pull day"
           }
         ]
       },
       {
         week: 7,
         focus: "Lifestyle Integration",
         habits: [
           {
             habit: "Balance social life with training",
             example: "Example: Meal prep for social events, schedule morning workouts before events"
           },
           {
             habit: "Meal prep for busy days",
             example: "Example: Prepare 3 meals + 2 snacks, pack shaker with protein powder separately"
           },
           {
             habit: "Stress management techniques",
             example: "Example: 10min morning meditation, post-workout journaling, evening walking"
           }
         ]
       },
       {
         week: 8,
         focus: "Long-term Planning",
         habits: [
           {
             habit: "Set new strength goals",
             example: "Example: Next 12 weeks: Squat +10kg, Bench +5kg, Deadlift +15kg"
           },
           {
             habit: "Create next training block",
             example: "Example: 4 weeks strength focus, 2 weeks volume, 1 week deload"
           },
           {
             habit: "Review and adjust nutrition",
             example: "Example: Adjust calories based on progress, fine-tune meal timing, plan next bulk/cut"
           }
         ]
       }
     ]
   },
   hybrid: {
     title: "Functional Fitness Habits",
     weeks: [
       {
         week: 1,
         focus: "Movement Quality",
         habits: [
           {
             habit: "Practice basic movement patterns",
             example: "Example: Daily 10 air squats, 5 push-ups, 5 rows, overhead mobility drills"
           },
           {
             habit: "Track daily activity level",
             example: "Example: Log steps (8k target), active minutes (45+), workout intensity (1-10)"
           },
           {
             habit: "Focus on workout form",
             example: "Example: Video one movement per session, get coach feedback, implement cues"
           }
         ]
       },
       {
         week: 2,
         focus: "Energy Systems",
         habits: [
           {
             habit: "Balance strength and cardio days",
             example: "Example: Mon/Thu-Strength, Tue/Fri-HIIT, Wed-Steady State, Weekend-Active Recovery"
           },
           {
             habit: "Monitor heart rate recovery",
             example: "Example: Post-workout HR: 160bpm → 1min: 120bpm → 2min: 100bpm"
           },
           {
             habit: "Track daily energy levels",
             example: "Example: Morning: 7/10, Pre-workout: 8/10, Post-workout: 6/10, Evening: 7/10"
           }
         ]
       },
       {
         week: 3, 
         focus: "Performance",
         habits: [
           {
             habit: "Log workout benchmarks",
             example: "Example: 5km run: 25min, Grace: 3:45, Fran: 4:30, Max pull-ups: 15"
           },
           {
             habit: "Plan nutrition timing",
             example: "Example: Pre (2hr): Oats + protein, During: BCAAs, Post: 25g protein + 50g carbs"
           },
           {
             habit: "Practice movement skills",
             example: "Example: 15min daily: handstand holds, muscle-up progression, Olympic lifts"
           }
         ]
       },
       {
         week: 4,
         focus: "Recovery Integration",
         habits: [
           {
             habit: "Active recovery on rest days",
             example: "Example: 30min mobility flow, 45min zone 2 bike, 20min yoga sequence"
           },
           {
             habit: "Balance work/life/training",
             example: "Example: AM workouts on busy days, meal prep Sundays, recovery Wednesdays"
           },
           {
             habit: "Weekly mobility practice",
             example: "Example: Mon-hips, Wed-shoulders, Fri-ankle/wrist, Sun-full body flow"
           }
         ]
       },
       {
         week: 5,
         focus: "Intensity Management",
         habits: [
           {
             habit: "Track workout intensity",
             example: "Example: Rate 1-10: Breathing difficulty, muscle fatigue, overall intensity"
           },
           {
             habit: "Plan high/low days",
             example: "Example: Mon(High): HIIT, Tue(Low): Skills, Thu(High): Strength, Fri(Med): Mixed"
           },
           {
             habit: "Monitor recovery needs",
             example: "Example: Track HRV morning readings, sleep quality, muscle soreness 1-10"
           }
         ]
       },
       {
         week: 6,
         focus: "Skill Development",
         habits: [
           {
             habit: "Practice complex movements",
             example: "Example: 20min skill work: muscle-ups, handstand walks, bar muscle-ups"
           },
           {
             habit: "Work on weaknesses",
             example: "Example: Extra 10min daily on mobility, technique or specific movement patterns"
           },
           {
             habit: "Track skill progression",
             example: "Example: Week 1: 3 kipping pull-ups → Week 6: 3 strict pull-ups"
           }
         ]
       },
       {
         week: 7,
         focus: "Competition Prep",
         habits: [
           {
             habit: "Test benchmark workouts",
             example: "Example: Retest Fight Gone Bad, Helen, Grace - compare to previous scores"
           },
           {
             habit: "Strategy for different WODs",
             example: "Example: Short(<5min):90% effort, Medium(5-15min):80%, Long(15min+):70%"
           },
           {
             habit: "Mental preparation routines",
             example: "Example: 5min visualization, 3min breathing exercises, movement rehearsal"
           }
         ]
       },
       {
         week: 8,
         focus: "Sustainable Practice",
         habits: [
           {
             habit: "Create long-term training plan",
             example: "Example: 12-week cycle: 3 weeks on, 1 week technique focus, repeat 3x"
           },
           {
             habit: "Balance intensity levels",
             example: "Example: 2 high intensity, 2 moderate, 1 skill day per week"
           },
           {
             habit: "Set new performance goals",
             example: "Example: Sub-20min 5k row, RX+ all workouts, compete in local comp"
           }
         ]
       }
     ]
   },
   cardio: {
     title: "Cardio & Class Integration",
     weeks: [
       {
         week: 1,
         focus: "Schedule Building",
         habits: [
           {
             habit: "Book classes in advance",
             example: "Example: Book Monday HIIT, Wednesday Circuits, Friday Boxing weekly"
           },
           {
             habit: "Pack gym bag night before",
             example: "Example: Clothes, shoes, towel, 1L water, pre/post workout nutrition"
           },
           {
             habit: "Track class performance",
             example: "Example: Log calories burned, RPE 1-10, rounds/reps completed, weights used"
           }
         ]
       },
       {
         week: 2,
         focus: "Energy Management",
         habits: [
           {
             habit: "Pre/post class nutrition",
             example: "Example: Pre (-1hr): banana + coffee, Post: 25g protein + 50g carbs"
           },
           {
             habit: "Monitor fatigue levels",
             example: "Example: Morning HRV score, muscle soreness rating, sleep quality tracking"
           },
           {
             habit: "Plan rest between classes",
             example: "Example: No back-to-back HIIT, 24hr between high-intensity sessions"
           }
         ]
       },
       {
         week: 3,
         focus: "Community Integration",
         habits: [
           {
             habit: "Join class activities",
             example: "Example: Join class challenges, social events, workout buddy system"
           },
           {
             habit: "Partner workouts",
             example: "Example: Thursday partner WOD, weekend team challenges, buddy accountability"
           },
           {
             habit: "Share goals with instructors",
             example: "Example: Discuss modifications needed, progression goals, form check requests"
           }
         ]
       },
       {
         week: 4,
         focus: "Performance Tracking",
         habits: [
           {
             habit: "Log class benchmarks",
             example: "Example: Monthly retest: Burpee count, row split time, max reps scores"
           },
           {
             habit: "Track heart rate zones",
             example: "Example: Z1: <60%, Z2: 60-70%, Z3: 70-80%, Z4: 80-90%, Z5: >90% max HR"
           },
           {
             habit: "Note energy levels",
             example: "Example: Pre/during/post class energy 1-10, recovery time needed"
           }
         ]
       },
       {
         week: 5,
         focus: "Advanced Class Strategy",
         habits: [
           {
             habit: "Modify workouts as needed",
             example: "Example: Scale movements based on fatigue/recovery, adjust weights/reps"
           },
           {
             habit: "Progress movement difficulty",
             example: "Example: Regular push-ups → decline → plyo → clap push-ups"
           },
           {
             habit: "Plan weekly class variety",
             example: "Example: HIIT, Strength, Dance, Yoga - balance intensity and focus"
           }
         ]
       },
       {
         week: 6,
         focus: "Recovery Protocol",
         habits: [
           {
             habit: "Implement active recovery",
             example: "Example: Light cycling between classes, mobility work, restorative yoga"
           },
           {
             habit: "Use recovery tools",
             example: "Example: Post-class: foam roll 10min, compression boots 20min, stretch 15min"
           },
           {
             habit: "Plan deload weeks",
             example: "Example: Every 4th week: reduce intensity 40%, focus on form/technique"
           }
         ]
       },
       {
         week: 7,
         focus: "Peak Performance",
         habits: [
           {
             habit: "Time nutrition for classes",
             example: "Example: Pre-2hr: complex carbs, Pre-30min: simple carbs, Post: protein+carbs"
           },
           {
             habit: "Optimize sleep schedule",
             example: "Example: 8hrs before morning classes, power nap before evening sessions"
           },
           {
             habit: "Plan progressive overload",
             example: "Example: Increase weights 5%, add advanced modifications, reduce rest periods"
           }
         ]
       },
       {
         week: 8,
         focus: "Lifestyle Integration",
         habits: [
           {
             habit: "Create sustainable schedule",
             example: "Example: 3 high intensity, 2 low intensity, 2 active recovery days/week"
           },
           {
             habit: "Balance class intensity",
             example: "Example: Mon(HIIT), Wed(Strength), Fri(Yoga), Sat(Fun class)"
           },
           {
             habit: "Set new fitness goals",
             example: "Example: Try advanced class tracks, attend workshops, train for events"
           }
         ]
       }
     ]
   }
 };
   
return (
  <div className="max-w-3xl mx-auto p-6">
    <Tabs defaultValue="strength">
     <h1 className="text-3xl font-bold text-gray-900 mb-8">
        {programs.title}8-Week Habit Building Program</h1>
      <TabsList className="w-full grid grid-cols-3 bg-white p-1 rounded-lg mb-6">
        <TabsTrigger value="strength" className="rounded-md py-2 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">
          Strength
        </TabsTrigger>
        <TabsTrigger value="hybrid" className="rounded-md py-2 px-4 text-gray-500">Hybrid</TabsTrigger>
        <TabsTrigger value="cardio" className="rounded-md py-2 px-4 text-gray-500">Classes</TabsTrigger>
      </TabsList>

      {Object.entries(programs).map(([key, program]) => (
        <TabsContent key={key} value={key}>
          <h2 className="text-lg mb-6" style={{ fontFamily: 'Robotoblack' }}>{program.title}</h2>
          <div className="space-y-8">
            {program.weeks.map((week) => (
              <div key={week.week} className="bg-white rounded-lg shadow-sm">
                <h3 className="flex items-center gap-2" style={{ fontFamily: 'Roboto' }} mb-4>
                  <span className="h-4 w-4" /> Week {week.week} - {week.focus}
                </h3>
                <div className="space-y-4">
                  {week.habits.map((habit, idx) => (
                    <div key={idx}>
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
                        <div>
                          <div className="style={{ fontFamily: 'Roboto' }}">{habit.habit}</div>
                          <div className="text-sm text-gray-600 mt-1">{habit.example}</div>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  </div>
);
};

export default HabitProgram;
