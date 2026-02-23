// These shapes should match your types/ directory from Issue 9.
// Adjust field names to match your actual TypeScript interfaces.

export const MOCK_EMPLOYEES = [
  {
    id: "emp_001",
    name: "Alice Mensah",
    email: "alice@zkpayroll.io",
    walletAddress: "GDQP2KPQGKIHYJGXNUIYOMHARUARCA7DJT5FO2FFOOKY3B2WSQHG4W37",
    salary: 5000,
    currency: "USDC",
    department: "Engineering",
    role: "Senior Engineer",
    status: "active",
    createdAt: "2024-01-15T00:00:00Z",
  },
  {
    id: "emp_002",
    name: "Kwame Asante",
    email: "kwame@zkpayroll.io",
    walletAddress: "GAAZI4TCR3TY5OJHCTJC2A4QSY6CJWJH5IAJTGKIN2ER7LBNVKOCCWN",
    salary: 4500,
    currency: "USDC",
    department: "Product",
    role: "Product Manager",
    status: "active",
    createdAt: "2024-02-01T00:00:00Z",
  },
];

export const MOCK_PAYROLL_RUNS = [
  {
    id: "pay_001",
    name: "February 2025 Payroll",
    status: "completed",
    scheduledDate: "2025-02-28T00:00:00Z",
    executedAt: "2025-02-28T09:00:00Z",
    totalAmount: 9500,
    currency: "USDC",
    employeeCount: 2,
    transactionHash: "abc123def456",
    createdAt: "2025-02-01T00:00:00Z",
  },
  {
    id: "pay_002",
    name: "March 2025 Payroll",
    status: "draft",
    scheduledDate: "2025-03-31T00:00:00Z",
    executedAt: null,
    totalAmount: 9500,
    currency: "USDC",
    employeeCount: 2,
    transactionHash: null,
    createdAt: "2025-03-01T00:00:00Z",
  },
];

export const MOCK_TRANSACTIONS = [
  {
    id: "tx_001",
    payrollId: "pay_001",
    employeeId: "emp_001",
    employeeName: "Alice Mensah",
    amount: 5000,
    currency: "USDC",
    status: "success",
    transactionHash: "abc123def456",
    stellarLedger: 48291034,
    createdAt: "2025-02-28T09:01:00Z",
  },
  {
    id: "tx_002",
    payrollId: "pay_001",
    employeeId: "emp_002",
    employeeName: "Kwame Asante",
    amount: 4500,
    currency: "USDC",
    status: "success",
    transactionHash: "def789ghi012",
    stellarLedger: 48291035,
    createdAt: "2025-02-28T09:01:05Z",
  },
];
