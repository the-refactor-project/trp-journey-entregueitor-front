export type Id = number;

export type WithoutId<Type extends { id: unknown }> = Omit<Type, "id">;
