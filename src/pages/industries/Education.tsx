import React from "react";
import { GraduationCap } from "lucide-react";
import IndustryDetail from "@/components/IndustryDetail";

const Education = () => {
  return (
    <IndustryDetail
      title="Education"
      description="Transforming learning experiences with EdTech solutions that connect students, teachers, and institutions."
      icon={GraduationCap}
      challenges={[
        "Facilitating remote and hybrid learning models",
        "Engaging students with interactive content",
        "Managing student data and administrative tasks",
        "Ensuring equitable access to educational resources"
      ]}
      solutions={[
        {
          title: "Learning Management Systems (LMS)",
          description: "Robust platforms for course delivery, assessment, and student progress tracking."
        },
        {
          title: "Virtual Classrooms",
          description: "Interactive video conferencing tools designed specifically for educational settings."
        },
        {
          title: "Student Information Systems",
          description: "Centralized databases for managing enrollment, grades, and attendance."
        },
        {
          title: "Gamified Learning",
          description: "Educational games and applications that make learning fun and engaging."
        }
      ]}
    />
  );
};

export default Education;
