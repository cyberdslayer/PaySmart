"use client"

export const Input = ({
    placeholder,
    onChange,
    label,

}:{
    placeholder: string;
    onChange: (value:string)=> void;
    label: string;

})=>{ return <div>
    <input type="number" className="border-none" />
</div>
    
}