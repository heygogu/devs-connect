"use client"
import SidebarLayout from "@/components/layouts/SidebarLayout";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UserPlus, 
  UserCheck, 
  X, 
  Check, 
  Briefcase, 
  Award,
  Search,
  UserX,
  Filter,
  MoreHorizontal
} from 'lucide-react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import PageContainer from "@/components/layouts/PageContainer";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";

const mockRequests = [
  {
    id: 1,
    name: "Sarah Anderson",
    headline: "Senior Frontend Developer",
    skills: ["React", "TypeScript", "UI/UX"],
    company: "Google",
    mutualConnections: 12
  },
  {
    id: 2,
    name: "Michael Chen",
    headline: "AI Research Scientist",
    skills: ["Machine Learning", "Python", "TensorFlow"],
    company: "DeepMind",
    mutualConnections: 8
  },
  {
    id: 3,
    name: "Emma Wilson",
    headline: "Product Manager",
    skills: ["Strategy", "Agile", "Data Analysis"],
    company: "Microsoft",
    mutualConnections: 15
  },
  {
    id: 4,
    name: "James Rodriguez",
    headline: "Cloud Solutions Architect",
    skills: ["AWS", "Azure", "DevOps"],
    company: "Amazon",
    mutualConnections: 5
  },
  {
    id: 5,
    name: "Priya Patel",
    headline: "UX Research Lead",
    skills: ["User Research", "Prototyping", "Design Thinking"],
    company: "Apple",
    mutualConnections: 10
  }
];

const mockConnections = [
  {
    id: 6,
    name: "David Kim",
    headline: "Technical Lead",
    skills: ["Java", "Spring Boot", "Microservices"],
    company: "Netflix",
    connectedSince: "2023-12-01"
  },
  {
    id: 7,
    name: "Linda Martinez",
    headline: "Data Science Manager",
    skills: ["SQL", "R", "Data Visualization"],
    company: "Meta",
    connectedSince: "2023-11-15"
  },
  {
    id: 8,
    name: "Alex Thompson",
    headline: "Blockchain Developer",
    skills: ["Solidity", "Web3", "Smart Contracts"],
    company: "Coinbase",
    connectedSince: "2024-01-10"
  },
  {
    id: 9,
    name: "Sophie Clark",
    headline: "iOS Developer",
    skills: ["Swift", "SwiftUI", "Objective-C"],
    company: "Airbnb",
    connectedSince: "2023-10-20"
  },
  {
    id: 10,
    name: "Raj Sharma",
    headline: "Security Engineer",
    skills: ["Cybersecurity", "Penetration Testing", "Network Security"],
    company: "Microsoft",
    connectedSince: "2024-01-05"
  }
];

