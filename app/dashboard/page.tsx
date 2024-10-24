"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig} from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";
import { Table } from "@/components/ui/table";
import Image from "next/image";
import * as React from 'react'
import { FaPiggyBank, FaMoneyBillWave, FaChartLine } from "react-icons/fa";
import { Line, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
ChartJS.register(ArcElement, Tooltip, Legend);



const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Net Profit',
      data: [300000, 500000, 400000, 600000, 700000, 900000],
      borderColor: 'rgba(139, 92, 246, 1)', 
      backgroundColor: 'rgba(139, 92, 246, 0.2)',
      fill: true,
    },
  ],
};

export const description = "An interactive bar chart"

const chartData = [
    { date: "2024-04-01", desktop: 222, mobile: 150 },
    { date: "2024-04-02", desktop: 97, mobile: 180 },
    { date: "2024-04-03", desktop: 167, mobile: 120 },
    { date: "2024-04-04", desktop: 242, mobile: 260 },
    { date: "2024-04-05", desktop: 373, mobile: 290 },
    { date: "2024-04-06", desktop: 301, mobile: 340 },
    { date: "2024-04-07", desktop: 245, mobile: 180 },
    { date: "2024-04-08", desktop: 409, mobile: 320 },
    { date: "2024-04-09", desktop: 59, mobile: 110 },
    { date: "2024-04-10", desktop: 261, mobile: 190 },
    { date: "2024-04-11", desktop: 327, mobile: 350 },
    { date: "2024-04-12", desktop: 292, mobile: 210 },
    { date: "2024-04-13", desktop: 342, mobile: 380 },
    { date: "2024-04-14", desktop: 137, mobile: 220 },
    { date: "2024-04-15", desktop: 120, mobile: 170 },
    { date: "2024-04-16", desktop: 138, mobile: 190 },
    { date: "2024-04-17", desktop: 446, mobile: 360 },
    { date: "2024-04-18", desktop: 364, mobile: 410 },
    { date: "2024-04-19", desktop: 243, mobile: 180 },
    { date: "2024-04-20", desktop: 89, mobile: 150 },
    { date: "2024-04-21", desktop: 137, mobile: 200 },
    { date: "2024-04-22", desktop: 224, mobile: 170 },
    { date: "2024-04-23", desktop: 138, mobile: 230 },
    { date: "2024-04-24", desktop: 387, mobile: 290 },
    { date: "2024-04-25", desktop: 215, mobile: 250 },
    { date: "2024-04-26", desktop: 75, mobile: 130 },
    { date: "2024-04-27", desktop: 383, mobile: 420 },
    { date: "2024-04-28", desktop: 122, mobile: 180 },
    { date: "2024-04-29", desktop: 315, mobile: 240 },
    { date: "2024-04-30", desktop: 454, mobile: 380 },
    { date: "2024-05-01", desktop: 165, mobile: 220 },
    { date: "2024-05-02", desktop: 293, mobile: 310 },
    { date: "2024-05-03", desktop: 247, mobile: 190 },
    { date: "2024-05-04", desktop: 385, mobile: 420 },
    { date: "2024-05-05", desktop: 481, mobile: 390 },
    { date: "2024-05-06", desktop: 498, mobile: 520 },
    { date: "2024-05-07", desktop: 388, mobile: 300 },
    { date: "2024-05-08", desktop: 149, mobile: 210 },
    { date: "2024-05-09", desktop: 227, mobile: 180 },
    { date: "2024-05-10", desktop: 293, mobile: 330 },
    { date: "2024-05-11", desktop: 335, mobile: 270 },
    { date: "2024-05-12", desktop: 197, mobile: 240 },
    { date: "2024-05-13", desktop: 197, mobile: 160 },
    { date: "2024-05-14", desktop: 448, mobile: 490 },
    { date: "2024-05-15", desktop: 473, mobile: 380 },
    { date: "2024-05-16", desktop: 338, mobile: 400 },
    { date: "2024-05-17", desktop: 499, mobile: 420 },
    { date: "2024-05-18", desktop: 315, mobile: 350 },
    { date: "2024-05-19", desktop: 235, mobile: 180 },
    { date: "2024-05-20", desktop: 177, mobile: 230 },
    { date: "2024-05-21", desktop: 82, mobile: 140 },
    { date: "2024-05-22", desktop: 81, mobile: 120 },
    { date: "2024-05-23", desktop: 252, mobile: 290 },
    { date: "2024-05-24", desktop: 294, mobile: 220 },
    { date: "2024-05-25", desktop: 201, mobile: 250 },
    { date: "2024-05-26", desktop: 213, mobile: 170 },
    { date: "2024-05-27", desktop: 420, mobile: 460 },
    { date: "2024-05-28", desktop: 233, mobile: 190 },
    { date: "2024-05-29", desktop: 78, mobile: 130 },
    { date: "2024-05-30", desktop: 340, mobile: 280 },
    { date: "2024-05-31", desktop: 178, mobile: 230 },
    { date: "2024-06-01", desktop: 178, mobile: 200 },
    { date: "2024-06-02", desktop: 470, mobile: 410 },
    { date: "2024-06-03", desktop: 103, mobile: 160 },
    { date: "2024-06-04", desktop: 439, mobile: 380 },
    { date: "2024-06-05", desktop: 88, mobile: 140 },
    { date: "2024-06-06", desktop: 294, mobile: 250 },
    { date: "2024-06-07", desktop: 323, mobile: 370 },
    { date: "2024-06-08", desktop: 385, mobile: 320 },
    { date: "2024-06-09", desktop: 438, mobile: 480 },
    { date: "2024-06-10", desktop: 155, mobile: 200 },
    { date: "2024-06-11", desktop: 92, mobile: 150 },
    { date: "2024-06-12", desktop: 492, mobile: 420 },
    { date: "2024-06-13", desktop: 81, mobile: 130 },
    { date: "2024-06-14", desktop: 426, mobile: 380 },
    { date: "2024-06-15", desktop: 307, mobile: 350 },
    { date: "2024-06-16", desktop: 371, mobile: 310 },
    { date: "2024-06-17", desktop: 475, mobile: 520 },
    { date: "2024-06-18", desktop: 107, mobile: 170 },
    { date: "2024-06-19", desktop: 341, mobile: 290 },
    { date: "2024-06-20", desktop: 408, mobile: 450 },
    { date: "2024-06-21", desktop: 169, mobile: 210 },
    { date: "2024-06-22", desktop: 317, mobile: 270 },
    { date: "2024-06-23", desktop: 480, mobile: 530 },
    { date: "2024-06-24", desktop: 132, mobile: 180 },
    { date: "2024-06-25", desktop: 141, mobile: 190 },
    { date: "2024-06-26", desktop: 434, mobile: 380 },
    { date: "2024-06-27", desktop: 448, mobile: 490 },
    { date: "2024-06-28", desktop: 149, mobile: 200 },
    { date: "2024-06-29", desktop: 103, mobile: 160 },
    { date: "2024-06-30", desktop: 446, mobile: 400 },
  ]
  
  const chartConfig = {
    views: {
      label: "Page Views",
    },
    desktop: {
      label: "Desktop",
      color: "hsl(var(--chart-1))",
    },
    mobile: {
      label: "Mobile",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig


export default function Dashboard() {
    const [activeChart] =
    React.useState<keyof typeof chartConfig>("desktop")
  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  )

  const expensesData = [
    { category: "Marketing", amount: 1500000000 },
    { category: "Salaries", amount: 2000000000 },
    { category: "Infraestructure", amount: 1200000000 },
    { category: "Logistics", amount: 800000000 },
  ];
  

  const totalExpenses = expensesData.reduce((total, expense) => total + expense.amount, 0);
  
 
  const expensesPercentages = expensesData.map(expense => ({
    category: expense.category,
    percentage: (expense.amount / totalExpenses) * 100,
  }));

  


    return (
        <section className="max-w-[1735px] mx-auto">
        <header className="flex flex-col justify-center lg:items-center lg:flex-row lg:justify-around">
          <div className="flex justify-center items-center">
            <Image src="/Logo.svg" quality={100} width={200} height={200} alt="" className="animate-pulse" />
          </div>
          <div className="mt-16 flex flex-col-reverse lg:flex-row items-center gap-4">
            <h1>Hello Gustavo Gantois! Welcome.</h1>
            <Avatar className="animate-bounce">
                <AvatarImage src="https://github.com/DevGustavoGantois.png" />
                <AvatarFallback>GG</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex justify-center items-center lg:justify-start mt-20 lg:mt-0">
          <Sheet>
  <SheetTrigger className="text-violet-500 underline">Edit Profile</SheetTrigger>
  <SheetContent className="p-6">
    <SheetHeader>
      <SheetTitle className="text-2xl font-bold mb-4">Edit Your Profile</SheetTitle>
    </SheetHeader>
    
    <form className="space-y-4">
      <div className="flex items-center space-x-4">
        <img
          src="https://github.com/DevGustavoGantois.png"
          alt="Profile Picture"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
          <Input type="file" accept="image/*" className="font-secondary"/>
        </div>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <Input
          type="text"
          id="name"
          placeholder="Enter your full name"
          className="font-secondary"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
        <Input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="font-secondary"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
        <Input
          type="password"
          id="password"
          placeholder="Enter new password"
          className="font-secondary"
        />
        <p className="text-gray-500 text-sm mt-1">Leave blank if you don't want to change your password.</p>
      </div>

      <div className="flex justify-end">
        <Button variant="ghost" type="submit">
          Save Changes
        </Button>
      </div>
    </form>
  </SheetContent>
</Sheet>
          </div>
        </header>
      
        <main className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="shadow-lg rounded-lg overflow-hidden">
  <CardHeader>
    <CardTitle className="text-xl font-semibold">Transactions</CardTitle>
    <CardDescription className="text-sm">Recent transactions for this month</CardDescription>
  </CardHeader>
  <CardContent className="p-4">
    <div className="overflow-x-auto">
      <Table className="min-w-full rounded-lg">
        <thead className=" text-white/90">
          <tr className="text-left">
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="transition-all duration-700 hover:bg-white/5 cursor-pointer">
            <td className="py-2 px-4 border-b">2024-04-01</td>
            <td className="py-2 px-4 border-b">Office Supplies</td>
            <td className="py-2 px-4 border-b text-red-600">-$200</td>
          </tr>
          <tr className="transition-all duration-700 hover:bg-white/5 cursor-pointer">
            <td className="py-2 px-4 border-b">2024-04-02</td>
            <td className="py-2 px-4 border-b">Client Payment</td>
            <td className="py-2 px-4 border-b text-green-600">+$2,500</td>
          </tr>
          <tr className="transition-all duration-700 hover:bg-white/5 cursor-pointer">
            <td className="py-2 px-4 border-b">2024-04-03</td>
            <td className="py-2 px-4 border-b">Marketing</td>
            <td className="py-2 px-4 border-b text-red-600">-$500</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </CardContent>
</Card>
<Card className="hidden lg:flex lg:flex-col col-span-2">
      <CardHeader className="flex justify-center items-center">
        <CardTitle>Total Expenses</CardTitle>
        <CardDescription>Total Expenses of Business Company</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-around">
        <div className="text-3xl transition-all duration-700 text-white hover:text-green-600 animate-pulse">
          {totalExpenses.toLocaleString()}
        </div>
        <div className="w-1/2 ml-4">
          {expensesPercentages.map((expense, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between text-sm font-medium text-gray-700">
                <span>{expense.category}</span>
                <span>{expense.percentage.toFixed(2)}%</span>
              </div>
              <Progress value={expense.percentage} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
      
    <Card className="col-span-1">
      <CardHeader>
        <CardTitle>Net Profit</CardTitle>
        <CardDescription>Profit trends over the last six months</CardDescription>
      </CardHeader>
      <CardContent>
        <Line data={data} options={{ responsive: true }} />
      </CardContent>
    </Card>
      
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Cash Flow</CardTitle>
              <CardDescription>Cash flow of Bussiness Company</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-6">
                <Progress value={(total.desktop / (total.desktop + total.mobile)) * 100} />
        <p className="text-center mt-4">Desktop Views: {total.desktop.toLocaleString()}</p>
        <Progress value={(total.mobile / (total.desktop + total.mobile)) * 100} />
        <p className="text-center mt-4">Mobile Views: {total.mobile.toLocaleString()}</p>
                </div>
            </CardContent>
          </Card>
      
          <footer className="col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="lg:h-[480px] w-full">
        <CardHeader>
            <CardTitle>Customer Growth</CardTitle>
            <CardDescription>Overview of new, returning, and inactive customers.</CardDescription>
        </CardHeader>
        <div className="flex justify-center items-center mt-4">
        <CardContent className="w-[400px]">
            <Doughnut data={data} />
        </CardContent>
        </div>
        </Card>
        <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-bold ">Financial Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="mb-4">
          Keep track of your financial health to achieve your goals. Here's a quick overview of your current status:
        </CardDescription>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center p-4 bg-transparent rounded-lg shadow-sm">
            <FaPiggyBank className="h-6 w-6 text-blue-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold">Savings</h3>
              <p className="text-gray-100">$5,000</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-transparent rounded-lg shadow-sm">
            <FaMoneyBillWave className="h-6 w-6 text-red-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold">Expenses</h3>
              <p className="text-gray-300">$2,500</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-transparent rounded-lg shadow-sm">
            <FaChartLine className="h-6 w-6 text-green-600 mr-3" />
            <div>
              <h3 className="text-lg font-semibold">Investments</h3>
              <p className="text-gray-500">$10,000</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          View Details
        </Button>
      </CardFooter>
    </Card>
          </footer>
        </main>
        <Pagination className="flex justify-center lg:justify-end max-w-[1920px] mx-auto mt-8 mb-12">
                <PaginationContent className="flex gap-12 lg:gap-28 items-center">
                    <PaginationItem>
                        <PaginationPrevious href="/login" />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="/transactions" className="w-[50px] hidden lg:flex">Transactions Companys</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/">Home</PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="hidden lg:flex">
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="/transactions" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
      </section>      
    )
}