"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Badge } from './ui/badge.js';
import { 
  Code, 
  Palette, 
  Gamepad2, 
  Music, 
  Users, 
  Camera, 
  PenTool, 
  Instagram,
  Mail,
  Calendar,
  Book
} from 'lucide-react';

const Navigation = () => (
  <nav className="bg-blue-900 text-white p-4 sticky top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <img className=""src={require('./shriniklogo.jpg')}/>
      <h1 className="text-2xl font-bold">SHRINIK CLUB</h1>
      <div className="space-x-4">
        <a href="#about" className="hover:text-blue-200">About</a>
        <a href="#objectives" className="hover:text-blue-200">Objectives</a>
        <a href="#teams" className="hover:text-blue-200">Teams</a>
        <a href="#avenues" className="hover:text-blue-200">Avenues</a>
        <a href="#events" className="hover:text-blue-200">Events</a>
        <a href="#contact" className="hover:text-blue-200">Contact</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
    <div className="container mx-auto text-center">
      <h1 className="text-5xl font-bold mb-4">SHRINIK CLUB</h1>
      <h2 className="text-2xl mb-4">G.L. BAJAJ Institute of Technology and Management</h2>
      <p className="text-xl">Where Technology Meets Culture</p>
    </div>
  </div>
);

const About = () => (
  <section id="about" className="py-16 bg-gray-50">
    <div className="container mx-auto">
      <h2 className="text-gray-900 text-3xl font-bold text-center mb-8">About SHRINIK</h2>
      <Card>
        <CardContent className="p-6">
          <p className="text-gray-900 leading-relaxed">
            SHRINIK is a techno-cultural student club formed by students of the Department of Computer Science. 
            Established on November 22, 2021, we provide a stage for students to showcase their talents in both 
            technical and cultural events. In less than a year, we've successfully organized more than 15 events 
            and workshops, making us the most active club on campus.
          </p>
        </CardContent>
      </Card>
    </div>
  </section>
);

const Objectives = () => (
  <section id="objectives" className="py-16">
    <div className="container mx-auto">
      <h2 className="text-gray-900 text-3xl font-bold text-center mb-8">Our Objectives</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          "Leverage students with relevant social and technical skills",
          "Develop leadership qualities and morale",
          "Establish framework for student welfare activities",
          "Encourage fellowship and teamwork",
          "Cultivate decision-making and problem-solving skills"
        ].map((objective, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Badge className="mt-1">{index + 1}</Badge>
                <p className="text-gray-700">{objective}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

const TeamCard = ({ title, icon: Icon, description }) => (
  <Card className="hover:shadow-lg transition-all">
    <CardHeader>
      <div className="flex items-center gap-2">
        <Icon className="w-6 h-6 text-blue-600" />
        <CardTitle>{title}</CardTitle>
      </div>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const Teams = () => (
  <section id="teams" className="py-16 bg-gray-50">
    <div className="container mx-auto">
      <h2 className="text-gray-900 text-3xl font-bold text-center mb-8">Our Teams</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <TeamCard 
          title="Tech Team" 
          icon={Code}
          description="Handles technical events and development projects"
        />
        <TeamCard 
          title="Design & Marketing" 
          icon={Camera}
          description="Creates visual content and manages marketing"
        />
        <TeamCard 
          title="Social Media" 
          icon={Users}
          description="Manages club's online presence and engagement"
        />
        <TeamCard 
          title="Editorial Team" 
          icon={PenTool}
          description="Creates and curates content for all platforms"
        />
      </div>
    </div>
  </section>
);

const Avenues = () => (
  <section id="avenues" className="py-16">
    <div className="container mx-auto">
      <h2 className="text-gray-900 text-3xl font-bold text-center mb-8">Our Avenues</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center hover:shadow-lg transition-all">
          <CardHeader>
            <Palette className="w-12 h-12 mx-auto text-purple-600" />
            <CardTitle>Art Avenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p>"Where creativity knows no bounds"</p>
          </CardContent>
        </Card>
        
        <Card className="text-center hover:shadow-lg transition-all">
          <CardHeader>
            <Gamepad2 className="w-12 h-12 mx-auto text-green-600" />
            <CardTitle>Gaming Avenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p>"Game on, level up!"</p>
          </CardContent>
        </Card>
        
        <Card className="text-center hover:shadow-lg transition-all">
          <CardHeader>
            <Music className="w-12 h-12 mx-auto text-red-600" />
            <CardTitle>Dancing Avenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p>"Move to your own rhythm"</p>
          </CardContent>
        </Card>
        
        <Card className="text-center hover:shadow-lg transition-all">
          <CardHeader>
            <Music className="w-12 h-12 mx-auto text-blue-600" />
            <CardTitle>Singing Avenue</CardTitle>
          </CardHeader>
          <CardContent>
            <p>"Let your voice soar"</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const Events = () => {
  const events = {
    previous: [
      { name: "Hackathon 2023", date: "Oct 15, 2023", description: "24-hour coding competition" },
      { name: "Cultural Fest", date: "Sep 20, 2023", description: "Annual cultural celebration" }
    ],
    upcoming: [
      { name: "Code Sprint", date: "Oct 30, 2024", description: "Competitive coding event" },
      { name: "Tech Exhibition", date: "Nov 15, 2024", description: "Show your innovative projects" }
    ]
  };

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-gray-900 text-3xl font-bold text-center mb-8">Events</h2>
        <Tabs defaultValue="upcoming">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
            <TabsTrigger value="previous">Previous Events</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming">
            <div className="grid gap-4">
              {events.upcoming.map((event, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{event.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p><Calendar className="inline mr-2" />{event.date}</p>
                    <p>{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="previous">
            <div className="grid gap-4">
              {events.previous.map((event, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{event.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p><Calendar className="inline mr-2" />{event.date}</p>
                    <p>{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="py-16">
    <div className="container mx-auto">
      <h2 className="text-gray-900 text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="flex justify-center space-x-6">
        <a href="https://instagram.com/shrinik" className="flex items-center gap-2 text-pink-600">
          <Instagram /> @shrinik
        </a>
        <a href="mailto:shrinik@glbitm.ac.in" className="flex items-center gap-2 text-blue-600">
          <Mail /> shrinik@glbitm.ac.in
        </a>
      </div>
    </div>
  </section>
);

const Guidelines = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto">
      <h2 className="text-gray-900 text-3xl font-bold text-center mb-8">Club Guidelines</h2>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Book className="text-gray-900 w-6 h-6" />
            Important Guidelines
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-blue-500 space-y-2">
            <li>• Regular attendance in club activities is mandatory for members</li>
            <li>• Maintain professional conduct during all club events</li>
            <li>• Active participation in organizing events is encouraged</li>
            <li>• Respect fellow members and follow club hierarchy</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  </section>
);

const ShrinikWebsite = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <About />
      <Objectives />
      <Teams />
      <Avenues />
      <Events />
      <Guidelines />
      <Contact />
    </div>
  );
};

export default ShrinikWebsite;