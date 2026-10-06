'use client'

import { Card } from "@radix-ui/themes"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function CategoriesPage() {
    return (
        <Card className=''>
            <h1 className="text-2xl font-bold mb-4">Categories</h1>
            <p>Manage your categories here.</p>
            <Table className="mt-4">
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead>Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                    <TableCell>INV001</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell>Credit Card</TableCell>  
                    <TableCell>$250.00</TableCell>
                    </TableRow>
                </TableBody>
                </Table>
        </Card>
    )
}