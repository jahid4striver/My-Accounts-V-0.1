import React from 'react';

const ExpenseTable = ({ expense }) => {
    return (
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Date</th>
                        <th>Expense Name</th>
                        <th>Category</th>
                        <th>Sub Category</th>
                        <th>Amount</th>
                        <th>User</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{expense.sl}</td>
                        <td>{expense.date}</td>
                        <td>{expense.expense}</td>
                        <td>{expense.category}</td>
                        <td>{expense.subcategory}</td>
                        <td>{expense.amount}</td>
                        <td>User</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default ExpenseTable;