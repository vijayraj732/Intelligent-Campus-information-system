import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  BookOpen, 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  AlertCircle,
  GraduationCap,
  Building,
  Utensils
} from "lucide-react";

const InformationModules = () => {
  const modules = [
    {
      icon: BookOpen,
      title: "Course Information",
      description: "Get details about course schedules, prerequisites, professors, and syllabi",
      topics: ["Course Catalog", "Prerequisites", "Professor Info", "Syllabi"],
      color: "text-blue-600 bg-blue-50"
    },
    {
      icon: Calendar,
      title: "Academic Calendar",
      description: "Stay updated with important dates, deadlines, and academic events",
      topics: ["Semester Dates", "Exam Schedules", "Holidays", "Registration"],
      color: "text-green-600 bg-green-50"
    },
    {
      icon: MapPin,
      title: "Campus Navigation",
      description: "Find buildings, classrooms, parking lots, and campus facilities",
      topics: ["Building Locations", "Parking", "Maps", "Accessibility"],
      color: "text-purple-600 bg-purple-50"
    },
    {
      icon: Users,
      title: "Student Services",
      description: "Access information about student support services and resources",
      topics: ["Counseling", "Financial Aid", "Health Services", "Career Center"],
      color: "text-orange-600 bg-orange-50"
    },
    {
      icon: Clock,
      title: "Operating Hours",
      description: "Check operating hours for libraries, dining halls, and other facilities",
      topics: ["Library Hours", "Dining Times", "Gym Hours", "Office Hours"],
      color: "text-red-600 bg-red-50"
    },
    {
      icon: AlertCircle,
      title: "Campus Alerts",
      description: "Stay informed about campus emergencies, weather updates, and notices",
      topics: ["Emergency Alerts", "Weather Updates", "Maintenance", "News"],
      color: "text-yellow-600 bg-yellow-50"
    },
    {
      icon: GraduationCap,
      title: "Academic Programs",
      description: "Explore degree programs, majors, minors, and academic requirements",
      topics: ["Degree Programs", "Majors & Minors", "Requirements", "Graduation"],
      color: "text-indigo-600 bg-indigo-50"
    },
    {
      icon: Building,
      title: "Campus Facilities",
      description: "Learn about dormitories, study spaces, labs, and recreational facilities",
      topics: ["Dormitories", "Study Spaces", "Labs", "Recreation"],
      color: "text-teal-600 bg-teal-50"
    },
    {
      icon: Utensils,
      title: "Dining Services",
      description: "Find dining locations, meal plans, menus, and nutritional information",
      topics: ["Meal Plans", "Menus", "Locations", "Nutrition Info"],
      color: "text-pink-600 bg-pink-50"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Information Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI assistant covers all aspects of campus life. Click on any category to explore 
            the wealth of information available at your fingertips.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, index) => {
            const Icon = module.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-primary/20"
                onClick={() => {
                  const chatSection = document.getElementById('chat');
                  chatSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg ${module.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {module.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {module.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {module.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full border"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Can't find what you're looking for? Just ask our AI assistant directly!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InformationModules;