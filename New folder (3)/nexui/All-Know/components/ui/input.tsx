import { useState } from "react";
import { Input } from "@nextui-org/react";
import { EyeFilledIcon,EyeSlashFilledIcon } from "../icons";

export const InputPassword = ({IconShow=EyeFilledIcon,IconHide=EyeSlashFilledIcon,register,name, maxLength=8,minLenght=8,...props }:any) => {
    
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <Input
            maxLength={maxLength}
            minLength={minLenght}
            {...register(name)}
            endContent={
                <button className="focus:outline-none h-full" type="button" onClick={toggleVisibility}>
                    {isVisible ? (
                       <IconShow />
                    ) : (
                        <IconHide />
                    )}
                </button>
            }
            label="Password"
            type={isVisible ? "text" : "password"}
            {...props}
        />
    );

} 
