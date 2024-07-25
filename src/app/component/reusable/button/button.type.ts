export interface Button {
  currency: string;
  id?: string;
  onComplete: () => void;
  onCreate: () => void;
  orderTotal?: number;
}