const ConnectionsPage = () => {
  const [requests, setRequests] = useState<any>(mockRequests);
  const [connections, setConnections] = useState<any>(mockConnections);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("requests");

  const handleAccept = (id:string) => {
    const acceptedRequest = requests.find((req:any) => req.id === id);
    setRequests((pre:any) => pre?.filter((req:any) => req.id !== id));
    setConnections((prev:any) => [...prev, { ...acceptedRequest, connectedSince: new Date().toISOString() }]);
  };

  const handleReject = (id:string) => {
    setRequests((prev:any) => prev.filter((req:any) => req.id !== id));
  };

  const handleRemoveConnection = (id:any) => {
    setConnections((prev:any) => prev.filter((conn:any) => conn.id !== id));
  };

  const RequestCard = ({ request }:{request:any}) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className=""
    >
      <Card className="hover:shadow-lg transition-shadow duration-300 ">
        <CardHeader className="flex lg:flex-row gap-4 lg:gap-0 items-start md:flex-col lg:items-center justify-between space-y-0 pb-2">
          <div className="flex flex-col -ml-1">
            <div className="flex gap-2 items-center">

            <Avatar className="h-12 w-12 rounded-full">
              <AvatarImage src={request.avatar} alt={request.name} />
              <AvatarFallback className="rounded-lg">{request.name[0]}</AvatarFallback>
            </Avatar>
            <div>

            <CardTitle className="text-lg font-bold">{request.name}</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                {request.company}
              </div>
            </CardDescription>
            </div>
            </div>
          </div>
          <div className="flex gap-2 ">
            <Button 
              variant="default" 
              // size="icon"
              className="hover:bg-primary hover:text-primary-foreground transition-colors"
              onClick={() => handleAccept(request.id)}
            >
              Accept
            </Button>
            <Button 
              variant="destructive" 
              // size="icon"
              className="hover:bg-destructive hover:text-destructive-foreground transition-colors"
              onClick={() => handleReject(request.id)}
            >
             Reject
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">{request.headline}</p>
          <div className="flex flex-wrap gap-2">
            {request.skills.map((skill:any, index:any) => (
              <Badge 
              key={index} 
              variant="secondary" 
              className="cursor-pointer bg-primary/10 hover:bg-primary/20 transition-colors"
              >
              {skill}
              </Badge>
            ))}
          </div>
          <div className="mt-3 text-sm text-muted-foreground flex items-center gap-1">
            <UserCheck className="w-4 h-4 text-primary" />
            {request.mutualConnections} mutual connections
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  const ConnectionCard = ({ connection }:{connection:any}) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full"
    >
      <Card className="hover:shadow-lg transition-shadow duration-300 group">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex flex-col">
            <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
              {connection.name}
            </CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                {connection.company}
              </div>
            </CardDescription>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-3xl border-0">
              <DropdownMenuItem className="text-destructive rounded-3xl" onClick={() => handleRemoveConnection(connection.id)}>
                <UserX className="mr-2 h-4 w-4 " />
                Remove Connection
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-2">{connection.headline}</p>
          <div className="flex flex-wrap gap-2">
            {connection.skills.map((skill:any, index:any) => (
              <Badge 
              key={index} 
              variant="secondary" 
              className="cursor-pointer bg-primary/10 hover:bg-primary/20 transition-colors"
              >
              {skill}
              </Badge>
            ))}
          </div>
          <div className="mt-3 text-sm text-muted-foreground">
            Connected since {new Date(connection.connectedSince).toLocaleDateString()}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <PageContainer>

    <div className=" p-6">
      <Tabs defaultValue="requests" className="w-full" onValueChange={setActiveTab}>
        <div className="flex  justify-between gap-2  items-center mb-6">
          <TabsList className="px-2 py-5 rounded-3xl gap-2">
            <TabsTrigger value="requests" className="relative rounded-3xl px-4">
              Requests
              {requests.length > 0 && (
                <Badge 
                  variant="secondary" 
                  className="ml-2 absolute bg-destructive rounded-full px-1 py-0 -top-1 -right-1 text-white "
                >
                  {requests.length}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="connections" className="relative rounded-3xl px-4">My Network</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <div className="relative flex items-center ">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search..." 
                className="pl-8 rounded-3xl"
                
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        <TabsContent value="requests" className="space-y-4">
          <AnimatePresence>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {requests
                .filter((req:any) => 
                  req.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  req.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  req.skills.some((skill:any) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
                )
                .map((request:any) => (
                  <RequestCard key={request.id} request={request} />
                ))}
            </div>
          </AnimatePresence>
          {requests.length === 0 && (
            <div className="text-center py-10 text-muted-foreground">
              No pending connection requests
            </div>
          )}
        </TabsContent>

        <TabsContent value="connections" className="space-y-4">
          <AnimatePresence>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

            {connections
              .filter((conn:any) => 
                conn.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                conn.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                conn.skills.some((skill:any) => skill.toLowerCase().includes(searchTerm.toLowerCase()))
              )
              .map((connection:any) => (
                <ConnectionCard key={connection.id} connection={connection} />
              ))}
            </div>
          </AnimatePresence>
          {connections.length === 0 && (
            <div className="text-center py-10 text-muted-foreground">
              No connections yet
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
    </PageContainer>
  );
};

// export default ConnectionsPage;

export default function Page() {
  return (
    <SidebarLayout>
      <ConnectionsPage />
    </SidebarLayout>
  );
}
