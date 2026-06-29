import fs from "fs";
import path from "path";

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  interest: string;
  industry: string;
  message: string;
  timestamp: string;
}

const dbFilePath = path.join(process.cwd(), "inquiries.json");

// Ensure database file exists
function ensureDbFile() {
  if (!fs.existsSync(dbFilePath)) {
    fs.writeFileSync(dbFilePath, JSON.stringify([], null, 2), "utf-8");
  }
}

export function getInquiries(): Inquiry[] {
  try {
    ensureDbFile();
    const data = fs.readFileSync(dbFilePath, "utf-8");
    return JSON.parse(data) as Inquiry[];
  } catch (error) {
    console.error("Database read error:", error);
    return [];
  }
}

export function addInquiry(inquiry: Omit<Inquiry, "id" | "timestamp">): Inquiry {
  ensureDbFile();
  const inquiries = getInquiries();
  
  const newInquiry: Inquiry = {
    ...inquiry,
    id: Math.random().toString(36).substr(2, 9),
    timestamp: new Date().toISOString(),
  };
  
  inquiries.push(newInquiry);
  fs.writeFileSync(dbFilePath, JSON.stringify(inquiries, null, 2), "utf-8");
  return newInquiry;
}

export function deleteInquiry(id: string): boolean {
  ensureDbFile();
  const inquiries = getInquiries();
  const filtered = inquiries.filter((item) => item.id !== id);
  
  if (filtered.length === inquiries.length) {
    return false;
  }
  
  fs.writeFileSync(dbFilePath, JSON.stringify(filtered, null, 2), "utf-8");
  return true;
}
