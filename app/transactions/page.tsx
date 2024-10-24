import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DollarSign } from "lucide-react";
import Image from "next/image";
import React from "react";


const DataTables = [
    {
        id: "1",
        type: "Tech",
        company: "Quantum Innovations",
        location: "San Francisco, CA",
        revenue: "$3 Billion",
        employees: "5,000",
        founded: "2008",
        ceo: "Emily Zhang",
        status: "Private",
        website: "https://quantuminnovations.com"
    },
    {
        id: "2",
        type: "Finance",
        company: "Blue Horizon Capital",
        location: "New York, NY",
        revenue: "$8 Billion",
        employees: "10,000",
        founded: "1995",
        ceo: "John Doe",
        status: "Public",
        website: "https://bluehorizoncapital.com"
    },
    {
        id: "3",
        type: "Healthcare",
        company: "VitaNova Medical",
        location: "Chicago, IL",
        revenue: "$2.5 Billion",
        employees: "3,500",
        founded: "2012",
        ceo: "Anna Martinez",
        status: "Private",
        website: "https://vitanovamedical.com"
    },
    {
        id: "4",
        type: "Automotive",
        company: "Stellar Motors",
        location: "Detroit, MI",
        revenue: "$12 Billion",
        employees: "15,000",
        founded: "1970",
        ceo: "Robert Thompson",
        status: "Public",
        website: "https://stellarmotors.com"
    },
    {
        id: "5",
        type: "Retail",
        company: "Evergreen Market",
        location: "Seattle, WA",
        revenue: "$1.2 Billion",
        employees: "4,500",
        founded: "2001",
        ceo: "Sarah Lee",
        status: "Private",
        website: "https://evergreenmarket.com"
    },
    {
        id: "6",
        type: "Energy",
        company: "Solaris Power Corp",
        location: "Austin, TX",
        revenue: "$5 Billion",
        employees: "8,000",
        founded: "2010",
        ceo: "Carlos Mendez",
        status: "Public",
        website: "https://solarispower.com"
    },
    {
        id: "7",
        type: "Entertainment",
        company: "Lunarwave Studios",
        location: "Los Angeles, CA",
        revenue: "$2 Billion",
        employees: "3,000",
        founded: "2005",
        ceo: "Melissa Green",
        status: "Private",
        website: "https://lunarwavestudios.com"
    },
    {
        id: "8",
        type: "Hospitality",
        company: "Oceania Resorts",
        location: "Miami, FL",
        revenue: "$1.5 Billion",
        employees: "6,000",
        founded: "1998",
        ceo: "Anthony Costa",
        status: "Private",
        website: "https://oceaniaresorts.com"
    },
    {
        id: "9",
        type: "Education",
        company: "Bright Future Academy",
        location: "Boston, MA",
        revenue: "$300 Million",
        employees: "800",
        founded: "2015",
        ceo: "Jessica Liu",
        status: "Private",
        website: "https://brightfutureacademy.com"
    },
    {
        id: "10",
        type: "Logistics",
        company: "SwiftLine Freight",
        location: "Dallas, TX",
        revenue: "$4 Billion",
        employees: "9,000",
        founded: "1985",
        ceo: "George Kim",
        status: "Public",
        website: "https://swiftlinefreight.com"
    },
    {
        id: "11",
        type: "Food & Beverage",
        company: "TasteFusion Foods",
        location: "Atlanta, GA",
        revenue: "$2 Billion",
        employees: "7,000",
        founded: "1999",
        ceo: "Patricia Davis",
        status: "Private",
        website: "https://tastefusionfoods.com"
    },
    {
        id: "12",
        type: "Real Estate",
        company: "Zenith Properties",
        location: "Denver, CO",
        revenue: "$3.5 Billion",
        employees: "5,500",
        founded: "1980",
        ceo: "Michael Scott",
        status: "Public",
        website: "https://zenithproperties.com"
    }
];

export default function Transactions() {
    return (
        <section>
            <header className="flex justify-between items-center max-w-[1735px] mx-auto">
                <div>
                    <Image src="/Logo.svg" alt="" quality={100} height={300} width={300} className="animate-pulse" />
                </div>
                <div className="flex items-center gap-6">
                <div>
                    <h1>Gustavo Gantois Caria Carvalho</h1>
                </div>
                <div className="flex flex-col gap-2 items-end">
                <Avatar className="animate-bounce">
                <AvatarImage src="https://github.com/DevGustavoGantois.png" />
                <AvatarFallback>GG</AvatarFallback>
            </Avatar>
                </div>
                </div>
            </header>
            <div className="flex justify-between max-w-[1735px] mx-auto">
                <h1 className="lg:text-[35px]">Transactions</h1>
                <div>
                    <Menubar>
                    <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            New Trans <MenubarShortcut>Ctrl+N</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                            New Value <MenubarShortcut>Ctrl+V</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>
                            New Company <MenubarShortcut><DollarSign /></MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                            Recent Transactions
                        </MenubarItem>
                        <MenubarItem>
                            Settings
                        </MenubarItem>
                        <MenubarItem>
                            Help
                        </MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Edit</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Undo <MenubarShortcut>Ctrl+Z</MenubarShortcut></MenubarItem>
                        <MenubarItem>Redo <MenubarShortcut>Ctrl+Y</MenubarShortcut></MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>View</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Toggle Dark Mode</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                                </Menubar>
                </div>
            </div>
            <div className="lg:p-10">
            <Table className="min-w-full table-auto border-collapse">
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Type</TableHead>
                            <TableHead>Company</TableHead>
                            <TableHead>Location</TableHead>
                            <TableHead>Revenue</TableHead>
                            <TableHead>Employees</TableHead>
                            <TableHead>Founded</TableHead>
                            <TableHead>CEO</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Website</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {DataTables.map((item) => (
                            <TableRow key={item.id} className=" hover:bg-white/10 font-secondary">
                                <TableCell className="font-primary text-violet-500">{item.id}</TableCell>
                                <TableCell>{item.type}</TableCell>
                                <TableCell>{item.company}</TableCell>
                                <TableCell>{item.location}</TableCell>
                                <TableCell>{item.revenue}</TableCell>
                                <TableCell>{item.employees}</TableCell>
                                <TableCell>{item.founded}</TableCell>
                                <TableCell>{item.ceo}</TableCell>
                                <TableCell>{item.status}</TableCell>
                                <TableCell>
                                    <a href={item.website} target="_blank" rel="noopener noreferrer" className="text-violet-500 hover:underline">
                                        Visit Website
                                    </a>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
            <Pagination className="flex justify-end max-w-[1920px] mx-auto mt-12 mb-12">
                <PaginationContent className="flex gap-12 items-center">
                    <PaginationItem>
                        <PaginationPrevious href="/dashboard" />
                    </PaginationItem>
                    <PaginationItem>
                    <PaginationLink href="/register">Register</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/">Start</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="/dashboard" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </section>
    );
}