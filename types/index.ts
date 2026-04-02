// types/index.ts

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    sizes: Size[];
}

interface Size {
    id: number;
    name: string;
    dimension: string;
}

interface Review {
    id: number;
    productId: number;
    rating: number;
    comment: string;
    createdAt: Date;
}

interface Advantage {
    id: number;
    description: string;
}

interface CompetitionFormData {
    competitorName: string;
    productId: number;
    price: number;
}

interface ClientReview {
    id: number;
    clientId: number;
    reviewId: number;
    createdAt: Date;
}

interface DeliveryOption {
    id: number;
    type: string;
    cost: number;
    estimatedDeliveryTime: string;
}
