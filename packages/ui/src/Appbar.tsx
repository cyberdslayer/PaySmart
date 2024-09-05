import { Button } from "./button";
import {AccountCircle} from "./AccountCircle"

interface AppbarProps {
    user?: {
        name?: string | null;
    },
    // TODO: can u figure out what the type should be here?
    onSignin: any,
    onSignout: any
}

export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    return <div className="flex justify-between border-b px-4 border-slate-300">
        <div className="text-lg flex flex-col justify-center text-[#9333ea] font-extrabold">
            PaySmart
        </div>
        
        <div className="flex g-4">
            <div className="flex flex-col justify-center pr-2">
                <AccountCircle></AccountCircle>
            </div>
            <div className="flex flex-col justify-center pt-2">
            <Button onClick={user ? onSignout : onSignin}>{user ? "Logout" : "Login"}</Button>
            </div>
        </div>
        
    </div>
}