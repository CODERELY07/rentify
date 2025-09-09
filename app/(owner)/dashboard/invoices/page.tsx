import { cn } from "@/lib/utils";
import clsx from "clsx";

type InvoiceStatus = 'pending' | 'paid';

export default function Invoices(){
    const status = 'paid' as InvoiceStatus;

    return( 
        <>
            {/* add logic in style using clsx */}
            <span className={clsx(
                'inline-flex items-center rounded-full px-2 py-1 text-sm',
                {
                    'bg-gray-100 text-gray-500' : status === 'pending',
                    'bg-green-500 text-white': status === 'paid',
                },
            )}>
                {status}
            </span>
            <span className={cn(
                'inline-flex items-center rounded-full px-2 py-1 text-sm',
                status === 'pending' && 'bg-gray-100 text-gray-500',
                status === 'paid' && 'bg-green-500 text-white',
            )}>
                {status}
            </span>
        </>
    )
}
