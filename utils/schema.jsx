import {
    integer,numeric,pgTable,serial, varchar
} from 'drizzle-orm/pg-core'

//budget schema
export const Budgets = pgTable('budgets', {
    id : serial('id').primaryKey(),
    name : varchar('name').notNull(),
    amount : varchar('amount').notNull(),
    Icon : varchar('icon'),
    createdBy : varchar('createdby').notNull()
})

export const Expenses = pgTable('expenses', {
    id : serial('id').primaryKey(),
    name : varchar('name').notNull(),
    amount : numeric('amount').notNull().default(0),
    budgetId : integer('budgetId').references(() => Budgets.id),
    createdAt : varchar('createdAt').notNull()
})