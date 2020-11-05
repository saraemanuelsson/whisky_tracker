import React, { useState } from "react"
import { useForm } from "react-hook-form"

export const DistilleryForm: React.FC<any> = () => {

    const { register, handleSubmit, watch, errors } = useForm()


    const handleSave = () => {

    }

    return ( 
        <form onSubmit={handleSubmit(handleSave)}>
            <label htmlFor="distillery_name"></label>
            <input type="text" name="distillery_name" placeholder="Distillery" ref={register({required: true})}/>
            {errors.distillery_name && <span>Required field</span>}
            <label htmlFor="region"></label>
            <input type="dropdown" name="region" placeholder="Region" ref={register({required: true})}/>
            {errors.region && <span>Required field</span>}
            <input type="submit" value="Save"/>
        </form>
    )
}
