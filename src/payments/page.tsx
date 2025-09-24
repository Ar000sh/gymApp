/*    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "728ed53f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "728ed54f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "728ed55f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "728ed56f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "728ed57f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "728ed58f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "728ed59f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "728ed510f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "728ed511f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    */
import { columns, type Payment } from "./columns"
import { DataTable } from "./data-table"

function getData(): Payment[] {
  return [
     {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "728ed53f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "728ed54f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "728ed55f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "728ed56f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "728ed57f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "728ed58f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "728ed59f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "728ed510f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },{
      id: "728ed511f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

export default function DemoPage() {
  const data = getData()

  return (
    <div className="w-full h-full bg-white">
<div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
    </div>
    
  )
}
