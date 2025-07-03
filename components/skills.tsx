"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Code, Palette, Server, Database, Cloud, Users } from "lucide-react"
import React, { useState } from "react"

export function Skills() {
  const skillCategories = [
    {
      icon: Database,
      title: "Data Science & Analytics",
      color: "text-blue-400",
      skills: [
        { name: "Data Analysis", level: 90, description: "Extracting insights and trends from complex datasets." },
        { name: "Microsoft Power BI", level: 85, description: "Creating interactive dashboards and data visualizations." },
        { name: "SQL", level: 85, description: "Querying and manipulating data in relational databases like MySQL & PostgreSQL." },
        { name: "ETL Pipelines", level: 80, description: "Building data pipelines for extraction, transformation, and loading." },
        { name: "Data Cleaning", level: 90, description: "Processing and preparing raw data for analysis." },
        { name: "Microsoft Excel", level: 80, description: "Using pivot tables, graphs, and functions for data analysis." },
      ],
    },
    {
      icon: Server,
      title: "Backend & Databases",
      color: "text-green-400",
      skills: [
        { name: "Python (Flask)", level: 85, description: "Developing web applications and microservices with Flask." },
        { name: "REST APIs", level: 90, description: "Designing, building, and testing robust RESTful APIs." },
        { name: "RDBMS", level: 85, description: "Working with relational databases like PostgreSQL and MySQL." },
        { name: "API Testing", level: 80, description: "Utilizing tools like Thunder Client for API validation." },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-orange-400",
      skills: [
        { name: "Amazon Web Services (AWS)", level: 75, description: "Experience with core services like EC2 and S3 for cloud computing." },
        { name: "Docker", level: 80, description: "Containerizing applications for consistent and scalable deployment." },
        { name: "Git & GitHub", level: 90, description: "Proficient in version control and collaborative development workflows." },
        { name: "CI/CD (GitHub Actions)", level: 80, description: "Automating build, test, and deployment pipelines." },
      ],
    },
    {
      icon: Code,
      title: "Programming & Web",
      color: "text-purple-400",
      skills: [
        { name: "Python", level: 90, description: "Extensive experience in programming and data analysis." },
        { name: "Data Structures & Algorithms", level: 85, description: "Applying core CS concepts for efficient problem-solving." },
        { name: "HTML & CSS", level: 80, description: "Building the structure and style of modern web pages." },
        { name: "JavaScript", level: 75, description: "Client-side scripting for interactive web experiences." },
      ],
    },
    {
      icon: Palette,
      title: "Professional & Soft Skills",
      color: "text-pink-400",
      skills: [
        { name: "Analytical Skills", level: 95, description: "Analyzing complex problems to devise effective solutions." },
        { name: "Attention to Detail", level: 90, description: "Meticulous approach to data and development tasks." },
        { name: "Adaptability", level: 85, description: "Quickly learning and applying new technologies and knowledge." },
        { name: "Problem Solving", level: 90, description: "Debugging and resolving technical challenges efficiently." },
      ],
    },
  ]

  // Sliding window state
  const windowSize = 2;
  const [windowStart, setWindowStart] = useState(0);
  const windowEnd = windowStart + windowSize;
  const canGoPrev = windowStart > 0;
  const canGoNext = windowEnd < skillCategories.length;

  const handlePrev = () => {
    if (canGoPrev) setWindowStart(windowStart - 1);
  };
  const handleNext = () => {
    if (canGoNext) setWindowStart(windowStart + 1);
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        {/* Sliding Window Controls (Top) */}
        <div className="flex justify-center items-center mb-8 gap-4">
          <button
            onClick={handlePrev}
            disabled={!canGoPrev}
            className={`px-4 py-2 rounded bg-gray-700 text-white font-bold transition-colors ${canGoPrev ? 'hover:bg-blue-500' : 'opacity-50 cursor-not-allowed'}`}
            aria-label="Previous"
          >
            &#8592; Prev
          </button>
          <span className="text-gray-400">
            {windowStart + 1} - {Math.min(windowEnd, skillCategories.length)} of {skillCategories.length}
          </span>
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={`px-4 py-2 rounded bg-gray-700 text-white font-bold transition-colors ${canGoNext ? 'hover:bg-blue-500' : 'opacity-50 cursor-not-allowed'}`}
            aria-label="Next"
          >
            Next &#8594;
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.slice(windowStart, windowEnd).map((category, index) => (
            <Card key={windowStart + index} className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <category.icon className={`w-6 h-6 mr-3 ${category.color}`} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <p className="text-sm text-gray-400">{skill.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sliding Window Controls (Bottom) */}
        <div className="flex justify-center items-center mb-8 gap-4">
          <button
            onClick={handlePrev}
            disabled={!canGoPrev}
            className={`px-4 py-2 rounded bg-gray-700 text-white font-bold transition-colors ${canGoPrev ? 'hover:bg-blue-500' : 'opacity-50 cursor-not-allowed'}`}
            aria-label="Previous"
          >
            &#8592; Prev
          </button>
          <span className="text-gray-400">
            {windowStart + 1} - {Math.min(windowEnd, skillCategories.length)} of {skillCategories.length}
          </span>
          <button
            onClick={handleNext}
            disabled={!canGoNext}
            className={`px-4 py-2 rounded bg-gray-700 text-white font-bold transition-colors ${canGoNext ? 'hover:bg-blue-500' : 'opacity-50 cursor-not-allowed'}`}
            aria-label="Next"
          >
            Next &#8594;
          </button>
        </div>
      </div>
    </section>
  )
}
