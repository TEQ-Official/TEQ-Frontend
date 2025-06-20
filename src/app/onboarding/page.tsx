"use client"

import { useState } from 'react';
import Head from 'next/head';
import TestCard from '@/app/onboarding/TestCard';
import { IoCheckmarkCircle } from 'react-icons/io5';

const examOptions = [
    {
        id: 'career',
        title: 'Career English',
        description: 'English for work, interviews, and professional growth.'
    },
    {
        id: 'academic',
        title: 'Academic English',
        description: 'Prepare for exams and university success.'
    },
    {
        id: 'everyday',
        title: 'English for Everyday Life',
        description: 'Enhance your skills with deeper grammar and conversation.'
    }
];

const proficiencyLevels = [
    {
        id: 'beginner',
        title: 'Beginner',
        description: 'Build a strong foundation for everyday English.'
    },
    {
        id: 'intermediate',
        title: 'Intermediate',
        description: 'Enhance your skills with deeper grammar and conversation.'
    },
    {
        id: 'advanced',
        title: 'Advanced',
        description: 'Polish your fluency and master complex language use.'
    }
];

function page() {
    const [selectedExam, setSelectedExam] = useState<string | null>(null);
    const [selectedLevel, setSelectedLevel] = useState<string | null>(null);

    const isStartDisabled = !(selectedExam && selectedLevel);

    return (
        <>
            <Head>
                <title>Proficiency Test | The English Clinic</title>
            </Head>
            <main className="min-h-screen py-10 bg-white text-[#1D2739]">
                <div className="w-[90%] max-w-[1228px] mx-auto">
                    <button className="text-[#0047AB] mb-6">&larr; Back</button>
                    <section className='border p-6 md:mx-10'>
                        <h1 className="text-xl mb-4 border-b py-1">Learner's Proficiency test</h1>

                        <div className="grid md:grid-cols-4 gap-4 py-6 border-b">
                            <div className='pr-10'>
                                <p className="text-sm font-semibold text-[#0047AB] border-b border-[#0047AB] inline">STEP 1</p>
                                <h2 className="text-2xl my-6">Which exam would you like to get started with?</h2>
                            </div>
                            {examOptions.map((option) => (
                                <TestCard
                                    key={option.id}
                                    title={option.title}
                                    description={option.description}
                                    selected={selectedExam === option.id}
                                    onClick={() => setSelectedExam(option.id)}
                                />
                            ))}
                        </div>

                        <div className="grid md:grid-cols-4 gap-4 py-6 border-b">
                            <div className='pr-10'>
                                <p className="text-sm font-semibold text-[#0047AB] border-b border-[#0047AB] inline">STEP 2</p>
                                <h2 className="text-2xl my-6">Select proficiency level</h2>
                            </div>
                            {proficiencyLevels.map((level) => (
                                <TestCard
                                    key={level.id}
                                    title={level.title}
                                    description={level.description}
                                    selected={selectedLevel === level.id}
                                    onClick={() => setSelectedLevel(level.id)}
                                />
                            ))}
                        </div>

                        <div className="py-6">
                            <p className="text-sm font-semibold text-[#0047AB] border-b border-[#0047AB] inline">READ CAREFULLY</p>
                            <p className="text-2xl my-6">Test Format</p>
                            <ul className=" gap-3 flex flex-col pl-3">
                                <span className='flex items-center gap-5'><IoCheckmarkCircle className='text-blue-600'/> <li>Total duration: 10 minutes.</li></span>
                                <span className='flex items-center gap-5'><IoCheckmarkCircle className='text-blue-600'/> <li>There are 10 questions in all, divided into two sections.</li></span>
                            </ul>
                        </div>

                        <button
                            className={`mt-6 px-10 py-3 text-white rounded ${isStartDisabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#1D2739] hover:bg-[#1D2739]'
                                }`}
                            disabled={isStartDisabled}
                        >
                            Start the test
                        </button>
                    </section>
                </div>
            </main>
        </>
    );
}

export default page