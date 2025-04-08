import { Button } from "@/components/ui/button";
import { TechIcon } from "./tech-icon";
import type { TechStack } from "@/types/tech-stack";
import { useLanguage } from "@/context/language-context";
import Image from "next/image";

interface StackSectionProps {
  techStack: TechStack[];
}

export function StackSection({ techStack }: StackSectionProps) {
  const { t } = useLanguage();

  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">
            <span className="text-blue-400">#</span> {t("my_stack")}
          </h2>
        </div>

        <div className="bg-gradient-to-br from-blue-900/20 to-blue-600/20 rounded-2xl p-8 border border-blue-500/10">
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-6 justify-items-center">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center"
                title={tech.name}
              >
                <div className="w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center shadow-lg transition-transform hover:scale-110 hover:shadow-blue-500/20">
                  <Image
                    src={tech.icon || "/placeholder.svg"}
                    alt={tech.name}
                    width={32}
                    height={32}
                  />
                </div>
                <span className="mt-2 text-xs text-gray-400 group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  {
    /* OLD SECTION */
  }

  // <section className="bg-blue-600 rounded-xl p-6">
  //   <div className="flex justify-between items-center mb-4">
  //     <h2 className="text-2xl font-mono">{t("my_stack")}</h2>
  //     <Button variant="ghost" size="icon" className="text-white">
  //       <span className="sr-only">View all tools</span>→
  //     </Button>
  //   </div>
  //   <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
  //     {techStack.map((tech, index) => (
  //       <TechIcon key={index} name={tech.name} icon={tech.icon} />
  //     ))}
  //   </div>
  // </section>

  // <section className="px-6 py-16">
  //   <div className="max-w-7xl mx-auto">
  //     <div className="flex justify-between items-center mb-12">
  //       <h2 className="text-3xl font-bold">
  //         <span className="text-blue-400">#</span> {t("my_stack")}
  //       </h2>
  //     </div>

  //     <div className="bg-gradient-to-br from-blue-900/20 to-blue-600/20 rounded-2xl p-8 border border-blue-500/10">
  //       <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-10 gap-6 justify-items-center">
  //         {techStack.map((tech, index) => (
  //           <TechIcon key={index} name={tech.name} icon={tech.icon} />
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // </section>
}
