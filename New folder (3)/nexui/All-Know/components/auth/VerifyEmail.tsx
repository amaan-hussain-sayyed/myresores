    "use client"
    import { Button, Input} from "@nextui-org/react"
    import z from "zod"
    import { useForm } from 'react-hook-form';
    import { zodResolver } from '@hookform/resolvers/zod';
    import { useState } from "react";
    import Form from "./Form";
    import Stoper from "./Stoper";
     

   
    const EmailSchema = z.object({
        email: z.string().email({message:'enter the valid email'})
    })
    const Component = () => {
        const [change,setChange] = useState(false) 
        const { register, handleSubmit, formState: { errors, isSubmitting,isDirty,isValid},getValues } = useForm({
            resolver: zodResolver(EmailSchema),
            mode: 'all'
        });

        const onSubmit =async (data:any) => {
            console.log(data)
            setChange(true)
        }
    
        return (
            <Form
                Title={ change ? "Link sent to " :"Verify Your"}
                actionName={"Send Email"}
                handleSubmit={handleSubmit}
                heading={ change ? `check your email we send it a likn if you cant find check ${getValues("email")}`:"verify Your Account for unlock more features"}
                isDirty={isDirty}
                isValid={isValid}
                supTitle={change? "your Email":"Email"}
                onSubmit={change ? null : onSubmit}
                >
            <div className="flex flex-col gap-2">
                    {!change && <Input
                        errorMessage={`${errors.email?.message}`}
                        isDisabled={isSubmitting}
                        isInvalid={errors.email?.message ? true : false}
                        label="Email"
                        {...register('email')}
                        size="md"
                        type="email"
                        variant="bordered"
                    />}
                    {change && 
                        <div className="flex p-2 justify-between items-center">
                        <Stoper
                        actionName="Resend"
                        handleSubmit={handleSubmit}
                        isDirty={isDirty}
                        isValid={isValid}
                        timeValue={30}
                        onSubmit={onSubmit}
                            />
                            <Button
                                radius="full"
                                size="md"
                                 
                                variant="bordered"
                                onClick={() => setChange(false)}
                            >
                                Change Email
                            </Button>
                        </div>
                    }
                 </div>
            </Form>
    
        )
    }

    export default Component