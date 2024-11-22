
import { atom } from "recoil";
import { useRecoilValue, useSetRecoilState } from "recoil";

export const balanceAtom = atom<number>({
    key: "balance",
    default: 0,
})
export const useBalance = () => {
    const balance = useRecoilValue(balanceAtom);
    const setBalance = useSetRecoilState(balanceAtom);
    return { balance, setBalance };
};