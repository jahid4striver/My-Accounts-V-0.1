import { format } from 'date-fns';
import React from 'react';
import { useForm } from 'react-hook-form';


const UpdateModal = ({ updateExp }) => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const {sl,date, expense, category, subcategory, amount}= updateExp;


    const onSubmit = (data) => {
        fetch('http://localhost:5000/dailyledger', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                reset();

            })
    }

    return (
        <div>
            <input type="checkbox" id="update-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="update-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="text-lg font-bold">Update : {updateExp.expense}</h3>
                    <form onSubmit={handleSubmit(onSubmit)} className='p-5 grid grid-cols-1 gap-4 justify-items-center'>
                        <input {...register("sl")} defaultValue={sl} type="text" placeholder="SL" class="input input-bordered w-full max-w-xs" />
                        <input {...register("date")} defaultValue={date} type="text" class="input input-bordered w-full max-w-xs" />
                        <input {...register("expense")} defaultValue={expense} type="text" placeholder="Expense Name" class="input input-bordered w-full max-w-xs" />
                        <input {...register("category")} defaultValue={category} type="text" placeholder="Category" class="input input-bordered w-full max-w-xs" />
                        <input {...register("subcategory")} defaultValue={subcategory} type="text" placeholder="Sub Category" class="input input-bordered w-full max-w-xs" />
                        <input {...register("amount")} defaultValue={amount} type="text" placeholder="Amount" class="input input-bordered w-full max-w-xs" />
                        <input type='submit' value='Add Expense' className='btn btn-primary' />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default UpdateModal;