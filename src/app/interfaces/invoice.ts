
export interface Invoice {
    clientAddess: {
        city: string;
        country: string;
        postCode: string;
        street: string;
    }
    clientEmail: string;
    clientName: string;
    createdAt: string;
    description: string;
    id: string;
    items: object[];
    paymentDue: string;
    paymentTerms: number;
    senderAddress: {
        city: string;
        country: string;
        postCode: string;
        street: string;
    }
    status: string;
    total: number;
}
