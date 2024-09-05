"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput} from "@repo/ui/textinput";
// import{Input} from "@repo/ui/input";

import { useState } from "react";
import { p2pTransfer } from "../app/lib/actions/p2pTransfer";

export function SendCard() {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState("");

    return <div className="h-[90vh]">
        <Center>
                
            <div title="Send" className=" ">
                <div className="flex-col mb-6 text-grey-900">
                    <p className="text-sm flex-1 my-2">Desposit funds into an account</p>
                    <div className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9C27B0" className="size-11">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>


                        <p className=" text-4xl ml-2">Bank Transfer</p> 
                    </div>
                       
                </div>

                <div className="min-w-72 pt-2">
                {/* Amount input box   */}
                {/* <label className="block">
                    <span className="text-grey-900">
                        Amount
                    </span>
                    <div className="flex">
                        <div className="align-baseline  mr-2 content-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9C27B0" className="size-8">
                        <path fillRule="evenodd" d="M3.75 3.375c0-1.036.84-1.875 1.875-1.875H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375Zm10.5 1.875a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Zm-4.5 5.25a.75.75 0 0 0 0 1.5h.375c.769 0 1.43.463 1.719 1.125H9.75a.75.75 0 0 0 0 1.5h2.094a1.875 1.875 0 0 1-1.719 1.125H9.75a.75.75 0 0 0-.53 1.28l2.25 2.25a.75.75 0 0 0 1.06-1.06l-1.193-1.194a3.382 3.382 0 0 0 2.08-2.401h.833a.75.75 0 0 0 0-1.5h-.834A3.357 3.357 0 0 0 12.932 12h1.318a.75.75 0 0 0 0-1.5H10.5c-.04 0-.08.003-.12.01a3.425 3.425 0 0 0-.255-.01H9.75Z" clipRule="evenodd" />
                        </svg>
                        </div>
                        <TextInput placeholder="0.00" label="Amount" onChange={(value)=> {setAmount(value)}}/>
                        <input name="Amount" type="text" defaultValue={"0.00"} title="Amount" className=" w-full bg-bgcolor h-20 text-grey-900 text-6xl font-bold" />
                    </div>
                </label> */}
                    
                   
                    <TextInput placeholder={"Receiver Name"} label="Account Holder Name" onChange={(value) => {
                        setNumber(value)
                    }} />
                    <TextInput placeholder={"999 999 9999"} label="Account Number" onChange={(value) => {
                        console.log(value)
                        setNumber(value)
                    }} />
                    <TextInput placeholder={"2000"} label="Amount to Transfer" onChange={(value) => {
                        console.log(value)
                        setAmount(value)
                    }} />
                    
                    {/* <label className="block ">
                        <div className=" flex border rounded-md bg-primary  ">
                            <span className="text-grey-900">
                                Tranfer to
                            </span>
                            <input name="Receiver" type="text" defaultValue={""} placeholder="999 999 9999" className="  bg-inherit h-20 text-grey-900 text-red-800 font-bold " />
                        </div>
                    </label> */}

                    <div className="pt-4 flex justify-center">
                        <Button onClick={async () => {
                            await p2pTransfer(number, Number(amount)*100)
                        }}>Send</Button>
                    </div>
                </div>
            </div>
        </Center>
    </div>
}