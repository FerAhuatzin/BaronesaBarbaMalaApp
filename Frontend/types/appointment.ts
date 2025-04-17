export interface AppointmentDetails {
  id: string;
  date: string;
  branch: string;
  branchImage: string;
  brand: 'baronesa' | 'barbamala';
  service: string;
  stylist: string;
  status: 'pending' | 'completed' | 'cancelled';
  price: number;
} 