import { FamilyNode } from "@shared/interface/data.interface";

export const familyNodes: FamilyNode[] = [
  {
    id: 1,
    partnerId: 2,
    motherId: null,
    fatherId: null,
    gender: "male",
    name: "King Shan",
    generation: 1,
  },
  {
    id: 2,
    partnerId: 1,
    motherId: null,
    fatherId: null,
    gender: "female",
    name: "Queen Anga",
    generation: 1,
  },
  {
    id: 3,
    partnerId: null,
    motherId: 2,
    fatherId: 1,
    gender: "male",
    name: "Ish",
    generation: 2,
  },
  {
    id: 4,
    partnerId: 5,
    motherId: 2,
    fatherId: 1,
    gender: "male",
    name: "Chit",
    generation: 2,
  },
  {
    id: 5,
    partnerId: 4,
    motherId: 2,
    fatherId: 1,
    gender: "female",
    name: "Ambi",
    generation: 2,
  },
  {
    id: 6,
    partnerId: 7,
    motherId: 2,
    fatherId: 1,
    gender: "male",
    name: "Vich",
    generation: 2,
  },
  {
    id: 7,
    partnerId: 6,
    motherId: 2,
    fatherId: 1,
    gender: "female",
    name: "Lika",
    generation: 2,
  },
  {
    id: 8,
    partnerId: 9,
    motherId: 2,
    fatherId: 1,
    gender: "female",
    name: "Satya",
    generation: 2,
  },
  {
    id: 9,
    partnerId: 8,
    motherId: 2,
    fatherId: 1,
    gender: "male",
    name: "Vyan",
    generation: 2,
  },
  {
    id: 10,
    partnerId: 11,
    motherId: 5,
    fatherId: 4,
    gender: "male",
    name: "Drita",
    generation: 3,
  },
  {
    id: 11,
    partnerId: 10,
    motherId: null,
    fatherId: null,
    gender: "female",
    name: "Jaya",
    generation: 3,
  },
  {
    id: 12,
    partnerId: null,
    motherId: 5,
    fatherId: 1,
    gender: "male",
    name: "Vrita",
    generation: 3,
  },
  {
    id: 13,
    partnerId: 14,
    motherId: 7,
    fatherId: 6,
    gender: "male",
    name: "Vila",
    generation: 3,
  },
  {
    id: 14,
    partnerId: 13,
    motherId: null,
    fatherId: null,
    gender: "female",
    name: "Jnki",
    generation: 3,
  },
  {
    id: 15,
    partnerId: 16,
    motherId: 7,
    fatherId: 8,
    gender: "female",
    name: "Chika",
    generation: 3,
  },
  {
    id: 16,
    partnerId: 15,
    motherId: null,
    fatherId: null,
    gender: "male",
    name: "Kpila",
    generation: 3,
  },
  {
    id: 17,
    partnerId: 18,
    motherId: 9,
    fatherId: 8,
    gender: "female",
    name: "Satvy",
    generation: 3,
  },
  {
    id: 18,
    partnerId: 17,
    motherId: null,
    fatherId: null,
    gender: "male",
    name: "Asva",
    generation: 3,
  },
  {
    id: 19,
    partnerId: 20,
    motherId: 9,
    fatherId: 8,
    gender: "male",
    name: "Savya",
    generation: 3,
  },
  {
    id: 20,
    partnerId: 19,
    motherId: null,
    fatherId: null,
    gender: "female",
    name: "Krpi",
    generation: 3,
  },
  {
    id: 21,
    partnerId: 22,
    motherId: 9,
    fatherId: 8,
    gender: "male",
    name: "Saayan",
    generation: 3,
  },
  {
    id: 22,
    partnerId: 21,
    motherId: null,
    fatherId: null,
    gender: "female",
    name: "Mina",
    generation: 3,
  },
  {
    id: 23,
    partnerId: null,
    motherId: 11,
    fatherId: 10,
    gender: "male",
    name: "Jata",
    generation: 4,
  },
  {
    id: 24,
    partnerId: 25,
    motherId: 11,
    fatherId: 10,
    gender: "female",
    name: "Driya",
    generation: 4,
  },
  {
    id: 25,
    partnerId: 24,
    motherId: null,
    fatherId: null,
    gender: "male",
    name: "Mnu",
    generation: 4,
  },
  {
    id: 26,
    partnerId: 27,
    motherId: 14,
    fatherId: 13,
    gender: "female",
    name: "Lavnya",
    generation: 4,
  },
  {
    id: 27,
    partnerId: 26,
    motherId: null,
    fatherId: null,
    gender: "male",
    name: "Gru",
    generation: 4,
  },
  {
    id: 28,
    partnerId: null,
    motherId: 20,
    fatherId: 19,
    gender: "male",
    name: "Kriya",
    generation: 4,
  },
  {
    id: 29,
    partnerId: null,
    motherId: 22,
    fatherId: 21,
    gender: "male",
    name: "Misa",
    generation: 4,
  },
];
