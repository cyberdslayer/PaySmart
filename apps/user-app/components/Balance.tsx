"use client";

import {useBalance} from "@repo/store/balance";

function Balance() {
    const value = useBalance();
    console.log(value);
    return <p>The current balace is {value}</p>
}
export default Balance;