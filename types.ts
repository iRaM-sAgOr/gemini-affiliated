
export enum UserRole {
  PRODUCT_OWNER = 'PRODUCT_OWNER',
  MARKETER = 'MARKETER',
  ADMIN = 'ADMIN'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  referralCode: string;
  parentMarketerId?: string;
  walletBalance: number;
}

export interface Company {
  id: string;
  ownerId: string;
  name: string;
  description: string;
  logoUrl: string;
  industry: string;
  baseCommissionRate: number;
}

export interface Product {
  id: string;
  companyId: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface Sale {
  id: string;
  companyId: string;
  productId: string;
  linkId: string; // Anonymized ID for the marketer's specific link
  marketerId: string; // Used by Admin only
  salePrice: number;
  commissionTotal: number;
  status: 'PENDING' | 'CONFIRMED' | 'DUE' | 'PAID';
  timestamp: string;
}
