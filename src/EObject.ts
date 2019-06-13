export abstract class EObject {
    public abstract hashCode(): number;
    public abstract toString(): string;
    public abstract equals(other: EObject): boolean;
}