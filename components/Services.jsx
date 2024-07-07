import { LayoutTemplate, PenTool, Lightbulb } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const servicesData = [
  {
    icon: <LayoutTemplate size={72} strokeWidth={0.8} />,
    title: "MySQL Specialization",
    description:
      "Specializing in MySQL queries, providing optimized database management and seamless data handling for your applications.",
  },
  {
    icon: <PenTool size={72} strokeWidth={0.8} />,
    title: "Full Stack Development",
    description:
      "Offering comprehensive full stack development services to build end-to-end web solutions, covering both frontend and backend.",
  },
  {
    icon: <Lightbulb size={72} strokeWidth={0.8} />,
    title: "IT Consulting",
    description:
      "Expert IT consulting services offering tailored solutions, strategic guidance, and innovative insights to drive business growth and success.",
  },
];
const Services = () => {
  return (
    <section className="mb-12 xl:mb-36 pt-[100px]">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* grid items */}
        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="h-[80px] w-[140px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center ">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
