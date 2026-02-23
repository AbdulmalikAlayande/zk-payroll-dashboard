import { z } from "zod";

// ─── Pagination ───────────────────────────────────────────────────────────────

export const paginationSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().min(1).max(100).default(20),
});

// ─── Employee Schemas ─────────────────────────────────────────────────────────

export const createEmployeeSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  walletAddress: z.string().min(56).max(56), // Stellar public keys are 56 chars
  salary: z.number().positive(),
  currency: z.string().default("USDC"),
  department: z.string().min(1),
  role: z.string().min(1),
});

export const updateEmployeeSchema = createEmployeeSchema.partial();

export type CreateEmployeeInput = z.infer<typeof createEmployeeSchema>;
export type UpdateEmployeeInput = z.infer<typeof updateEmployeeSchema>;

// ─── Payroll Schemas ──────────────────────────────────────────────────────────

export const createPayrollSchema = z.object({
  name: z.string().min(1),
  scheduledDate: z.string().datetime(),
  employeeIds: z.array(z.string()).min(1),
  currency: z.string().default("USDC"),
  notes: z.string().optional(),
});

export const updatePayrollStatusSchema = z.object({
  status: z.enum(["draft", "pending", "processing", "completed", "failed"]),
});

export type CreatePayrollInput = z.infer<typeof createPayrollSchema>;
export type UpdatePayrollStatusInput = z.infer<
  typeof updatePayrollStatusSchema
>;

// ─── Transaction Schemas ──────────────────────────────────────────────────────

export const transactionQuerySchema = paginationSchema.extend({
  status: z.enum(["pending", "success", "failed"]).optional(),
  from: z.string().optional(), // ISO date string
  to: z.string().optional(),
});

// ─── Validation Helper ────────────────────────────────────────────────────────

export function parseBody<T>(
  schema: z.ZodSchema<T>,
  data: unknown,
): { success: true; data: T } | { success: false; errors: z.ZodIssue[] } {
  const result = schema.safeParse(data);
  if (!result.success) {
    return { success: false, errors: result.error.issues };
  }
  return { success: true, data: result.data };
}
