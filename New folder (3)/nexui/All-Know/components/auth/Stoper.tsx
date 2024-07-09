import { Button } from '@nextui-org/button'
import React, { useEffect, useState } from 'react'

const  Stoper = ({ handleSubmit, onSubmit,actionName,isDirty,isValid,timeValue=10}:any) => {
  const [timer, setTimer] = useState(timeValue) 

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer(timer - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timer])
  
  return (
    
    <>
      {(actionName && handleSubmit && onSubmit ) && (

        <Button color="primary" isDisabled={!isDirty || !isValid || timer !== 0} radius='full' size='md' type="submit" variant='shadow' onClick={() => {
          handleSubmit(onSubmit) 
          setTimer(timeValue)
        }}>
          {timer == 0 ? actionName :
            //get timer value is 00:19
            `${Math.floor(timer / 60) < 10 ?
              `0${Math.floor(timer / 60)}`
              : Math.floor(timer / 60) 
            }:${timer % 60 < 10 ? `0${timer % 60}` : timer % 60}`
          }
        </Button>
      )}

     </>
  )
}

export default Stoper