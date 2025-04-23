import { AppointmentDetails } from "../../types/appointment";

export const mockAppointments: AppointmentDetails[] = [
  {
    id: "1", 
    date: "28 Julio, 2023 - 16:00",
    branch: "Barba mala sucursal lomas",
    branchImage: "https://lh3.googleusercontent.com/p/AF1QipO3q6a9Aai50CRu3f_DtPEz0rqNc5GSCssQkVuf=s1360-w1360-h1020",
    brand: "barbamala",
    service: "Corte y barba",
    stylist: "Juan Pérez",
    status: "pending",
    price: 280,
    latitude: 19.04014810319887,
    longitude: -98.22719631779105
  },
  {
    id: "2",
    date: "15 Junio, 2023 - 14:30",
    branch: "Baronesa sucursal centro mayor",
    branchImage: "https://lh3.googleusercontent.com/p/AF1QipO3q6a9Aai50CRu3f_DtPEz0rqNc5GSCssQkVuf=s1360-w1360-h1020",
    brand: "baronesa", 
    service: "Corte estudiante",
    stylist: "María Rodríguez",
    status: "completed",
    price: 210,
    latitude: 19.04014810319887,
    longitude: -98.22719631779105
  },
  {
    id: "3",
    date: "1 Junio, 2023 - 11:00",
    branch: "Baronesa sucursal centro mayor",
    branchImage: "https://lh3.googleusercontent.com/p/AF1QipOxFPJdWskDSq95KsHXQfXxw4KKTEjc9GHUdPuJ=s1360-w1360-h1020",
    brand: "baronesa",
    service: "Tinte y corte",
    stylist: "Ana García",
    status: "completed", 
    price: 450,
    latitude: 19.04014810319887,
    longitude: -98.22719631779105
  },
  {
    id: "4",
    date: "15 Mayo, 2023 - 13:30",
    branch: "Barba mala sucursal polanco",
    branchImage: "https://lh3.googleusercontent.com/p/AF1QipO3q6a9Aai50CRu3f_DtPEz0rqNc5GSCssQkVuf=s1360-w1360-h1020",
    brand: "barbamala",
    service: "Corte ejecutivo",
    stylist: "Carlos Ruiz",
    status: "completed",
    price: 250,
    latitude: 19.04014810319887,
    longitude: -98.22719631779105
  },
  {
    id: "5", 
    date: "1 Mayo, 2023 - 17:00",
    branch: "Baronesa sucursal santa fe",
    branchImage: "https://lh3.googleusercontent.com/p/AF1QipOxFPJdWskDSq95KsHXQfXxw4KKTEjc9GHUdPuJ=s1360-w1360-h1020",
    brand: "baronesa",
    service: "Tratamiento capilar",
    stylist: "Laura Méndez",
    status: "cancelled",
    price: 380,
    latitude: 19.04014810319887,
    longitude: -98.22719631779105
  }
];