"use client";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PlusCircle, MinusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";

// Define the schema using Zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  age: z.string().refine((val) => !Number.isNaN(parseInt(val)) && parseInt(val) >= 3, {
    message: "Age must be at least 18",
  }),
  skills: z.array(z.string()).min(1, "Add at least one skill"),
  interests: z.array(z.string()).min(1, "Add at least one interest"),
  careerGoals: z.string().min(10, "Please provide more detail about your career goals"),
  education: z.array(
    z.object({
      institution: z.string().min(0, ""),
      degree: z.string().min(0, ""),
      year: z.string().min(0,""),
      
    })
  ).min(0, "Provide education entry if one"),
});

const CreateProfile = () => {
  const router = useRouter();
  const [skills, setSkills] = useState([""]);
  const [interests, setInterests] = useState([""]);
  const [education, setEducation] = useState([{ institution: "", degree: "", year: "" }]);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      age: "",
      skills: [""],
      interests: [""],
      careerGoals: "",
      education: [{ institution: "", degree: "", year: "" }],
    },
  });

const onSubmit = (data) => {
  console.log(data);
  localStorage.setItem("userProfile", JSON.stringify(data));

  router.push("/"); 
};


  return (
    <div className="min-h-screen bg-[#0a192f] py-1 overflow-x-hidden">
        <Navbar/>
      <div className="container mx-auto max-w-2xl px-4 pt-10">
        <div className="mb-8 text-center">
          <h1 className="text-white mb-2 text-4xl font-bold">Create Your Profile</h1>
          <p className="text-gray-400">Tell us about yourself and your professional journey</p>
        </div>
        <div className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Basic Information */}
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-1">Full Name</label>
                <input
                  className="w-full p-2 rounded-md"
                  placeholder="John Doe"
                  {...form.register("name")}
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-sm">{form.formState.errors.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-white mb-1">Age</label>
                <input
                  type="number"
                  className="w-full p-2 rounded-md"
                  placeholder="25"
                  {...form.register("age")}
                />
                {form.formState.errors.age && (
                  <p className="text-red-500 text-sm">{form.formState.errors.age.message}</p>
                )}
              </div>
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <label className="block text-white">Skills</label>
              {skills.map((_, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    className="w-full p-2 rounded-md"
                    placeholder="e.g., JavaScript"
                    value={skills[index]}
                    onChange={(e) => {
                      const newSkills = [...skills];
                      newSkills[index] = e.target.value;
                      setSkills(newSkills);
                      form.setValue("skills", newSkills);
                    }}
                  />
                  {index === skills.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => setSkills([...skills, ""])}
                      className="text-emerald-400"
                    >
                      <PlusCircle className="h-5 w-5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        const newSkills = skills.filter((_, i) => i !== index);
                        setSkills(newSkills);
                        form.setValue("skills", newSkills);
                      }}
                      className="text-red-400"
                    >
                      <MinusCircle className="h-5 w-5" />
                    </button>
                  )}
                </div>
              ))}
              {form.formState.errors.skills && (
                <p className="text-red-500 text-sm">{form.formState.errors.skills.message}</p>
              )}
            </div>

            {/* Interests */}
            <div className="space-y-2">
              <label className="block text-white">Interests</label>
              {interests.map((_, index) => (
                <div key={index} className="flex items-center gap-2">
                  <input
                    className="w-full p-2 rounded-md"
                    placeholder="e.g., Blockchain Technology"
                    value={interests[index]}
                    onChange={(e) => {
                      const newInterests = [...interests];
                      newInterests[index] = e.target.value;
                      setInterests(newInterests);
                      form.setValue("interests", newInterests);
                    }}
                  />
                  {index === interests.length - 1 ? (
                    <button
                      type="button"
                      onClick={() => setInterests([...interests, ""])}
                      className="text-emerald-400"
                    >
                      <PlusCircle className="h-5 w-5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        const newInterests = interests.filter((_, i) => i !== index);
                        setInterests(newInterests);
                        form.setValue("interests", newInterests);
                      }}
                      className="text-red-400"
                    >
                      <MinusCircle className="h-5 w-5" />
                    </button>
                  )}
                </div>
              ))}
              {form.formState.errors.interests && (
                <p className="text-red-500 text-sm">{form.formState.errors.interests.message}</p>
              )}
            </div>

            {/* Career Goals */}
            <div>
              <label className="block text-white mb-1">Career Goals</label>
              <textarea
                className="w-full p-2 rounded-md"
                placeholder="Describe your professional aspirations and goals..."
                {...form.register("careerGoals")}
              />
              {form.formState.errors.careerGoals && (
                <p className="text-red-500 text-sm">{form.formState.errors.careerGoals.message}</p>
              )}
            </div>

            {/* Education */}
            <div className="space-y-4">
              <label className="block text-white">Education</label>
              {education.map((_, index) => (
                <div key={index} className="space-y-4 rounded-lg border border-gray-800 p-4">
                  <div>
                    <label className="block text-white mb-1">Institution</label>
                    <input
                      className="w-full p-2 rounded-md"
                      placeholder="University/School Name"
                      {...form.register(`education.${index}.institution`)}
                    />
                    {form.formState.errors.education &&
                      form.formState.errors.education[index] &&
                      form.formState.errors.education[index].institution && (
                        <p className="text-red-500 text-sm">
                          {form.formState.errors.education[index].institution.message}
                        </p>
                      )}
                  </div>
                  <div>
                    <label className="block text-white mb-1">Degree/Certification</label>
                    <input
                      className="w-full p-2 rounded-md"
                      placeholder="e.g., Bachelor's in Computer Science"
                      {...form.register(`education.${index}.degree`)}
                    />
                    {form.formState.errors.education &&
                      form.formState.errors.education[index] &&
                      form.formState.errors.education[index].degree && (
                        <p className="text-red-500 text-sm">
                          {form.formState.errors.education[index].degree.message}
                        </p>
                      )}
                  </div>
                  <div>
                    <label className="block text-white mb-1">Year of Completion</label>
                    <input
                      type="number"
                      className="w-full p-2 rounded-md"
                      placeholder="2023"
                      {...form.register(`education.${index}.year`)}
                    />
                    {form.formState.errors.education &&
                      form.formState.errors.education[index] &&
                      form.formState.errors.education[index].year && (
                        <p className="text-red-500 text-sm">
                          {form.formState.errors.education[index].year.message}
                        </p>
                      )}
                  </div>
                  <div className="flex justify-end">
                    {index === education.length - 1 ? (
                      <button
                        type="button"
                        className="border p-2 text-white rounded-md"
                        onClick={() =>
                          setEducation([...education, { institution: "", degree: "", year: "" }])
                        }
                      >
                        Add Another Education
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="border p-2 text-white rounded-md"
                        onClick={() => {
                          const newEducation = education.filter((_, i) => i !== index);
                          setEducation(newEducation);
                          form.setValue("education", newEducation);
                        }}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              ))}
              {form.formState.errors.education && typeof form.formState.errors.education.message === 'string' && (
                <p className="text-red-500 text-sm">{form.formState.errors.education.message}</p>
              )}
            </div>

            <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 p-2 rounded-md text-white">
              Create Profile
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
