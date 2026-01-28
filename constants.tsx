
import React from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Users, 
  Settings, 
  LogOut, 
  Link, 
  TrendingUp, 
  DollarSign, 
  ShieldCheck, 
  Briefcase,
  Layers,
  BarChart3,
  History,
  Building
} from 'lucide-react';

export const PLATFORM_FEE_RATE = 0.01; // 1%
export const MARKETER_POOL_RATE = 0.02; // 2%
export const DECAY_RATE = 0.25; // 25% decay for levels
export const MAX_MLM_LEVELS = 5; // Enforced 5 layers

export const MENU_ITEMS = {
  MARKETER: [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/' },
    { icon: <Building size={20} />, label: 'Partner Companies', path: '/marketplace' },
    { icon: <Link size={20} />, label: 'My Affiliate Links', path: '/links' },
    { icon: <Users size={20} />, label: 'My Network (5 Lvl)', path: '/team' },
  ],
  PRODUCT_OWNER: [
    { icon: <LayoutDashboard size={20} />, label: 'Owner Insights', path: '/' },
    { icon: <Briefcase size={20} />, label: 'Manage Company', path: '/company' },
    { icon: <Layers size={20} />, label: 'Link Performance', path: '/sales' },
  ],
  ADMIN: [
    { icon: <ShieldCheck size={20} />, label: 'Platform Stats', path: '/' },
    { icon: <History size={20} />, label: 'Global Audit Logs', path: '/logs' },
    { icon: <Users size={20} />, label: 'Identity Mapping', path: '/users' },
  ]
};

export const MOCK_USER_MARKETER = {
  id: 'usr_1',
  name: 'Alex Sterling',
  email: 'alex.sterling@example.com',
  role: 'MARKETER',
  walletBalance: 2450.75,
};

export const MOCK_USER_OWNER = {
  id: 'owner_1',
  name: 'Vortex Corp CEO',
  email: 'biz@vortex.com',
  role: 'PRODUCT_OWNER',
  walletBalance: 85200.00,
};

export const MOCK_USER_ADMIN = {
  id: 'admin_1',
  name: 'Super Admin',
  email: 'admin@affiliamlm.com',
  role: 'ADMIN',
  walletBalance: 12450.10,
};

export const MOCK_COMPANIES = [
  { id: 'c1', name: 'Vortex Corp', industry: 'Tech', description: 'Next-gen neural interfaces and wearable tech.', logoUrl: 'https://picsum.photos/seed/c1/200/200' },
  { id: 'c2', name: 'EcoLife', industry: 'Lifestyle', description: 'Sustainable living products for the modern home.', logoUrl: 'https://picsum.photos/seed/c2/200/200' },
  { id: 'c3', name: 'Zenith Tech', industry: 'Health', description: 'Precision bio-hacking and recovery tools.', logoUrl: 'https://picsum.photos/seed/c3/200/200' },
];

export const MOCK_SALES_ANONYMIZED = [
  { id: 's1', product: 'Neural Flow', price: 299, linkId: 'LNK-AST-9922', date: '2023-10-24 14:20', status: 'PAID', company: 'Vortex Corp', commission: 5.98 },
  { id: 's2', product: 'Zenith Watch', price: 199, linkId: 'LNK-SRH-1102', date: '2023-10-24 15:10', status: 'PENDING', company: 'Vortex Corp', commission: 3.98 },
  { id: 's3', product: 'Vortex Energy', price: 60, linkId: 'LNK-MKR-5541', date: '2023-10-24 16:45', status: 'PAID', company: 'Zenith Tech', commission: 1.20 },
  { id: 's4', product: 'EcoPulse Bottle', price: 45, linkId: 'LNK-AST-9922', date: '2023-10-24 17:05', status: 'PAID', company: 'EcoLife', commission: 0.90 },
  { id: 's5', product: 'Neural Flow', price: 299, linkId: 'LNK-LUN-3321', date: '2023-10-24 18:30', status: 'DUE', company: 'Vortex Corp', commission: 5.98 },
];

// Added missing exports for Admin Dashboard
export const MOCK_COMPANY_REVENUE = [
  { company: 'Vortex Corp', items: 1450, volume: 435000, platformFee: 4350 },
  { company: 'EcoLife', items: 890, volume: 40050, platformFee: 400.5 },
  { company: 'Zenith Tech', items: 520, volume: 104000, platformFee: 1040 },
];

export const MOCK_SALES_HISTORY = [
  { id: 'tx_1', date: '2023-10-24 10:15', marketer: 'Alex Sterling', company: 'Vortex Corp', product: 'Neural Flow', commission: 25.50, status: 'PAID' },
  { id: 'tx_2', date: '2023-10-24 11:30', marketer: 'Sarah Jenkins', company: 'EcoLife', product: 'EcoPulse Bottle', commission: 4.50, status: 'PAID' },
  { id: 'tx_3', date: '2023-10-24 12:45', marketer: 'Mike Ross', company: 'Zenith Tech', product: 'Zenith Watch', commission: 15.00, status: 'DUE' },
  { id: 'tx_4', date: '2023-10-24 14:00', marketer: 'Luna Lovegood', company: 'Vortex Corp', product: 'Vortex Energy', commission: 1.20, status: 'PROCESSING' },
];
