    "use client"
    import { Input} from "@nextui-org/react"
    import z from "zod"
    import { useForm } from 'react-hook-form';
    import { zodResolver } from '@hookform/resolvers/zod';
    import Form from "./Form";
    import { InputPassword } from "@/components/ui/input";

   
    const PasswordSchema = z.object({
        password: z.string().min(8, "Password must be at least 8 characters").regex(/[A-Z]/, "Password must contain at least one uppercase letter").regex(/[a-z]/, "Password must contain at least one lowercase letter").regex(/\d/, "Password must contain at least one digit").regex(/[^A-Za-z0-9]/, "Password must contain at least one special character"),
        confirmPassword: z.string(),
    }).superRefine(({ confirmPassword, password }, ctx) => {
        if (confirmPassword !== password) {
            ctx.addIssue({
                code: "custom",
                message: "The passwords did not match",
                path: ['confirmPassword']
            });
        }
    });
    const Component = () => {

        const { register, handleSubmit, formState: { errors, isSubmitting,isDirty,isValid} } = useForm({
            resolver: zodResolver(PasswordSchema),
            mode: 'all'
        });

        const onSubmit =async (data:any) => {
            console.log(data)
        }
    
        return (

            <Form
                Title="Reset Your "
                actionName="Reset"
                handleSubmit={handleSubmit}
                heading="don't worry about  your account  "
                isDirty={isDirty}
                isValid={isValid}
                optiLink2="/register"
                optionText2="don't have any account yet?"
                supTitle="Password"
                onSubmit={onSubmit}
                >
            <div className="flex flex-col gap-2 ">
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
                    <InputPassword
                        errorMessage={errors.confirmPassword?.message}
                        isDisabled={isSubmitting}
                        isInvalid={errors.confirmPassword?.message ? true : false}
                        label="Confirm Password"
                        name="confirmPassword"
                        register={register}
                        size="md"
                        variant="bordered"
                    />
                 </div>
            </Form>
            
    
        )
    }

    export default Component