import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

interface Staff {
  id: number;
  picture: string;
  name: string;
  title: string;
  description: string;
  email: string;
}

export default function StaffCard() {
  const [StaffData, setStaffData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/staff")
      .then((response) => response.json())
      .then((data) => setStaffData(data));
  }, []);

  return (
    <>
      <div className="text-2xl sm:text-4xl xl:text-6xl px-4 font-semibold max-w-7xl m-auto text-blue-700 mt-6">
        Our Faculty and Staff
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-auto 2xl:grid-cols-4 dark:border-slate-900 grid-cols-1 gap-8 max-w-7xl justify-center items-center py-8">
        {StaffData.map((staffmember) => (
          <Card
            className=" border-blue-50 h-[350px] w-[300px] m-auto"
            key={staffmember.id}
          >
            <CardHeader className="flex items-center justify-center flex-col">
              <div className="">
                <div className=" flex justify-center shrink-0 rounded-md">
                  <img
                    className="rounded-md h-[200px]"
                    src={staffmember.picture}
                  ></img>
                </div>

                <CardTitle className="py-2">{staffmember.name}</CardTitle>
                <CardDescription className=" font-semibold italic text-blue-600">
                  {staffmember.title}
                </CardDescription>
                <CardDescription></CardDescription>
                <CardFooter className="p-0">{staffmember.email}</CardFooter>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
}
