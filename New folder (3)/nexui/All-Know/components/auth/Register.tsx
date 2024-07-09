    "use client"
    import { Input} from "@nextui-org/react"
    import z from "zod"
    import { useForm } from 'react-hook-form';
    import { zodResolver } from '@hookform/resolvers/zod';
    import Form from "./Form";
    import { InputPassword } from "@/components/ui/input";

    const noEmpty = z.string().min(1,{message:"required"})
    const registreSchema = z.object({
        email: z.string().email({message:'enter the valid email'}).pipe(noEmpty),
        name: z.string().min(3, {message:"min 3 charaters"}).pipe(noEmpty),
        password: z.string().length(6, { message :"assword must be 6 caraters"})
    })

    const Component = () => {

        const { register, handleSubmit, formState: { errors, isSubmitting,isDirty,isValid}  } = useForm({
            resolver: zodResolver(registreSchema),
            mode: 'all'
        });

        const onSubmit = async (data: any) => {
            try {
                const res = await fetch("api/auth/Register", {
                    method: "POSt",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                })
                if (!res.ok) {
                    throw new Error("theris some issue try again")
                }
            
                const json = await res.json()
                if (json.zoderror) {
                    console.log(json)
                }

               
            } catch(error) {
                console.log(error)

            }
            
        }
    
        return (
    
            <Form
                Title="Register"
                actionName="Register"
                caption="Already have an account?"
                handleSubmit={handleSubmit}
                heading="Create an account for explore knowledge"
                isDirty={isDirty}
                isValid={isValid}
                optiLink="/forgetPassword"
                optiLink2="/login"
                optiText="forgot your password?"
                optionText2="Already have an account?"
                supTitle="Welcome"
                onSubmit={onSubmit}
                isSubmitting={isSubmitting}
                >
            <div className="flex flex-col gap-2 ">
                    <Input
                        required
                        errorMessage={`${ errors.email?.message }`}
                        isDisabled={isSubmitting}
                        isInvalid = {errors.email?.message ? true : false}
                        {...register('email')}
                        label="Email"
                        size="md"
                        type="email"
                        variant="bordered"
                        />

                    <Input
                        
                        required
                        isDisabled={isSubmitting}
                        {...register('name')}
                        errorMessage={`${ errors.name?.message }`}
                        isInvalid={errors.name?.message ? true : false}
                        label="Name"
                        size="md"
                        type="text"
                        variant="bordered"
                    />
                    
                    <InputPassword
                        required
                        errorMessage={errors.password?.message}
                        isDisabled={isSubmitting}
                        isInvalid={errors.password?.message ? true : false}
                        label="Password"
                        name="password"
                        register={register}
                        size="md"
                        variant="bordered"
                    />
            </div>
            </Form>
            
    
        )
    }

    export default Component