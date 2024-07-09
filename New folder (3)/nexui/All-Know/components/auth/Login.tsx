    "use client"
    import { Input} from "@nextui-org/react"
    import z from "zod"
    import { useForm } from 'react-hook-form';
    import { zodResolver } from '@hookform/resolvers/zod';
    import Form from "./Form";
    import { InputPassword } from "@/components/ui/input";

    const noEmpty = z.string().min(1,{message:"required"})
    const loginSchema = z.object({
        email: z.string().email({message:'enter the valid email'}).pipe(noEmpty),
        password: z.string().length(6, { message :"assword must be 6 caraters"})
    })

    const Component = () => {

        const { register, handleSubmit, formState: { errors, isSubmitting,isDirty,isValid} } = useForm({
            resolver: zodResolver(loginSchema),
            mode: 'all'
        });

        const onSubmit =async (data:any) => {
            console.log(data)
        }
    
        return (
    
            <Form
                Title="Join Us"
                actionName="Login"
                handleSubmit={handleSubmit}
                heading="stay with us for coutinuely exploring and sharing "
                isDirty={isDirty}
                isValid={isValid}
                optiLink="/forgetPassword"
                optiLink2="/register"
                optiText="forgot your password?"
                optionText2="Already have an account?"
                supTitle="Again"
                onSubmit={onSubmit}
                >
            <div className="flex flex-col gap-2">
                    <Input
                        required
                        errorMessage={`${errors.email?.message}`}
                        isDisabled={isSubmitting}
                        isInvalid = {errors.email?.message ? true : false}
                        {...register('email')}
                        label="Email"
                        size="md"
                        type="email"
                        variant="bordered"
                        />
                    <InputPassword
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