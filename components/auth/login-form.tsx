"use client"
import React, { useState } from 'react'
import { useTransition } from 'react'
import Cardwrapper from './card-wrapper'
import {useForm} from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/schemas'
import * as z from "zod"

import { Form,FormControl, FormItem,FormMessage,FormLabel, FormField } from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Formerror from '../form-error'
import Formsucess from '../form-sucess'
import {login} from '@/actions/login'
// import { setupFsCheck } from 'next/dist/server/lib/router-utils/filesystem'


export default function Loginform() {
    const [error,setError]=useState<string |undefined>("");
    const [success,setSucess]=useState<string |undefined>("")
    const [isPending,startTransition]=useTransition();

    const form=useForm<z.infer< typeof LoginSchema>>({
        resolver:zodResolver(LoginSchema),
        defaultValues:{
            email:"",
            password:""
        }
    })

    const onSubmit=(values:z.infer<typeof LoginSchema>)=>{
        setError("");
        setSucess("");
        // console.log(values)
        startTransition(()=>{

            login(values).then((data)=>{
                setError(data?.error)
                setSucess(data?.success)

            })
        })

    }


  return (
    <div>
      <Cardwrapper headerLabel={"Welcome back "} backButtonLabel="Don't have an account  " backButtonHref='/auth/register' showSocial>
       <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
         <div className='space-y-6'>
        <FormField control={form.control} name="email" render={({field})=>(
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input  {...field} disabled={isPending} placeholder="john.doe@example.com" type="email"/>
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}/>
        <FormField control={form.control} name="password" render={({field})=>(
            <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>

                <Input {...field} disabled={isPending} placeholder='******' type="password"/>
                </FormControl>
                <FormMessage/>
            </FormItem>
        )}>

        </FormField>

         </div>

<Formerror message={error}/>
<Formsucess message={success}/>
<Button size="lg" type='submit' disabled={isPending} className='w-full'>Login </Button>
        </form>

       </Form>
      </Cardwrapper>
    </div>
  )
}
