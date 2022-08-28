export type Gender = 'male' | 'female';
export type Generation = 1 | 2 | 3 | 4;

export interface FamilyNode {
  id: number;
  partnerId: number | null;
  motherId: number | null;
  fatherId: number | null;
  name: string;
  gender: Gender;
  generation: Generation;
}
