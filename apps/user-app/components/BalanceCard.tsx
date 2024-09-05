"use client"

import { Card } from "@repo/ui/card";
import { useEffect, useState } from "react";
import { OnRampTransactions } from "./OnRampTransactions";
import Balance from "./Balance";

export const BalanceCard = ({amount, locked}: {
    amount: number;
    locked: number;
}) => {
            useEffect(()=>{
                console.log(amount, locked);
            }, [])


    return <Card title={"Balance"}>
            <div>
            <Balance></Balance>
            </div>
                
        <div className="flex justify-between border-b border-slate-300 pb-2">
            <div>
                Unlocked balance
            </div>
            <div>
                {amount / 100} INR
            </div>
        </div>
        <div className="flex justify-between border-b border-slate-300 py-2">
            <div>
                Total Locked Balance
            </div>
            <div>
                {locked / 100} INR
            </div>
        </div>
        <div className="flex justify-between border-b border-slate-300 py-2">
            <div>
                Total Balance
            </div>
            <div>
                 
                {(locked + amount) / 100} INR
            </div>

        </div>
    </Card>
}