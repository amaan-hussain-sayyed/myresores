import React from 'react'



import { Button} from '@nextui-org/react'

import { button as buttonStyles } from '@nextui-org/theme'

import Link from 'next/link'
import { title, subtitle,  } from '@/components/primitives'
 
const Form = ({
    Title,
    supTitle,
    heading,
    caption,
    children,
    onSubmit,
    actionName,
    optiText,
    optiLink,
    optiLink2,
    optionText2,
    handleSubmit,
    isDirty,
    isValid,
    isSubmitting,
}:any) => {
    return (
    <section className="flex flex-col flex-grow justify-center items-center">
        <div className='flex flex-col gap-2  w-[95%]   sm:w-[400px]   items-cneter  '> 
            <div className='text-wrap '>
                <h1 className={title()}>{Title}&nbsp;</h1>
                <h1 className={title({ color: "violet" })}>{supTitle}&nbsp;</h1>
                <h1 className={subtitle({ size: "md", fullWidth: true })}>
                   {heading}
                </h1>
            </div>
                <form  >
            {children}
                </form>
                <div className="flex pt-4 justify-between items-center">
                    {(actionName && handleSubmit && onSubmit) && ( 
                        
                    <Button isDisabled={!isDirty || !isValid || isSubmitting} color="primary" radius='full' size='md' type="submit" variant='shadow' onClick={handleSubmit(onSubmit)}>
                            {actionName}
                    </Button>   
                )}
                    {(optiLink2 || optionText2)
                        && 
                <Link   
                className={buttonStyles({ variant: "bordered", radius: "full", size:"sm" })}
                href={optiLink2}
                >
                    {optionText2}
                </Link>
                }
                </div>
                {(optiLink || optiText) &&
                    <Link href={optiLink} >
                            {optiText}
                        
                    </Link>
                }
             </div>
        </section>
    )
}

export default Form